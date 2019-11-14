import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Element from 'element-ui'
import './styles.scss'
/* import 'lib-flexible/flexible' */
import VueRouter from 'vue-router'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')