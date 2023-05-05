const mongoose = require('mongoose');

// Definir os schemas + modelos
const AlunoSchema = { 
  nome: String ,
  matricula: String,
  curso: String,
  cre: Number
};

module.exports = mongoose.model('Aluno', AlunoSchema);