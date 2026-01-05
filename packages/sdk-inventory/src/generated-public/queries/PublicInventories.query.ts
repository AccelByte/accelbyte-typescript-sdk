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
import { PublicInventoriesApi } from '../PublicInventoriesApi.js'

import { ListInventoryResp } from '../../generated-definitions/ListInventoryResp.js'

export enum Key_PublicInventories {
  UsersMeInventories = 'Inventory.PublicInventories.UsersMeInventories'
}

/**
 *  Listing all my inventories in a namespace. The response body will be in the form of standard pagination.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicInventories.UsersMeInventories, input]
 * }
 * ```
 */
export const usePublicInventoriesApi_GetUsersMeInventories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      inventoryConfigurationCode?: string | null
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    }
  },
  options?: Omit<UseQueryOptions<ListInventoryResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListInventoryResp>) => void
): UseQueryResult<ListInventoryResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicInventoriesApi_GetUsersMeInventories>[1]) => async () => {
    const response = await PublicInventoriesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeInventories(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListInventoryResp, AxiosError<ApiError>>({
    queryKey: [Key_PublicInventories.UsersMeInventories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
