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
