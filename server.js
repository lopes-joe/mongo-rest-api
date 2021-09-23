const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true})) //???
const mongoose = require('mongoose')
const Product = require('./app/models/product')
const mongodb = require('mongodb')


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

/*const { MongoClient } = require('mongodb');
const uri = "mongodb://lopes-joe:53nh4MongoDBJ03@mongodbproject.pok1a.mongodb.net/mongodbproject?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
/*const url = "mongodb+srv://lopes-joe:53nh4MongoDBJ03@mongo-rest-api.pok1a.mongodb.net/mongo-rest-api?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);*/
//mongoose.connect("mongodb+srv://lopes-joe:53nh4MongoDBJ03@mongo-rest-api.pok1a.mongodb.net/mongo-rest-api?retryWrites=true&w=majority")



const uri = 'mongodb+srv://lopes-joe:53nh4MongoDBJ03@mongo-rest-api.pok1a.mongodb.net/' +
  'test?retryWrites=true&w=majority';
// Prints "MongoServerError: bad auth Authentication failed."
/*mongoose.connect(uri, ()=>{return}, {
  serverSelectionTimeoutMS: 0
}).catch(err => console.log(err.reason));*/
const query = new Query();
// Throws an error 'operation exceeded time limit' as long as there's
// >= 1 doc in the queried collection
const res = 
mongoose.connect(uri, { keepAlive: 1})

//ROTAS DA NOSSA API

//servem para get all quanto para post
router.route('/produtos')

/* 1) Método criar produto*/
.post((req, res) =>{
    var product = new Product()
    //setar os campos do produto via request
    product.name = req.body.name
    product.price = req.body.price
    product.description = req.body.description
    product.save((error)=>{
        if(error)
        //res.send('Erro ' + error)
        res.json({message: "new product is created"})
    })
})

app.use('/api', router)

//iniciando a aplicação
app.listen(port);
console.log("Iniciando a app na porta " + port)