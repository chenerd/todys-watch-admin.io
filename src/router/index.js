import { createRouter, createWebHistory } from 'vue-router'
const router=[
    {
        name: 'home',
        path: '/',
        meta: {
            title: '首页',
            icon: 'HomeFilled'
        }, 
        children: [
            {
                name: 'home',
                path: '/',
                meta: {
                    title: '首页',
                    icon: 'HomeFilled'
                },
                component: () => import('@/views/home/Home.vue')
            },
            {
                name: 'login',
                path: '/',
                meta: {
                    title: '登录',
                    icon: 'UserFilled'
                },
                component: () => import('@/views/Login.vue')
            },
            
        ]
    }
];
const router1 = createRouter({
  history: createWebHistory(),
  routes: router,
})

export default router1;