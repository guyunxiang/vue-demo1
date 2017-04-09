import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

const Info = resolve => require(['@/components/Info'], resolve)
const About = resolve => require(['@/components/About'], resolve)
const BaseInfo = resolve => require(['@/components/Baseinfo'], resolve)
const Coopeation = resolve => require(['@/components/Coopeation'], resolve)
const Account = resolve => require(['@/components/Account'], resolve)
const NotFound = resolve => require(['@/components/NotFound'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/info',
      redirect: '/info/baseinfo'
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      children: [
        { path: 'baseinfo', component: BaseInfo, meta: { title: '基础信息' } },
        { path: 'coopeation', component: Coopeation, meta: { title: '合作资料' } },
        { path: 'account', component: Account, meta: { title: '账号管理' } }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
