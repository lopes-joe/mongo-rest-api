/**
 * Arquivo: server.js
 * Descrição: levanta o serviço do Node JS
 * Author: Joe Lopes de Souza
 * Data: 22/09/2021
 * 
 */

//CONFIGURAR SETUP DA APLICAÇÃO

// chamada dos pacotes
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true})) //???

//definindo a porta onde será executada a API
const port = process.env.port || 8000; //(process.env.port == environment variable PORT)
const router = express.Router();
router.get('/', (req, res)=>{
    res.json({message: "Welcome to our store"})
})//router.get

//definindo prefixo das rotas
app.use('/api', router)

//iniciando a aplicação
app.listen(port);
console.log("Iniciando a app na porta " + port)