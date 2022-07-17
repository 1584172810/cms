import SCCRequest from '../axios_demo'

import { IAccount, IDataType, ILoginResult } from './types'
enum loginApi {
  AccountLogin = '/lejuClient/login/doLogin',
  getUserInfo = '/lejuClient/login/getMemberInfo',
  UserMenus = '/lejuClient/productCategory/findAllCategory',
  menuKind = '/lejuAdmin/category/getAllCategory'
}

//登录请求
export function accountLoginRequest(account: IAccount) {
  return SCCRequest.post<IDataType<ILoginResult>>({
    url: loginApi.AccountLogin,
    data: account,
    interceptors: {}
  })
}
//获取用户信息
export function getUserInfo() {
  return SCCRequest.get<IDataType<ILoginResult>>({
    url: loginApi.getUserInfo,
    data: '',
    interceptors: {}
  })
}
//获取用户菜单
export function getUserMenus() {
  return SCCRequest.get<IDataType<ILoginResult>>({
    url: loginApi.UserMenus,
    data: '',
    interceptors: {}
  })
}
//添加用户权限
export function menuKind() {
  return SCCRequest.get<IDataType<ILoginResult>>({
    url: loginApi.menuKind,
    data: '',
    interceptors: {}
  })
}
