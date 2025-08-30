<template>
  <a-layout-sider
    :theme="themeStore.theme"
    :width="140"
    :collapsed="true"
  >
    <div class="brand">
      <img :src="logoUrl" class="avatar-img" alt="avatar" />
    </div>
    <a-menu :defaultSelectedKeys="['l_1']" mode="vertical">
      <RouterLink to="/">
        <a-menu-item key="l_1">
          <IconBookmark /> H O M E
        </a-menu-item>
      </RouterLink>
      <RouterLink to="/article">
        <a-menu-item key="l_2">
          <IconApps /> 关于作者
        </a-menu-item>
      </RouterLink>
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
