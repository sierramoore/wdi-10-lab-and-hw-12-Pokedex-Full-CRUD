const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon.js');

// INDEX
router.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    });
});


// SHOW EACH
router.get('/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id],
        index: req.params.id
    });
    res.redirect('/pokemon')
});


// new route
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

// TODO make new work
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req, res) => {

});

//Route to edit page
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: pokemon[req.params.id], // the actual object
        index: req.params.id, // this pokemon's index in the array

    })
});

//Replace edited pokemon in arr
router.put('/:id', (req, res) => {
    // console.log("hey update route was hit");
    pokemon.push(req.body)
    res.redirect('/pokemon')

});


router.delete('/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});


module.exports = router;
