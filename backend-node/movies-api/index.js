const express = require('express')
const app = express()

const { config } = require('./config/index')

app.get('/', function(req, res) {
    res.send('Hello, friend')
})


app.get('/json', function (req, res) {
    res.json({Hello: 'friend'});
});

app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
})

/*
    TODO - Crear una ruta que reciba el año y determine si es o no bisiesto.
*/