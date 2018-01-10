const express = require('express');
const app = express();
const pokemon= require('./models/pokemon.js');
const port = 5000;

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    });
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id]
    });

    res.redirect('/pokemon')
});

//Listen
app.listen(port, () =>{
    console.log("Listening.. for it on Port: ", port)
});