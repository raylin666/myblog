import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/index.vue'
import Article from '@/views/article/index.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'article',
        path: '/article',
        component: Article
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})