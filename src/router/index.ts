import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/index.vue'
import ArticleInfo from '@/views/article/info.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'articleInfo',
        path: '/article/:id',
        component: ArticleInfo
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})