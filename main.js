require('dotenv').config(); // lendo o arquivo .env

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const carro_controller = require('./controllers/carro_controller');
const aluno_controller = require('./controllers/aluno_controller');

mongoose.connect(process.env.DATABASE_URL);

app.use(cors());
app.use(bodyParser.json()); // 1. aceitar dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // 2. aceitar dados no format url encoded

app.get('/', (req, res) => {
  res.send('Backend do sistema de carros');
});
app.use('/carros', carro_controller);
app.use('/alunos', aluno_controller);

app.listen(parseInt(process.env.SERVER_PORT), () => {
  console.log('O servidor está no ar');
  console.log('http://localhost:5000');
});