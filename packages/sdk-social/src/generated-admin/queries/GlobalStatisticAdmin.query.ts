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
import { GlobalStatisticAdminApi } from '../GlobalStatisticAdminApi.js'

import { GlobalStatItemInfo } from '../../generated-definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from '../../generated-definitions/GlobalStatItemPagingSlicedResult.js'

export enum Key_GlobalStatisticAdmin {
  Globalstatitems = 'GlobalStatisticAdmin.Globalstatitems',
  Globalstatitem_ByStatCode = 'GlobalStatisticAdmin.Globalstatitem_ByStatCode'
}

export const useAdmGlobalstatitems = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; statCodes?: string | null } },
  options?: Omit<UseQueryOptions<GlobalStatItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GlobalStatItemPagingSlicedResult) => void
): UseQueryResult<GlobalStatItemPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGlobalstatitems>[1]) => async () => {
    const data = await GlobalStatisticAdminApi(sdk, { namespace: input.namespace }).getGlobalstatitems(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GlobalStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_GlobalStatisticAdmin.Globalstatitems, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmGlobalstatitem_ByStatCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { statCode: string },
  options?: Omit<UseQueryOptions<GlobalStatItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GlobalStatItemInfo) => void
): UseQueryResult<GlobalStatItemInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGlobalstatitem_ByStatCode>[1]) => async () => {
    const data = await GlobalStatisticAdminApi(sdk, { namespace: input.namespace }).getGlobalstatitem_ByStatCode(input.statCode)
    callback && callback(data)
    return data
  }

  return useQuery<GlobalStatItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_GlobalStatisticAdmin.Globalstatitem_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
