import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Canvas from "@/views/CanvasEnter/index.vue";

// @ts-ignore
// @ts-ignore
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {hideAside: true},
            component: () => import('@/views/NotFoundView.vue')
        },
        {
            path: '/canvas',
            name: 'Canvas',
            component: Canvas
        },
        {
            path: '/canvas/:id',
            name: 'canvas',
            meta: {hideAside: true},
            component: () => import('../views/CanvasAll/CanvasLayout.vue'),
            children: [
                {
                    // 当 /user/:id/profile 匹配成功
                    // UserProfile 将被渲染到 User 的 <router-view> 内部
                    path: '',
                    name: 'canvasMain',
                    component: () => import('../views/CanvasAll/CanvasMain.vue'),
                },
                {
                    path: 'source',
                    name: 'canvas01source',
                    component: () => import('../views/CanvasAll/com/Canvas01/Canvas01source.vue'),
                },
            ],
        },
        {
            path: '/icon',
            name: 'icon',
            children: [
                {
                    path: 'iconShowList',
                    name: 'iconShowList',
                    component: () => import('@/views/iconAll/iconShowList.vue')
                },
                {
                    path: 'iconSelect',
                    name: 'iconSelect',
                    component: () => import('@/views/iconAll/iconSelect.vue')
                }
            ]
        }
    ]
})

export default router
