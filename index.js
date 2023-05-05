const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Master chef's server is running...");
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(chef => chef.id === parseInt(id));
    res.send(chef);
});

app.get('/chef-recipes/:id', (req, res) => {
    const id = req.params.id;
    const chefRecipes = recipes.filter(recipe => recipe.chef_id === parseInt(id));
    res.send(chefRecipes);
});

app.listen(port, () => {
    console.log(`Master chef's server running on port: ${port} `);
});