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
import { PublicReasonsApi } from '../PublicReasonsApi.js'

import { PublicReasonListResponse } from '../../generated-definitions/PublicReasonListResponse.js'
import { ReasonGroupListResponse } from '../../generated-definitions/ReasonGroupListResponse.js'

export enum Key_PublicReasons {
  Reasons = 'Reporting.PublicReasons.Reasons',
  ReasonGroups = 'Reporting.PublicReasons.ReasonGroups'
}

export const usePublicReasonsApi_GetReasons = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { group?: string | null; limit?: number; offset?: number; title?: string | null } },
  options?: Omit<UseQueryOptions<PublicReasonListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicReasonListResponse>) => void
): UseQueryResult<PublicReasonListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicReasonsApi_GetReasons>[1]) => async () => {
    const response = await PublicReasonsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasons(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicReasonListResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicReasons.Reasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Return list of reason groups ID and title under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicReasons.ReasonGroups, input]
 * }
 * ```
 */
export const usePublicReasonsApi_GetReasonGroups = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ReasonGroupListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ReasonGroupListResponse>) => void
): UseQueryResult<ReasonGroupListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicReasonsApi_GetReasonGroups>[1]) => async () => {
    const response = await PublicReasonsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasonGroups(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ReasonGroupListResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicReasons.ReasonGroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
