/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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

import { SessionStorage$ } from './endpoints/SessionStorage$.js'

export function SessionStorageApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function patchStorageLeader_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorage$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStorageLeader_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorage$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStorageUser_BySessionId_ByUserId(sessionId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Update Insert Session Storage Leader. only Leader can update or insert user session storage data Leader. can store generic json example json can store : { &#34;leader&#34;: { &#34;leader&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
     */
    patchStorageLeader_BySessionId,
    /**
     *  Update Insert Session Storage User. user can only update or insert user session storage data itself. can store generic json example json can store : { &#34;storage&#34;: { &#34;storage&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
     */
    patchStorageUser_BySessionId_ByUserId
  }
}
