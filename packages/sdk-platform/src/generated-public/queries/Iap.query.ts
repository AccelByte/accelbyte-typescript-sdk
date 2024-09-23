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
import { IapApi } from '../IapApi.js'

import { AppleIapConfigVersionInfo } from '../../generated-definitions/AppleIapConfigVersionInfo.js'
import { AppleIapReceipt } from '../../generated-definitions/AppleIapReceipt.js'
import { AppleIapRequest } from '../../generated-definitions/AppleIapRequest.js'
import { EpicGamesReconcileRequest } from '../../generated-definitions/EpicGamesReconcileRequest.js'
import { EpicGamesReconcileResultArray } from '../../generated-definitions/EpicGamesReconcileResultArray.js'
import { GoogleIapReceipt } from '../../generated-definitions/GoogleIapReceipt.js'
import { GoogleReceiptResolveResult } from '../../generated-definitions/GoogleReceiptResolveResult.js'
import { IapItemMappingInfo } from '../../generated-definitions/IapItemMappingInfo.js'
import { OculusReconcileResultArray } from '../../generated-definitions/OculusReconcileResultArray.js'
import { PlayStationMultiServiceLabelsReconcileRequest } from '../../generated-definitions/PlayStationMultiServiceLabelsReconcileRequest.js'
import { PlayStationReconcileRequest } from '../../generated-definitions/PlayStationReconcileRequest.js'
import { PlayStationReconcileResultArray } from '../../generated-definitions/PlayStationReconcileResultArray.js'
import { SteamSyncRequest } from '../../generated-definitions/SteamSyncRequest.js'
import { TwitchSyncRequest } from '../../generated-definitions/TwitchSyncRequest.js'
import { TwitchSyncResultArray } from '../../generated-definitions/TwitchSyncResultArray.js'
import { XblReconcileRequest } from '../../generated-definitions/XblReconcileRequest.js'
import { XblReconcileResultArray } from '../../generated-definitions/XblReconcileResultArray.js'

export enum Key_Iap {
  IapItemMapping = 'Platform.Iap.IapItemMapping',
  IapAppleConfigVersion = 'Platform.Iap.IapAppleConfigVersion',
  UserMeIapTwitchSync = 'Platform.Iap.UserMeIapTwitchSync',
  IapPsnSync_ByUserId = 'Platform.Iap.IapPsnSync_ByUserId',
  IapXblSync_ByUserId = 'Platform.Iap.IapXblSync_ByUserId',
  IapSteamSync_ByUserId = 'Platform.Iap.IapSteamSync_ByUserId',
  IapOculuSync_ByUserId = 'Platform.Iap.IapOculuSync_ByUserId',
  IapTwitchSync_ByUserId = 'Platform.Iap.IapTwitchSync_ByUserId',
  IapAppleReceipt_ByUserId = 'Platform.Iap.IapAppleReceipt_ByUserId',
  IapEpicgameSync_ByUserId = 'Platform.Iap.IapEpicgameSync_ByUserId',
  IapGoogleReceipt_ByUserId = 'Platform.Iap.IapGoogleReceipt_ByUserId',
  IapAppleReceipt_ByUserId_v2 = 'Platform.Iap.IapAppleReceipt_ByUserId_v2',
  IapPsnSyncMultiServiceLabel_ByUserId = 'Platform.Iap.IapPsnSyncMultiServiceLabel_ByUserId'
}

/**
 * Get iap item mapping.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapItemMapping, input]
 * }
 * ```
 */
export const useIapApi_GetIapItemMapping = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX' }
  },
  options?: Omit<UseQueryOptions<IapItemMappingInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapItemMappingInfo>) => void
): UseQueryResult<IapItemMappingInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapApi_GetIapItemMapping>[1]) => async () => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapItemMapping(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<IapItemMappingInfo, AxiosError<ApiError>>({
    queryKey: [Key_Iap.IapItemMapping, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get apple config version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapAppleConfigVersion, input]
 * }
 * ```
 */
export const useIapApi_GetIapAppleConfigVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AppleIapConfigVersionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppleIapConfigVersionInfo>) => void
): UseQueryResult<AppleIapConfigVersionInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapApi_GetIapAppleConfigVersion>[1]) => async () => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapAppleConfigVersion()
    callback && callback(response)
    return response.data
  }

  return useQuery<AppleIapConfigVersionInfo, AxiosError<ApiError>>({
    queryKey: [Key_Iap.IapAppleConfigVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Sync my game twitch drops entitlements.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.UserMeIapTwitchSync, input]
 * }
 * ```
 */
export const useIapApi_UpdateUserMeIapTwitchSyncMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<TwitchSyncResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: TwitchSyncResultArray) => void
): UseMutationResult<TwitchSyncResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: TwitchSyncRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUserMeIapTwitchSync(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.UserMeIapTwitchSync],
    mutationFn,
    ...options
  })
}

/**
 * Synchronize with entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapPsnSync_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapPsnSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayStationReconcileResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: PlayStationReconcileRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayStationReconcileResultArray) => void
): UseMutationResult<
  PlayStationReconcileResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: PlayStationReconcileRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PlayStationReconcileRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapPsnSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapPsnSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync Xbox inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapXblSync_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapXblSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<XblReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: XblReconcileRequest }>,
    'mutationKey'
  >,
  callback?: (data: XblReconcileResultArray) => void
): UseMutationResult<XblReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: XblReconcileRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: XblReconcileRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapXblSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapXblSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync steam inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapSteamSync_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapSteamSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SteamSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SteamSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SteamSyncRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapSteamSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapSteamSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync Oculus entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapOculuSync_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapOculuSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<OculusReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>,
    'mutationKey'
  >,
  callback?: (data: OculusReconcileResultArray) => void
): UseMutationResult<OculusReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapOculuSync_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapOculuSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync twitch drops entitlements.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapTwitchSync_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapTwitchSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: TwitchSyncRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: TwitchSyncRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: TwitchSyncRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapTwitchSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapTwitchSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Verify apple iap receipt and fulfill item. don&#39;t support subscriptionOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapAppleReceipt_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapAppleReceipt_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AppleIapReceipt }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AppleIapReceipt }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: AppleIapReceipt }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapAppleReceipt_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapAppleReceipt_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Sync epic games inventory&#39;s items.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapEpicgameSync_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapEpicgameSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      EpicGamesReconcileResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: EpicGamesReconcileRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: EpicGamesReconcileResultArray) => void
): UseMutationResult<
  EpicGamesReconcileResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: EpicGamesReconcileRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: EpicGamesReconcileRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapEpicgameSync_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapEpicgameSync_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Verify google iap receipt and fulfill item.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapGoogleReceipt_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapGoogleReceipt_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GoogleReceiptResolveResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: GoogleIapReceipt }>,
    'mutationKey'
  >,
  callback?: (data: GoogleReceiptResolveResult) => void
): UseMutationResult<GoogleReceiptResolveResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: GoogleIapReceipt }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: GoogleIapReceipt }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapGoogleReceipt_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapGoogleReceipt_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Verify apple iap transaction and fulfill item, support subscriptionOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapAppleReceipt_ByUserId_v2, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapAppleReceipt_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AppleIapRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AppleIapRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: AppleIapRequest }) => {
    const response = await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapAppleReceipt_ByUserId_v2(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapAppleReceipt_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Synchronize with entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Iap.IapPsnSyncMultiServiceLabel_ByUserId, input]
 * }
 * ```
 */
export const useIapApi_UpdateIapPsnSyncMultiServiceLabel_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayStationReconcileResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: PlayStationMultiServiceLabelsReconcileRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayStationReconcileResultArray) => void
): UseMutationResult<
  PlayStationReconcileResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: PlayStationMultiServiceLabelsReconcileRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PlayStationMultiServiceLabelsReconcileRequest }) => {
    const response = await IapApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateIapPsnSyncMultiServiceLabel_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Iap.IapPsnSyncMultiServiceLabel_ByUserId],
    mutationFn,
    ...options
  })
}
