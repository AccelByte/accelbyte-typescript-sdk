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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GdprAdminApi } from '../GdprAdminApi.js'

import { BuildInfoPii } from '../../generated-definitions/BuildInfoPii.js'

export enum Key_GdprAdmin {
  GdprRemove = 'Buildinfo.GdprAdmin.GdprRemove',
  GdprRetrieve = 'Buildinfo.GdprAdmin.GdprRetrieve'
}

/**
 * This API is used to remove all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GdprAdmin.GdprRemove, input]
 * }
 * ```
 */
export const useGdprAdminApi_DeleteGdprRemoveMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BuildInfoPii, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { userId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: BuildInfoPii) => void
): UseMutationResult<BuildInfoPii, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { userId: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams: { userId: string | null } }) => {
    const response = await GdprAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGdprRemove(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GdprAdmin.GdprRemove],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get all stored data that relates to supplied machineId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of data related to machineId&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GdprAdmin.GdprRetrieve, input]
 * }
 * ```
 */
export const useGdprAdminApi_GetGdprRetrieve = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { userId: string | null } },
  options?: Omit<UseQueryOptions<BuildInfoPii, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildInfoPii>) => void
): UseQueryResult<BuildInfoPii, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGdprAdminApi_GetGdprRetrieve>[1]) => async () => {
    const response = await GdprAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGdprRetrieve(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildInfoPii, AxiosError<ApiError>>({
    queryKey: [Key_GdprAdmin.GdprRetrieve, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
