var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // Para poder ler JSON no corpo da requisição

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

// Função de soma
function soma(a, b) {
  return a + b;
}

// Função de subtração
function subtracao(a, b) {
  return a - b;
}

// Função de multiplicação
function multiplicacao(a, b) {
  return a * b;
}

// Função de divisão
function divisao(a, b) {
  if (b === 0) {
    return 'Divisão por zero não é permitida';
  }
  return a / b;
}

// Rota POST para soma
app.post('/soma', function (req, res) {
  var body = req.body; // Obtendo os dados do corpo da requisição
  var resultado = soma(body.a, body.b); // Chamando a função soma
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`); // Enviando a resposta
});

// Rota POST para subtração
app.post('/subtracao', function (req, res) {
  var body = req.body; // Obtendo os dados do corpo da requisição
  var resultado = subtracao(body.a, body.b); // Chamando a função subtração
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`); // Enviando a resposta
});

// Rota POST para multiplicação
app.post('/multiplicacao', function (req, res) {
  var body = req.body; // Obtendo os dados do corpo da requisição
  var resultado = multiplicacao(body.a, body.b); // Chamando a função multiplicação
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`); // Enviando a resposta
});

// Rota POST para divisão
app.post('/divisao', function (req, res) {
  var body = req.body; // Obtendo os dados do corpo da requisição
  var resultado = divisao(body.a, body.b); // Chamando a função divisão
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`); // Enviando a resposta
});

var port = 3001;

// Iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
