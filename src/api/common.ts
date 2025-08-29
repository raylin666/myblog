import axios from 'axios'
import type { CommonSettingsResponse } from './types/common'

export function getCommonSettings() {
  return axios.get<CommonSettingsResponse>('/common/settings')
}