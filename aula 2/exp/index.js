const bodyParser  = require("body-parser")
const express = require("express"); //importando o express

const app = express(); // iniciando o framework express

app.get('/', (req, res) => {res.send('Gabriel soares duarte')});

app.get('/blue', (req, res) => {res.send('<h1>Olá bluemer</h1>')});

app.get('/blue/info', (req, res) => {res.send('<h4>Aprendendo Node.js</h4>')});

app.get('/blue/info/nada', (req, res) => {res.send('<h1>Aconteceu alguma coisa</h1>')});

app.listen(5000, function (erro){
    if (erro){
        console.log('Aconteceu um erro')
    }
    else {
        console.log('servidor iniciado com sucesso')
    }
})








