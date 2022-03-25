<template>
    <div>
<hr>
<div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <table class="table">
  <thead>
        <button class="button is-link is-rounded" @click="cadastrar()">Criar novo</button>

    <tr >
      <th>Rotina</th>
      <th>Titulo</th>
      <th>Descrição</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody id="tr">
    <tr v-for="chamado in chamados" :key="chamado.usuario_id.username">
        <td>{{chamado.rotina}}</td>
        <td>{{chamado.titulo}}</td>
        <td><button id="botao" class="button is-link is-rounded" @click="cadastrar()">Ver</button></td>
        
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
        axios.get("http://localhost:8989/chamado/"+localStorage.getItem('id')).then(res =>{
            this.chamados = res.data
        }).catch(erro =>{
            console.log(erro)
        })
    },
    data(){
        return{
            chamados : [],
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
            axios.delete("http://localhost:8989/usuario/"+this.deleteUsuarioId).then(res =>{
                this.showModal = false
                this.usuarios = this.usuarios.filter( u => u._id != this.deleteUsuarioId)
            }).catch(erro =>{
                 console.log(erro)
                 this.showModal = false
            })
        },
        cadastrar(){
          this.$router.push({name: 'Cadastro'})
        }
    },
}
</script>

<style>
#tr{
  font-size: 25px;
}
#botao{
  height: 30px;
}
</style>