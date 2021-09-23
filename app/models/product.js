/**
 * Arquivo: produto.js
 * Descrição: trata o modelo da classe produto
 * Author: Joe Lopes de Souza
 * Data: 22/09/2021
 * 
 */

// o mongoose é usado para criar esquemas para persistência em banco de dados
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * PRODUTO
 * 
 * Id: int
 * Nome: String
 * Preço: Number
 * Descricao: String
 * 
 */

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
})

module.exports = mongoose.model('Product', productSchema)