const express = require('express')
const path = require('path');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/formacao-academica', (req, res) => {
  res.sendFile(path.join(__dirname, '/formacao-academica.html'));
})

app.get('/projetos', (req, res) => {
  res.sendFile(path.join(__dirname, '/projetos.html'));
})

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, '/contato.html'));
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

