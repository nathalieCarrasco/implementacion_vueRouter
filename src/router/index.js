import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../views/Post.vue'
import NotFound from '../views/NotFound.vue'
import Administrador from '../views/Administrador.vue'
import Simple from '../views/Simple.vue'
import Avanzado from '../views/Avanzado.vue'
import DireccionEquivocada from '../views/DireccionEquivocada.vue'

Vue.use(VueRouter)

// Se modifica  a las rutas el metodo de carga Lazy Loading parte 2 desafio
const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import(/* webpackChunkName: 'inicio'  */ '../views/inicio.vue')
  },
  {
    path: '/Sobremi',
    name: 'Sobremi',
    component: () => import(/* webpackChunkName: 'sobremi'  */ '../views/Sobremi.vue'),
    alias: '/Acerca'
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: 'contacto'  */ '../views/Contacto.vue'),
    alias: '/Contactame'
  },
  {
    path: '/Post/:enter',
    component: Post,
    children: [{
      path: '/Articulo',
      name: 'Articulo',
      component: () => import(/* webpackChunkName: 'articulo'  */ '../views/Articulo.vue')
    }]
  },
  {
    path: '*',
    component: NotFound
  },
  {// agregar administrador , simple y Avanzado
    path: '/Administrador',
    component: Administrador,
    children: [{
      path: '/Administrador/Simple',
      component: Simple,
      name: 'simple'
    },
    {
      path: '/Administrador/Avanzado',
      component: Avanzado,
      name: 'avanzado'

    },
    {
      path: '/Administrador/*',
      component: DireccionEquivocada,
      name: 'DireccionEquivocada'
    }
  ]

  },
  { //redirecciones del proyecto
    path: '/home',
    redirect: '/'
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/portada',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router