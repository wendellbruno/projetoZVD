<template>
    <div>
<hr>
<div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <table class="table">
  <thead>
    <tr >
      <th>Usuario</th>
      <th>Rotina</th>
      <th>Titulo</th>
      <th>Descrição</th>
      <th>Status</th>
      
    </tr> 
  </thead>
  <tbody id="tr">
    <tr v-for="chamado in chamados" :key="chamado.usuario_id.username">
        <td>{{chamado.usuario_id.username}}</td>
        <td>{{chamado.rotina}}</td>
        <td>{{chamado.titulo}}</td>
        
        <td><button id="botao" class="button is-link is-rounded" @click="showChamadoUSer(chamado._id)">Ver</button></td>
        <td v-if="chamado.resolvido === false">
         <button id="botao" class="button is-link is-rounded" @click="statusChamado(chamado._id)">Em aberto</button></td>
         <td v-else>
           <button id="botao" class="button is-warning is-rounded" @click="statusChamado(chamado._id)">Resolvido</button></td>
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
      Descrição do chamado
    </p>
  </header>
  <div class="card-content">
    <div class="content" v-if="chamadoDescricao !== null">
      {{chamadoDescricao}}
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
    <a href="#" class="card-footer-item" @click="deletarChamado()">Delete</a>
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
        axios.get("http://192.168.0.245:8989/chamados").then(res =>{
            this.chamados = res.data
        }).catch(erro =>{
            console.log(erro)
        })
    },
    data(){
        return{
            chamados : [],
            chamadoDescricao : ' ',
            chamadoId: -1,
            showModal: false
        }
    },
    methods: {
        hideModal(){
            this.showModal = false
        },
        showChamadoUSer(chamado_id){
              axios.get("http://192.168.0.245:8989/chamado/"+localStorage.getItem('id')+"/"+chamado_id).then(res =>{
              this.chamadoDescricao = res.data.descricao
              this.chamadoId = res.data._id
            }).catch(erro => {
              console.log(erro.response)
              })
              this.showModal = true;
        },
        deletarChamado(){
            axios.delete("http://192.168.0.245:8989/chamado/"+localStorage.getItem('id')+"/"+this.chamadoId).then(res =>{
                this.showModal = false
                this.$router.go()
                return res
            }).catch(erro =>{
                console.log(erro.response)
                 this.showModal = false
            })
        },
        statusChamado(chamado_id){
          axios.patch("http://192.168.0.245:8989/chamado/"+localStorage.getItem('id')+"/"+chamado_id+"/status").then(res =>{
            this.$router.go() 
              return res;
            }).catch(erro => {
              console.log(erro.response)
              })
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