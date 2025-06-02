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
import { AuditLogInfo } from '../generated-definitions/AuditLogInfo.js'
import { CategoryResponse } from '../generated-definitions/CategoryResponse.js'
import { PaginatedAuditLogsResponse } from '../generated-definitions/PaginatedAuditLogsResponse.js'
import { TimeRangeConfigResponse } from '../generated-definitions/TimeRangeConfigResponse.js'
import { AuditLogsAdmin$ } from './endpoints/AuditLogsAdmin$.js'

export function AuditLogsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getLogs(queryParams?: {
    action?: string | null
    actor?: string | null
    actorType?: 'CLIENT' | 'USER'
    category?: string | null
    clientId?: string | null
    endDate?: number
    hasCommentOnly?: boolean | null
    limit?: number
    namespace?: string | null
    objectId?: string | null
    objectType?: string | null
    offset?: number
    sort?: 'actionName:-1' | 'actionName:1' | 'category:-1' | 'category:1' | 'namespace:-1' | 'namespace:1' | 'timestamp:-1' | 'timestamp:1'
    startDate?: number
  }): Promise<AxiosResponse<PaginatedAuditLogsResponse>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLogs(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLogsExport(queryParams?: {
    action?: string | null
    actor?: string | null
    actorType?: 'CLIENT' | 'USER'
    category?: string | null
    clientId?: string | null
    endDate?: number
    namespace?: string | null
    objectId?: string | null
    objectType?: string | null
    sort?: 'actionName:-1' | 'actionName:1' | 'category:-1' | 'category:1' | 'namespace:-1' | 'namespace:1' | 'timestamp:-1' | 'timestamp:1'
    startDate?: number
  }): Promise<AxiosResponse<unknown>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLogsExport(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigCategories(queryParams?: {
    endDate?: number
    namespace?: string | null
    startDate?: number
  }): Promise<AxiosResponse<CategoryResponse>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigTimeRange(): Promise<AxiosResponse<TimeRangeConfigResponse>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigTimeRange()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLog_ByLogId(logId: string): Promise<AxiosResponse<AuditLogInfo>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLog_ByLogId(logId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query audit logs. The **{namespace}** permission value will be pointed to &#34;namespace&#34; query param. **1. If &#34;namespace&#34; query param exist:** The permission validation will validate that single namespace value. **2. If &#34;namespace&#34; query param not exist:** The permission validation will automatically check the users audit permissions (ADMIN:NAMESPACE:{namespace}:AUDIT). The query result can only returns data that matched with the namespace from the users AUDIT permissions e.g: If current user was assign permission with namespaces [game1, game2], then API will query by game1 &amp; game2
     */
    getLogs,
    /**
     * This API is used to export audit logs to CSV format. It supports export up to 50000 log entries at a time. The **{namespace}** permission value will be pointed to &#34;namespace&#34; query param. **1. If &#34;namespace&#34; query param exist:** The permission validation will validate that single namespace value. **2. If &#34;namespace&#34; query param not exist:** The permission validation will automatically check the users audit permissions (ADMIN:NAMESPACE:{namespace}:AUDIT). The query result can only returns data that matched with the namespace from the users AUDIT permissions e.g: If current user was assign permission with namespaces [game1, game2], then API will query by game1 &amp; game2
     */
    getLogsExport,
    /**
     * This API is used to query category and related action names.
     */
    getConfigCategories,
    /**
     * We do not support query all time audit log. This API will return the number of days between the earliest day can be query and the current date. eg: if current date is 2023-01-10 and this API return 5, then it mean: API commitment can query to the data of the earliest date is 2023-01-05. The &#39;commitment&#39; means expiration of the log file will be archived but may not be executed immediately.
     */
    getConfigTimeRange,
    /**
     * This API is used to get audit details.
     */
    getLog_ByLogId
  }
}
