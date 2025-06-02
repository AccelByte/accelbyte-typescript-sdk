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
import { RetrieveUserInfoCacheStatusResponseArray } from '../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'
import { UserInfoAdmin$ } from './endpoints/UserInfoAdmin$.js'

export function UserInfoAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteUserInfo(queryParams?: { namespace?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UserInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUserInfo(queryParams?: {
    namespaces?: string | null
  }): Promise<AxiosResponse<RetrieveUserInfoCacheStatusResponseArray>> {
    const $ = new UserInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUserInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserInfo(queryParams: { namespace: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new UserInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Invalidate user info cache in agreement service.
     */
    deleteUserInfo,
    /**
     * Get user info cache last updated time per namespace.&lt;br&gt;The query parameter namespaces can be a list of namespace separated by comma.&lt;br&gt;If query parameter namespaces is empty, user info cache status for all available namespaces will be returned.
     */
    getUserInfo,
    /**
     * @deprecated
     * Sync user info cache in agreement service with iam service.
     */
    updateUserInfo
  }
}
