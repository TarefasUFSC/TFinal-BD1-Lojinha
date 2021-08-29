const express = require("express")
const ExtratoClienteController = require("./controllers/ExtratoClienteController")
const ProdutoController = require("./controllers/ProdutoController")

const routes = express.Router()
// req.query
// req.params
// req.body
routes.get('/extrato/cliente',ExtratoClienteController.getAllExtByID)
routes.get('/produtos',ProdutoController.getAllProdutos)
module.exports = routes