const express = require('express');
const cors = require('cors')
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
var db = mongoose.connection;
db.on ('abrir', () => { 
    console.log ('Conectado ao mongoDB'); 
});
db.on ('erro', (erro) => { 
    console.log (erro) 
})
