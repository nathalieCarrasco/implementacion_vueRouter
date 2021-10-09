import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../views/inicio.vue'
import Sobremi from '../views/Sobremi.vue'
import Contacto from '../views/Contacto.vue'
import Post from '../views/Post.vue'
import Articulo from '../views/Articulo.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/Sobremi',
    name: 'Sobremi',
    component: Sobremi
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/Post/:enter',
    component: Post,
    children: [{
      path: '/Articulo',
      name: 'Articulo',
      component: Articulo
    }]
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
