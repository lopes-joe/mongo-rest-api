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
const mongoose = require('mongoose')
const Product = require('./app/models/product')


//definindo a porta onde será executada a API
const port = process.env.port || 8000; //(process.env.port == environment variable PORT)
const router = express.Router();

router.use((re, res, next)=>{
    console.log("It's working")
    next()
})

router.get('/', (req, res)=>{
    res.json({message: "Welcome to our store"})
})//router.get

router.use((re, res, next)=>{
    console.log("It's working")
    next()
})

//definindo prefixo das rotas
app.use('/api', router)

//iniciando a aplicação
app.listen(port);
console.log("Iniciando a app na porta " + port)

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://lopes-joe:53nh4MongoDBJ03@mongo-rest-api.pok1a.mongodb.net/mongo-rest-api?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//ROTAS DA NOSSA API
