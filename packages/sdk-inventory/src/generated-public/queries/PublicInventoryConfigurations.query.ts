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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicInventoryConfigurationsApi } from '../PublicInventoryConfigurationsApi.js'

import { ListInventoryConfigurationsResp } from '../../generated-definitions/ListInventoryConfigurationsResp.js'

export enum Key_PublicInventoryConfigurations {
  InventoryConfigurations = 'Inventory.PublicInventoryConfigurations.InventoryConfigurations'
}

/**
 *  Listing all inventory configurations in a namespace. The response body will be in the form of standard pagination.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicInventoryConfigurations.InventoryConfigurations, input]
 * }
 * ```
 */
export const usePublicInventoryConfigurationsApi_GetInventoryConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      code?: string | null
      limit?: number
      offset?: number
      sortBy?:
        | 'code'
        | 'code:asc'
        | 'code:desc'
        | 'createdAt'
        | 'createdAt:asc'
        | 'createdAt:desc'
        | 'updatedAt'
        | 'updatedAt:asc'
        | 'updatedAt:desc'
    }
  },
  options?: Omit<UseQueryOptions<ListInventoryConfigurationsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListInventoryConfigurationsResp>) => void
): UseQueryResult<ListInventoryConfigurationsResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicInventoryConfigurationsApi_GetInventoryConfigurations>[1]) => async () => {
      const response = await PublicInventoryConfigurationsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getInventoryConfigurations(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ListInventoryConfigurationsResp, AxiosError<ApiError>>({
    queryKey: [Key_PublicInventoryConfigurations.InventoryConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
