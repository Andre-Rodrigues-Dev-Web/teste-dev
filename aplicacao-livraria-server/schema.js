const mongoose = require("mongoose");

// Schema for todo
const Schema = mongoose.Schema({
    "id": {
        "type": "Number"
    },
    "titulo": {
    "type": "String"
    },
    "nome": {
    "type": "String"
    },
    "autor": {
    "type": "String"
    },
    "categoria": {
    "type": "String"
    },
    "codigo": {
    "type": "Number"
    },
    "tipo": {
    "type": "String"
    },
    "tamanho": {
    "type": "String"
    }
});

const livros = (module.exports = mongoose.model("livros", Schema));