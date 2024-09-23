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
import { TradeActionAdminApi } from '../TradeActionAdminApi.js'

import { TradeActionPagingSlicedResult } from '../../generated-definitions/TradeActionPagingSlicedResult.js'
import { TradeChainActionHistoryInfo } from '../../generated-definitions/TradeChainActionHistoryInfo.js'
import { TradeChainedActionCommitRequest } from '../../generated-definitions/TradeChainedActionCommitRequest.js'

export enum Key_TradeActionAdmin {
  TradeCommit = 'Platform.TradeActionAdmin.TradeCommit',
  Trade_ByTransactionId = 'Platform.TradeActionAdmin.Trade_ByTransactionId',
  TradeHistoryByCriteria = 'Platform.TradeActionAdmin.TradeHistoryByCriteria'
}

/**
 * This API is used to create a chained operations&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chain action history&lt;/li&gt;&lt;li&gt;&lt;i&gt;FULFILL_ITEM operation supported item type&lt;/i&gt;: INGAMEITEM,LOOTBOX,OPTIONBOX&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TradeActionAdmin.TradeCommit, input]
 * }
 * ```
 */
export const useTradeActionAdminApi_CreateTradeCommitMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<TradeChainActionHistoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TradeChainedActionCommitRequest }>,
    'mutationKey'
  >,
  callback?: (data: TradeChainActionHistoryInfo) => void
): UseMutationResult<TradeChainActionHistoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TradeChainedActionCommitRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: TradeChainedActionCommitRequest }) => {
    const response = await TradeActionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTradeCommit(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TradeActionAdmin.TradeCommit],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to fetch a specific trade history using transaction ID&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history based on transaction ID&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TradeActionAdmin.Trade_ByTransactionId, input]
 * }
 * ```
 */
export const useTradeActionAdminApi_GetTrade_ByTransactionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { transactionId: string },
  options?: Omit<UseQueryOptions<TradeChainActionHistoryInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TradeChainActionHistoryInfo>) => void
): UseQueryResult<TradeChainActionHistoryInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTradeActionAdminApi_GetTrade_ByTransactionId>[1]) => async () => {
    const response = await TradeActionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTrade_ByTransactionId(input.transactionId)
    callback && callback(response)
    return response.data
  }

  return useQuery<TradeChainActionHistoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_TradeActionAdmin.Trade_ByTransactionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to fetch trade history based on the provided criteria&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history list based on criteria&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TradeActionAdmin.TradeHistoryByCriteria, input]
 * }
 * ```
 */
export const useTradeActionAdminApi_GetTradeHistoryByCriteria = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; offset?: number; status?: 'FAILED' | 'INIT' | 'SUCCESS'; type?: string | null; userId?: string | null }
  },
  options?: Omit<UseQueryOptions<TradeActionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TradeActionPagingSlicedResult>) => void
): UseQueryResult<TradeActionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTradeActionAdminApi_GetTradeHistoryByCriteria>[1]) => async () => {
    const response = await TradeActionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTradeHistoryByCriteria(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<TradeActionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_TradeActionAdmin.TradeHistoryByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
