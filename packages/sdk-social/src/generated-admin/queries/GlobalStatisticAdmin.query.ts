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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GlobalStatisticAdminApi } from '../GlobalStatisticAdminApi.js'

import { GlobalStatItemInfo } from '../../generated-definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from '../../generated-definitions/GlobalStatItemPagingSlicedResult.js'

export enum Key_GlobalStatisticAdmin {
  Globalstatitems = 'Social.GlobalStatisticAdmin.Globalstatitems',
  Globalstatitem_ByStatCode = 'Social.GlobalStatisticAdmin.Globalstatitem_ByStatCode'
}

/**
 * List global statItems by pagination.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalStatisticAdmin.Globalstatitems, input]
 * }
 * ```
 */
export const useGlobalStatisticAdminApi_GetGlobalstatitems = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; statCodes?: string | null } },
  options?: Omit<UseQueryOptions<GlobalStatItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GlobalStatItemPagingSlicedResult>) => void
): UseQueryResult<GlobalStatItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGlobalStatisticAdminApi_GetGlobalstatitems>[1]) => async () => {
    const response = await GlobalStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGlobalstatitems(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GlobalStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_GlobalStatisticAdmin.Globalstatitems, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get global statItem by stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: global stat item&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalStatisticAdmin.Globalstatitem_ByStatCode, input]
 * }
 * ```
 */
export const useGlobalStatisticAdminApi_GetGlobalstatitem_ByStatCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { statCode: string },
  options?: Omit<UseQueryOptions<GlobalStatItemInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GlobalStatItemInfo>) => void
): UseQueryResult<GlobalStatItemInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGlobalStatisticAdminApi_GetGlobalstatitem_ByStatCode>[1]) => async () => {
    const response = await GlobalStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGlobalstatitem_ByStatCode(input.statCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<GlobalStatItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_GlobalStatisticAdmin.Globalstatitem_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
