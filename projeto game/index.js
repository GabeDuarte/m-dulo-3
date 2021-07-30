const express = require("express");

const app = express();

const port = 4080;

app.use(express.json());


const jogos = [
  {
    id: 1,
    nome: "Habbo",
    imagem_url:
      "https://fortatacadista.vteximg.com.br/arquivos/ids/161340-800-800/ABOBORA-KABOTIA-KG---633151.jpg?v=637437445897570000",
  },
  {
    id: 2,
    nome: "GTA San Andreas",
    imagem_url:
      "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia9096/como-plantar-abobrinha-artigos-cursos-cpt.jpg",
  },
  {
    id: 3,
    nome: "Call of Duty: Black Ops Cold War",
    imagem_url:
      "https://sm.ign.com/ign_br/news/c/call-of-du/call-of-duty-black-ops-cold-war-cover-art-revealed_k6x9.jpg",
  },
  {
    id: 4,
    nome: "Mortal Kombat",
    imagem_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcIPhkoXtwprahkZkePl6DA-BybULHLaogSrU6oBK47nZtN3TPt1EUskQiFvUhkwvBrk&usqp=CAU",
  },
  {
    id: 5,
    nome: "Counter-Strike",
    imagem_url:
      "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1623182945",
  },
  {
    id: 6,
    nome: "Fortnite",
    imagem_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZTK82ltI487T4wrsQ8LxZ6QTY62f9tQpkcR3tJsu1gWhW2xfxXo0R-8Cf4vznFnL0b8&usqp=CAU",
  },
];

const getJogosValidos = () => jogos.filter(Boolean);
const getJogoByID = (id) =>
  getJogosValidos().find((jogo) => jogo.id === id);
const getJogoIndexByID = (id) =>
  getJogosValidos().findIndex((jogo) => jogo.id === id);

// [GET] /home
app.get("/", (req, res) => {
  res.send("Olá, usuário.");
});

// [GET] /legumes retorna a lista de jogos

app.get("/jogos", (req, res) => {
  res.send(getJogosValidos());
});

// [GET] pega jogos por id, retorna um único jogo
app.get("/jogos/:id", (req, res) => {
  const id = +req.params.id;

  const jogo = getJogoByID(id);

  if (!jogo) {
    res.send(`O jogo com id: ${id} não foi encontrado.`);
    return;
  }

  res.send(jogo);
});

// [PUT] /jogos/id => atualiza atualiza jogo por id

app.put("/jogos/:id", (req, res) => {
  const id = +req.params.id;
  const jogoIndex = getJogoIndexByID(id);

  // validação
  if (jogoIndex < 0) {
    res
      .status(404)
      .send({ message: `O Jogo que você está tentanto editar não existe.` });
    return;
  }

  const novoJogo = req.body;
  if (!Object.keys(novoJogo).length) {
    res
      .status(400)
      .send({ message: `O body da requisição não pode estar vazio.` });
    return;
  }

  if (!novoJogo || !novoJogo.nome || !novoJogo.imagem_url) {
    res.status(400).send({
      message: `jogo inválido. certifique-se  de que o body da requisição possui 'nome' e 'imagem_url' `,
    });
    return;
  }
  const legume = getByID(id);
  jogos[jogoIndex]={
    ...jogos,
    ...novoJogo,

  }
  res.send(jogos[jogoIndex]);

});

// [DELETE] /jogos/id => apaga jogo por id

app.delete("/jogos/:id", (req, res) => {
  const id = +req.params.id;
  const jogoIndex = getJogoIndexByID(id);
  

  // validação
  if (jogoIndex < 0) {
    res
      .status(404)
      .send({ message: `O Jogo que você está tentanto excluir não existe.` });
    return;
  }

  delete jogos[jogoIndex];
  res.send({message: `Jogo com id: ${id} foi deletado com sucesso`});
});

//[POST] cria um novo objeto/registro
app.post("/jogos", (req, res) => {
  let jogo = req.body;

  if (!jogo || !jogo.nome || !jogo.imagem_url) {
    res.status(400).send({
      message: `Jogo inválido. certifique-se  de que o body da requisição possui 'nome' e 'imagem_url' `,
    });
    return;
  }

  jogo.id = jogos.length + 1;

  let data = jogos;
  jogo = { id: data.id, ...jogo };

  jogos.push(jogo);

  res.send(jogo);
});

app.listen(port, () => {
  console.info(`APP rodando em : http://localhost:${port}`);
});
