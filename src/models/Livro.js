import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema //referenciando autor em livros
}, {versionKey: false});


const livro = mongoose.model("livros", livroSchema) // "livros" = coleçao

export default livro;