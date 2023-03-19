import { defineStore } from 'pinia'
import { userType } from './types'
import { refreshTokenApi, RefreshTokenResult, UserResult, getLogin } from '@/api/user'
import { setToken } from '@/utils/auth'

export const useUserStore = defineStore({
  id: 'user',
  state: (): userType => ({
    verifyCode: '',
    currentPage: 0
  }),
  actions: {
    /** 登录 */
    async loginByUsername(data: any) {
      return new Promise<UserResult>((resolve, reject) => {
        getLogin(data)
          .then((res: any) => {
            if (res) {
              setToken(res.data)
              resolve(res)
            }
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    } /** 刷新`token` */,

    async handRefreshToken(data: any) {
      return new Promise<RefreshTokenResult>((resolve, reject) => {
        refreshTokenApi(data)
          .then((res) => {
            if (res) {
              setToken(res.data)
              resolve(res)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
})
