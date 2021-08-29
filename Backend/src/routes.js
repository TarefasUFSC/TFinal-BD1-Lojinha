const express = require("express")
const ExtratoClienteController = require("./controllers/ExtratoClienteController")

const routes = express.Router()
// req.query
// req.params
// req.body
routes.get('/extrato/cliente',ExtratoClienteController.getAllExtByID)

module.exports = routes