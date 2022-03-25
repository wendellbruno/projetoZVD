import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import Login from '../views/Login.vue'
import Usuarios from '../views/Usuarios.vue'
import EditarUsuario from '../views/EditarUsuario.vue'
import Chamado from '../views/CadastrarChamado.vue'
import MeusChamados from '../views/MeusChamados.vue'
import Chamados from '../views/Chamados.vue'
//import axios from 'axios'



/*function adminAuth(to,from,next){

  if(localStorage.getItem('token') != undefined){

    var req = {
      headers:{
        Authorizarion: "Bearer " + localStorage.getItem('token')
      }
    }
    console.log(req);
    axios.post("http://localhost:8989/usuario", {}, req).then(res => {
      console.log(res);
      next();
    })


  }
}*/



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/usuario',
    name: 'Usuarios',
    component: Usuarios,
  },
  {
    path: '/usuario/edit/:id',
    name: 'EditarUsuario',
    component: EditarUsuario
  },
  {
    path: '/chamado',
    name: 'Chamado',
    component: Chamado
  },
  {
    path: '/meusChamados',
    name: 'MeusChamados',
    component: MeusChamados
  },
  {
    path: '/chamados',
    name: "Chamados",
    component: Chamados

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
