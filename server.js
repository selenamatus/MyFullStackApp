const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('/api/cocktails', async (req, res) => {
    try {
        let cocktails = [];
        for (let i = 0; i < 3; i++) {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            cocktails.push(response.data.drinks[0]);
        }
        res.json(cocktails);
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        res.status(500).send('Error fetching data');
    }
});



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



