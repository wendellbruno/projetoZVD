<template>
  <div id="app">
    <div id="nav" >
        <div class="navbar-item has-dropdown">
    </div>
      <img src="https://i.ibb.co/rQNSj5m/logo-Wendell.jpg" width="112" height="28" alt="WBTech"><br>  
      <div v-if="usuario !== undefined" >
      <div id="username" v-if="usuario !== undefined">
        Olá {{usuario.username}}
      </div>
     <router-link  v-if="usuario.admin === 1" to="/chamados">Chamados | </router-link> 
     <router-link v-if="usuario.admin === 1" to="/usuario">Usuarios | </router-link> 
     <router-link to="/meusChamados">Meus Chamados</router-link> 
      </div>
    <div id="sair" v-if="usuario !== undefined" >
            <button class="button is-link is-rounded" @click="logout()">Sair</button>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
    if(localStorage.getItem('id') != undefined){
      axios.get("http://192.168.0.245:8989/usuario/"+localStorage.getItem('id')).then(res =>{
        this.usuario = res.data
    }).catch(erro =>{ console.log(erro.response)})
    }
  },
  data(){
    return{
      usuario: undefined,
    }
  },
  methods:{
  logout(){
    localStorage.clear()
    this.$router.push({name: 'Login'})
    this.$router.go()
   }
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #233340;
}
#nav a {
  font-weight: bold;
  color: #FFFF;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#sair{
 padding: 10px;
 float:right;
}
#username{
  font-weight: bold;
  color: #FFFF;
  
}

</style>
