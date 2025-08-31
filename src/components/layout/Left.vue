<template>
  <a-layout-sider
    :theme="themeStore.theme"
    :width="140"
    :collapsed="true"
  >
    <div class="brand">
      <RouterLink :to="{ name: 'home' }" @click="handlerLogo"> 
        <img :src="logoUrl" class="avatar-img" alt="avatar" />
      </RouterLink>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" mode="vertical">
      <a-menu-item key="menu_1">
        <RouterLink :to="{ name: 'home' }">
          <icon-home /> H O M E
        </RouterLink>
      </a-menu-item>
      <a-menu-item key="menu_2">
        <RouterLink :to="{ name: 'home' }">
          <icon-user /> 关于作者
        </RouterLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts" name="Left">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { useSettingsStore } from '@/stores/settings'
import { useWatch } from '@/hooks/useWatch'

const themeStore = useThemeStore()

const settingsStore = useSettingsStore()

const logoUrl = ref(settingsStore.settings.logoUrl)

const selectedKeys = ref<string[]>(['menu_1'])

function handlerLogo()
{
  // 点击 Logo 时，切换到菜单一
  selectedKeys.value = ['menu_1']
}

const watch = useWatch()

// 监听网站 LOGO 图片地址
watch.simple(
  () => settingsStore.settings.logoUrl,
  (value) => {
    logoUrl.value = value
  },
  true
)
</script>

<style scoped>
.brand {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 8px 12px;
  cursor: pointer;
}
.logo-img {
  width: 100%;
  object-fit: contain;
}
.avatar-img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

:where(.sider-head) { height: 48px; margin: 8px 8px 12px; border-radius: 8px; background: transparent; }
</style>