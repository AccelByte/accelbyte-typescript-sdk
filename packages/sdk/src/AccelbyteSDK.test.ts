/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { describe, expect, test } from 'vitest'
import { AccelByte } from './AccelByteSDK'
import { Interceptor } from './Types'
import {
  coreConfig,
  coreConfigWithDefault,
  CUSTOM_HEADERS,
  defaultAxiosConfig,
  requestInterceptor,
  responseInterceptor,
  TOKEN_CONFIG,
  tooManyRequestInterceptor
} from './test/constants'

const interceptors: Array<Interceptor> = [responseInterceptor, requestInterceptor]

describe('AccelByteSDK', () => {
  test('should return axiosInstance, core config, and default axios config', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toBeUndefined()
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)
  })

  test('should return configs with interceptors', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)
  })

  test('should add new interceptor when addInterceptors', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [responseInterceptor]
      }
    })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual([responseInterceptor])
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    sdkInstance.addInterceptors([tooManyRequestInterceptor])

    expect(sdk.axiosConfig.interceptors).toStrictEqual([responseInterceptor, tooManyRequestInterceptor])
  })

  test('should remove interceptor from sdk when removeInterceptor', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    sdkInstance.removeInterceptors(interceptor => interceptor.name !== 'get-session')

    expect(sdk.axiosConfig.interceptors).toStrictEqual([responseInterceptor])
  })

  test('should return new sdk with interceptors when clone', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })

    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    const newSdkInstance = sdkInstance.clone()
    const newSdk = newSdkInstance.assembly()

    expect(newSdk.axiosConfig.interceptors).toStrictEqual(interceptors)
  })

  test('should return new sdk without interceptors when clone with interceptor option is false', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })

    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    const newSdkInstance = sdkInstance.clone({ interceptors: false })
    const newSdk = newSdkInstance.assembly()

    expect(newSdk.axiosConfig.interceptors).toBeUndefined()
  })

  test('should save token when set accessToken and refresToken', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    expect(sdkInstance.getToken()).toEqual({})

    sdkInstance.setToken(TOKEN_CONFIG)

    expect(sdkInstance.getToken()).toStrictEqual(TOKEN_CONFIG)
  })

  test('should retain existing refreshToken when set accessToken afteward', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    expect(sdkInstance.getToken()).toEqual({})

    const token = {
      accessToken: '1234'
    }
    sdkInstance.setToken(token)

    expect(sdkInstance.getToken()).toStrictEqual(token)

    const newToken = {
      refreshToken: '12345'
    }
    sdkInstance.setToken(newToken)

    expect(sdkInstance.getToken()).toStrictEqual({ ...token, ...newToken })
  })

  test('should remove token when call removeToken', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    expect(sdkInstance.getToken()).toEqual({})

    sdkInstance.setToken(TOKEN_CONFIG)

    expect(sdkInstance.getToken()).toStrictEqual(TOKEN_CONFIG)
    sdkInstance.removeToken()

    expect(sdkInstance.getToken()).toEqual({})
  })

  test('setConfig should merge provided headers into existing Axios config instead of replacing them', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    sdkInstance.setToken(TOKEN_CONFIG)
    sdkInstance.setConfig({ axiosConfig: { request: { headers: CUSTOM_HEADERS } } })

    expect(sdkInstance.getToken()).toStrictEqual(TOKEN_CONFIG)

    const { axiosConfig } = sdkInstance.assembly()

    expect(axiosConfig.request.headers?.['x-ab-hello']).toStrictEqual(CUSTOM_HEADERS['x-ab-hello'])
    expect(axiosConfig.request.headers?.Authorization).toStrictEqual(`Bearer ${TOKEN_CONFIG.accessToken}`)
  })

  test('SDK clone should clone the token config if token is present', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    sdkInstance.setToken(TOKEN_CONFIG)

    expect(sdkInstance.getToken()).toStrictEqual(TOKEN_CONFIG)

    const cloned = sdkInstance.clone()

    expect(cloned.getToken()).toStrictEqual(TOKEN_CONFIG)
  })

  test('SDK clone should not clone the token config if token is not present', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    expect(sdkInstance.getToken()).toStrictEqual({})

    const cloned = sdkInstance.clone()

    expect(cloned.getToken()).toStrictEqual({})
  })

  test('SDK clone should clone config and token', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })

    sdkInstance.setToken(TOKEN_CONFIG)
    sdkInstance.setConfig({ axiosConfig: { request: { headers: CUSTOM_HEADERS } } })

    expect(sdkInstance.getToken()).toStrictEqual(TOKEN_CONFIG)

    const { axiosConfig } = sdkInstance.assembly()

    expect(axiosConfig.request.headers?.['x-ab-hello']).toStrictEqual(CUSTOM_HEADERS['x-ab-hello'])
    expect(axiosConfig.request.headers?.Authorization).toStrictEqual(`Bearer ${TOKEN_CONFIG.accessToken}`)

    const cloned = sdkInstance.clone()
    const { axiosConfig: clonedAxiosConfig } = cloned.assembly()

    expect(cloned.getToken()).toStrictEqual(TOKEN_CONFIG)
    expect(clonedAxiosConfig.request.headers?.['x-ab-hello']).toStrictEqual(CUSTOM_HEADERS['x-ab-hello'])
    expect(clonedAxiosConfig.request.headers?.Authorization).toStrictEqual(`Bearer ${TOKEN_CONFIG.accessToken}`)
  })
})
