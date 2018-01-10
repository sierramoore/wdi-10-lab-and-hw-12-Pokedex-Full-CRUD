const express = require('express');
const app = express();
const pokemon= require('./models/pokemon.js');
const port = 5000;

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', { data: pokemon });
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', { data: pokemon[req.params.id] });
});

//Listen
app.listen(port, () =>{
    console.log("Listening.. for it on Port: ", port)
});