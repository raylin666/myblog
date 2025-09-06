import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { getMenus } from '@/api/common'
import type { Menus } from '@/types/common'

export const useMenusStore = defineStore('menus', () => {
  const isRequest = ref(false)

  const menus = reactive<Menus>({
    list: [
      {
        id: 1,
        name: '首页',
        iconName: 'icon-home',
        routeName: 'home',
        position: 'left'
      },
    ]
  })

  // 获取导航菜单栏
  const fetchMenus = async () => {
    try {
      const response = await getMenus()
      if (!response.data) return
      Object.assign(menus, response.data)
      isRequest.value = true
    } catch (err) {
      console.error('获取导航菜单栏接口失败:', err)
    } finally {
    }
  }

  // 初始化导航菜单（只在设置不存在时获取）
  const initMenus = async () => {
    if (isRequest.value === false) {
      await fetchMenus()
    }
  }

  return {
    menus,
    fetchMenus,
    initMenus
  }
})