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
import { ThirdPartyUserSubscriptionPagingSlicedResult } from '../generated-definitions/ThirdPartyUserSubscriptionPagingSlicedResult.js'
import { IapSubscription$ } from './endpoints/IapSubscription$.js'

export function IapSubscriptionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getIapSubscriptionPlatform_ByUserId_ByPlatform(
    userId: string,
    platform: string,
    queryParams?: { activeOnly?: boolean | null; groupId?: string | null; limit?: number; offset?: number; productId?: string | null }
  ): Promise<AxiosResponse<ThirdPartyUserSubscriptionPagingSlicedResult>> {
    const $ = new IapSubscription$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSubscriptionPlatform_ByUserId_ByPlatform(userId, platform, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query user subscription, default sort by updatedAtOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    getIapSubscriptionPlatform_ByUserId_ByPlatform
  }
}
