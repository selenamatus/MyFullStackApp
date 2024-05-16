document.getElementById('goButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/cocktails');
        const cocktails = await response.json();
        const cardsContainer = document.getElementById('cardsContainer');
        cardsContainer.innerHTML = ''; // Optionally clear previous cards or remove this line to keep adding to the display
        cocktails.forEach(cocktail => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h4>${cocktail.strDrink}</h4>
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" style="width:100%; max-width: 150px; height: auto;">
                <p>${cocktail.strInstructions}</p>
            `;
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Failed to fetch cocktails:', error);
    }
});
