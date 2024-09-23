/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

// @vitest-environment jsdom
import { UsersApi } from '@accelbyte/sdk-iam'
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { AccelByte } from '../AccelByteSDK'
import { coreConfig } from '../test/constants'
import { get401UserMeProfileStatusHandler, getUserMeHandler, post401OauthTokenHandler, postOauthTokenHandler } from '../test/iamHandlers'
import { emptyServer } from '../test/mock'
import { createAuthInterceptor } from './AuthInterceptors'

describe('AuthInterceptor', () => {
  beforeAll(() => emptyServer.listen())
  afterEach(() => emptyServer.resetHandlers())
  afterAll(() => emptyServer.close())

  /**
   * Session Expired Interceptor
   * 1. 200 get user me
   * 2. 401 get user me
   *    a. lock all request and refresh session using `postOauthToken` or `postOauthToken_v4`
   *    b. if session is not expired (no tokenResponse), return axiosConfig and call onGetUserSession callback if available
   *    c. if session is expired, call onSessionExpired callback
   */
  it('should not called session expired callback when successfully refresh session', async () => {
    /**
     * Behind the scene, session expired interceptor
     * create a request to IAM services to get tokens
     */
    emptyServer.use(getUserMeHandler, postOauthTokenHandler, get401UserMeProfileStatusHandler)

    const onSessionExpired = vi.fn()
    const onGetUserSession = vi.fn()
    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        request: {
          /**
           * Use fetch implmentation to avoid
           * `TypeError: response.body.getReader is not a function`
           * when run test in jsdom or happy-dom environment
           *
           * @see https://github.com/axios/axios/pull/6371
           */
          adapter: 'fetch'
        },
        interceptors: [
          createAuthInterceptor({
            clientId: coreConfig.clientId,
            getRefreshToken: () => 'abcsdfawefasdfasdf',
            onSessionExpired,
            onGetUserSession
          })
        ]
      }
    })

    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMeProfileStatus_v3()).rejects.toThrowError()

    /**
     * Indicate successfully get new token from IAM services
     */
    expect(onSessionExpired).toHaveBeenCalledTimes(0)
    expect(onGetUserSession).toHaveBeenCalledTimes(1)

    // @ts-ignore
    const me2 = await UsersApi(sdk).getUsersMe_v3()
    expect(me2.data).toBeDefined()
  })

  it('should called session expired callback when refresh session is failed', async () => {
    emptyServer.use(getUserMeHandler, post401OauthTokenHandler, get401UserMeProfileStatusHandler)

    const onSessionExpired = vi.fn()
    const onGetUserSession = vi.fn()
    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        request: {
          /**
           * Use fetch implmentation to avoid
           * `TypeError: response.body.getReader is not a function`
           * when run test in jsdom or happy-dom environment
           *
           * @see https://github.com/axios/axios/pull/6371
           */
          adapter: 'fetch'
        },
        interceptors: [
          createAuthInterceptor({
            clientId: coreConfig.clientId,
            getRefreshToken: () => 'abcsdfawefasdfasdf',
            onSessionExpired
          })
        ]
      }
    })

    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMeProfileStatus_v3()).rejects.toThrowError()

    /**
     * Indicate successfully get new token from IAM services
     */
    expect(onSessionExpired).toHaveBeenCalledTimes(1)
    expect(onGetUserSession).toHaveBeenCalledTimes(0)
  })

  it('should call get session callback and not called session expired callback when successfully refresh session', async () => {
    emptyServer.use(getUserMeHandler, postOauthTokenHandler, get401UserMeProfileStatusHandler)

    const onSessionExpired = vi.fn()
    const onGetUserSession = vi.fn()
    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        request: {
          /**
           * Use fetch implmentation to avoid
           * `TypeError: response.body.getReader is not a function`
           * when run test in jsdom or happy-dom environment
           *
           * @see https://github.com/axios/axios/pull/6371
           */
          adapter: 'fetch'
        },
        interceptors: [
          createAuthInterceptor({
            clientId: coreConfig.clientId,
            getRefreshToken: () => 'abcsdfawefasdfasdf',
            onSessionExpired,
            onGetUserSession
          })
        ]
      }
    })

    // @ts-ignore
    const me = await UsersApi(sdk).getUsersMe_v3()
    expect(me.data).toBeDefined()

    // @ts-ignore
    await expect(UsersApi(sdk).getUsersMeProfileStatus_v3()).rejects.toThrowError()

    /**
     * Indicate successfully get new token from IAM services
     */
    expect(onSessionExpired).toHaveBeenCalledTimes(0)
    expect(onGetUserSession).toHaveBeenCalledTimes(1)
  })
})
