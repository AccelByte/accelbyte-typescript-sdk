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
import { PaginatedAccountHistoryResponse } from '../generated-definitions/PaginatedAccountHistoryResponse.js'
import { AccountHistoryAdmin$ } from './endpoints/AccountHistoryAdmin$.js'

export function AccountHistoryAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsersMeAccountHistories(queryParams?: {
    endDate?: number
    limit?: number
    offset?: number
    property?: string | null
    startDate?: number
  }): Promise<AxiosResponse<PaginatedAccountHistoryResponse>> {
    const $ = new AccountHistoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeAccountHistories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAccountHistory_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AccountHistoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAccountHistory_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAccountHistories_ByUserId(
    userId: string,
    queryParams?: {
      endDate?: number
      limit?: number
      offset?: number
      order?: string | null
      property?: string | null
      propertyType?: string | null
      startDate?: number
    }
  ): Promise<AxiosResponse<PaginatedAccountHistoryResponse>> {
    const $ = new AccountHistoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAccountHistories_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query admin own account histories. ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password
     */
    getUsersMeAccountHistories,
    /**
     * This API is used to delete user account histories. For example: for GDPR account deletion
     */
    deleteAccountHistory_ByUserId,
    /**
     * This API is used to query user account histories. **Note**: the namespace should be the publisher namespace and the user id should be publisher user id ------- - Supported **propertyType**: - profile: this is the default value - properties of **profile**: - display_name - unique_display_name - username - country - date_of_birth - email - password - mfa - properties of **mfa**: - mfa_authenticator - mfa_email - mfa_backup_code - all
     */
    getAccountHistories_ByUserId
  }
}
