import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { authTokenService } from './auth-token.service'

export const authService = {
  async main(type: 'login' | 'register', data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/${type}`,
      data,
    )

    if (response.data.accessToken) {
      authTokenService.saveTokenStorage(response.data.accessToken)
    }

    return response
  },
  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      '/auth/login/access-token',
    )

    if (response.data.accessToken) {
      authTokenService.saveTokenStorage(response.data.accessToken)
    }

    return response
  },
  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout')

    if (response.data) {
      authTokenService.removeFromStorage()
    }

    return response
  },
}