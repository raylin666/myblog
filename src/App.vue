<template>
  <a-layout class="layout">
    <!-- 左侧折叠导航（可展开/折叠，默认折叠） -->
    <Left />

    <!-- 中间主内容区 + 顶部导航/面包屑等 -->
    <a-layout class="content">
      
    </a-layout>

    <!-- 右侧始终折叠且不可展开的侧栏 -->
    <Right />
  </a-layout>
</template>

<script setup lang="ts" name="App">
import Left from '@/components/layout/Left.vue'
import Right from '@/components/layout/Right.vue'
</script>

<style scoped>
.layout {
  height: 100vh;
  background: transparent;
  border: none;
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

.content {
  margin: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
</style>
