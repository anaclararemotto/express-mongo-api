import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

//adcionar rotas por ordem de complexidade
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivroPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;