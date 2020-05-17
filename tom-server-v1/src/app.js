const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/router');

//logique pour se connecter à mongodb
const app = express();
mongoose.connect('mongodb+srv://TomSewer:SewerTheBetter42@tomwork0-loahx.gcp.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());

//utilisation des CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', apiRoutes);

module.exports = app;
