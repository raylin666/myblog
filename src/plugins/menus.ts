import { useMenusStore } from '@/stores/menus'

// 应用初始化时加载导航菜单栏
export async function initAppMenus() {
  const menusStore = useMenusStore()
  await menusStore.initMenus()
}

export default {
  install: async () => {
    await initAppMenus()
  }
}