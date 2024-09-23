/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AuditLogsAdminApi } from '../AuditLogsAdminApi.js'

import { AuditLogInfo } from '../../generated-definitions/AuditLogInfo.js'
import { CategoryResponse } from '../../generated-definitions/CategoryResponse.js'
import { PaginatedAuditLogsResponse } from '../../generated-definitions/PaginatedAuditLogsResponse.js'
import { TimeRangeConfigResponse } from '../../generated-definitions/TimeRangeConfigResponse.js'

export enum Key_AuditLogsAdmin {
  Logs = 'Audit.AuditLogsAdmin.Logs',
  ConfigCategories = 'Audit.AuditLogsAdmin.ConfigCategories',
  ConfigTimeRange = 'Audit.AuditLogsAdmin.ConfigTimeRange',
  Log_ByLogId = 'Audit.AuditLogsAdmin.Log_ByLogId'
}

/**
 * This API is used to query audit logs. The **{namespace}** permission value will be pointed to &#34;namespace&#34; query param. **1. If &#34;namespace&#34; query param exist:** The permission validation will validate that single namespace value. **2. If &#34;namespace&#34; query param not exist:** The permission validation will automatically check the users audit permissions (ADMIN:NAMESPACE:{namespace}:AUDIT). The query result can only returns data that matched with the namespace from the users AUDIT permissions e.g: If current user was assign permission with namespaces [game1, game2], then API will query by game1 &amp; game2
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogsAdmin.Logs, input]
 * }
 * ```
 */
export const useAuditLogsAdminApi_GetLogs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      action?: string | null
      actor?: string | null
      actorType?: 'CLIENT' | 'USER'
      category?: string | null
      endDate?: number
      limit?: number
      namespace?: string | null
      objectId?: string | null
      objectType?: string | null
      offset?: number
      order?: -1 | 1
      startDate?: number
    }
  },
  options?: Omit<UseQueryOptions<PaginatedAuditLogsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedAuditLogsResponse>) => void
): UseQueryResult<PaginatedAuditLogsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAuditLogsAdminApi_GetLogs>[1]) => async () => {
    const response = await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLogs(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAuditLogsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.Logs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to query category and related action names.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogsAdmin.ConfigCategories, input]
 * }
 * ```
 */
export const useAuditLogsAdminApi_GetConfigCategories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { endDate?: number; namespace?: string | null; startDate?: number } },
  options?: Omit<UseQueryOptions<CategoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CategoryResponse>) => void
): UseQueryResult<CategoryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAuditLogsAdminApi_GetConfigCategories>[1]) => async () => {
    const response = await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigCategories(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CategoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.ConfigCategories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * We do not support query all time audit log. This API will return the number of days between the earliest day can be query and the current date. eg: if current date is 2023-01-10 and this API return 5, then it mean: API commitment can query to the data of the earliest date is 2023-01-05. The &#39;commitment&#39; means expiration of the log file will be archived but may not be executed immediately.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogsAdmin.ConfigTimeRange, input]
 * }
 * ```
 */
export const useAuditLogsAdminApi_GetConfigTimeRange = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<TimeRangeConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TimeRangeConfigResponse>) => void
): UseQueryResult<TimeRangeConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAuditLogsAdminApi_GetConfigTimeRange>[1]) => async () => {
    const response = await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigTimeRange()
    callback && callback(response)
    return response.data
  }

  return useQuery<TimeRangeConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.ConfigTimeRange, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get audit details.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AuditLogsAdmin.Log_ByLogId, input]
 * }
 * ```
 */
export const useAuditLogsAdminApi_GetLog_ByLogId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { logId: string },
  options?: Omit<UseQueryOptions<AuditLogInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AuditLogInfo>) => void
): UseQueryResult<AuditLogInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAuditLogsAdminApi_GetLog_ByLogId>[1]) => async () => {
    const response = await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLog_ByLogId(
      input.logId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<AuditLogInfo, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.Log_ByLogId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
