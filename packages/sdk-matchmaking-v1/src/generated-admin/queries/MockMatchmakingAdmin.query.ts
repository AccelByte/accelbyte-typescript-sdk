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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { MockMatchmakingAdminApi } from '../MockMatchmakingAdminApi.js'

import { CreateMockTicket } from '../../generated-definitions/CreateMockTicket.js'
import { GetMockMatchesResponse } from '../../generated-definitions/GetMockMatchesResponse.js'
import { GetMockTicketsResponse } from '../../generated-definitions/GetMockTicketsResponse.js'
import { MatchingParty } from '../../generated-definitions/MatchingParty.js'
import { MockTicketArray } from '../../generated-definitions/MockTicketArray.js'
import { QueryMockBy } from '../../generated-definitions/QueryMockBy.js'

export enum Key_MockMatchmakingAdmin {
  Mock_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.Mock_ByChannelName',
  MocksMatches_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.MocksMatches_ByChannelName',
  MockMatche_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.MockMatche_ByChannelName',
  MocksTickets_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.MocksTickets_ByChannelName',
  MockTicket_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.MockTicket_ByChannelName',
  MockTicketBulk_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.MockTicketBulk_ByChannelName',
  MockTicketQuery_ByChannelName = 'Matchmaking.MockMatchmakingAdmin.MockTicketQuery_ByChannelName'
}

/**
 *  Delete all mock tickets and matches in a channel. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.Mock_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_DeleteMock_ByChannelNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string }) => {
    const response = await MockMatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteMock_ByChannelName(input.channelName)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.Mock_ByChannelName],
    mutationFn,
    ...options
  })
}

/**
 *  Read all mock matches in a channel resulted from matching mock tickets. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.MocksMatches_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_GetMocksMatches_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<GetMockMatchesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMockMatchesResponse>) => void
): UseQueryResult<GetMockMatchesResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useMockMatchmakingAdminApi_GetMocksMatches_ByChannelName>[1]) => async () => {
      const response = await MockMatchmakingAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getMocksMatches_ByChannelName(input.channelName)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetMockMatchesResponse, AxiosError<ApiError>>({
    queryKey: [Key_MockMatchmakingAdmin.MocksMatches_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Read mock matches that has timestamp older than specified timestamp in a channel resulted from matching mock tickets. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.MockMatche_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_FetchMockMatche_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string; data: QueryMockBy },
  options?: Omit<UseQueryOptions<GetMockMatchesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMockMatchesResponse>) => void
): UseQueryResult<GetMockMatchesResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useMockMatchmakingAdminApi_FetchMockMatche_ByChannelName>[1]) => async () => {
      const response = await MockMatchmakingAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).fetchMockMatche_ByChannelName(input.channelName, input.data)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetMockMatchesResponse, AxiosError<ApiError>>({
    queryKey: [Key_MockMatchmakingAdmin.MockMatche_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Read all mock tickets in a channel. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.MocksTickets_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_GetMocksTickets_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<GetMockTicketsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMockTicketsResponse>) => void
): UseQueryResult<GetMockTicketsResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useMockMatchmakingAdminApi_GetMocksTickets_ByChannelName>[1]) => async () => {
      const response = await MockMatchmakingAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getMocksTickets_ByChannelName(input.channelName)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetMockTicketsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MockMatchmakingAdmin.MocksTickets_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Create and queue mock tickets into specified game mode&#39;s pool. Ticket&#39;s MMRs will be randomized using Normal distribution according to the input mean and standard deviation. All mock tickets and matches will be cleaned up automatically after 1 day. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.MockTicket_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_CreateMockTicket_ByChannelNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MockTicketArray, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; data: CreateMockTicket }>,
    'mutationKey'
  >,
  callback?: (data: MockTicketArray) => void
): UseMutationResult<MockTicketArray, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; data: CreateMockTicket }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string; data: CreateMockTicket }) => {
    const response = await MockMatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createMockTicket_ByChannelName(input.channelName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.MockTicket_ByChannelName],
    mutationFn,
    ...options
  })
}

/**
 *  Create and queue mock tickets into specified game mode&#39;s pool. The tickets input will be used as is. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.MockTicketBulk_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_CreateMockTicketBulk_ByChannelNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; data: MatchingParty[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelName: string; data: MatchingParty[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelName: string; data: MatchingParty[] }) => {
    const response = await MockMatchmakingAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createMockTicketBulk_ByChannelName(input.channelName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.MockTicketBulk_ByChannelName],
    mutationFn,
    ...options
  })
}

/**
 *  Read mock tickets after the specified timestamp in a channel. &#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MockMatchmakingAdmin.MockTicketQuery_ByChannelName, input]
 * }
 * ```
 */
export const useMockMatchmakingAdminApi_FetchMockTicketQuery_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string; data: QueryMockBy },
  options?: Omit<UseQueryOptions<GetMockTicketsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMockTicketsResponse>) => void
): UseQueryResult<GetMockTicketsResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useMockMatchmakingAdminApi_FetchMockTicketQuery_ByChannelName>[1]) => async () => {
      const response = await MockMatchmakingAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).fetchMockTicketQuery_ByChannelName(input.channelName, input.data)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetMockTicketsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MockMatchmakingAdmin.MockTicketQuery_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
