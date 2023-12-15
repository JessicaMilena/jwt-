// routes/cursos.js
const express = require("express");
const authenticate = require("../middlewares/verificarAutenticacao");
const cursosController = require("../controllers/cursoController");
const router = express.Router();

router.get("/cursos", authenticate, cursosController.getCursos);
router.get("/cursos/:id", authenticate, cursosController.getCursoPorId);
router.post("/cursos", authenticate, cursosController.postCurso);
router.put("/cursos/:id", authenticate, cursosController.putCurso);
router.delete("/cursos/:id", authenticate, cursosController.deleteCurso);
router.get(
  "/alunoscurso/:id",
  authenticate,
  cursosController.getAlunosPorCurso
);

module.exports = router;
