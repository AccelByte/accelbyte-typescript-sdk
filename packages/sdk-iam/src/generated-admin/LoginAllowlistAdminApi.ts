/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { LoginAllowlistRequest } from '../generated-definitions/LoginAllowlistRequest.js'
import { LoginAllowlistResponse } from '../generated-definitions/LoginAllowlistResponse.js'
import { LoginAllowlistAdmin$ } from './endpoints/LoginAllowlistAdmin$.js'

export function LoginAllowlistAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getLoginAllowlist_v3(): Promise<AxiosResponse<LoginAllowlistResponse>> {
    const $ = new LoginAllowlistAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLoginAllowlist_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLoginAllowlist_v3(data: LoginAllowlistRequest): Promise<AxiosResponse<unknown>> {
    const $ = new LoginAllowlistAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLoginAllowlist_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint return login allowlist configuration from specific namespace.
     */
    getLoginAllowlist_v3,
    /**
     * This endpoint update login allowlist configuration from specific game namespace. roleIds: are list of role that allowed to login Note: only accept game namespace
     */
    updateLoginAllowlist_v3
  }
}
