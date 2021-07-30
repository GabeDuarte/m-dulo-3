const express = require("express");

const app = express();

const port = 4042;

app.use(express.json())

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

// [GET] pega legumes por id, retorna um único legume
app.get("/legumes/:id", (req, res) => {
  const id = req.params.id-1;
  const legume = legumes[id];

  if (!legume) {
    res.send(`<h1>O legume com id: ${id + 1} não foi encontrado.</h1>`);
    return;
  }

  res.send(`<h1> ${legume} </h1>`);
});



app.post("/legumes", (req, res) => {
  const legume = req.body.legume;

  const id = legumes.length;

  legumes.push();

  res.send(`Legume ${legume} adicionado com sucesso! id do legume: ${id+1}. `);
});

app.listen(port, () => {
  console.info(`APP rodando em : http://localhost:${port}`);
});
