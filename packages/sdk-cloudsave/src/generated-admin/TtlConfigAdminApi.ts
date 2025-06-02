/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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

import { TtlConfigAdmin$ } from './endpoints/TtlConfigAdmin$.js'

export function TtlConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function deleteTtl_ByKey(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new TtlConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTtl_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTtl_ByKey_ByNS(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new TtlConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTtl_ByKey_ByNS(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTtl_ByKey_ByNS_admin(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new TtlConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTtl_ByKey_ByNS_admin(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ## Description This endpoints will delete the ttl config of the game record
     */
    deleteTtl_ByKey,
    /**
     * ## Description This endpoints will delete the ttl config of the game binary record
     */
    deleteTtl_ByKey_ByNS,
    /**
     * ## Description This endpoints will delete the ttl config of the admin game record
     */
    deleteTtl_ByKey_ByNS_admin
  }
}
