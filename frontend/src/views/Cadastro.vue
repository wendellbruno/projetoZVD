<template>
    <div>
        <h2 id="p"></h2>
        <hr>
        <div class=" columns is-centered">
            <div class="column is-half">
                    <div v-if="erro != undefined"> 
                        <div class="notification is-danger">
                            <p>{{erro}}</p>
                        </div>
                    </div>
                <p id="p"> NOME </p>
                <input type="text" placeholder="nome do usuario" class="input" v-model="nome">
                <p id="p"> USERNAME </p>
                <input type="text" placeholder="username do usuario" class="input" v-model="username">
                <p id="p"> PASSWORD </p>
                <input type="text" placeholder="senha do usuario" class="input" v-model="password">
                <hr>
                <button class="button is-link is-rounded" @click="registrar">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
       return{
           nome: '',
           username: '',
           password: '',
           erro: undefined
       }
   },
   methods:{
    registrar(){
        axios.post("http://192.168.0.245:8989/usuario",{
            nome: this.nome,
            username: this.username,
            password: this.password,
        }).then(res =>{
            this.$router.push({name: 'Home'})
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
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-weight: bold;
   padding: 10px;
}
</style>