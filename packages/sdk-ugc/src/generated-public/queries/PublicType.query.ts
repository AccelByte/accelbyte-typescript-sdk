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
import { PublicTypeApi } from '../PublicTypeApi.js'

import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export enum Key_PublicType {
  Types = 'Ugc.PublicType.Types'
}

/**
 * Get available types paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicType.Types, input]
 * }
 * ```
 */
export const usePublicTypeApi_GetTypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetTypeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGetTypeResponse>) => void
): UseQueryResult<PaginatedGetTypeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicTypeApi_GetTypes>[1]) => async () => {
    const response = await PublicTypeApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTypes(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGetTypeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicType.Types, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
