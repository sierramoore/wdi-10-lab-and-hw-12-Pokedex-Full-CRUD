const express = require('express');
const app = express();
const pokemon= require('./models/pokemon.js');
const port = 5000;


// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// INDEX
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    });
});

// SHOW EACH
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id]
    });
    //back to list of pokemon imgs
    res.redirect('/pokemon')
});

// TODO make add work
//Route to form to add another pokemon
// app.get('/pokemon/add', (req, res) =>{
//     res.render('add.ejs');
// });
// TODO make a post route to handle newly added pokemon
// app.post('/pokemon', (req, res) => {
//     //push new pokemon into pokemon array
//     pokemon.push(req.body);
//     //take back to homepage after
//     res.redirect('/pokemon');
//
// });

//Route to edit page
app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: pokemon[req.params.index], // the actual object
        index: req.params.index // this fruit's index in the array
    })
});

//Replace edited pokemon in arr
app.put('pokemon/:index', (req, res) => {
    console.log("hey update route was hit");
    // replace the pokemon in arr with the updated one
    pokemon[req.params.index] = {
        name: req.body.name
    };

    res.redirect('/pokemon');
});


//Listen
app.listen(port, () =>{
    console.log("Listening.. for it on Port: ", port)
});