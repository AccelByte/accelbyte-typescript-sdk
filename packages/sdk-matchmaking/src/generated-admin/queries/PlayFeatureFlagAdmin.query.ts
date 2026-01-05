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
import { PlayFeatureFlagAdminApi } from '../PlayFeatureFlagAdminApi.js'

import { PlayFeatureFlag } from '../../generated-definitions/PlayFeatureFlag.js'

export enum Key_PlayFeatureFlagAdmin {
  Playfeatureflag = 'Matchmaking.PlayFeatureFlagAdmin.Playfeatureflag'
}

/**
 *  Delete matchmaking Play Feature Flag. Deleting the current namespace&#39;s custom config only removes it from the database, the system will then use the environment variable defined in the ConfigMap instead.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayFeatureFlagAdmin.Playfeatureflag, input]
 * }
 * ```
 */
export const usePlayFeatureFlagAdminApi_DeletePlayfeatureflagMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await PlayFeatureFlagAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePlayfeatureflag()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayFeatureFlagAdmin.Playfeatureflag],
    mutationFn,
    ...options
  })
}

/**
 * Get matchmaking Play Feature Flag.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayFeatureFlagAdmin.Playfeatureflag, input]
 * }
 * ```
 */
export const usePlayFeatureFlagAdminApi_GetPlayfeatureflag = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PlayFeatureFlag, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayFeatureFlag>) => void
): UseQueryResult<PlayFeatureFlag, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayFeatureFlagAdminApi_GetPlayfeatureflag>[1]) => async () => {
    const response = await PlayFeatureFlagAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPlayfeatureflag()
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayFeatureFlag, AxiosError<ApiError>>({
    queryKey: [Key_PlayFeatureFlagAdmin.Playfeatureflag, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Upsert matchmaking Play Feature Flag.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayFeatureFlagAdmin.Playfeatureflag, input]
 * }
 * ```
 */
export const usePlayFeatureFlagAdminApi_UpdatePlayfeatureflagMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<PlayFeatureFlag, AxiosError<ApiError>, SdkSetConfigParam & { data: PlayFeatureFlag }>, 'mutationKey'>,
  callback?: (data: PlayFeatureFlag) => void
): UseMutationResult<PlayFeatureFlag, AxiosError<ApiError>, SdkSetConfigParam & { data: PlayFeatureFlag }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PlayFeatureFlag }) => {
    const response = await PlayFeatureFlagAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePlayfeatureflag(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayFeatureFlagAdmin.Playfeatureflag],
    mutationFn,
    ...options
  })
}
