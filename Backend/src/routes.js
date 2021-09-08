const express = require("express")
const ExtratoClienteController = require("./controllers/User/ExtratoClienteController")
const ProdutoController = require("./controllers/Produto/ProdutoController")
const RegisterController = require('./controllers/User/RegisterController')
const LoginController = require("./controllers/User/LoginController")
const ComentarioController = require('./controllers/Produto/ComentarioController')
const UserController = require("./controllers/User/UserController")

const routes = express.Router()


// req.query
// req.params
// req.body

/*
    reqtyoe = 0: Cliente
   reqtype = 1: Fornecedor
    */

/*Rotas de registro */
const registerRouter = express.Router({ mergeParams: true })
routes.use('/registro', registerRouter)
registerRouter.put("/cliente", RegisterController.registroCliente)
registerRouter.put("/fornecedor", RegisterController.registroFornecedor)

/*Rotas de Login */
routes.post("/login", LoginController.login)

/*Rotas de Produto */
const productsRouter = express.Router({ mergeParams: true })
routes.use('/produto', productsRouter)
productsRouter.get('/categoria', ProdutoController.getAllCategorias)
productsRouter.get('/', ProdutoController.getAllProdutos)
productsRouter.put('/comentario/:id', ComentarioController.newComentario)
productsRouter.get('/comentario/:id', ComentarioController.getAllComentariosById)
productsRouter.get('/:id', ProdutoController.details)
productsRouter.delete('/:id', ProdutoController.deleteProduto)

/*Rotas de Usuario */
const userRouter = express.Router({ mergeParams: true })
routes.use('/user', userRouter)
userRouter.get('/lista/:id', UserController.getListaDeDesejo)
userRouter.get("/:id", UserController.detailsById)
userRouter.get("/compras/:id", UserController.getComprasByIdCliente)
userRouter.post("/addsaldo/:id", UserController.addSaldo)




//isso aqui eu tenho que tirar depois...
routes.get('/extrato/cliente', ExtratoClienteController.getAllExtByID) //isso aqui na real é /user/extrato/{id}
module.exports = routes