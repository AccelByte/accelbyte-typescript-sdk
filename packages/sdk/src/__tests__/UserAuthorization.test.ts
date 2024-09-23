/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// @vitest-environment jsdom
import { CodeChallenge, IamOAuthClient, IamUserAuthorizationClient, UsersApi } from '@accelbyte/sdk-iam'
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { AccelByte } from '../AccelByteSDK'
import { createAuthInterceptor } from '../interceptors/AuthInterceptors'
import { coreConfig, EMAIL_AND_PASSWORD } from '../test/constants'
import { customIAMPostTokenHandler, get401UserMeProfileStatusHandler, getUserMeHandlerWithAuth, logoutHandler } from '../test/iamHandlers'
import { emptyServer } from '../test/mock'

const sdk = AccelByte.SDK({ coreConfig })

describe('IAMAuthorizationClient', () => {
  // Establish API mocking before all tests.
  beforeAll(() => {
    emptyServer.listen()
  })

  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => {
    localStorage.clear()
    document.cookie = ''
    sdk.removeToken()
    emptyServer.resetHandlers()
  })

  // Clean up after the tests are finished.
  afterAll(() => emptyServer.close())

  // @ts-ignore
  const IAM = new IamUserAuthorizationClient(sdk)

  it('should create login URL with the correct query params', async () => {
    const loginUrl = IAM.createLoginURL('/')
    const searchParams = Object.fromEntries(new URL(loginUrl).searchParams)

    expect(searchParams).toStrictEqual({
      response_type: 'code',
      client_id: coreConfig.clientId,
      redirect_uri: coreConfig.redirectURI,
      state: expect.any(String),
      code_challenge: expect.any(String),
      code_challenge_method: 'S256',
      createHeadless: 'false'
    })
  })

  it('should create login URL with the correct query params and target_auth_page', async () => {
    const loginUrl = IAM.createLoginURL('/', '/auth/invitation/hello')
    const searchParams = Object.fromEntries(new URL(loginUrl).searchParams)

    expect(searchParams).toStrictEqual({
      response_type: 'code',
      client_id: coreConfig.clientId,
      redirect_uri: coreConfig.redirectURI,
      state: expect.any(String),
      code_challenge: expect.any(String),
      code_challenge_method: 'S256',
      createHeadless: 'false',
      target_auth_page: '/auth/invitation/hello'
    })
  })

  it('should create forgot password URL with the correct query params', async () => {
    const loginUrl = IAM.createForgotPasswordURL()
    const searchParams = Object.fromEntries(new URL(loginUrl).searchParams)

    expect(searchParams).toStrictEqual({
      response_type: 'code',
      client_id: coreConfig.clientId,
      redirect_uri: coreConfig.redirectURI,
      state: expect.any(String),
      code_challenge: expect.any(String),
      code_challenge_method: 'S256',
      createHeadless: 'false',
      target_auth_page: 'forgot-password'
    })
  })

  it('should exchange token with login state from login url', async () => {
    emptyServer.use(customIAMPostTokenHandler)
    // Generate login URL, which saves the state into the local storage.
    const loginUrl = IAM.createLoginURL('/')
    const searchParams = new URL(loginUrl).searchParams

    expect(searchParams.get('state')).not.toBeNull()
    const loginState = searchParams.get('state')!

    // Exchange code, using the state we save in the local storage.
    const result = await IAM.exchangeAuthorizationCode({
      code: 'test-code',
      error: undefined,
      state: loginState
    })

    expect(result?.response?.data.access_token).toBe('test-access-token')
    expect(result?.response?.data.refresh_token).toBe('test-refresh-token')
  })

  it('should exchange token with email 2FA', async () => {
    emptyServer.use(customIAMPostTokenHandler)
    // Generate login URL, which saves the state into the local storage.
    const loginUrl = IAM.createLoginURL('/')
    const searchParams = new URL(loginUrl).searchParams

    expect(searchParams.get('state')).not.toBeNull()
    const loginState = searchParams.get('state')!

    // Exchange code, using the state we save in the local storage.
    // What we're testing here is that, we want to make sure if the API is able to process
    // if the API asks for 2FA.
    const result = await IAM.exchangeAuthorizationCode({
      code: 'test-code-mfa',
      error: undefined,
      state: loginState
    })

    expect(result?.response).toBeNull()
    expect(result?.returnPath).toBe('/')
    expect(result?.mfaData).toEqual({
      mfaToken: 'test-mfa-token',
      factors: ['email'],
      defaultFactor: 'email'
    })
  })

  it('should refresh token', async () => {
    emptyServer.use(customIAMPostTokenHandler)
    // Generate login URL, which saves the state into the local storage.
    const loginUrl = IAM.createLoginURL('/')
    const searchParams = new URL(loginUrl).searchParams

    expect(searchParams.get('state')).not.toBeNull()
    const loginState = searchParams.get('state')!

    // Exchange code, using the state we save in the local storage.
    await IAM.exchangeAuthorizationCode({
      code: 'test-code-refresh',
      error: undefined,
      state: loginState
    })

    // Now try refresh the code.
    const result = await IAM.refreshToken()

    if (typeof result === 'boolean') throw new Error(`response cannot be boolean`)

    expect(result?.access_token).toContain('-refreshed')
    expect(result?.refresh_token).toContain('-refreshed')
  })

  it('should successfully fetch and refresh token when tokens on cookie is present', async () => {
    emptyServer.use(getUserMeHandlerWithAuth, get401UserMeProfileStatusHandler, customIAMPostTokenHandler)

    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          createAuthInterceptor({
            clientId: coreConfig.clientId,
            getRefreshToken: () => 'abcsdfawefasdfasdf',
            onSessionExpired: vi.fn()
          })
        ]
      }
    })
    // @ts-ignore
    const result = await IAM.loginWithPasswordAuthorization(EMAIL_AND_PASSWORD)

    const [refreshToken, accessToken] = document.cookie.split(';')

    expect(refreshToken).toBeDefined()
    expect(accessToken).toBeDefined()

    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMeProfileStatus_v3()).rejects.toThrowError()

    const [newRefreshToken, newAccessToken] = document.cookie.split(';')

    expect(newRefreshToken).toContain('-refreshed')
    expect(newAccessToken).toContain('-refreshed')

    // @ts-ignore
    const me2 = await UsersApi(sdk).getUsersMe_v3()
    expect(me2.data).toBeDefined()
  })

  it('should clear cookie on logout and get 401 on refresh token because tokens is removed', async () => {
    emptyServer.use(getUserMeHandlerWithAuth, logoutHandler, customIAMPostTokenHandler)

    const sdk = AccelByte.SDK({ coreConfig })
    // @ts-ignore
    const result = await IAM.loginWithPasswordAuthorization(EMAIL_AND_PASSWORD)

    const [refreshToken, accessToken] = document.cookie.split(';')

    expect(refreshToken).toBeDefined()
    expect(accessToken).toBeDefined()

    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await new IamOAuthClient(sdk).logout()

    expect(document.cookie).toBe('')

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMe_v3()).rejects.toThrowError('Request failed with status code 401')
  })

  it('should successfully fetch and refresh token when setToken is called', async () => {
    emptyServer.use(getUserMeHandlerWithAuth, logoutHandler, customIAMPostTokenHandler, get401UserMeProfileStatusHandler)

    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          createAuthInterceptor({
            clientId: coreConfig.clientId,
            onGetUserSession(accessToken, refreshToken) {
              sdk.setToken({ accessToken, refreshToken })
            },
            onSessionExpired: vi.fn()
          })
        ]
      }
    })
    // @ts-ignore
    const result = await IAM.loginWithPasswordAuthorization(EMAIL_AND_PASSWORD)

    sdk.setToken({ accessToken: result.response?.data.access_token, refreshToken: result.response?.data.refresh_token })
    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMeProfileStatus_v3()).rejects.toThrowError()

    const tokens = sdk.getToken()

    expect(tokens.refreshToken).toContain('-refreshed')
    expect(tokens.accessToken).toContain('-refreshed')

    // @ts-ignore
    const me2 = await UsersApi(sdk).getUsersMe_v3()
    expect(me2.data).toBeDefined()
  })

  it('should clear tokens on logout and get 401 on refresh token because tokens is removed', async () => {
    emptyServer.use(getUserMeHandlerWithAuth, logoutHandler, customIAMPostTokenHandler)

    const sdk = AccelByte.SDK({ coreConfig })
    // @ts-ignore
    const result = await IAM.loginWithPasswordAuthorization(EMAIL_AND_PASSWORD)

    sdk.setToken({ accessToken: result.response?.data.access_token, refreshToken: result.response?.data.refresh_token })

    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await new IamOAuthClient(sdk).logout()

    const tokens = sdk.getToken()

    expect(document.cookie).toBe('')
    expect(tokens).toStrictEqual({})

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMe_v3()).rejects.toThrowError('Request failed with status code 401')
  })
})
