const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000

global.fetch = fetch
global.Headers = fetch.Headers;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
 }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout : 'index'});
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});