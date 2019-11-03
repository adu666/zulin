import Vue from 'vue'
// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from "../pages/index.vue"
// 创建路由实例
const routes = [
    {
        path: "/",
        component: index,
        meta:
        {
            title: '首页'
        }
    }
]
const router = new VueRouter({
    routes,
    linkActiveClass: 'u-link--Active'
})
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    window.scrollTo(0, 0)
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router