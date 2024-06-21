/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AdminTicketsAdminApi } from '../AdminTicketsAdminApi.js'

import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { TicketListResponse } from '../../generated-definitions/TicketListResponse.js'
import { TicketResponse } from '../../generated-definitions/TicketResponse.js'
import { TicketStatisticResponse } from '../../generated-definitions/TicketStatisticResponse.js'
import { UpdateTicketResolutionsRequest } from '../../generated-definitions/UpdateTicketResolutionsRequest.js'

export enum Key_AdminTicketsAdmin {
  Tickets = 'AdminTicketsAdmin.Tickets',
  TicketsStatistic = 'AdminTicketsAdmin.TicketsStatistic',
  Ticket_ByTicketId = 'AdminTicketsAdmin.Ticket_ByTicketId',
  Reports_ByTicketId = 'AdminTicketsAdmin.Reports_ByTicketId',
  Resolution_ByTicketId = 'AdminTicketsAdmin.Resolution_ByTicketId'
}

export const useAdmTickets = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: TicketListResponse) => void
): UseQueryResult<TicketListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTickets>[1]) => async () => {
    const data = await AdminTicketsAdminApi(sdk, { namespace: input.namespace }).getTickets(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TicketListResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTicketsAdmin.Tickets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmTicketsStatistic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { category: string | null; extensionCategory?: string | null } },
  options?: Omit<UseQueryOptions<TicketStatisticResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TicketStatisticResponse) => void
): UseQueryResult<TicketStatisticResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTicketsStatistic>[1]) => async () => {
    const data = await AdminTicketsAdminApi(sdk, { namespace: input.namespace }).getTicketsStatistic(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TicketStatisticResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTicketsAdmin.TicketsStatistic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteTicket_ByTicketIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { ticketId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { ticketId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { ticketId: string }) => {
    const data = await AdminTicketsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTicket_ByTicketId(
      input.ticketId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTicketsAdmin.Ticket_ByTicketId],
    mutationFn,
    ...options
  })
}

export const useAdmTicket_ByTicketId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { ticketId: string },
  options?: Omit<UseQueryOptions<TicketResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TicketResponse) => void
): UseQueryResult<TicketResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTicket_ByTicketId>[1]) => async () => {
    const data = await AdminTicketsAdminApi(sdk, { namespace: input.namespace }).getTicket_ByTicketId(input.ticketId)
    callback && callback(data)
    return data
  }

  return useQuery<TicketResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTicketsAdmin.Ticket_ByTicketId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmReports_ByTicketId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { ticketId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ReportListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ReportListResponse) => void
): UseQueryResult<ReportListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReports_ByTicketId>[1]) => async () => {
    const data = await AdminTicketsAdminApi(sdk, { namespace: input.namespace }).getReports_ByTicketId(input.ticketId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ReportListResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTicketsAdmin.Reports_ByTicketId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateResolution_ByTicketIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TicketResponse, AxiosError<ApiError>, ApiArgs & { ticketId: string; data: UpdateTicketResolutionsRequest }>,
    'mutationKey'
  >,
  callback?: (data: TicketResponse) => void
): UseMutationResult<TicketResponse, AxiosError<ApiError>, ApiArgs & { ticketId: string; data: UpdateTicketResolutionsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { ticketId: string; data: UpdateTicketResolutionsRequest }) => {
    const data = await AdminTicketsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createResolution_ByTicketId(
      input.ticketId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTicketsAdmin.Resolution_ByTicketId],
    mutationFn,
    ...options
  })
}
