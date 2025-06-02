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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { IapAdminApi } from '../IapAdminApi.js'

import { AppleIapConfigInfo } from '../../generated-definitions/AppleIapConfigInfo.js'
import { AppleIapConfigRequest } from '../../generated-definitions/AppleIapConfigRequest.js'
import { EpicGamesIapConfigInfo } from '../../generated-definitions/EpicGamesIapConfigInfo.js'
import { EpicGamesIapConfigRequest } from '../../generated-definitions/EpicGamesIapConfigRequest.js'
import { GoogleIapConfigInfo } from '../../generated-definitions/GoogleIapConfigInfo.js'
import { GoogleIapConfigRequest } from '../../generated-definitions/GoogleIapConfigRequest.js'
import { IapConsumeHistoryPagingSlicedResult } from '../../generated-definitions/IapConsumeHistoryPagingSlicedResult.js'
import { IapItemConfigInfo } from '../../generated-definitions/IapItemConfigInfo.js'
import { IapItemConfigUpdate } from '../../generated-definitions/IapItemConfigUpdate.js'
import { IapOrderConsumeDetailInfoArray } from '../../generated-definitions/IapOrderConsumeDetailInfoArray.js'
import { IapOrderInfo } from '../../generated-definitions/IapOrderInfo.js'
import { IapOrderLineItemInfoArray } from '../../generated-definitions/IapOrderLineItemInfoArray.js'
import { IapOrderPagingSlicedResult } from '../../generated-definitions/IapOrderPagingSlicedResult.js'
import { IapOrderShortInfo } from '../../generated-definitions/IapOrderShortInfo.js'
import { MockIapReceipt } from '../../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../../generated-definitions/PlaystationIapConfigRequest.js'
import { ResetJobRequest } from '../../generated-definitions/ResetJobRequest.js'
import { SteamAbnormalTransactionPagingSlicedResult } from '../../generated-definitions/SteamAbnormalTransactionPagingSlicedResult.js'
import { SteamIapConfig } from '../../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../../generated-definitions/SteamIapConfigRequest.js'
import { SteamReportInfoPagingSlicedResult } from '../../generated-definitions/SteamReportInfoPagingSlicedResult.js'
import { SteamReportJobInfo } from '../../generated-definitions/SteamReportJobInfo.js'
import { SteamReportJobInfoArray } from '../../generated-definitions/SteamReportJobInfoArray.js'
import { SteamSyncByTransactionRequest } from '../../generated-definitions/SteamSyncByTransactionRequest.js'
import { TestResult } from '../../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../../generated-definitions/XblIapConfigRequest.js'

export enum Key_IapAdmin {
  IapSteamJob = 'Platform.IapAdmin.IapSteamJob',
  IapConfigXbl = 'Platform.IapAdmin.IapConfigXbl',
  IapConfigItem = 'Platform.IapAdmin.IapConfigItem',
  IapConfigApple = 'Platform.IapAdmin.IapConfigApple',
  IapConfigSteam = 'Platform.IapAdmin.IapConfigSteam',
  IapConfigGoogle = 'Platform.IapAdmin.IapConfigGoogle',
  IapConfigOculu = 'Platform.IapAdmin.IapConfigOculu',
  IapConfigOculus = 'Platform.IapAdmin.IapConfigOculus',
  IapConfigTwitch = 'Platform.IapAdmin.IapConfigTwitch',
  Iap_ByUserId = 'Platform.IapAdmin.Iap_ByUserId',
  IapConfigXblCert = 'Platform.IapAdmin.IapConfigXblCert',
  IapSteamJobReset = 'Platform.IapAdmin.IapSteamJobReset',
  IapConfigEpicgame = 'Platform.IapAdmin.IapConfigEpicgame',
  IapConfigEpicgames = 'Platform.IapAdmin.IapConfigEpicgames',
  IapConfigAppleCert = 'Platform.IapAdmin.IapConfigAppleCert',
  IapConfigGoogleCert = 'Platform.IapAdmin.IapConfigGoogleCert',
  IapConfigPlaystation = 'Platform.IapAdmin.IapConfigPlaystation',
  IapAll_ByUserId = 'Platform.IapAdmin.IapAll_ByUserId',
  IapSteamReportHistories = 'Platform.IapAdmin.IapSteamReportHistories',
  Consumedetails_ByIapOrderNo = 'Platform.IapAdmin.Consumedetails_ByIapOrderNo',
  IapConfigPlaystationValidate = 'Platform.IapAdmin.IapConfigPlaystationValidate',
  IapSteamAbnormalTransactions = 'Platform.IapAdmin.IapSteamAbnormalTransactions',
  IapMockReceipt_ByUserId = 'Platform.IapAdmin.IapMockReceipt_ByUserId',
  IapConsumeHistory_ByUserId = 'Platform.IapAdmin.IapConsumeHistory_ByUserId',
  RefundSteamIap_ByIapOrderNo = 'Platform.IapAdmin.RefundSteamIap_ByIapOrderNo',
  IapSteamSyncByTransaction_ByUserId = 'Platform.IapAdmin.IapSteamSyncByTransaction_ByUserId',
  IapSteamSyncAbnormalTransaction_ByUserId = 'Platform.IapAdmin.IapSteamSyncAbnormalTransaction_ByUserId',
  LineItemsIap_ByUserId_ByIapOrderNo = 'Platform.IapAdmin.LineItemsIap_ByUserId_ByIapOrderNo'
}

/**
 * Query steam report info
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapSteamJob, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapSteamJob = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<SteamReportJobInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SteamReportJobInfoArray>) => void
): UseQueryResult<SteamReportJobInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapSteamJob>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapSteamJob()
    callback && callback(response)
    return response.data
  }

  return useQuery<SteamReportJobInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapSteamJob, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete xbl iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigXbl, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigXblMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigXbl()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXbl],
    mutationFn,
    ...options
  })
}

/**
 * Get xbox iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: xbox iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigXbl, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigXbl = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<XblIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XblIapConfigInfo>) => void
): UseQueryResult<XblIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigXbl>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigXbl()
    callback && callback(response)
    return response.data
  }

  return useQuery<XblIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigXbl, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update xbl iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigXbl, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigXblMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: XblIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: XblIapConfigInfo) => void
): UseMutationResult<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: XblIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: XblIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigXbl(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXbl],
    mutationFn,
    ...options
  })
}

/**
 * delete a iap item config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigItem, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigItemMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigItem()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigItem],
    mutationFn,
    ...options
  })
}

/**
 * Get iap item config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigItem, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigItem = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<IapItemConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapItemConfigInfo>) => void
): UseQueryResult<IapItemConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigItem>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigItem()
    callback && callback(response)
    return response.data
  }

  return useQuery<IapItemConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigItem, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update iap item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated iap item config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigItem, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigItemMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<IapItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: IapItemConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: IapItemConfigInfo) => void
): UseMutationResult<IapItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: IapItemConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: IapItemConfigUpdate }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigItem(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigItem],
    mutationFn,
    ...options
  })
}

/**
 * Delete apple iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigApple, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigAppleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigApple()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigApple],
    mutationFn,
    ...options
  })
}

/**
 * Get apple iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: apple iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigApple, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigApple = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AppleIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppleIapConfigInfo>) => void
): UseQueryResult<AppleIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigApple>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigApple()
    callback && callback(response)
    return response.data
  }

  return useQuery<AppleIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigApple, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update apple iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigApple, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigAppleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AppleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: AppleIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: AppleIapConfigInfo) => void
): UseMutationResult<AppleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: AppleIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AppleIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigApple(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigApple],
    mutationFn,
    ...options
  })
}

/**
 * Delete steam iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigSteam, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigSteamMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigSteam()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigSteam],
    mutationFn,
    ...options
  })
}

/**
 * Get steam iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigSteam, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigSteam = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<SteamIapConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SteamIapConfig>) => void
): UseQueryResult<SteamIapConfig, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigSteam>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigSteam()
    callback && callback(response)
    return response.data
  }

  return useQuery<SteamIapConfig, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigSteam, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update steam iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigSteam, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigSteamMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SteamIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SteamIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: SteamIapConfigInfo) => void
): UseMutationResult<SteamIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SteamIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SteamIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigSteam(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigSteam],
    mutationFn,
    ...options
  })
}

/**
 * Delete google iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigGoogle, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigGoogleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigGoogle()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogle],
    mutationFn,
    ...options
  })
}

/**
 * Get google iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: google iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigGoogle, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigGoogle = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GoogleIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GoogleIapConfigInfo>) => void
): UseQueryResult<GoogleIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigGoogle>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigGoogle()
    callback && callback(response)
    return response.data
  }

  return useQuery<GoogleIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigGoogle, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update google iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigGoogle, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigGoogleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: GoogleIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: GoogleIapConfigInfo) => void
): UseMutationResult<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: GoogleIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: GoogleIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigGoogle(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogle],
    mutationFn,
    ...options
  })
}

/**
 * Delete oculus iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigOculu, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigOculuMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigOculu()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigOculu],
    mutationFn,
    ...options
  })
}

/**
 * Get oculus iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigOculus, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigOculus = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<OculusIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<OculusIapConfigInfo>) => void
): UseQueryResult<OculusIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigOculus>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigOculus()
    callback && callback(response)
    return response.data
  }

  return useQuery<OculusIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigOculus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update oculus iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigOculu, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigOculuMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<OculusIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: OculusIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: OculusIapConfigInfo) => void
): UseMutationResult<OculusIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: OculusIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: OculusIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigOculu(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigOculu],
    mutationFn,
    ...options
  })
}

/**
 * Delete twitch iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigTwitch, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigTwitchMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigTwitch()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigTwitch],
    mutationFn,
    ...options
  })
}

/**
 * Get twitch iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: twitch iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigTwitch, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigTwitch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<TwitchIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TwitchIapConfigInfo>) => void
): UseQueryResult<TwitchIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigTwitch>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigTwitch()
    callback && callback(response)
    return response.data
  }

  return useQuery<TwitchIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigTwitch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update twitch iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated twitch iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigTwitch, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigTwitchMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<TwitchIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: TwitchIapConfigInfo) => void
): UseMutationResult<TwitchIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: TwitchIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigTwitch(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigTwitch],
    mutationFn,
    ...options
  })
}

/**
 * Query IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.Iap_ByUserId, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIap_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      productId?: string | null
      startTime?: string | null
      status?: 'FAILED' | 'FULFILLED' | 'PARTIAL_REVOKED' | 'REVOKED' | 'REVOKE_FAILED' | 'VERIFIED'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  },
  options?: Omit<UseQueryOptions<IapOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapOrderPagingSlicedResult>) => void
): UseQueryResult<IapOrderPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIap_ByUserId>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIap_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<IapOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.Iap_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Upload xbl business partner cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigXblCert, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigXblCertMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File; password?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: XblIapConfigInfo) => void
): UseMutationResult<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File; password?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File; password?: string | null } }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigXblCert(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXblCert],
    mutationFn,
    ...options
  })
}

export const useIapAdminApi_UpdateIapSteamJobResetMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SteamReportJobInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetJobRequest }>,
    'mutationKey'
  >,
  callback?: (data: SteamReportJobInfo) => void
): UseMutationResult<SteamReportJobInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetJobRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetJobRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapSteamJobReset(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapSteamJobReset],
    mutationFn,
    ...options
  })
}

/**
 * Delete epic games iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigEpicgame, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigEpicgameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigEpicgame()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigEpicgame],
    mutationFn,
    ...options
  })
}

/**
 * Get epic games iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: epic games iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigEpicgames, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigEpicgames = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<EpicGamesIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EpicGamesIapConfigInfo>) => void
): UseQueryResult<EpicGamesIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigEpicgames>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigEpicgames()
    callback && callback(response)
    return response.data
  }

  return useQuery<EpicGamesIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigEpicgames, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update epic games iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated epic games iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigEpicgame, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigEpicgameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<EpicGamesIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: EpicGamesIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: EpicGamesIapConfigInfo) => void
): UseMutationResult<EpicGamesIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: EpicGamesIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: EpicGamesIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigEpicgame(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigEpicgame],
    mutationFn,
    ...options
  })
}

/**
 * Upload Apple Store p8 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigAppleCert, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigAppleCertMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AppleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: AppleIapConfigInfo) => void
): UseMutationResult<AppleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigAppleCert(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigAppleCert],
    mutationFn,
    ...options
  })
}

/**
 * Upload google play p12 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigGoogleCert, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigGoogleCertMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: GoogleIapConfigInfo) => void
): UseMutationResult<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigGoogleCert(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogleCert],
    mutationFn,
    ...options
  })
}

/**
 * Delete playstation iap config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigPlaystation, input]
 * }
 * ```
 */
export const useIapAdminApi_DeleteIapConfigPlaystationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteIapConfigPlaystation()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystation],
    mutationFn,
    ...options
  })
}

/**
 * Get playstation iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: playstation iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigPlaystation, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigPlaystation = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PlayStationIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayStationIapConfigInfo>) => void
): UseQueryResult<PlayStationIapConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigPlaystation>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConfigPlaystation()
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayStationIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigPlaystation, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated playstation iap config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigPlaystation, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigPlaystationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PlayStationIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlayStationIapConfigInfo) => void
): UseMutationResult<PlayStationIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PlaystationIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapConfigPlaystation(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystation],
    mutationFn,
    ...options
  })
}

/**
 * Query all user IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of iap orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapAll_ByUserId, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapAll_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<IapOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapOrderPagingSlicedResult>) => void
): UseQueryResult<IapOrderPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapAll_ByUserId>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapAll_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<IapOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapAll_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useIapAdminApi_GetIapSteamReportHistories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      limit?: number
      offset?: number
      orderId?: string | null
      processStatus?: 'ERROR' | 'IGNORED' | 'PROCESSED'
      steamId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<SteamReportInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SteamReportInfoPagingSlicedResult>) => void
): UseQueryResult<SteamReportInfoPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapSteamReportHistories>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapSteamReportHistories(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SteamReportInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapSteamReportHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get IAP Order Consume Details by IAP Order Number.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.Consumedetails_ByIapOrderNo, input]
 * }
 * ```
 */
export const useIapAdminApi_GetConsumedetails_ByIapOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { iapOrderNo: string },
  options?: Omit<UseQueryOptions<IapOrderConsumeDetailInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapOrderConsumeDetailInfoArray>) => void
): UseQueryResult<IapOrderConsumeDetailInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetConsumedetails_ByIapOrderNo>[1]) => async () => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConsumedetails_ByIapOrderNo(input.iapOrderNo)
    callback && callback(response)
    return response.data
  }

  return useQuery<IapOrderConsumeDetailInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.Consumedetails_ByIapOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigPlaystationValidate, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConfigPlaystationValidate = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConfigPlaystationValidate>[1]) => async () => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getIapConfigPlaystationValidate()
    callback && callback(response)
    return response.data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigPlaystationValidate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConfigPlaystationValidate, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapConfigPlaystationValidateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PlaystationIapConfigRequest }) => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateIapConfigPlaystationValidate(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystationValidate],
    mutationFn,
    ...options
  })
}

export const useIapAdminApi_GetIapSteamAbnormalTransactions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; orderId?: string | null; steamId?: string | null } },
  options?: Omit<UseQueryOptions<SteamAbnormalTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SteamAbnormalTransactionPagingSlicedResult>) => void
): UseQueryResult<SteamAbnormalTransactionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapSteamAbnormalTransactions>[1]) => async () => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getIapSteamAbnormalTransactions(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<SteamAbnormalTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapSteamAbnormalTransactions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Mock fulfill iap item without validate receipt.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapMockReceipt_ByUserId, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateIapMockReceipt_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: MockIapReceipt }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: MockIapReceipt }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: MockIapReceipt }) => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateIapMockReceipt_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapMockReceipt_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Query IAP consume history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap consume history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.IapConsumeHistory_ByUserId, input]
 * }
 * ```
 */
export const useIapAdminApi_GetIapConsumeHistory_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      status?: 'FAIL' | 'PENDING' | 'SUCCESS'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  },
  options?: Omit<UseQueryOptions<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapConsumeHistoryPagingSlicedResult>) => void
): UseQueryResult<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetIapConsumeHistory_ByUserId>[1]) => async () => {
    const response = await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getIapConsumeHistory_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConsumeHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Only support steam transaction mode
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.RefundSteamIap_ByIapOrderNo, input]
 * }
 * ```
 */
export const useIapAdminApi_UpdateRefundSteamIap_ByIapOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<IapOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { iapOrderNo: string }>, 'mutationKey'>,
  callback?: (data: IapOrderInfo) => void
): UseMutationResult<IapOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { iapOrderNo: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { iapOrderNo: string }) => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRefundSteamIap_ByIapOrderNo(input.iapOrderNo)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.RefundSteamIap_ByIapOrderNo],
    mutationFn,
    ...options
  })
}

export const useIapAdminApi_UpdateIapSteamSyncByTransaction_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      IapOrderShortInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: SteamSyncByTransactionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: IapOrderShortInfo) => void
): UseMutationResult<
  IapOrderShortInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: SteamSyncByTransactionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SteamSyncByTransactionRequest }) => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateIapSteamSyncByTransaction_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapSteamSyncByTransaction_ByUserId],
    mutationFn,
    ...options
  })
}

export const useIapAdminApi_UpdateIapSteamSyncAbnormalTransaction_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<IapOrderShortInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: IapOrderShortInfo) => void
): UseMutationResult<IapOrderShortInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateIapSteamSyncAbnormalTransaction_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapSteamSyncAbnormalTransaction_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Query IAP order ine items.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapAdmin.LineItemsIap_ByUserId_ByIapOrderNo, input]
 * }
 * ```
 */
export const useIapAdminApi_GetLineItemsIap_ByUserId_ByIapOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; iapOrderNo: string },
  options?: Omit<UseQueryOptions<IapOrderLineItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<IapOrderLineItemInfoArray>) => void
): UseQueryResult<IapOrderLineItemInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapAdminApi_GetLineItemsIap_ByUserId_ByIapOrderNo>[1]) => async () => {
    const response = await IapAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLineItemsIap_ByUserId_ByIapOrderNo(input.userId, input.iapOrderNo)
    callback && callback(response)
    return response.data
  }

  return useQuery<IapOrderLineItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.LineItemsIap_ByUserId_ByIapOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
