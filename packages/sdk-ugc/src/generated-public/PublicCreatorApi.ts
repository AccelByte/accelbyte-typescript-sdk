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
import { CreatorResponse } from '../generated-definitions/CreatorResponse.js'
import { PaginatedCreatorOverviewResponse } from '../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { PublicCreator$ } from './endpoints/PublicCreator$.js'

export function PublicCreatorApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsers(queryParams?: {
    limit?: number
    offset?: number
    orderby?: string | null
    sortby?: string | null
  }): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicCreator$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId(userId: string): Promise<AxiosResponse<CreatorResponse>> {
    const $ = new PublicCreator$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Public user can access without token or if token specified, requires valid user token
     */
    getUsers,
    /**
     * Public user can access without token or if token specified, requires valid user token
     */
    getUser_ByUserId
  }
}
