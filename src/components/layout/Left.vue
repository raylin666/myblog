<template>
  <a-layout-sider
    theme="light"
    :width="220"
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
  </a-layout-sider>
</template>

<script setup lang="ts" name="Left">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import logoUrl from 'assets/avatar.png'
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
  height: 28px;
  object-fit: contain;
}
.avatar-img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

:deep(.arco-layout-sider) {
  background: #ffffff;
  border-right: 1px solid #eeeeee;
  padding-top: 16px;
}

:where(.sider-head) { height: 48px; margin: 8px 8px 12px; border-radius: 8px; background: transparent; }

:deep(.arco-menu) {
  background: transparent;
}

:deep(.arco-menu-item) {
  color: #333333;
}

:deep(.arco-menu-item.arco-menu-selected),
:deep(.arco-menu-item:hover) {
  color: #111111;
  background: rgba(0,0,0,0.06);
  border-radius: 8px;
}
</style>