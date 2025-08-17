import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'light' | 'dark'>('light')
  
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.value) // 确保主题变化时立即保存
    loadThemeCSS()
  }
  
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
    localStorage.setItem('theme', theme.value) // 确保主题变化时立即保存
    loadThemeCSS()
  }
  
  function loadThemeCSS() {
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
    link.href = `/src/assets/styles/theme/${theme.value}.css`
    link.setAttribute('data-theme-link', 'true')
    
    // 添加加载成功和失败的处理
    link.onload = () => {
    }
    
    link.onerror = () => {
      console.error(`Failed to load theme ${theme.value}`)
      // 添加降级处理，使用内联样式确保主题生效
      applyThemeStyleFallback()
    }
    
    head.appendChild(link)
  }
  
  // 降级处理方案，直接应用基础主题样式
  function applyThemeStyleFallback() {
    let style = document.getElementById('theme-fallback-style')
    if (!style) {
      style = document.createElement('style')
      style.id = 'theme-fallback-style'
      document.head.appendChild(style)
    }
    
    // 根据主题应用基础样式
    if (theme.value === 'dark') {
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
  }
  
  // 初始化主题，考虑系统偏好
  function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
    } else if (systemPrefersDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    })
  }
  
  // 持久化存储 - 保留watch以确保任何途径的theme变更都能被存储
  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
  })
  
  return {
    theme,
    toggleTheme,
    setTheme,
    loadThemeCSS,
    applyThemeStyleFallback,
    initTheme
  }
})