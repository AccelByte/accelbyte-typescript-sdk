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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PassAdminApi } from '../PassAdminApi.js'

import { PassCreate } from '../../generated-definitions/PassCreate.js'
import { PassInfo } from '../../generated-definitions/PassInfo.js'
import { PassInfoArray } from '../../generated-definitions/PassInfoArray.js'
import { PassUpdate } from '../../generated-definitions/PassUpdate.js'
import { UserPassGrant } from '../../generated-definitions/UserPassGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'

export enum Key_PassAdmin {
  Passes_BySeasonId = 'Seasonpass.PassAdmin.Passes_BySeasonId',
  Passe_BySeasonId = 'Seasonpass.PassAdmin.Passe_BySeasonId',
  Passe_BySeasonId_ByCode = 'Seasonpass.PassAdmin.Passe_BySeasonId_ByCode',
  SeasonCurrentPasse_ByUserId = 'Seasonpass.PassAdmin.SeasonCurrentPasse_ByUserId'
}

/**
 * This API is used to query all passes for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PassAdmin.Passes_BySeasonId, input]
 * }
 * ```
 */
export const usePassAdminApi_GetPasses_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string },
  options?: Omit<UseQueryOptions<PassInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PassInfoArray>) => void
): UseQueryResult<PassInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePassAdminApi_GetPasses_BySeasonId>[1]) => async () => {
    const response = await PassAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPasses_BySeasonId(
      input.seasonId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PassInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_PassAdmin.Passes_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create a pass for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created pass&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PassAdmin.Passe_BySeasonId, input]
 * }
 * ```
 */
export const usePassAdminApi_CreatePasse_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PassInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: PassCreate }>,
    'mutationKey'
  >,
  callback?: (data: PassInfo) => void
): UseMutationResult<PassInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: PassCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; data: PassCreate }) => {
    const response = await PassAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPasse_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.Passe_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete a pass permanently, only draft season pass can be deleted. &lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PassAdmin.Passe_BySeasonId_ByCode, input]
 * }
 * ```
 */
export const usePassAdminApi_DeletePasse_BySeasonId_ByCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; code: string }) => {
    const response = await PassAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePasse_BySeasonId_ByCode(input.seasonId, input.code)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.Passe_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get a pass for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: pass data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PassAdmin.Passe_BySeasonId_ByCode, input]
 * }
 * ```
 */
export const usePassAdminApi_GetPasse_BySeasonId_ByCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string; code: string },
  options?: Omit<UseQueryOptions<PassInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PassInfo>) => void
): UseQueryResult<PassInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePassAdminApi_GetPasse_BySeasonId_ByCode>[1]) => async () => {
    const response = await PassAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPasse_BySeasonId_ByCode(
      input.seasonId,
      input.code
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PassInfo, AxiosError<ApiError>>({
    queryKey: [Key_PassAdmin.Passe_BySeasonId_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update a pass. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated pass&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PassAdmin.Passe_BySeasonId_ByCode, input]
 * }
 * ```
 */
export const usePassAdminApi_PatchPasse_BySeasonId_ByCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PassInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string; data: PassUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PassInfo) => void
): UseMutationResult<PassInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string; data: PassUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; code: string; data: PassUpdate }) => {
    const response = await PassAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchPasse_BySeasonId_ByCode(
      input.seasonId,
      input.code,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.Passe_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to grant pass to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PassAdmin.SeasonCurrentPasse_ByUserId, input]
 * }
 * ```
 */
export const usePassAdminApi_CreateSeasonCurrentPasse_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPassGrant }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummary) => void
): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPassGrant }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserPassGrant }) => {
    const response = await PassAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentPasse_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.SeasonCurrentPasse_ByUserId],
    mutationFn,
    ...options
  })
}
