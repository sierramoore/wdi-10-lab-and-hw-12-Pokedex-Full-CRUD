const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon.js');

// INDEX
router.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    });
});

// new route
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

router.post('/', (req,res) =>{
    pokemon.push(req.body);
    res.redirect('/pokemon')
});

// SHOW EACH
router.get('/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id],
        index: req.params.id
    });
    res.redirect('/pokemon')
});

//Route to edit page
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: pokemon[req.params.id], // the actual object
        index: req.params.id, // this pokemon's index in the array

    })
});

//Replace edited pokemon in arr
router.put('/:index', (req, res) => {

    pokemon[req.params.index] = {
        name: req.body.name,
        img: req.body.img,
    };
    res.redirect('/pokemon')

});


router.delete('/:index', (req, res) => {
    const idx = req.params.index;

    pokemon.splice(idx, 1);

    res.redirect('/pokemon');
});


module.exports = router;
