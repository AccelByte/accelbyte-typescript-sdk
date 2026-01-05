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
import { PublicCreatorApi } from '../PublicCreatorApi.js'

import { CreatorResponse } from '../../generated-definitions/CreatorResponse.js'
import { PaginatedCreatorOverviewResponse } from '../../generated-definitions/PaginatedCreatorOverviewResponse.js'

export enum Key_PublicCreator {
  Users = 'Ugc.PublicCreator.Users',
  User_ByUserId = 'Ugc.PublicCreator.User_ByUserId'
}

/**
 * Public user can access without token or if token specified, requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicCreator.Users, input]
 * }
 * ```
 */
export const usePublicCreatorApi_GetUsers = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; orderby?: string | null; sortby?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedCreatorOverviewResponse>) => void
): UseQueryResult<PaginatedCreatorOverviewResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicCreatorApi_GetUsers>[1]) => async () => {
    const response = await PublicCreatorApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedCreatorOverviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicCreator.Users, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public user can access without token or if token specified, requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicCreator.User_ByUserId, input]
 * }
 * ```
 */
export const usePublicCreatorApi_GetUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<CreatorResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CreatorResponse>) => void
): UseQueryResult<CreatorResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicCreatorApi_GetUser_ByUserId>[1]) => async () => {
    const response = await PublicCreatorApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUser_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CreatorResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicCreator.User_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
