import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import category from './views/Category.vue'
import productPage from './views/ProductPage.vue'
import BuyCar from './views/BuyCar.vue'
import login from './views/login.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:category
    },
    {
      path:'/product/:id',
      name:'productPage',
      component:productPage
    },
    {
      path:'/buyCar',
      name:'buyCar',
      component:BuyCar
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
    
  ]
})
