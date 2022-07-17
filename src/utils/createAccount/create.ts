import SCCRequest from '@/service/axios_demo'

interface userMsg {
  username?: string
  password?: string
}
enum loginApi {
  AccountLogin = '/lejuClient/member/register'
}

export function createAccount(userMsg: userMsg) {
  return SCCRequest.post({
    url: loginApi.AccountLogin,
    data: userMsg,
    interceptors: {}
  })
}
