/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { MFADataResponse, TokenWithDeviceCookieResponseV3 } from '@accelbyte/sdk-iam'
import { generateMock } from '@anatine/zod-mock'
import { http, HttpResponse, HttpResponseResolver } from 'msw'
import { INTERNAL_SERVICES } from '../constants/paths'
import tokenExchange from '../test/fixtures/authorization/token-exchange.json'
import { coreConfig, GET_USER_ME_PATH, TOKEN_WITH_DEVICE_COOKIE_RESPONSE_V3, USER_RESPONSE_V3 } from './constants'
import { generateExpireSetCookie, generateSetCookie } from './utils'

const getUsersMe_v3: HttpResponseResolver = () => {
  return HttpResponse.json(USER_RESPONSE_V3)
}
const error401 = () => HttpResponse.json({ error: 'unathorized access' }, { status: 401 })

export const getUserMeHandler = http.get(`${coreConfig.baseURL}${GET_USER_ME_PATH}`, getUsersMe_v3)
export const getUserMeHandlerWithAuth = http.get(`${coreConfig.baseURL}${GET_USER_ME_PATH}`, ({ request, cookies }) => {
  const authHeader = request.headers.get('Authorization')
  const accessToken = authHeader?.replace('Bearer', '')?.trim()

  if (!cookies.access_token && !accessToken) {
    return error401()
  }

  return HttpResponse.json(USER_RESPONSE_V3)
})
export const getCustomBaseURLUserMeHandler = (baseURL: string) => http.get(`${baseURL}${GET_USER_ME_PATH}`, getUsersMe_v3)
export const getCustomUserMeHandler = http.get(`${coreConfig.baseURL}/iam-service/v3/public/users/me`, getUsersMe_v3)
export const getInternalUserMeHandler = http.get(`http://${INTERNAL_SERVICES['/iam']}/iam-service/v3/public/users/me`, getUsersMe_v3)
export const getInvalidUserMeHandler = http.get(`${coreConfig.baseURL}${GET_USER_ME_PATH}`, () => HttpResponse.json({ sdk: 'test' }))
export const get401UserMeProfileStatusHandler = http.get(`${coreConfig.baseURL}/iam/v3/public/users/me/profileStatus`, error401)

/**
 * Assumed refresh_token is just string
 */
const postOauthToken = () => HttpResponse.json(TOKEN_WITH_DEVICE_COOKIE_RESPONSE_V3)
export const postOauthTokenHandler = http.post(`${coreConfig.baseURL}/iam/v3/oauth/token`, postOauthToken)
export const post401OauthTokenHandler = http.post(`${coreConfig.baseURL}/iam/v3/oauth/token`, error401)
/**
 * Status:
 *  - 200: TokenWithDeviceCookieResponseV3
 *  - 202: LoginQueueTicketResponse
 */
export const postOauthTokenV4Handler = http.post(`${coreConfig.baseURL}/iam/v4/oauth/token`, postOauthToken)

export const customIAMPostTokenHandler = http.post(`${coreConfig.baseURL}/iam/v3/oauth/token`, async ({ request }) => {
  const data = await request.formData()
  const code = data.get('code')
  const grantType = data.get('grant_type')
  const refreshToken = data.get('refresh_token')
  const clientId = data.get('client_id')

  if (grantType === 'password') {
    const response = TOKEN_WITH_DEVICE_COOKIE_RESPONSE_V3

    return HttpResponse.json(response, {
      // @ts-ignore
      headers: {
        'Set-Cookie': generateSetCookie(response)
      }
    })
  }

  if (grantType === 'refresh_token') {
    if (!refreshToken && !clientId) {
      return HttpResponse.json({ error: 'token expired' }, { status: 401 })
    }

    const newToken = generateMock(TokenWithDeviceCookieResponseV3)
    const response = {
      ...TOKEN_WITH_DEVICE_COOKIE_RESPONSE_V3,
      access_token: `${newToken.access_token}-refreshed`,
      refresh_token: `${newToken.refresh_token}-refreshed`
    }

    return HttpResponse.json(response, {
      // @ts-ignore
      headers: {
        'Set-Cookie': generateSetCookie(response)
      }
    })
  }

  if (code === 'test-code-mfa') {
    // Response 401 for 2FA.
    const response: MFADataResponse = {
      mfa_token: 'test-mfa-token',
      factors: ['email'],
      default_factor: 'email'
    }

    return HttpResponse.json(response, { status: 401 })
  }

  if (code === 'test-code-refresh') {
    const json = {
      ...tokenExchange,
      access_token: 'test-access-token-refresh',
      refresh_token: 'test-refresh-token-refresh'
    }
    return HttpResponse.json(json, {
      // @ts-ignore
      headers: {
        'Set-Cookie': generateSetCookie(json)
      }
    })
  }

  return HttpResponse.json(tokenExchange)
})

export const logoutHandler = http.post(`${coreConfig.baseURL}/iam/v3/logout`, () => {
  return HttpResponse.json(null, {
    status: 200,
    // @ts-ignore
    headers: {
      'Set-Cookie': generateExpireSetCookie()
    }
  })
})

export const iamHandlers = [
  getUserMeHandler,
  getCustomUserMeHandler,
  getInternalUserMeHandler,
  postOauthTokenHandler,
  postOauthTokenV4Handler
]
