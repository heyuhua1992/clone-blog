// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Router from './vue-router/vue-router'
import '@/assets/css/container.css'
import '@/assets/css/header.css'
import '@/assets/css/article.css'
import '@/assets/css/side.css'
import '@/assets/css/blog.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
