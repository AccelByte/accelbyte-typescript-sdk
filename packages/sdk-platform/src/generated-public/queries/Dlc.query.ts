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
import { DlcApi } from '../DlcApi.js'

import { DlcConfigRewardShortInfo } from '../../generated-definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../../generated-definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../../generated-definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../../generated-definitions/PlayStationDlcSyncRequest.js'
import { SimpleUserDlcRewardContentsResponse } from '../../generated-definitions/SimpleUserDlcRewardContentsResponse.js'
import { SteamDlcSyncRequest } from '../../generated-definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../../generated-definitions/XblDlcSyncRequest.js'

export enum Key_Dlc {
  UsersMeDlcContent = 'Platform.Dlc.UsersMeDlcContent',
  DlcRewardsDurableMap = 'Platform.Dlc.DlcRewardsDurableMap',
  DlcPsnSync_ByUserId = 'Platform.Dlc.DlcPsnSync_ByUserId',
  DlcXblSync_ByUserId = 'Platform.Dlc.DlcXblSync_ByUserId',
  DlcSteamSync_ByUserId = 'Platform.Dlc.DlcSteamSync_ByUserId',
  DlcOculuSync_ByUserId = 'Platform.Dlc.DlcOculuSync_ByUserId',
  DlcEpicgameSync_ByUserId = 'Platform.Dlc.DlcEpicgameSync_ByUserId',
  DlcPsnSyncMultiServiceLabel_ByUserId = 'Platform.Dlc.DlcPsnSyncMultiServiceLabel_ByUserId'
}

/**
 * Get user dlc reward contents. If includeAllNamespaces is false, will only return the dlc synced from the current namespace&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.UsersMeDlcContent, input]
 * }
 * ```
 */
export const useDlcApi_GetUsersMeDlcContent = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: { type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'; includeAllNamespaces?: boolean | null }
  },
  options?: Omit<UseQueryOptions<SimpleUserDlcRewardContentsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SimpleUserDlcRewardContentsResponse>) => void
): UseQueryResult<SimpleUserDlcRewardContentsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcApi_GetUsersMeDlcContent>[1]) => async () => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeDlcContent(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SimpleUserDlcRewardContentsResponse, AxiosError<ApiError>>({
    queryKey: [Key_Dlc.UsersMeDlcContent, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get dlc reward simple map, only return the sku of durable item reward.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcRewardsDurableMap, input]
 * }
 * ```
 */
export const useDlcApi_GetDlcRewardsDurableMap = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' } },
  options?: Omit<UseQueryOptions<DlcConfigRewardShortInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DlcConfigRewardShortInfo>) => void
): UseQueryResult<DlcConfigRewardShortInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcApi_GetDlcRewardsDurableMap>[1]) => async () => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDlcRewardsDurableMap(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DlcConfigRewardShortInfo, AxiosError<ApiError>>({
    queryKey: [Key_Dlc.DlcRewardsDurableMap, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Synchronize with dlc entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcPsnSync_ByUserId, input]
 * }
 * ```
 */
export const useDlcApi_UpdateDlcPsnSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PlayStationDlcSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PlayStationDlcSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PlayStationDlcSyncRequest }) => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcPsnSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Dlc.DlcPsnSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync Xbox inventory&#39;s dlc items
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcXblSync_ByUserId, input]
 * }
 * ```
 */
export const useDlcApi_UpdateDlcXblSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: XblDlcSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: XblDlcSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: XblDlcSyncRequest }) => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcXblSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Dlc.DlcXblSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync steam dlc
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcSteamSync_ByUserId, input]
 * }
 * ```
 */
export const useDlcApi_UpdateDlcSteamSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SteamDlcSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SteamDlcSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SteamDlcSyncRequest }) => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcSteamSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Dlc.DlcSteamSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync oculus dlc
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcOculuSync_ByUserId, input]
 * }
 * ```
 */
export const useDlcApi_UpdateDlcOculuSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcOculuSync_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Dlc.DlcOculuSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync epic games dlc items
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcEpicgameSync_ByUserId, input]
 * }
 * ```
 */
export const useDlcApi_UpdateDlcEpicgameSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: EpicGamesDlcSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: EpicGamesDlcSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: EpicGamesDlcSyncRequest }) => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDlcEpicgameSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Dlc.DlcEpicgameSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Synchronize with dlc entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcPsnSyncMultiServiceLabel_ByUserId, input]
 * }
 * ```
 */
export const useDlcApi_UpdateDlcPsnSyncMultiServiceLabel_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: PlayStationDlcSyncMultiServiceLabelsRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: PlayStationDlcSyncMultiServiceLabelsRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PlayStationDlcSyncMultiServiceLabelsRequest }) => {
    const response = await DlcApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDlcPsnSyncMultiServiceLabel_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Dlc.DlcPsnSyncMultiServiceLabel_ByUserId],
    mutationFn,
    ...options
  })
}
