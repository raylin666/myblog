<template>
  <a-layout-sider
    :theme="themeStore.theme"
    :width="220"
    :collapsed="true"
  >
    <a-menu v-model:selectedKeys="menusStore.selectedKeys" mode="vertical">
      <a-menu-item v-for="menu in menusStore.menus.list" :key="menusStore.getMenuKeyName(menu.id)">
        <div v-if="menu.position === 'right'">
          <RouterLink v-if="menu.routeName" :to="{ name: menu.routeName }">
            <icon-home /> {{ menu.name }}
          </RouterLink>
          <a v-else-if="menu.hrefUrl" :href="menu.hrefUrl" :target="menu.target ?? '_self'">
            <icon-home /> {{ menu.name }}
          </a>
        </div>
      </a-menu-item>
    </a-menu>

    <!-- 底部图标区域 -->
    <div class="bottom-icons">
      <a-tooltip :content="isFullscreen ? '退出全屏' : '全屏模式'" position="left">
        <div class="icon-item">
          <a-button
            type="text"
            shape="circle"
            size="small"
            @click="toggleFullscreen"
          >
            <component :is="isFullscreen ? 'IconFullscreenExit' : 'IconFullscreen'" />
          </a-button>
        </div>
      </a-tooltip>
      <a-tooltip :content="themeStore.theme === 'light' ? '经典亮白' : '酷黑模式'" position="right">
        <div class="icon-item" @click="toggleTheme">
          <icon-moon-fill v-if="themeStore.theme === 'dark'" />
          <icon-sun-fill v-else />
        </div>
      </a-tooltip>
    </div>
  </a-layout-sider>
  
</template>

<script setup lang="ts" name="Right">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useMenusStore } from '@/stores/menus'

const themeStore = useThemeStore()
const menusStore = useMenusStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}

// 右侧侧栏：保持折叠且不可展开，不提供 collapsible/trigger
const isFullscreen = ref<boolean>(false)

const checkFullscreen = () => {
  const doc: any = document
  isFullscreen.value = !!(
    doc.fullscreenElement ||
    doc.webkitFullscreenElement ||
    doc.mozFullScreenElement ||
    doc.msFullscreenElement
  )
}

const requestFullscreen = async () => {
  const el: any = document.documentElement
  if (el.requestFullscreen) return el.requestFullscreen()
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen()
  if (el.mozRequestFullScreen) return el.mozRequestFullScreen()
  if (el.msRequestFullscreen) return el.msRequestFullscreen()
}

const exitFullscreen = async () => {
  const doc: any = document
  if (doc.exitFullscreen) return doc.exitFullscreen()
  if (doc.webkitExitFullscreen) return doc.webkitExitFullscreen()
  if (doc.mozCancelFullScreen) return doc.mozCancelFullScreen()
  if (doc.msExitFullscreen) return doc.msExitFullscreen()
}

const toggleFullscreen = async () => {
  await (isFullscreen.value ? exitFullscreen() : requestFullscreen())
}

onMounted(() => {
  checkFullscreen()
  document.addEventListener('fullscreenchange', checkFullscreen)
  document.addEventListener('webkitfullscreenchange', checkFullscreen as any)
  document.addEventListener('mozfullscreenchange', checkFullscreen as any)
  document.addEventListener('MSFullscreenChange', checkFullscreen as any)
})

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', checkFullscreen)
  document.removeEventListener('webkitfullscreenchange', checkFullscreen as any)
  document.removeEventListener('mozfullscreenchange', checkFullscreen as any)
  document.removeEventListener('MSFullscreenChange', checkFullscreen as any)
})
</script>

<style scoped>
.bottom-icons {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.icon-item {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-color-primary);
  background: var(--bg-color-tertiary);
}

.icon-item :deep(.arco-btn) {
  color: var(--text-color-primary);
}

.icon-item:hover :deep(.arco-btn) {
  color: white;
}

.icon-item:hover :deep(.arco-btn):hover {
  color: white;
  background-color: var(--primary-color);
}

.icon-item:hover {
  background: var(--primary-color);
  transform: scale(1.1);
  color: white;
}
</style>