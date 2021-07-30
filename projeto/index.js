const express = require("express");

const app = express();

const port = 4040;

const legumes = [
  "abóbora",
  "abobrinha",
  "alcachofra",
  "aspargos",
  "batata-doce",
  "berinjela",
  "beterraba",
  "cenoura",
  "cogumelo",
  "ervilha",
];

// [GET] /home
app.get("/", (req, res) => {
  res.send("Olá, usuário.");
});

// [GET] /legumes retorna a lista de legumes

app.get("/legumes", (req, res) => {
  res.send(legumes);
});

app.get("/legumes/:id", (req, res) => {
  const id = req.params.id - 1;
  const legume = legumes[id];

  if (!legume) {
    res.send(`<h1>O legume com id: ${id + 1} não foi encontrado.</h1>`);
    return;
  }

  res.send(`<h1> ${legume} </h1>`);
});

app.listen(port, () => {
  console.info(`APP rodando em : http://localhost:${port}`);
});
