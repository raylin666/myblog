import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetUp from 'vite-plugin-vue-setup-extend'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.cn/config/
export default defineConfig({
  // 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）
  plugins: [
    vue(),
    vueSetUp(),
    vueDevTools(),
  ],
  // 配置 `@` 访问别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('../src', import.meta.url))
      },
      {
        find: 'assets',
        replacement: fileURLToPath(new URL('../src/assets', import.meta.url))
      }
    ],
    extensions: ['.ts', '.js']
  },
  // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
  define: {
    'process.env': {}
  },
  css: {}
})