import express from "express";

const app = express();
app.use(express.json()); //middleware

const livros = [
    {
        id: 1,
        titulo: "O senhor dos aneis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    }
    );
}

//req para obter informações sobre a solicitação do cliente (como parâmetros na URL) e usa o res para enviar os dados de volta ao cliente.
app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js");
});

//read
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

//read 1 livro
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
} )

//create
app.post("/livros", (req, res) => {
    livros.push(req.body); //todo req precisa de um res
    res.status(201).send("livro cadastrado com sucesso"); //201 = codigo de registro criado
});

//update livro
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

//delete
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
})

export default app;