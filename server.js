// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

//tudo maiusculo pois sao infos estaticas, q nao muda
const PORT = 3000;

// const rotas ={
//     "/": "Curso de Express API",
//     "/livros" : "ENTREI NA ROTA LIVROS",
//     "/autores" : "ENTREI NA ROTA AUTORES"
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type" : "text/plain"});
//     res.end(rotas[req.url]);
// })

// verifica se esta funcionando
app.listen(PORT, () => {
    console.log("Servidor escutando!");
    
})