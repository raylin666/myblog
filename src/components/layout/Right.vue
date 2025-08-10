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
      <a-menu-item key="r_4">
        <IconBookmark />
        导航
      </a-menu-item>
      <a-menu-item key="r_5">
        <IconApps />
        分类
      </a-menu-item>
      <a-menu-item key="r_6">
        <IconUser />
        作者
      </a-menu-item>
    </a-menu>

    <!-- 底部图标区域 -->
    <div class="bottom-icons">
      <a-tooltip content="音乐播放" position="right">
        <div class="icon-item" @click="toggleMusic">
          <icon-music />
        </div>
      </a-tooltip>
      <a-tooltip content="切换主题" position="right">
        <div class="icon-item" @click="toggleTheme">
          <icon-moon-fill v-if="darkTheme" />
          <icon-sun-fill v-else />
        </div>
      </a-tooltip>
    </div>
  </a-layout-sider>
  
</template>

<script setup lang="ts" name="Right">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { 
  IconBookmark, 
  IconApps, 
  IconUser,
  IconMusic,
  IconMoonFill,
  IconSunFill
} from '@arco-design/web-vue/es/icon'

const darkTheme = ref(false)
const musicPlaying = ref(false)

const toggleTheme = () => {
  darkTheme.value = !darkTheme.value
  // 这里可以添加主题切换逻辑
}

const toggleMusic = () => {
  musicPlaying.value = !musicPlaying.value
  // 这里可以添加音乐播放逻辑
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
  color: var(--color-text-1);
  background: rgba(0, 0, 0, 0.04);
}

.icon-item:hover {
  background: rgba(0, 0, 0, 0.08);
  transform: scale(1.1);
}
</style>


