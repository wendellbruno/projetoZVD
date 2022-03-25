<template>
    <div>
        <hr>
        <div class=" columns is-centered">
            <div class="column is-half">
                    <div v-if="erro != undefined">
                        <div class="notification is-danger">
                            <p>{{erro}}</p>
                        </div>
                    </div>
                <p id="p"> ROTINA</p>
                <input type="text" placeholder="rotina do chamado" class="input" v-model="rotina">
                <p id="p"> TITULO </p>
                <input type="text" placeholder="titulo" class="input" v-model="titulo">
                <p id="p"> DESCRIÇÃO </p>
                <textarea class="textarea" placeholder="descrição" v-model="descricao"></textarea>
                <!--<input type="text" placeholder="senha do usuario" class="input" v-model="descricao">-->
                <hr>
                <button class="button is-link is-rounded" @click="registrar">Registrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
       return{
           rotina: '',
           titulo: '',
           descricao: '',
           usuario_id: '',
           resolvido: false,
           erro: undefined
       }
   },
   methods:{
    registrar(){
        axios.post("http://localhost:8989/chamado/"+localStorage.getItem('id'),{
            rotina: this.rotina,
            titulo: this.titulo,
            descricao: this.descricao,
            usuario_id: this.$route.params.usuario_id
        }).then(res =>{
            this.$router.push({name: 'MeusChamados'})
            return res
        }).catch(erro => {
            const msgErro = erro.response.data.erro
            this.erro = msgErro
            console.log(msgErro)
        })
   }
   }
   
}
</script>

<style scoped>
#p {
    font-size: 25px;
   font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
   padding: 10px;
}
</style>