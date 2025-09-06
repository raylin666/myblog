import axios from 'axios'
import type { SettingsResponse } from './types/common'

export function getSettings() {
  return axios.get<SettingsResponse>('/common/settings')
}

export function getMenus() {
  return axios.get<SettingsResponse>('/common/menus')
}