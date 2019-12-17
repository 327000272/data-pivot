import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

//页面
import Develop from '@/pages/index'
import Results from '@/pages/Results'
import launch from '@/pages/launch'
import practice from '@/pages/practice'
import participation from '@/pages/participation'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      // {
      //   path: ':id/Develop',
      //   name: 'Develop',
      //   component: Develop,
      // },
      {
        path: '/',
        name: 'launch',
        component: launch,
      }, 
      // {
      //   path: ':id/Results',
      //   name: 'Results',
      //   component: Results,
      // }, 
      {
        path: ':id/launch',
        name: 'launch',
        component: launch,
      }, 
      // {
      //   path: ':id/practice',
      //   name: 'practice',
      //   component: practice,
      // }, 
      {
        path: ':id/participation',
        name: 'participation',
        component: participation,
      }
    ]
  }, ]
})
