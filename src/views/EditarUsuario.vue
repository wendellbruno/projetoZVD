<template>
    <div>
        <h2>Edição de usuario</h2>
        <hr>
        <div class=" columns is-centered">
            <div class="column is-half">
                    <div v-if="erro != undefined">
                        <div class="notification is-danger">
                            <p>{{erro}}</p>
                        </div>
                    </div>
                <p> Nome </p>
                <input type="text" placeholder="nome do usuario" class="input" v-model="nome">
                <p> username </p>
                <input type="text" placeholder="username do usuario" class="input" v-model="username">
                <p> password </p>
                <input type="text" placeholder="senha do usuario" class="input" v-model="password">
                <hr>
                <button class="button is-success" @click="editar()">Editar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created(){
        axios.get("http://localhost:8989/usuario/"+this.$route.params.id).then(res =>{
            this.nome = res.data.nome,
            this.username = res.data.username,
            this.password = res.data.password
        }).catch(erro =>{
            console.log(erro.response)
            this.$router.push({name: "/usuario"})
        })

    },
   data(){
       return{
           nome: '',
           username: '',
           password: '',
           id: -1,
           erro: undefined
       }
   },
   methods:{
    editar(){
        axios.patch("http://localhost:8989/usuario/"+this.$route.params.id,{
            nome: this.nome,
            username: this.username, 
            password: this.password,
        }).then(res =>{
            this.$router.push({name: 'Usuarios'})
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

</style>