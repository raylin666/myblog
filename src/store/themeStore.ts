import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light' as 'light' | 'dark',
  }),
  
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.loadThemeCSS()
    },
    
    setTheme(theme: 'light' | 'dark') {
      this.theme = theme
      this.loadThemeCSS()
    },
    
    
    loadThemeCSS() {
      const head = document.head
      const oldLink = document.querySelector('link[data-theme-link]')
      
      // 如果已存在主题样式链接，则移除
      if (oldLink) {
        head.removeChild(oldLink)
      }
      
      // 创建新的样式链接
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.type = 'text/css'
      // 修改为相对路径，适配生产环境
      link.href = `/src/assets/styles/theme/${this.theme}.css`
      link.setAttribute('data-theme-link', 'true')
      
      // 添加加载成功和失败的处理
      link.onload = () => {
        console.log(`Theme ${this.theme} loaded successfully`)
      }
      
      link.onerror = () => {
        console.error(`Failed to load theme ${this.theme}`)
        // 添加降级处理，使用内联样式确保主题生效
        this.applyThemeStyleFallback()
      }
      
      head.appendChild(link)
    },
    
    // 降级处理方案，直接应用基础主题样式
    applyThemeStyleFallback() {
      let style = document.getElementById('theme-fallback-style')
      if (!style) {
        style = document.createElement('style')
        style.id = 'theme-fallback-style'
        document.head.appendChild(style)
      }
      
      // 根据主题应用基础样式
      if (this.theme === 'dark') {
        style.innerHTML = `
          :root {
            --bg-color: #1a1a1a;
            --text-color: #ffffff;
            --border-color: #444444;
          }
        `
      } else {
        style.innerHTML = `
          :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --border-color: #dddddd;
          }
        `
      }
    },
    
    // 初始化主题，考虑系统偏好
    initTheme() {
      const savedTheme = localStorage.getItem('theme')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme) {
        this.setTheme(savedTheme as 'light' | 'dark')
      } else if (systemPrefersDark) {
        this.setTheme('dark')
      } else {
        this.setTheme('light')
      }
      
      // 监听系统主题变化
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light')
        }
      })
    }
  },
  
  persist: true
})