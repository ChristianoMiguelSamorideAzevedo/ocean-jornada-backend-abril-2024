const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Exercicio: Criar um endpoint [GET] /oi que exibe: " Olá mundo!"


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/oi', function (req, res) {
    res.send('Olá, mundo')
  })
app.listen(3000)