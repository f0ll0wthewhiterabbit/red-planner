import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

import { authTokenService } from './auth-token.service'

class AuthService {
  private BASE_URL = '/auth'

  async main(type: 'login' | 'register', data: IAuthForm) {
    const response = await axiosClassic.post<IAuthResponse>(`${this.BASE_URL}/${type}`, data)

    if (response.data.accessToken) {
      authTokenService.saveTokenStorage(response.data.accessToken)
    }

    return response
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(`${this.BASE_URL}/login/access-token`)

    if (response.data.accessToken) {
      authTokenService.saveTokenStorage(response.data.accessToken)
    }

    return response
  }

  async logout() {
    const response = await axiosClassic.post<boolean>(`${this.BASE_URL}/logout`)

    if (response.data) {
      authTokenService.removeFromStorage()
    }

    return response
  }
}

export const authService = new AuthService()
