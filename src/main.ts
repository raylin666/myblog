import { createApp } from 'vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.css'
import 'assets/styles/global.css'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import i18n from './locale'
import { router } from '@/router'
import { createPinia } from 'pinia'
import '@/utils/request'
import { initAppSettings } from '@/plugins/settings'
import nProgress from '@/plugins/nprogress'

const app = createApp(App)

app.use(router)

const pinia = createPinia()
app.use(pinia)

// 初始化应用设置
initAppSettings()

// 初始化加载进度条插件
app.use(nProgress, router)

app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
    componentPrefix: 'a'
})

app.use(ArcoVueIcon)

app.use(i18n)

app.mount('#app')