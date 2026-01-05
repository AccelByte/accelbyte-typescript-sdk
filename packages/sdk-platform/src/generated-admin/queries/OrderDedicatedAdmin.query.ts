/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { OrderDedicatedAdminApi } from '../OrderDedicatedAdminApi.js'

import { OrderSyncResult } from '../../generated-definitions/OrderSyncResult.js'

export enum Key_OrderDedicatedAdmin {
  Orders = 'Platform.OrderDedicatedAdmin.Orders'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Sync orders. If response contains nextEvaluatedKey, please use it as query param in the next call to fetch the next batch, a batch has 1000 elements or less.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: sync orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OrderDedicatedAdmin.Orders, input]
 * }
 * ```
 */
export const useOrderDedicatedAdminApi_GetOrders = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { end: string | null; start: string | null; nextEvaluatedKey?: string | null } },
  options?: Omit<UseQueryOptions<OrderSyncResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<OrderSyncResult>) => void
): UseQueryResult<OrderSyncResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOrderDedicatedAdminApi_GetOrders>[1]) => async () => {
    const response = await OrderDedicatedAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getOrders(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<OrderSyncResult, AxiosError<ApiError>>({
    queryKey: [Key_OrderDedicatedAdmin.Orders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
