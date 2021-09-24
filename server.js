const express = require('express')
const app = express()
const mongoose = require('mongoose')
const product = require('./app/models/product')
const Product = require('./app/models/product')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.port || 8000;
const router = express.Router();

router.use((re, res, next)=>{
    console.log("It's working")
    next()
})
router.get('/', (req, res)=>{
    res.json({message: "Welcome to our store"})
})
router.use((re, res, next)=>{
    console.log("It's working")
    next()
})

const uri = 'mongodb+srv://lopes-joe:53nh4MongoDBJ03@mongo-rest-api.pok1a.mongodb.net/' +
  'test?retryWrites=true&w=majority';
mongoose.connect(uri)

// 1) MÉTODO POST
router.route('/products').post((req, res) =>{
    var product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.description = req.body.description
    product.save((error)=>{
        if(error)
        //res.send('Erro ' + error)
        res.json({message: "new product is created"})
    })
})

// 2) MÉTODO GET
.get((req, res)=>{
    Product.find((error, products)=>{
        if(error){
            res.send('Error: ' + error)
        }
        res.json(products)
    })
})

router.route('/products/:product_id')

// 3) MÉTODO SELECIONAR POR ID
.get((req, res)=>{
    Product.findById(req.params.product_id, (error, product)=>{
        if(error){
            res.send('Id não encontrado', error)
        } else {
            res.json(product)
        }

    })
})

// 4) MÉTODO PUT
.put((req, res)=>{
    Product.findById(req.params.product_id, (error, product)=>{
        if(error){
            res.send('Id não encontrado', error)
        } else {
            product.name = req.body.name
            product.price = req.body.price
            product.description = req.body.description
        }

        product.save((error)=>{
            if(error){
                res.send('Id não encontrado', error)
            } else {
                res.json({message: "product updated"})
            }
        })

    })
})

//MÉTODO PUT
.delete((req, res)=>{
    Product.remove({
        _id: req.params.product_id
    }, (error)=>{
        if(error){
            res.send('Id não encontrado', error)
        } else {
            res.json({message: "product deleted"})
        }
    }
     )
})

app.use('/api', router)
app.listen(port);
console.log("Iniciando a app na porta " + port)