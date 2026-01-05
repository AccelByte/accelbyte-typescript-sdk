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
import { NotificationPagingSlicedResult } from '../generated-definitions/NotificationPagingSlicedResult.js'
import { IapNotificationAdmin$ } from './endpoints/IapNotificationAdmin$.js'

export function IapNotificationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getIapNotifications(queryParams?: {
    endDate?: string | null
    externalId?: string | null
    limit?: number
    offset?: number
    source?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    startDate?: string | null
    status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'
    type?: string | null
  }): Promise<AxiosResponse<NotificationPagingSlicedResult>> {
    const $ = new IapNotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapNotifications(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query third party notifications.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Third Party Platform notifications&lt;/li&gt;&lt;/ul&gt;
     */
    getIapNotifications
  }
}
