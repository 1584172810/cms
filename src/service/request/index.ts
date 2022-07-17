import axios from 'axios'
import type { AxiosInstance } from 'axios'

import type { SCCRequestInterceptors, SCCRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class SCCRequest {
  instance: AxiosInstance
  interceptors?: SCCRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean
  constructor(config: SCCRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载....',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: SCCRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // if (config.interceptors.requestInterceptor) {
      //   config = config.interceptors.requestInterceptor(config)
      // }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          this.showLoading = true
        })
        .catch((err) => {
          reject(err)
          console.log(err)
        })
    })
  }
  get<T>(config: SCCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: SCCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: SCCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  path<T>(config: SCCRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATH' })
  }
}
export default SCCRequest
