const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/teste', {useNewUrlParser: true, useUnifiedTopology: true,})


const filmeModel  = require('./models/filme')

const Filme = mongoose.model('filme', filmeModel);


const movie = new Filme({
    nome: 'alguma coisa',
    imagem_url: 'sahsdiuahsduahduiashduashdaiudasdasdad65645645465464',
 }
);




movie.save().then(()=>{console.log('filmes salvos');}).catch((err)=>{console.log(err);});

Filme.find({}).then((filmes)=>{console.log(filmes);}).catch((err)=>{console.log(err);});






const App = express();
const port = 3001;
App.get('/', (req, res)=> {res.send('Olá mundo. eu sou foda!!!!')})

App.listen(port, ()=> {console.info(`App rodando em: http://localhost:${port}`)});