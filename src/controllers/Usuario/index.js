const Usuario = require('../../models/Usuario')
const jwt = require('jsonwebtoken')
const secret = "batiacabeçanoteclado"
const UsuarioController = {

        async criar(req,res){

            const {...bodyData} = req.body;
            try{
                if(bodyData.nome !== undefined || bodyData.username !== undefined || bodyData.password !== undefined){
                    const usuario = await Usuario.create(bodyData)
                    return res.status(200).json(usuario)
                }
               
            }catch(erro){ 
                console.log(erro)
                return res.status(400).json({erro: 'Dados Invalidos'})
            }
        },

        async editar(req,res){
            const {...bodyData} = req.body;
            const {id} = req.params;
            try{
                const usuario = await Usuario.findByIdAndUpdate(id, bodyData, {new: true})
                return res.status(200).json(usuario)

            }catch(erro){ 
                console.log(erro)
                return res.status(400).json({erro: 'Erro ao editar'})
            }
        },

        async deletar(req,res){
            const {id} = req.params
            try{
                const usuario = await Usuario.findByIdAndDelete(id)
                res.status(200).json(usuario)
            }catch(erro){ 
                console.log(erro)
                return res.status(400).json({erro: 'Erro ao deletar'})
            }
        },

        async usuarios(req,res){
        
            try{
                const usuarios = await Usuario.find()
                res.status(200).json(usuarios)
            }catch(erro){ 
                console.log(erro)
                return res.status(400).json({erro : 'Erro ao buscar'})
            }
        },

        async usuario(req,res){
            const {id} = req.params

            try{
                const usuario = await Usuario.findById(id)
                res.status(200).json(usuario)
            }catch(erro){ 
                console.log(erro)
                return res.status(400).json({erro : 'Erro ao buscar'})
            }
        },

        async login(req,res){
            const {username, password} = req.body;
    
            try{
                const usuario = await Usuario.findOne({username})
                if(password == usuario.password){
                    const token= jwt.sign({nome: usuario.nome, username:usuario.username}, secret)
                    return res.status(200).json({token: token, id: usuario._id})
                }else{
                    console.log(erro)
                    return res.status(400).json({erro: 'Dados Invalidos'})
                }

            }catch(erro){
                console.log(erro)
                return res.status(400).json({erro: 'Dados Invalidos'})
            }
        },
}

module.exports = UsuarioController;

/*
 try{

            }catch(erro){ 
                return res.status(400).json(erro)
            }
*/