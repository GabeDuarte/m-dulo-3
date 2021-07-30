const express = require('express');
const app = express();
const port = 3002;
app.use(express.json());

const mongoose = require('mongoose');
const Filme = require('./models/filme');



mongoose.connect('mongodb://localhost:27017/teste', { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res) => { res.send('olá usuário!') })


app.get('/filmes', async (req, res) => { const filmes = await Filme.find(); res.send(filmes); });




app.get('/filmes/:id', async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id);
        if (filme == null) {
            return res.status(404).send({message: 'Não foi possível encontrar o filme!'});
        }
        res.send(filme);
    }
    catch (err){return res.status(500).send({message: err.message});}
});


app.post("/filmes", async (req, res) => {
    const filme = new Filme({
      nome: req.body.nome,
      imagem_url: req.body.imagem_url,
    });
    if (!filme || !filme.nome || !filme.imagem_url) {
      res.status(400).send({
        message:
          'Filme invalido. você precisa inserir um "nome" e "imagem_url"',
      });
      return;
    }
    const filmeSalvo = await filme.save(); 
    res.send(filmeSalvo);
});


app.listen(port, () => { console.info(`App rodando em: http://localhost:${port}`) });
