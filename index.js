const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({ message: 'Seja bem vindo a nossa pagina! ' })
}),
  app.get('/sobre', function (req, res) {
    res.send({ sobre: 'Pagina para pratica de NodeJs' })
  }),
  app.get('/usuario', function (req, res) {
    res.send({ usuario: 'Alex Borges' })
  }),
  app.listen(3030)
