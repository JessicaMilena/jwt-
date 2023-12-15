const express = require("express");
const routes = require("../routes");
const cors = require("cors");
const app = express();
const port = 8000;

// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    optionsSuccessStatus: 204,
  })
);

// Middleware para lidar com JSON no corpo da requisição
app.use(express.json());

// Configuração das rotas
routes(app);

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
