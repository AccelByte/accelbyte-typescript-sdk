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
import { MockMatchmakingAdminApi } from '../MockMatchmakingAdminApi.js'

import { CreateMockTicket } from '../../generated-definitions/CreateMockTicket.js'
import { GetMockMatchesResponse } from '../../generated-definitions/GetMockMatchesResponse.js'
import { GetMockTicketsResponse } from '../../generated-definitions/GetMockTicketsResponse.js'
import { MatchingParty } from '../../generated-definitions/MatchingParty.js'
import { MockTicketArray } from '../../generated-definitions/MockTicketArray.js'
import { QueryMockBy } from '../../generated-definitions/QueryMockBy.js'

export enum Key_MockMatchmakingAdmin {
  Mock_ByChannelName = 'MockMatchmakingAdmin.Mock_ByChannelName',
  MocksMatches_ByChannelName = 'MockMatchmakingAdmin.MocksMatches_ByChannelName',
  MockMatche_ByChannelName = 'MockMatchmakingAdmin.MockMatche_ByChannelName',
  MocksTickets_ByChannelName = 'MockMatchmakingAdmin.MocksTickets_ByChannelName',
  MockTicket_ByChannelName = 'MockMatchmakingAdmin.MockTicket_ByChannelName',
  MockTicketBulk_ByChannelName = 'MockMatchmakingAdmin.MockTicketBulk_ByChannelName',
  MockTicketQuery_ByChannelName = 'MockMatchmakingAdmin.MockTicketQuery_ByChannelName'
}

export const useAdmDeleteMock_ByChannelNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string }) => {
    const data = await MockMatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteMock_ByChannelName(
      input.channelName
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.Mock_ByChannelName],
    mutationFn,
    ...options
  })
}

export const useAdmMocksMatches_ByChannelName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelName: string },
  options?: Omit<UseQueryOptions<GetMockMatchesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetMockMatchesResponse) => void
): UseQueryResult<GetMockMatchesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMocksMatches_ByChannelName>[1]) => async () => {
    const data = await MockMatchmakingAdminApi(sdk, { namespace: input.namespace }).getMocksMatches_ByChannelName(input.channelName)
    callback && callback(data)
    return data
  }

  return useQuery<GetMockMatchesResponse, AxiosError<ApiError>>({
    queryKey: [Key_MockMatchmakingAdmin.MocksMatches_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateMockMatche_ByChannelNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GetMockMatchesResponse, AxiosError<ApiError>, ApiArgs & { channelName: string; data: QueryMockBy }>,
    'mutationKey'
  >,
  callback?: (data: GetMockMatchesResponse) => void
): UseMutationResult<GetMockMatchesResponse, AxiosError<ApiError>, ApiArgs & { channelName: string; data: QueryMockBy }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; data: QueryMockBy }) => {
    const data = await MockMatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createMockMatche_ByChannelName(
      input.channelName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.MockMatche_ByChannelName],
    mutationFn,
    ...options
  })
}

export const useAdmMocksTickets_ByChannelName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelName: string },
  options?: Omit<UseQueryOptions<GetMockTicketsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetMockTicketsResponse) => void
): UseQueryResult<GetMockTicketsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMocksTickets_ByChannelName>[1]) => async () => {
    const data = await MockMatchmakingAdminApi(sdk, { namespace: input.namespace }).getMocksTickets_ByChannelName(input.channelName)
    callback && callback(data)
    return data
  }

  return useQuery<GetMockTicketsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MockMatchmakingAdmin.MocksTickets_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateMockTicket_ByChannelNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<MockTicketArray, AxiosError<ApiError>, ApiArgs & { channelName: string; data: CreateMockTicket }>,
    'mutationKey'
  >,
  callback?: (data: MockTicketArray) => void
): UseMutationResult<MockTicketArray, AxiosError<ApiError>, ApiArgs & { channelName: string; data: CreateMockTicket }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; data: CreateMockTicket }) => {
    const data = await MockMatchmakingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createMockTicket_ByChannelName(
      input.channelName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.MockTicket_ByChannelName],
    mutationFn,
    ...options
  })
}

export const useAdmCreateMockTicketBulk_ByChannelNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; data: MatchingParty[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelName: string; data: MatchingParty[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; data: MatchingParty[] }) => {
    const data = await MockMatchmakingAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createMockTicketBulk_ByChannelName(input.channelName, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.MockTicketBulk_ByChannelName],
    mutationFn,
    ...options
  })
}

export const useAdmCreateMockTicketQuery_ByChannelNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GetMockTicketsResponse, AxiosError<ApiError>, ApiArgs & { channelName: string; data: QueryMockBy }>,
    'mutationKey'
  >,
  callback?: (data: GetMockTicketsResponse) => void
): UseMutationResult<GetMockTicketsResponse, AxiosError<ApiError>, ApiArgs & { channelName: string; data: QueryMockBy }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelName: string; data: QueryMockBy }) => {
    const data = await MockMatchmakingAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createMockTicketQuery_ByChannelName(input.channelName, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MockMatchmakingAdmin.MockTicketQuery_ByChannelName],
    mutationFn,
    ...options
  })
}
