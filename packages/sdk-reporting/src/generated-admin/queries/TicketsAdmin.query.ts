/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { TicketsAdminApi } from '../TicketsAdminApi.js'

import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { TicketListResponse } from '../../generated-definitions/TicketListResponse.js'
import { TicketResponse } from '../../generated-definitions/TicketResponse.js'
import { TicketStatisticResponse } from '../../generated-definitions/TicketStatisticResponse.js'
import { UpdateTicketResolutionsRequest } from '../../generated-definitions/UpdateTicketResolutionsRequest.js'

export enum Key_TicketsAdmin {
  Tickets = 'Reporting.TicketsAdmin.Tickets',
  TicketsStatistic = 'Reporting.TicketsAdmin.TicketsStatistic',
  Ticket_ByTicketId = 'Reporting.TicketsAdmin.Ticket_ByTicketId',
  Reports_ByTicketId = 'Reporting.TicketsAdmin.Reports_ByTicketId',
  Resolution_ByTicketId = 'Reporting.TicketsAdmin.Resolution_ByTicketId'
}

/**
 * Tickets list can be ordered by: - createdAt - reportsCount - status (currently there are OPEN, AUTO_MODERATED and CLOSED statuses, desc order will put ticket with CLOSED status at the top)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketsAdmin.Tickets, input]
 * }
 * ```
 */
export const useTicketsAdminApi_GetTickets = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      category?: string | null
      extensionCategory?: string | null
      limit?: number
      offset?: number
      order?: string | null
      reportedUserId?: string | null
      sortBy?: string | null
      status?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TicketListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketListResponse>) => void
): UseQueryResult<TicketListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketsAdminApi_GetTickets>[1]) => async () => {
    const response = await TicketsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTickets(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketListResponse, AxiosError<ApiError>>({
    queryKey: [Key_TicketsAdmin.Tickets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Ticket statistic can be filtered by: - category - extension category
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketsAdmin.TicketsStatistic, input]
 * }
 * ```
 */
export const useTicketsAdminApi_GetTicketsStatistic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { category: string | null; extensionCategory?: string | null } },
  options?: Omit<UseQueryOptions<TicketStatisticResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketStatisticResponse>) => void
): UseQueryResult<TicketStatisticResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketsAdminApi_GetTicketsStatistic>[1]) => async () => {
    const response = await TicketsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTicketsStatistic(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketStatisticResponse, AxiosError<ApiError>>({
    queryKey: [Key_TicketsAdmin.TicketsStatistic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint will delete ticket and all its reports.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketsAdmin.Ticket_ByTicketId, input]
 * }
 * ```
 */
export const useTicketsAdminApi_DeleteTicket_ByTicketIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ticketId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ticketId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { ticketId: string }) => {
    const response = await TicketsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTicket_ByTicketId(
      input.ticketId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TicketsAdmin.Ticket_ByTicketId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will return ticket detail with ticket id.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketsAdmin.Ticket_ByTicketId, input]
 * }
 * ```
 */
export const useTicketsAdminApi_GetTicket_ByTicketId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { ticketId: string },
  options?: Omit<UseQueryOptions<TicketResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketResponse>) => void
): UseQueryResult<TicketResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketsAdminApi_GetTicket_ByTicketId>[1]) => async () => {
    const response = await TicketsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTicket_ByTicketId(
      input.ticketId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketResponse, AxiosError<ApiError>>({
    queryKey: [Key_TicketsAdmin.Ticket_ByTicketId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List reports ordered by createdAt in descending order.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketsAdmin.Reports_ByTicketId, input]
 * }
 * ```
 */
export const useTicketsAdminApi_GetReports_ByTicketId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { ticketId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ReportListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ReportListResponse>) => void
): UseQueryResult<ReportListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketsAdminApi_GetReports_ByTicketId>[1]) => async () => {
    const response = await TicketsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReports_ByTicketId(
      input.ticketId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ReportListResponse, AxiosError<ApiError>>({
    queryKey: [Key_TicketsAdmin.Reports_ByTicketId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update ticket resolution status to either OPEN or CLOSED. It is mandatory to provide notes
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketsAdmin.Resolution_ByTicketId, input]
 * }
 * ```
 */
export const useTicketsAdminApi_UpdateResolution_ByTicketIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TicketResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { ticketId: string; data: UpdateTicketResolutionsRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: TicketResponse) => void
): UseMutationResult<
  TicketResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { ticketId: string; data: UpdateTicketResolutionsRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { ticketId: string; data: UpdateTicketResolutionsRequest }) => {
    const response = await TicketsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateResolution_ByTicketId(input.ticketId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TicketsAdmin.Resolution_ByTicketId],
    mutationFn,
    ...options
  })
}
