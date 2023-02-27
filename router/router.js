import Vue from "vue";
import Router from "vue-router";
//路由组件
Vue.use(Router);

//创建router实例
const router = new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../src/Home.vue"),
            meta: {
                title: "首页",
            },
        },
        {
            path: "/test",
            name: "test",
            component: () => import("../src/testIndex.vue"),
            meta: {
                title: "测试路由跳转",
            },
        },
        {
            path: "/requestDemo",
            name: "requestDemo",
            component: () => import("../src/Request.vue"),
            meta: {
                title: "测试路由跳转",
            },
        }, {
            path: "/login",
            name: "login",
            component: () => import("../src/plan1/login.vue"),
            meta: {
                title: "登录",
            },
        }, {
            path: "/me",
            name: "me",
            component: () => import("../src/plan2/me.vue"),
            meta: {
                title: "我的",
            },
        }, {
            path: "/feedback",
            name: "feedback",
            component: () => import("../src/plan3/feedback.vue"),
            meta: {
                title: "意见反馈",
            },
        },
    ],
});

export default router;
