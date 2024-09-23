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

import { SessionStorageAdmin$ } from './endpoints/SessionStorageAdmin$.js'

export function SessionStorageAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteStorage_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorageAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStorage_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStorage_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorageAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStorage_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorageAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStorageUser_BySessionId_ByUserId(sessionId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Delete Session Storage By sessionID Session Storage feature only available for Gamesession
     */
    deleteStorage_BySessionId,
    /**
     *  Read Session Storage by sessionID Session Storage feature only available for Gamesession
     */
    getStorage_BySessionId,
    /**
     *  Read Session Storage by sessionID and userID Session Storage feature only available for Gamesession
     */
    getStorageUser_BySessionId_ByUserId
  }
}
