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
import { UtilitiesAdminApi } from '../UtilitiesAdminApi.js'

import { ItemReferenceInfo } from '../../generated-definitions/ItemReferenceInfo.js'

export enum Key_UtilitiesAdmin {
  SeasonsItemReferences = 'Seasonpass.UtilitiesAdmin.SeasonsItemReferences'
}

/**
 * This API is used to get season pass ecommerce item references.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item references data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilitiesAdmin.SeasonsItemReferences, input]
 * }
 * ```
 */
export const useUtilitiesAdminApi_GetSeasonsItemReferences = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { itemId: string | null } },
  options?: Omit<UseQueryOptions<ItemReferenceInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemReferenceInfo>) => void
): UseQueryResult<ItemReferenceInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilitiesAdminApi_GetSeasonsItemReferences>[1]) => async () => {
    const response = await UtilitiesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSeasonsItemReferences(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemReferenceInfo, AxiosError<ApiError>>({
    queryKey: [Key_UtilitiesAdmin.SeasonsItemReferences, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
