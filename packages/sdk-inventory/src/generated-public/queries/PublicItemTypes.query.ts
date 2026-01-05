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
import { PublicItemTypesApi } from '../PublicItemTypesApi.js'

import { ListItemTypesResp } from '../../generated-definitions/ListItemTypesResp.js'

export enum Key_PublicItemTypes {
  Itemtypes = 'Inventory.PublicItemTypes.Itemtypes'
}

/**
 *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicItemTypes.Itemtypes, input]
 * }
 * ```
 */
export const usePublicItemTypesApi_GetItemtypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    }
  },
  options?: Omit<UseQueryOptions<ListItemTypesResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListItemTypesResp>) => void
): UseQueryResult<ListItemTypesResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicItemTypesApi_GetItemtypes>[1]) => async () => {
    const response = await PublicItemTypesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getItemtypes(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListItemTypesResp, AxiosError<ApiError>>({
    queryKey: [Key_PublicItemTypes.Itemtypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
