const jwt = require('jsonwebtoken')
const secret = "batiacabeçanoteclado"

module.exports = {

    async validadorToken(req,res){
        const autorizarToken = req.headers['Authorization']

        if(autorizarToken != undefined){
            try{
                const bearer = autorizarToken.split(' ')
                const token = bearer[1]

                const decodificador = jwt.verify(token,secret)
                console.log(decodificador)
                console.log(decodificador.admin)
                if(decodificador.admin === 1){
                    next();
                }
            }catch(erro){
                return res.status(400).json({erro: "Usuario não tem permissão para isso"})
            }
        }else{
            return res.status(400).json({erro: "Você não está autenticado"})
        }
    }
}