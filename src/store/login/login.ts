import { ILoginState } from './types'
import { IRootState } from '../types'
import { Module } from 'vuex'

import router from '@/router/index'
import {
  accountLoginRequest,
  getUserInfo,
  getUserMenus
} from '@/service/login/login'
import localCatch from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: 'scc',
      userInfo: '',
      userMenus: []
    }
  },
  actions: {
    async accountLoginAction({ commit }, payLoad: any) {
      //登录请求
      const loginResult = await accountLoginRequest(payLoad)
      const token = loginResult.data.token
      if (token) {
        localCatch.setCatch('token', token)
      }

      commit('changeToken', loginResult.data.token)
      //获取用户信息

      const userInfo = await getUserInfo()

      localCatch.setCatch('userInfo', userInfo)
      commit('changeUserInfo', userInfo)

      //获取用户菜单

      const userMenus = await getUserMenus()
      localCatch.setCatch('userMenus', userMenus)
      commit('changeUserMenus', userMenus)
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCatch.getCatch('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCatch.getCatch('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCatch.getCatch('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  getters: {}
}

export default loginModule
