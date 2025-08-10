import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/index.vue'

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})