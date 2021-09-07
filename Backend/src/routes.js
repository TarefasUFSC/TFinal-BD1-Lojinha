const express = require("express")
const ExtratoClienteController = require("./controllers/User/ExtratoClienteController")
const ProdutoController = require("./controllers/Produto/ProdutoController")
const RegisterController = require('./controllers/User/RegisterController')
const LoginController = require("./controllers/User/LoginController")
const ComentarioController = require('./controllers/Produto/ComentarioController')

const routes = express.Router()


// req.query
// req.params
// req.body

/*Rotas de registro */
const registerRouter = express.Router({ mergeParams: true })
routes.use('/registro', registerRouter)
registerRouter.post("/cliente", RegisterController.registroCliente)
registerRouter.post("/fornecedor", RegisterController.registroFornecedor)

/*Rotas de Login */
routes.post("/login", LoginController.login)

/*Rotas de Produto */
const productsRouter = express.Router({ mergeParams: true })
routes.use('/produto', productsRouter)
productsRouter.get('/categoria', ProdutoController.getAllCategorias)
productsRouter.get('/', ProdutoController.getAllProdutos)
productsRouter.post('/comentario/:id', ComentarioController.newComentario)
productsRouter.get('/comentario/:id', ComentarioController.getAllComentariosById)
productsRouter.get('/:id', ProdutoController.details)



routes.get('/extrato/cliente', ExtratoClienteController.getAllExtByID) //isso aqui na real é /user/extrato/{id}
module.exports = routes