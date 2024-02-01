/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { TicketListResponse } from '../../generated-definitions/TicketListResponse.js'
import { TicketResponse } from '../../generated-definitions/TicketResponse.js'
import { TicketStatisticResponse } from '../../generated-definitions/TicketStatisticResponse.js'
import { UpdateTicketResolutionsRequest } from '../../generated-definitions/UpdateTicketResolutionsRequest.js'

export class AdminTicketsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Tickets list can be ordered by: - createdAt - reportsCount - status (currently there are OPEN, AUTO_MODERATED and CLOSED statuses, desc order will put ticket with CLOSED status at the top)
   */
  getTickets(queryParams?: {
    category?: string | null
    extensionCategory?: string | null
    limit?: number
    offset?: number
    order?: string | null
    reportedUserId?: string | null
    sortBy?: string | null
    status?: string | null
  }): Promise<IResponseWithSync<TicketListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TicketListResponse, 'TicketListResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Ticket statistic can be filtered by: - category - extension category
   */
  getTicketsStatistic(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<IResponseWithSync<TicketStatisticResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/statistic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TicketStatisticResponse, 'TicketStatisticResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint will delete ticket and all its reports.
   */
  deleteTicket_ByTicketId(ticketId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint will return ticket detail with ticket id.
   */
  getTicket_ByTicketId(ticketId: string): Promise<IResponseWithSync<TicketResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, TicketResponse, 'TicketResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List reports ordered by createdAt in descending order.
   */
  getReports_ByTicketId(
    ticketId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<ReportListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}/reports'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ReportListResponse, 'ReportListResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update ticket resolution status to either OPEN or CLOSED. It is mandatory to provide notes
   */
  createResolution_ByTicketId(ticketId: string, data: UpdateTicketResolutionsRequest): Promise<IResponse<TicketResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}/resolutions'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TicketResponse, 'TicketResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
