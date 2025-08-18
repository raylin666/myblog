<template>
  <a-layout-sider
    :theme="themeStore.theme"
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
      <RouterLink to="/">
        <a-menu-item key="l_1">
          <IconBookmark /> 首页
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/article">
        <a-menu-item key="l_2">
          <IconApps /> 分类
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/">
        <a-menu-item key="l_3">
          <IconUser /> 作者
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/article">
        <a-menu-item key="l_4">
          <IconBookmark /> 导航
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/">
        <a-menu-item key="l_5">
          <IconApps /> 分类
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/article">
        <a-menu-item key="l_6">
          <IconUser /> 作者
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/">
        <a-menu-item key="l_7">
          <IconBookmark /> 导航
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/article">
        <a-menu-item key="l_8">
          <IconApps /> 分类
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/">
        <a-menu-item key="l_9">
          <IconUser /> 作者
        </a-menu-item>
      </RouterLink>
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
          <icon-moon-fill v-if="themeStore.theme === 'light'" />
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
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const musicPlaying = ref(false)

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

.sider-head { height: 40px; border-radius: 8px; background: transparent; color: var(--text-color-primary);}

.sider-head :deep(.arco-btn) {
  color: var(--text-color-primary);
}

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

.icon-item:hover {
  background: var(--bg-color-secondary);
  transform: scale(1.1);
}
</style>


