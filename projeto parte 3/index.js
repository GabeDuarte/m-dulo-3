const express = require("express");

const app = express();

const port = 4050;

app.use(express.json());

// transformando em uma lista de objetos.
const legumes = [
  {
    id: 1,
    nome: "abóbora",
    imagem_url:
      "https://fortatacadista.vteximg.com.br/arquivos/ids/161340-800-800/ABOBORA-KABOTIA-KG---633151.jpg?v=637437445897570000",
  },
  {
    id: 2,
    nome: "abobrinha",
    imagem_url:
      "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia9096/como-plantar-abobrinha-artigos-cursos-cpt.jpg",
  },
  {
    id: 3,
    nome: "alcachofra",
    imagem_url:
      "https://www.sacolaodasanta.com.br/img/anexos/alcachofra-11092020111527_1.jpg",
  },
  {
    id: 4,
    nome: "aspargos",
    imagem_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYXgbpKHPdAHpBCOdWOWcFrxBz-eoRbSnmA&usqp=CAU",
  },
  {
    id: 5,
    nome: "batata-doce",
    imagem_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2kUaANw_icvmYuhssdff_B_GHCktfAwxhZw&usqp=CAU",
  },
  {
    id: 6,
    nome: "berinjela",
    imagem_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmfbfM2GerHi0dv6rHOhszSVn3QO5AmFDV1T1rGkei8l2HrK135k8q_sSqMuu3bhHLT4&usqp=CAU",
  },
];

const getLegumesValidos = () => legumes.filter(Boolean);
const getLegumeByID = (id) =>
  getLegumesValidos().find((legume) => legume.id === id);
const getLegumeIndexByID = (id) =>
  getLegumesValidos().findIndex((legume) => legume.id === id);

// [GET] /home
app.get("/", (req, res) => {
  res.send("Olá, usuário.");
});

// [GET] /legumes retorna a lista de legumes

app.get("/legumes", (req, res) => {
  res.send(getLegumesValidos());
});

// [GET] pega legumes por id, retorna um único legume
app.get("/legumes/:id", (req, res) => {
  const id = +req.params.id;

  const legume = getLegumeByID(id);

  if (!legume) {
    res.send(`O legume com id: ${id} não foi encontrado.`);
    return;
  }

  res.send(legume);
});

// [PUT] /legumes/id => atualiza atualiza legume por id

app.put("/legumes/:id", (req, res) => {
  const id = +req.params.id;
  const legumeIndex = getLegumeIndexByID(id);

  // validação
  if (legumeIndex < 0) {
    res
      .status(404)
      .send({ message: `O Legume que você está tentanto editar não existe.` });
    return;
  }

  const novoLegume = req.body;
  if (!Object.keys(novoLegume).length) {
    res
      .status(400)
      .send({ message: `O body da requisição não pode estar vazio.` });
    return;
  }

  if (!novoLegume || !novoLegume.nome || !novoLegume.imagem_url) {
    res.status(400).send({
      message: `Legume inválido. certifique-se  de que o body da requisição possui 'nome' e 'imagem_url' `,
    });
    return;
  }
  const legume = getLegumeByID(id);
  legumes[legumeIndex]={
    ...legume,
    ...novoLegume,

  }
  res.send(legumes[legumeIndex]);

});

// [DELETE] /legumes/id => apaga legume por id

app.delete("/legumes/:id", (req, res) => {
  const id = +req.params.id;
  const legumeIndex = getLegumeIndexByID(id);
  

  // validação
  if (legumeIndex < 0) {
    res
      .status(404)
      .send({ message: `O Legume que você está tentanto excluir não existe.` });
    return;
  }

  delete legumes[legumeIndex];
  res.send({message: `Legume com id: ${id} foi deletado com sucesso`});
});

//[POST] cria um novo objeto/registro
app.post("/legumes", (req, res) => {
  let legume = req.body;

  if (!legume || !legume.nome || !legume.imagem_url) {
    res.status(400).send({
      message: `Legume inválido. certifique-se  de que o body da requisição possui 'nome' e 'imagem_url' `,
    });
    return;
  }

  legume.id = legumes.length + 1;

  let data = legumes;
  legume = { id: data.id, ...legume };

  legumes.push(legume);

  res.send(legume);
});

app.listen(port, () => {
  console.info(`APP rodando em : http://localhost:${port}`);
});
