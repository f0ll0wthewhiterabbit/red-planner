import Cookies from 'js-cookie'

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export const authTokenService = {
  getAccessToken() {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

    return accessToken || null
  },
  saveTokenStorage(accessToken: string) {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
      domain: 'localhost',
      sameSite: 'strict',
      expires: 1,
    })
  },
  removeFromStorage() {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
  },
}
