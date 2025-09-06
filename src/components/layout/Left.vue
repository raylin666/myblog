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
    <a-menu v-model:selectedKeys="menusStore.selectedKeys" mode="vertical">
      <a-menu-item v-for="menu in menusStore.menus.list" :key="menusStore.getMenuKeyName(menu.id)">
        <div v-if="menu.position === 'left'">
          <RouterLink v-if="menu.routeName" :to="{ name: menu.routeName }">
            <icon-home /> {{ menu.name }}
          </RouterLink>
          <a v-else-if="menu.hrefUrl" :href="menu.hrefUrl" :target="menu.target ?? '_self'">
            <icon-home /> {{ menu.name }}
          </a>
        </div>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts" name="Left">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useSettingsStore } from '@/stores/settings'
import { useWatch } from '@/hooks/useWatch'
import { useRoute } from 'vue-router'
import { useMenusStore } from '@/stores/menus'

const themeStore = useThemeStore()

const menusStore = useMenusStore()

const settingsStore = useSettingsStore()

const logoUrl = ref(settingsStore.settings.logoUrl)

const route = useRoute()

function handlerLogo()
{
  menusStore.setSelectedByKey('menu_1')
}

const watch = useWatch()

// 根据路由变化更新选中菜单
watch.simple(
  () => route.name,
  (newRouteName) => {
    if (newRouteName === 'home') {
      menusStore.setSelectedByKey('menu_1')
    } else if (newRouteName === 'about') {
      menusStore.setSelectedByKey('menu_2')
    }
  },
  true
)

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