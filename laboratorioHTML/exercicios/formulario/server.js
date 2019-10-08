const express = require('express') //importar o express
const app = express() //instanciar o express
const bodyParser = require('body-parser') // importar o body parser

app.use(bodyParser.urlencoded({extended: true})) //sem o body-parser o servidor não interpreta o corpo da requisição

app.post('/usuarios', (req,resp) => {
    console.log(req.body) //saber o que chegou no servidor 
    resp.send('<h1> Parabens <h1>') // enviar a resposta para o cliente
}) //atender uma requisição do tipo post em cima da url /usuaruis

app.listen(3003) // escutar na porta 3003
