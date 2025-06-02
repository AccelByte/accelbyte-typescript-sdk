/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AuditLogInfo } from '../../generated-definitions/AuditLogInfo.js'
import { CategoryResponse } from '../../generated-definitions/CategoryResponse.js'
import { PaginatedAuditLogsResponse } from '../../generated-definitions/PaginatedAuditLogsResponse.js'
import { TimeRangeConfigResponse } from '../../generated-definitions/TimeRangeConfigResponse.js'

export class AuditLogsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query audit logs. The **{namespace}** permission value will be pointed to &#34;namespace&#34; query param. **1. If &#34;namespace&#34; query param exist:** The permission validation will validate that single namespace value. **2. If &#34;namespace&#34; query param not exist:** The permission validation will automatically check the users audit permissions (ADMIN:NAMESPACE:{namespace}:AUDIT). The query result can only returns data that matched with the namespace from the users AUDIT permissions e.g: If current user was assign permission with namespaces [game1, game2], then API will query by game1 &amp; game2
   */
  getLogs(queryParams?: {
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
  }): Promise<Response<PaginatedAuditLogsResponse>> {
    const params = { limit: 20, sort: 'timestamp:-1', ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/logs'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAuditLogsResponse,
      'PaginatedAuditLogsResponse'
    )
  }
  /**
   * This API is used to export audit logs to CSV format. It supports export up to 50000 log entries at a time. The **{namespace}** permission value will be pointed to &#34;namespace&#34; query param. **1. If &#34;namespace&#34; query param exist:** The permission validation will validate that single namespace value. **2. If &#34;namespace&#34; query param not exist:** The permission validation will automatically check the users audit permissions (ADMIN:NAMESPACE:{namespace}:AUDIT). The query result can only returns data that matched with the namespace from the users AUDIT permissions e.g: If current user was assign permission with namespaces [game1, game2], then API will query by game1 &amp; game2
   */
  getLogsExport(queryParams?: {
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
  }): Promise<Response<unknown>> {
    const params = { sort: 'timestamp:-1', ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/logs/export'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to query category and related action names.
   */
  getConfigCategories(queryParams?: {
    endDate?: number
    namespace?: string | null
    startDate?: number
  }): Promise<Response<CategoryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/config/categories'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CategoryResponse, 'CategoryResponse')
  }
  /**
   * We do not support query all time audit log. This API will return the number of days between the earliest day can be query and the current date. eg: if current date is 2023-01-10 and this API return 5, then it mean: API commitment can query to the data of the earliest date is 2023-01-05. The &#39;commitment&#39; means expiration of the log file will be archived but may not be executed immediately.
   */
  getConfigTimeRange(): Promise<Response<TimeRangeConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/config/time-range'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TimeRangeConfigResponse,
      'TimeRangeConfigResponse'
    )
  }
  /**
   * This API is used to get audit details.
   */
  getLog_ByLogId(logId: string): Promise<Response<AuditLogInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/namespace/{namespace}/logs/{logId}'.replace('{namespace}', this.namespace).replace('{logId}', logId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AuditLogInfo, 'AuditLogInfo')
  }
}
