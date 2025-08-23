<template>
  <a-layout class="layout">
    <!-- 左侧始终折叠且不可展开的侧栏 -->
    <Left />

    <!-- 中间主内容区 + 顶部导航/面包屑等 -->
    <Content />

    <!-- 右侧始终折叠且不可展开的侧栏 -->
    <Right />
  </a-layout>
</template>

<script setup lang="ts" name="App">
import { Left, Content, Right } from '@/components'
import { useThemeStore } from '@/store/themeStore'

// 初始化主题
useThemeStore().initTheme()
</script>

<style scoped>
.layout {
  height: 100vh;
}

.layout :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
.layout :deep(.arco-layout-sider-light) {
  box-shadow: 0.5px solid black;
}
.layout :deep(.arco-layout-sider-light) .logo{
  background: var(--color-fill-2);
}
</style>