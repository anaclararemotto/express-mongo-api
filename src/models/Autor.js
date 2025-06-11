import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    nome: { type: String, required: true},
    nacionalidade: { type: String}
}, {versionKey: false})

const autor = mongoose.model("autores", autorSchema);

// a partir do autor schema posso importar o autor como propriedade e livrp
export {autor, autorSchema}