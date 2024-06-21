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
import { TradeActionAdminApi } from '../TradeActionAdminApi.js'

import { TradeActionPagingSlicedResult } from '../../generated-definitions/TradeActionPagingSlicedResult.js'
import { TradeChainActionHistoryInfo } from '../../generated-definitions/TradeChainActionHistoryInfo.js'
import { TradeChainedActionCommitRequest } from '../../generated-definitions/TradeChainedActionCommitRequest.js'

export enum Key_TradeActionAdmin {
  TradeCommit = 'TradeActionAdmin.TradeCommit',
  Trade_ByTransactionId = 'TradeActionAdmin.Trade_ByTransactionId',
  TradeHistoryByCriteria = 'TradeActionAdmin.TradeHistoryByCriteria'
}

export const useAdmCreateTradeCommitMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TradeChainActionHistoryInfo, AxiosError<ApiError>, ApiArgs & { data: TradeChainedActionCommitRequest }>,
    'mutationKey'
  >,
  callback?: (data: TradeChainActionHistoryInfo) => void
): UseMutationResult<TradeChainActionHistoryInfo, AxiosError<ApiError>, ApiArgs & { data: TradeChainedActionCommitRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: TradeChainedActionCommitRequest }) => {
    const data = await TradeActionAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTradeCommit(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TradeActionAdmin.TradeCommit],
    mutationFn,
    ...options
  })
}

export const useAdmTrade_ByTransactionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { transactionId: string },
  options?: Omit<UseQueryOptions<TradeChainActionHistoryInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TradeChainActionHistoryInfo) => void
): UseQueryResult<TradeChainActionHistoryInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTrade_ByTransactionId>[1]) => async () => {
    const data = await TradeActionAdminApi(sdk, { namespace: input.namespace }).getTrade_ByTransactionId(input.transactionId)
    callback && callback(data)
    return data
  }

  return useQuery<TradeChainActionHistoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_TradeActionAdmin.Trade_ByTransactionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmTradeHistoryByCriteria = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { limit?: number; offset?: number; status?: 'FAILED' | 'INIT' | 'SUCCESS'; type?: string | null; userId?: string | null }
  },
  options?: Omit<UseQueryOptions<TradeActionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TradeActionPagingSlicedResult) => void
): UseQueryResult<TradeActionPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTradeHistoryByCriteria>[1]) => async () => {
    const data = await TradeActionAdminApi(sdk, { namespace: input.namespace }).getTradeHistoryByCriteria(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TradeActionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_TradeActionAdmin.TradeHistoryByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
