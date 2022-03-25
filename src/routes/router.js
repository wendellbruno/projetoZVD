const { Router } = require('express')
const routes = Router();
const UsuarioController = require('../controllers/Usuario')
const ChamadoController = require('../controllers/Chamado');
const Login = require('../middleware/Login')

//index
routes.get('/', (req,res) =>{
    res.send('olá')
})

//usuario
routes.post('/usuario', UsuarioController.criar)
routes.patch('/usuario/:id', UsuarioController.editar)
routes.delete('/usuario/:id', UsuarioController.deletar)
routes.get('/usuario', UsuarioController.usuarios)

routes.get('/usuario/:id', UsuarioController.usuario)

//chamado
routes.post('/chamado/:usuario_id', ChamadoController.criar)
routes.get('/chamado/:usuario_id', ChamadoController.chamado)
routes.get('/chamado/:usuario_id/:chamado_id', ChamadoController.chamadoId)
routes.get('/chamados', ChamadoController.chamados)
routes.delete('/chamado/:usuario_id/:chamado_id', ChamadoController.deletar)
routes.patch('/chamado/:usuario_id/:chamado_id', ChamadoController.editar)
routes.patch('/chamado/:usuario_id/:chamado_id/status', ChamadoController.mudarStatus)

routes.post('/login', UsuarioController.login)

module.exports = routes;

