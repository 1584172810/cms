import type { AxiosRequestConfig } from 'axios'

export interface SCCRequestInterceptors {
  requestInterceptor?: (config: any) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface SCCRequestConfig extends AxiosRequestConfig {
  interceptors: SCCRequestInterceptors
  showLoading?: boolean
}
