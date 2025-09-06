import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { getSettings } from '@/api/common'
import type { Settings } from '@/types/common'
import iconUrl from '/public/icon.png'
import avatarUrl from 'assets/tavatar.png'
import topAvatarUrl from 'assets/tavatar.png'
import backgroundImage1 from 'assets/background/1.jpeg'
import backgroundImage2 from 'assets/background/2.jpeg'
import backgroundImage3 from 'assets/background/3.jpeg'

export const useSettingsStore = defineStore('settings', () => {
  const isRequest = ref(false)

  const settings = reactive<Settings>({
    iconUrl: iconUrl,
    logoUrl: avatarUrl,
    authorName: 'KAKA',
    authorDescription: '专注于后端开发, 熟悉各类服务接口',
    avatarUrl: avatarUrl,
    topAvatarUrl: topAvatarUrl,
    siteTitle: '', // 网站标题, 这里不能设置默认值, 不然打字效果会出现混合展示
    coverUrls: [
      backgroundImage1,
      backgroundImage2,
      backgroundImage3,
    ],
    articleCount: 0,
    articleCommentCount: 0,
    articleLikeCount: 0,
  })

  // 获取设置
  const fetchSettings = async () => {
    try {
      const response = await getSettings()
      if (!response.data) return
      Object.assign(settings, response.data)
      isRequest.value = true
    } catch (err) {
      console.error('获取配置信息接口失败:', err)
    } finally {
    }
  }

  // 初始化设置（只在设置不存在时获取）
  const initSettings = async () => {
    if (isRequest.value === false) {
      await fetchSettings()
    }
  }

  return {
    settings,
    fetchSettings,
    initSettings
  }
})