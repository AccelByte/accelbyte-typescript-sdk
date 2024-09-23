/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { TicketListResponse } from '../../generated-definitions/TicketListResponse.js'
import { TicketResponse } from '../../generated-definitions/TicketResponse.js'
import { TicketStatisticResponse } from '../../generated-definitions/TicketStatisticResponse.js'
import { UpdateTicketResolutionsRequest } from '../../generated-definitions/UpdateTicketResolutionsRequest.js'

export class TicketsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
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
  }): Promise<Response<TicketListResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TicketListResponse, 'TicketListResponse')
  }
  /**
   * Ticket statistic can be filtered by: - category - extension category
   */
  getTicketsStatistic(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<Response<TicketStatisticResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/statistic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TicketStatisticResponse,
      'TicketStatisticResponse'
    )
  }
  /**
   * This endpoint will delete ticket and all its reports.
   */
  deleteTicket_ByTicketId(ticketId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will return ticket detail with ticket id.
   */
  getTicket_ByTicketId(ticketId: string): Promise<Response<TicketResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TicketResponse, 'TicketResponse')
  }
  /**
   * List reports ordered by createdAt in descending order.
   */
  getReports_ByTicketId(ticketId: string, queryParams?: { limit?: number; offset?: number }): Promise<Response<ReportListResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}/reports'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ReportListResponse, 'ReportListResponse')
  }
  /**
   * Update ticket resolution status to either OPEN or CLOSED. It is mandatory to provide notes
   */
  updateResolution_ByTicketId(ticketId: string, data: UpdateTicketResolutionsRequest): Promise<Response<TicketResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/tickets/{ticketId}/resolutions'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TicketResponse, 'TicketResponse')
  }
}
