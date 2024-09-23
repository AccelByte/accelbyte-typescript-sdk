/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { UsersApi } from '@accelbyte/sdk-iam'
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { AccelByte } from './AccelByteSDK'
import { coreConfig, GET_USER_ME_PATH } from './test/constants'
import { getCustomBaseURLUserMeHandler, getInvalidUserMeHandler, getUserMeHandler } from './test/iamHandlers'
import { emptyServer } from './test/mock'
import { TokenConfig } from './Types'

describe('SDK Usage', () => {
  beforeAll(() => {
    // Start the interception.
    emptyServer.listen()
  })

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    emptyServer.resetHandlers()
  })

  afterAll(() => {
    // Disable request interception and clean up.
    emptyServer.close()
  })

  const sdk = AccelByte.SDK({ coreConfig })

  it('should override baseURL when set baseURL on coreConfig', async () => {
    const baseURL = 'http://localhost:3030'
    emptyServer.use(getCustomBaseURLUserMeHandler(baseURL))

    // @ts-ignore
    const { data } = await UsersApi(sdk, { coreConfig: { baseURL } }).getUsersMe_v3()
    expect(data).toBeDefined()
  })

  it('should not thrown zod error when data is not match the schema and useSchemaValidation is false', async () => {
    emptyServer.use(getInvalidUserMeHandler)

    // @ts-ignore
    const { data } = await UsersApi(sdk, { coreConfig: { useSchemaValidation: false } }).getUsersMe_v3()
    expect(data).toEqual({ sdk: 'test' })
  })

  it('should set config and re-create axios instance', async () => {
    emptyServer.use(getUserMeHandler)
    const headers = {
      Authorization: 'Bearer something'
    }

    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          {
            name: 'get-header',
            type: 'request',
            onRequest: config => {
              if (config.headers.Authorization) {
                expect(config.headers.Authorization).toEqual(headers.Authorization)
              }
              return config
            }
          }
        ]
      }
    })

    sdkInstance.setConfig({
      axiosConfig: {
        request: {
          headers
        }
      }
    })

    const { axiosConfig } = sdkInstance.assembly()
    expect(axiosConfig.request.headers?.Authorization).toStrictEqual(headers.Authorization)

    // @ts-ignore
    const { data } = await UsersApi(sdkInstance).getUsersMe_v3()
  })

  it('should remove interceptors and re-create axios instance', async () => {
    emptyServer.use(getUserMeHandler)
    const onGetUser = vi.fn(() => {})

    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          {
            name: 'get-user',
            type: 'request',
            onRequest: config => {
              if (config.url?.includes(GET_USER_ME_PATH)) {
                onGetUser()
              }
              return config
            }
          }
        ]
      }
    })

    sdkInstance.removeInterceptors()

    // @ts-ignore
    await UsersApi(sdkInstance).getUsersMe_v3()

    expect(onGetUser).not.toBeCalled()
  })

  it('should run the interceptors', async () => {
    emptyServer.use(getUserMeHandler)

    const onGetUserRequest = vi.fn(config => {
      return config
    })
    const onGetUserSuccess = vi.fn(config => {
      return config
    })

    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          {
            name: 'get-user-request',
            type: 'request',
            onRequest: onGetUserRequest
          },
          {
            name: 'get-user-response',
            type: 'response',
            onSuccess: onGetUserSuccess
          }
        ]
      }
    })

    // @ts-ignore
    await UsersApi(sdkInstance).getUsersMe_v3()

    expect(onGetUserRequest).toHaveBeenCalledOnce()
    expect(onGetUserSuccess).toHaveBeenCalledOnce()
  })

  it('should automatically set Authorization HTTP header on setToken', async () => {
    emptyServer.use(getUserMeHandler)
    const token: TokenConfig = {
      accessToken: '1234',
      refreshToken: '4567'
    }

    const onGetUserRequest = vi.fn(config => {
      expect(config.headers.Authorization).toStrictEqual(`Bearer ${token.accessToken}`)
      return config
    })

    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          {
            name: 'get-user',
            type: 'request',
            onRequest: onGetUserRequest
          }
        ]
      }
    })

    sdkInstance.setToken(token)

    // @ts-ignore
    await UsersApi(sdkInstance).getUsersMe_v3()

    expect(onGetUserRequest).toHaveBeenCalledOnce()
  })
})
