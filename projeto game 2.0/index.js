const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/games', {useNewUrlParser: true, useUnifiedTopology: true,});
const port = 3003;
const Jogo = require('./models/jogo')

const app = express();
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Olá usuário! aqui é o inicio do projeto.')
})



app.get('/jogos', async (req, res)=> {
    const jogos = await Jogo.find();
    res.send(jogos);
});


app.get('/jogos/:id', async(req, res)=>{
   
    try {const jogo = await Jogo.findById(req.params.id);

        if (jogo == null){
            res.status(404).send({message: "jogo não encontrado!"})
        }
        res.send(jogo);
    }catch(err){
        return res.status(500).send({message: err.message})
    }

})

app.post('/jogos', async (req, res)=>{
    const jogo = new Jogo({
        nome: req.body.nome,
        imagem_url: req.body.imagem_url,
        ano_lancamento: req.body.ano_lancamento,
    });
    if (!jogo || !jogo.imagem_url || !jogo.nome || !jogo.ano_lancamento ) {
        res.status(400).send({message: 'O jogo deve conter: nome, imagem_url e ano_lancamento'});
        return;
    };
    const jogoSalvo = await jogo.save();
    res.send(jogoSalvo);
});



app.put('/jogos/:id', async(req, res)=>{
    
        try{
            const jogo = await Jogo.findByIdAndUpdate(req.params.id);
            const newJogo = req.body;

            if (
                newJogo.nome && newJogo.imagem_url && newJogo.ano_lancamento !== null
            ){
                jogo.nome = newJogo.nome;
                jogo.imagem_url = newJogo.imagem_url;
                jogo.ano_lancamento = newJogo.ano_lancamento
            } else { return res.status(500).send({message: "não foi possível completar"})};
            const jogoUpdated = await jogo.save();
            res.send(jogoUpdated);
        }   
        catch (err){
            return res.status(500).send({message: err.message})
        }
        
});



app.delete('/jogos/:id', async (req,res)=>{
    try{
        const jogo = await Jogo.findById(req.params.id);
        if (jogo == null) {
            res.status(404).send({message: 'nao foi encontrado'})
        };
        await jogo.remove();
        res.send({message: "jogo removido com sucesso"});
    } catch(err){
        return res.status(500).send({message: err.message})
    }
})

app.listen(port, ()=>{console.info(`Seu sevidor está rodando em: http://localhost:${port}`)});
