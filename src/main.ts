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
import { initAppMenus } from '@/plugins/menus'
import nProgress from '@/plugins/nprogress'

// 创建 Vue 应用实例
const app = createApp(App)

// 初始化路由
app.use(router)

// 初始化 Pinia
app.use(createPinia())

// 初始化应用设置
initAppSettings()

// 初始化应用菜单栏
initAppMenus()

// 初始化加载进度条插件
app.use(nProgress, router)

// 初始化 Arco Design Vue
app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
    componentPrefix: 'a'
})

// 初始化 Arco Design Vue Icon
app.use(ArcoVueIcon)

// 初始化国际化插件
app.use(i18n)

// 挂载 Vue 应用
app.mount('#app')