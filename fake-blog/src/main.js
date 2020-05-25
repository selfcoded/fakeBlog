import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'

Vue.config.productionTip = false


import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icofont.min.css'
import http from './axios';
import store from '../store'

Vue.use(Element)
Vue.prototype.$http=http

new Vue({
  router,
  render: h => h(App),store
}).$mount('#app')
