<template>
    <div>
<hr>
<div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <table class="table">
  <thead>
        <button class="button is-link is-rounded" @click="cadastrar()">Criar novo</button>

    <tr> 
      <th>Nome</th>
      <th>Username</th>
      <th>Cargo</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="usuario in usuarios" :key="usuario.username">
        <td>{{usuario.nome}}</td>
        <td>{{usuario.username}}</td>
        <td>{{ usuario.admin | processRole}}</td>
        
        <td>
          <router-link :to="{name: 'EditarUsuario', params:{id: usuario._id}}"><button class="button is-success">Editar</button></router-link>
        | <button class="button is-danger" @click="showModalUSer(usuario._id)">Deletar</button></td>
    </tr>
  </tbody>
</table>
    </p>
  </div>
</div>


    <div :class="{modal: true, 'is-active': showModal}">
        <div class="modal-background"></div>
         <div class="modal-content">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Você quer realmente deletar esse usuario
    </p>
  </header>
  <div class="card-content">
    <div class="content">
    qualquer coisa aqui
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
    <a href="#" class="card-footer-item" @click="deletarUsuario()">Delete</a>
  </footer>
</div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    created(){
         var req = {
      headers:{
        Authorizarion: "Bearer " + localStorage.getItem('token')
      }
    }
        axios.get("http://192.168.0.245:8989/usuario", req).then(res =>{
            this.usuarios = res.data
        }).catch(erro =>{
            console.log(erro)
        })
    },
    data(){
        return{
            usuarios : [],
            showModal: false,
            deleteUsuarioId: -1
        }
    },
    methods: {
        hideModal(){
            this.showModal = false
        },
        showModalUSer(id){
            this.deleteUsuarioId = id;
            this.showModal = true;
        },
        deletarUsuario(){
            axios.delete("http://192.168.0.245:8989/usuario/"+this.deleteUsuarioId).then(res =>{
                this.$router.go()
                this.showModal = false
                return res
            }).catch(erro =>{
                console.log(erro)
                 this.showModal = false
            })
        },
        cadastrar(){
          this.$router.push({name: 'Cadastro'})
        }
    },
    filters: {
        processRole: function(valor){
            if(valor === 0 ) {
                return "Usuário comum";
            }else if(valor === 1){
                return "Administrador"
            }
        }
    }
}
</script>

<style>

</style>