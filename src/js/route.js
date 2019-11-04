import Vue from 'vue'
// 导入 vue-router，并使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from "../pages/index.vue"
import introduction from "../pages/introduction.vue"
import serviceitem from "../pages/serviceitem.vue"
import currentaccount from "../pages/currentaccount.vue"
import contactus from "../pages/contactus.vue"
// 创建路由实例
const routes = [
    {
        path: "/",
        component: index,
        meta:
        {
            title: '首页'
        }
    },
    {
        path: "/introduction",
        component: introduction,
        meta: {
            title: '公司简介'
        }
    },
    {
        path: "/serviceitem",
        component: serviceitem,
        meta: {
            title: '服务项目'
        }
    },
    {
        path: "/currentaccount",
        component: currentaccount,
        meta: {
            title: '经营项目'
        }
    },
    {
        path: "/contactus",
        component: contactus,
        meta: {
            title: '联系我们'
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