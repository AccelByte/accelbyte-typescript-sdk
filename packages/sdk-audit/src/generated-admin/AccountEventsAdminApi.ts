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
import { CategoryResponse } from '../generated-definitions/CategoryResponse.js'
import { PaginatedAccountEventResponse } from '../generated-definitions/PaginatedAccountEventResponse.js'
import { AccountEventsAdmin$ } from './endpoints/AccountEventsAdmin$.js'

export function AccountEventsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEventsCritical_ByUserId(
    userId: string,
    queryParams?: {
      action?: string | null
      category?: string | null
      endDate?: number
      limit?: number
      offset?: number
      order?: string | null
      property?: string | null
      startDate?: number
    }
  ): Promise<AxiosResponse<PaginatedAccountEventResponse>> {
    const $ = new AccountEventsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventsCritical_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventsCriticalCategories_ByUserId(
    userId: string,
    queryParams?: { endDate?: number; startDate?: number }
  ): Promise<AxiosResponse<CategoryResponse>> {
    const $ = new AccountEventsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventsCriticalCategories_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query user account critical events. **Note**: - If the namespace is publisher namespace, the result will contain events from all namespaces - If the namespace is game namespace: - The result will contain the events from current game namespace - If the current admin has permission in publisher namespace, then the result will also contain events from publisher namespace ------- Critical events include: - Personal data request &amp; account deletion in GDPR - Suspicious login - 2FA activation/deactivation
     */
    getEventsCritical_ByUserId,
    /**
     * This API is used to query user account critical event categories of the target user. **Note**: - If the namespace is publisher namespace, the result will contain categories from all namespaces - If the namespace is game namespace: - The result will contain the categories from current game namespace - If the current admin has permission in publisher namespace, then the result will also contain categories from publisher namespace ------- Critical events include: - Personal data request &amp; account deletion in GDPR - Suspicious login - 2FA activation/deactivation
     */
    getEventsCriticalCategories_ByUserId
  }
}
