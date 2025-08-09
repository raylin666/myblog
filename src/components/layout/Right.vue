<template>
  <a-layout-sider
    theme="light"
    :width="220"
    :collapsed="true"
  >
    <div class="toolbar sider-head">
      <a-tooltip :content="isFullscreen ? '退出全屏' : '全屏'" position="left">
        <a-button
          type="text"
          shape="circle"
          size="small"
          @click="toggleFullscreen"
        >
          <component :is="isFullscreen ? 'IconFullscreenExit' : 'IconFullscreen'" />
        </a-button>
      </a-tooltip>
    </div>
    <a-menu :defaultSelectedKeys="['r_1']" mode="vertical">
      <a-menu-item key="r_1">
        <IconBookmark />
        导航
      </a-menu-item>
      <a-menu-item key="r_2">
        <IconApps />
        分类
      </a-menu-item>
      <a-menu-item key="r_3">
        <IconUser />
        作者
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
  
</template>

<script setup lang="ts" name="Right">
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

:deep(.arco-layout-sider) {
  background: #ffffff;
  border-left: 1px solid #eeeeee;
  padding-top: 16px;
}

:deep(.arco-menu) {
  background: transparent;
}

:deep(.arco-menu-item) {
  color: var(--color-text-2);
}

:deep(.arco-menu-item.arco-menu-selected),
:deep(.arco-menu-item:hover) {
  color: #111111;
  background: rgba(0,0,0,0.06);
  border-radius: 8px;
}

.sider-head { height: 40px; border-radius: 8px; background: transparent; }
</style>


