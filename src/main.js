// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import  axios from 'axios'
import './assets/iconfont/iconfont.css'
import $ from 'jquery'
import Hliquid from 'h-liquid'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
Vue.use(Hliquid)

/* eslint-disable no-new */
let app = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})

