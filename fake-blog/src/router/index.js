import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/',component: () => import('../views/Home.vue')},
      {path:'/users',component: () => import('../views/Users.vue')},
      {path:'/posts',component: () => import('../views/Posts.vue')}
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')
  },
  {
    path: '/edituser/:id',
    name: 'edituser',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/UserEdit.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
