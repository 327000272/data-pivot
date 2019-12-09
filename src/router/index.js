import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

//页面
import Develop from '@/pages/page_2'
import Results from '@/pages/page_4'
import launch from '@/pages/page_5'
import practice from '@/pages/page_6'
Vue.use(Router)

export default new Router({
	routes: [
    {
		path: '/',
		name: 'Main',
		component: Main,
		children: [{
			path: ':id/Develop',
			name: 'Develop',
			component: Develop,
		}, {
			path: '/',
			name: 'Develop',
			component: Develop,
		},{
			path: ':id/Results',
			name: 'Results',
			component: Results,
		},{
			path: ':id/launch',
			name: 'launch',
			component: launch,
		},{
			path: ':id/practice',
			name: 'practice',
			component: practice ,
		}
	]
	}]
})