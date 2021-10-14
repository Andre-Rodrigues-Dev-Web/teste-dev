import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(cors())
app.listen(3000, () => {
 Console.log("Server started on port 3000")
})
//Conn Mogoose
mongoose.connect ("mongodb://localhost:27017/livraria", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
const db = mongoose.connection;
db.on ('abrir', () => { 
    console.log ('Conectado ao mongoDB'); 
});
db.on ('erro', (erro) => { 
    console.log (erro) 
})
// import schema
const Model = require("./schema");
//Rotas
app.get("/", (req, res) => {
  res.send("Página home");
});
//add livros
app.post("/books/add", (req, res) => {
  let newBook = new Model();
  newBook.titulo = req.body.livros;
  newBook.nome = req.body.livros;
  newBook.autor = req.body.livros;
  newBook.categoria = req.body.livros;
  newBook.codigo = req.body.livros;
  newBook.tipo = req.body.livros;
  newBook.tamanho = req.body.livros;
  newBook.save(err => {
    if (err) {
      console.log(err);
      res.send("Erro ao adicionar livro");
    } else {
      console.log(newBook);
      res.send("Livro adicionado");
    }
  });
});