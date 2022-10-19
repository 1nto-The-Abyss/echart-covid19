import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import vant from './plugin/vant'
import 'lib-flexible'
import echarts from"./plugin/echarts"
// 引入中国地图
import "../node_modules/echarts/map/js/china"
// 引入世界地图
import "../node_modules/echarts/map/js/world"

import api from "@/api/index"

Vue.prototype.$axios = Axios
Vue.prototype.$api = api

Vue.config.productionTip = false

vant()
Vue.use(echarts)

import './assets/css/common.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
