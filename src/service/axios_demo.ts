import SCCRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const sccRequest = new SCCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCatch('token')
      config.headers.token = token
      console.log('请求成功的拦截')

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('返回成功的拦截')

      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default sccRequest
