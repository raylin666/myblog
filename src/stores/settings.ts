import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCommonSettings } from '@/api/common'
import type { CommonSettings } from '@/types/common'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<CommonSettings | null>(null)
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // 获取通用设置
  const fetchCommonSettings = async () => {
    if (loading.value) return
    
    loading.value = true
    error.value = null
    
    try {
      const response = await getCommonSettings()
      settings.value = response.data || {}
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch settings'
      console.error('Failed to fetch common settings:', err)
    } finally {
      loading.value = false
    }
  }

  // 初始化设置（只在设置不存在时获取）
  const initSettings = async () => {
    if (!settings.value) {
      await fetchCommonSettings()
    }
  }

  return {
    settings,
    loading,
    error,
    fetchCommonSettings,
    initSettings
  }
})