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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { OrderDedicatedAdminApi } from '../OrderDedicatedAdminApi.js'

import { OrderSyncResult } from '../../generated-definitions/OrderSyncResult.js'

export enum Key_OrderDedicatedAdmin {
  Orders = 'OrderDedicatedAdmin.Orders'
}

export const useAdmOrders = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { end: string | null; start: string | null; nextEvaluatedKey?: string | null } },
  options?: Omit<UseQueryOptions<OrderSyncResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OrderSyncResult) => void
): UseQueryResult<OrderSyncResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmOrders>[1]) => async () => {
    const data = await OrderDedicatedAdminApi(sdk, { namespace: input.namespace }).getOrders(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<OrderSyncResult, AxiosError<ApiError>>({
    queryKey: [Key_OrderDedicatedAdmin.Orders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
