// codice esattamente come da correzione
async function getChefBirthday(id) {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeResponse.json();

    // console segnala che userId non è definito
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
    console.log("Errore", error.message)
})();
