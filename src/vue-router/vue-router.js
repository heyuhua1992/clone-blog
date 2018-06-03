import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: resolve => require(['@/components/Index'], resolve),
    name: 'index',
    hidden: true
  },
  {
    path: '/blog',
    name: 'Blog',
    component: resolve => require(['@/views/Blog'], resolve)
  }
]
export default new VueRouter({
  mode: 'history',
  routes: routes
})
