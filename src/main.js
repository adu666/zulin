import Vue from 'vue'
import App from './App.vue'
import router from '../src/js/route'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/style/home.css'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
 Vue.use(animated)
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
