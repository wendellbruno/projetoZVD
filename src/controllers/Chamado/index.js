const Chamado = require('../../models/Chamado')

const ChamadoController = {


    async criar(req,res){
        const {usuario_id} = req.params;
        const {...bodyData} = req.body;
        try{
            const data = {usuario_id,...bodyData}
            const chamado = await Chamado.create(data)
            res.status(200).json(chamado)
        }catch(erro){ 
            console.log(erro)
            return res.status(400).json({erro: 'Dados Invalidos'})
        }
    },


   async chamado(req,res){
       const {usuario_id} = req.params
       
    try{
        const chamadoUsuario = await Chamado.find({usuario_id}).populate('usuario_id')
        return res.status(200).json(chamadoUsuario)

    }catch(erro){ 
        console.log(erro)
        return res.status(400).json({erro: 'Erro ao buscar'})
    }

  },

  async chamadoId(req,res){
    const {chamado_id} = req.params
    try{
        const chamadoUsuario = await Chamado.findById(chamado_id)
        return res.status(200).json(chamadoUsuario)
    }catch(erro){ 
        console.log(erro)
        return res.status(400).json({erro: 'Erro ao buscar'})
    }
  },


   async chamados(req,res){
    try{
        const chamados = await Chamado.find().populate('usuario_id')
        return res.status(200).json(chamados)
    }catch(erro){ 
        console.log(erro)
        return res.status(400).json({erro: 'Erro ao buscar'})
    }
 },

 async deletar(req,res){
    const {...paramsData} = req.params
     try{
        const chamado = await Chamado.findByIdAndDelete(paramsData.chamado_id)
        return res.status(200).json(chamado)
     }catch(erro){
        console.log(erro)
         return res.status(400).json({erro: 'Erro ao deletar'})
     }
 },

 async editar(req,res){
    const {...paramsData} = req.params
    const {...bodyData} = req.body
    try{
        const chamado = await Chamado.findByIdAndUpdate(paramsData.chamado_id, bodyData, {new: true})
        return res.status(200).json(chamado)
    }catch(erro){ 
        console.log(erro)
        return res.status(400).json({erro: 'Erro ao editar'})
    }
 },

 async mudarStatus(req,res){
    const {...paramsData} = req.params
    try{
        
        const chamadoUsuario = await Chamado.findById(paramsData.chamado_id)
        if(chamadoUsuario.resolvido == true){
            const verdadeiro = await Chamado.findByIdAndUpdate(paramsData.chamado_id, {resolvido: false}, {new: true})
            return res.status(200).json(verdadeiro)
        }else if(chamadoUsuario.resolvido == false){
            const falso = await Chamado.findByIdAndUpdate(paramsData.chamado_id, {resolvido: true}, {new: true})
            return res.status(200).json(falso)
        }
            return res.status(400).json({erro: 'erro ao mudar status'})
    }catch(erro){ 
        console.log(erro)
        return res.status(400).json(erro)
    }
  }
}

/*
 try{

            }catch(erro){ 
                return res.status(400).json(erro)
            }
*/

module.exports = ChamadoController;