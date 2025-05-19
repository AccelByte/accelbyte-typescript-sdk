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
import { TicketV1Api } from '../TicketV1Api.js'

import { RefreshTicketResponse } from '../../generated-definitions/RefreshTicketResponse.js'

export enum Key_TicketV1 {
  Ticket = 'Login-queue.TicketV1.Ticket'
}

/**
 * Cancel ticket. This endpoint requires ticket to be placed in the authorization header with this format: &#34;Bearer ticketID&#34;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketV1.Ticket, input]
 * }
 * ```
 */
export const useTicketV1Api_DeleteTicketMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await TicketV1Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTicket()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TicketV1.Ticket],
    mutationFn,
    ...options
  })
}

/**
 * Refresh ticket. This endpoint requires ticket to be placed in the authorization header with this format: &#34;Bearer ticketID&#34;. When the ticketID is empty or not found the response status will be 401
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TicketV1.Ticket, input]
 * }
 * ```
 */
export const useTicketV1Api_GetTicket = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RefreshTicketResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RefreshTicketResponse>) => void
): UseQueryResult<RefreshTicketResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTicketV1Api_GetTicket>[1]) => async () => {
    const response = await TicketV1Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTicket()
    callback && callback(response)
    return response.data
  }

  return useQuery<RefreshTicketResponse, AxiosError<ApiError>>({
    queryKey: [Key_TicketV1.Ticket, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
