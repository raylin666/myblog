<template>
  <a-layout-sider
    :theme="themeStore.theme"
    :width="140"
    collapsible
    :collapsed="collapsed"
    @collapse="onCollapse"
  >
    <div class="brand">
      <img v-if="!collapsed" :src="logoUrl" class="logo-img" alt="logo" />
      <img v-else :src="avatarUrl" class="avatar-img" alt="avatar" />
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
import { ref, watch } from 'vue'
import { useThemeStore } from '@/store/themeStore'
import logoUrl from 'assets/logo.png'
import avatarUrl from 'assets/avatar.png'
// 防止某些静态分析未识别到模板中的使用
void logoUrl; void avatarUrl;

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: true,
  },
})

const collapsed = ref<boolean>(props.collapsed)

watch(
  () => props.collapsed,
  (value) => {
    collapsed.value = value
  }
)

const onCollapse = (value: boolean) => {
  collapsed.value = value
}

const themeStore = useThemeStore()
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