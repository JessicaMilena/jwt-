const bodyParser = require("body-parser");
const cursos = require("./cursosRoute");
const usuarios = require("./usuariosRoute");
const auth = require("./authRoute");
module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(cursos);
  app.use(auth);
  app.use(usuarios);
  app.get("/", (req, res) => {
    res.status(200).send({ message: "Bem-vindo!" });
  });
};
