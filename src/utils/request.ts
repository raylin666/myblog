import axios, { AxiosHeaders } from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { Message } from '@arco-design/web-vue'

export interface HttpResponse<T = unknown> {
  status: number
  statusText: string
  data: T
}

if (import.meta.env.VITE_API_BASIC_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASIC_URL
}

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO 请求配置设置, 例如携带自定义标头键、修改请求信息配置等
    if (!config.headers) {
        config.headers = new AxiosHeaders()
    }

    // 添加自定义请求头
    // config.headers.set('Authorization', 'Bearer token')

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    // TODO 这里可以对接口响应数据进行处理，例如对状态码进行判断并返回错误信息等进行操作

    return response
  },
  (error) => {
    let errorMessage = '服务接口请求失败'
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在正常范围内
      // 根据接口响应数据格式, 错误请求时会返回4个字段: code, reason, message, metadata
      const { message } = error.response.data
      errorMessage = message
    }

    Message.error({
      content: errorMessage,
      duration: 5 * 1000,
    })
    
    return Promise.reject(error)
  }
)