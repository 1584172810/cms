export interface IAccount {
  url: string
  items?: any
}
export interface ILoginResult {
  length: number
  token: string
  id: number
  name: string
  items?: any
}
export interface IDataType<T = any> {
  code: number
  data: T
}
