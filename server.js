const express = require('express');
const app = express();
// pokemon is set to exported arr
const pokemon = require('./models/pokemon.js');

const port = 4000;

const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({
    extended: false
}));

const pokemonController = require('./controllers/pokemonController');
app.use('/pokemon', pokemonController);


app.get('*', (req,res) =>{
    res.send('not found')
});
//Listen
app.listen(port, () =>{
    console.log("Listening.. for it on Port: ", port)
});