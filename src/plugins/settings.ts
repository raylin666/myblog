import { useSettingsStore } from '@/stores/settings'

// 应用初始化时加载通用设置
export async function initAppSettings() {
  const settingsStore = useSettingsStore()
  await settingsStore.initSettings()
}

export default {
  install: async () => {
    await initAppSettings()
  }
}