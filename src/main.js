import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './components/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

const app = new Vue({
  el: '#app',
  router: router,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    
  },
  render (h) {
    return h(App)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
