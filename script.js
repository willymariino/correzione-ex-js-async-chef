async function getChefBirthday(id) {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeResponse.json();
    const userId = recipe.userId
    const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    const chef = await chefResponse.json();

    return chef.birthDate;
}


(async () => {
    try {
        const birthday = await getChefBirthday(1);
        console.log("Data di nascita dello chef:", birthday);
    } catch (error) {
        console.error("Errore:", error.message);
    }
})();
