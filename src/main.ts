import { createApp } from 'vue'
import '@arco-design/web-vue/dist/arco.css'
import 'assets/css/global.css'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import App from './App.vue'
import i18n from './locale'
import { router } from '@/router'

const app = createApp(App)

app.use(router)

app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称, Arco Design UI 默认使用的是 a 前缀
    componentPrefix: 'a'
})

app.use(ArcoVueIcon)

app.use(i18n)

app.mount('#app')
