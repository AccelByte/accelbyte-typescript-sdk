/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminTicketsAdmin$ } from './endpoints/AdminTicketsAdmin$.js'
import { ReportListResponse } from '../generated-definitions/ReportListResponse.js'
import { TicketListResponse } from '../generated-definitions/TicketListResponse.js'
import { TicketResponse } from '../generated-definitions/TicketResponse.js'
import { TicketStatisticResponse } from '../generated-definitions/TicketStatisticResponse.js'
import { UpdateTicketResolutionsRequest } from '../generated-definitions/UpdateTicketResolutionsRequest.js'

export function AdminTicketsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Tickets list can be ordered by: - createdAt - reportsCount - status (currently there are OPEN, AUTO_MODERATED and CLOSED statuses, desc order will put ticket with CLOSED status at the top)
   */
  async function getTickets(queryParams?: {
    category?: string | null
    extensionCategory?: string | null
    limit?: number
    offset?: number
    order?: string | null
    reportedUserId?: string | null
    sortBy?: string | null
    status?: string | null
  }): Promise<TicketListResponse> {
    const $ = new AdminTicketsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTickets(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ticket statistic can be filtered by: - category - extension category
   */
  async function getTicketsStatistic(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<TicketStatisticResponse> {
    const $ = new AdminTicketsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTicketsStatistic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will delete ticket and all its reports.
   */
  async function deleteTicket_ByTicketId(ticketId: string): Promise<unknown> {
    const $ = new AdminTicketsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteTicket_ByTicketId(ticketId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will return ticket detail with ticket id.
   */
  async function getTicket_ByTicketId(ticketId: string): Promise<TicketResponse> {
    const $ = new AdminTicketsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTicket_ByTicketId(ticketId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List reports ordered by createdAt in descending order.
   */
  async function getReports_ByTicketId(ticketId: string, queryParams?: { limit?: number; offset?: number }): Promise<ReportListResponse> {
    const $ = new AdminTicketsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getReports_ByTicketId(ticketId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update ticket resolution status to either OPEN or CLOSED. It is mandatory to provide notes
   */
  async function createResolution_ByTicketId(ticketId: string, data: UpdateTicketResolutionsRequest): Promise<TicketResponse> {
    const $ = new AdminTicketsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createResolution_ByTicketId(ticketId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTickets,
    getTicketsStatistic,
    deleteTicket_ByTicketId,
    getTicket_ByTicketId,
    getReports_ByTicketId,
    createResolution_ByTicketId
  }
}
