import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { LayoutPlugin } from 'bootstrap-vue'

import "@/assets/nes.min.css"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import "@/assets/global.css"

Vue.use(LayoutPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
