/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
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
import { IapOrderPagingSlicedResult } from '../../generated-definitions/IapOrderPagingSlicedResult.js'
import { MockIapReceipt } from '../../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../../generated-definitions/PlaystationIapConfigRequest.js'
import { SteamIapConfig } from '../../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../../generated-definitions/SteamIapConfigRequest.js'
import { TestResult } from '../../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../../generated-definitions/XblIapConfigRequest.js'

export enum Key_IapAdmin {
  IapConfigXbl = 'IapAdmin.IapConfigXbl',
  IapConfigItem = 'IapAdmin.IapConfigItem',
  IapConfigApple = 'IapAdmin.IapConfigApple',
  IapConfigSteam = 'IapAdmin.IapConfigSteam',
  IapConfigGoogle = 'IapAdmin.IapConfigGoogle',
  IapConfigOculu = 'IapAdmin.IapConfigOculu',
  IapConfigOculus = 'IapAdmin.IapConfigOculus',
  IapConfigTwitch = 'IapAdmin.IapConfigTwitch',
  Iap_ByUserId = 'IapAdmin.Iap_ByUserId',
  IapConfigXblCert = 'IapAdmin.IapConfigXblCert',
  IapConfigEpicgame = 'IapAdmin.IapConfigEpicgame',
  IapConfigEpicgames = 'IapAdmin.IapConfigEpicgames',
  IapConfigGoogleCert = 'IapAdmin.IapConfigGoogleCert',
  IapConfigPlaystation = 'IapAdmin.IapConfigPlaystation',
  IapAll_ByUserId = 'IapAdmin.IapAll_ByUserId',
  IapConfigPlaystationValidate = 'IapAdmin.IapConfigPlaystationValidate',
  IapMockReceipt_ByUserId = 'IapAdmin.IapMockReceipt_ByUserId',
  IapConsumeHistory_ByUserId = 'IapAdmin.IapConsumeHistory_ByUserId'
}

export const useAdmDeleteIapConfigXblMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigXbl()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXbl],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigXbl = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<XblIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: XblIapConfigInfo) => void
): UseQueryResult<XblIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigXbl>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigXbl()
    callback && callback(data)
    return data
  }

  return useQuery<XblIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigXbl, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigXblMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<XblIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: XblIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: XblIapConfigInfo) => void
): UseMutationResult<XblIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: XblIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: XblIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigXbl(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXbl],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigItemMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigItem()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigItem],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigItem = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<IapItemConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: IapItemConfigInfo) => void
): UseQueryResult<IapItemConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigItem>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigItem()
    callback && callback(data)
    return data
  }

  return useQuery<IapItemConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigItem, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigItemMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<IapItemConfigInfo, AxiosError<ApiError>, ApiArgs & { data: IapItemConfigUpdate }>, 'mutationKey'>,
  callback?: (data: IapItemConfigInfo) => void
): UseMutationResult<IapItemConfigInfo, AxiosError<ApiError>, ApiArgs & { data: IapItemConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: IapItemConfigUpdate }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigItem(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigItem],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigAppleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigApple()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigApple],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigApple = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<AppleIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AppleIapConfigInfo) => void
): UseQueryResult<AppleIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigApple>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigApple()
    callback && callback(data)
    return data
  }

  return useQuery<AppleIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigApple, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigAppleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<AppleIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: AppleIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: AppleIapConfigInfo) => void
): UseMutationResult<AppleIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: AppleIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AppleIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigApple(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigApple],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigSteamMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigSteam()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigSteam],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigSteam = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<SteamIapConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SteamIapConfig) => void
): UseQueryResult<SteamIapConfig, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigSteam>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigSteam()
    callback && callback(data)
    return data
  }

  return useQuery<SteamIapConfig, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigSteam, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigSteamMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<SteamIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: SteamIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: SteamIapConfigInfo) => void
): UseMutationResult<SteamIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: SteamIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SteamIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigSteam(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigSteam],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigGoogleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigGoogle()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogle],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigGoogle = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GoogleIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GoogleIapConfigInfo) => void
): UseQueryResult<GoogleIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigGoogle>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigGoogle()
    callback && callback(data)
    return data
  }

  return useQuery<GoogleIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigGoogle, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigGoogleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<GoogleIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: GoogleIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: GoogleIapConfigInfo) => void
): UseMutationResult<GoogleIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: GoogleIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: GoogleIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigGoogle(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogle],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigOculuMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigOculu()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigOculu],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigOculus = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<OculusIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: OculusIapConfigInfo) => void
): UseQueryResult<OculusIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigOculus>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigOculus()
    callback && callback(data)
    return data
  }

  return useQuery<OculusIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigOculus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigOculuMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<OculusIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: OculusIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: OculusIapConfigInfo) => void
): UseMutationResult<OculusIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: OculusIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: OculusIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigOculu(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigOculu],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigTwitchMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigTwitch()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigTwitch],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigTwitch = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<TwitchIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TwitchIapConfigInfo) => void
): UseQueryResult<TwitchIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigTwitch>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigTwitch()
    callback && callback(data)
    return data
  }

  return useQuery<TwitchIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigTwitch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigTwitchMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<TwitchIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: TwitchIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: TwitchIapConfigInfo) => void
): UseMutationResult<TwitchIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: TwitchIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: TwitchIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigTwitch(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigTwitch],
    mutationFn,
    ...options
  })
}

export const useAdmIap_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      productId?: string | null
      startTime?: string | null
      status?: 'FAILED' | 'FULFILLED' | 'VERIFIED'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  },
  options?: Omit<UseQueryOptions<IapOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: IapOrderPagingSlicedResult) => void
): UseQueryResult<IapOrderPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIap_ByUserId>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIap_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<IapOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.Iap_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigXblCertMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<XblIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File; password?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: XblIapConfigInfo) => void
): UseMutationResult<XblIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File; password?: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File; password?: string | null } }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigXblCert(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXblCert],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigEpicgameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigEpicgame()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigEpicgame],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigEpicgames = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<EpicGamesIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: EpicGamesIapConfigInfo) => void
): UseQueryResult<EpicGamesIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigEpicgames>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigEpicgames()
    callback && callback(data)
    return data
  }

  return useQuery<EpicGamesIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigEpicgames, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigEpicgameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<EpicGamesIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: EpicGamesIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: EpicGamesIapConfigInfo) => void
): UseMutationResult<EpicGamesIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: EpicGamesIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: EpicGamesIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigEpicgame(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigEpicgame],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateIapConfigGoogleCertMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<GoogleIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: GoogleIapConfigInfo) => void
): UseMutationResult<GoogleIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File } }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigGoogleCert(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogleCert],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteIapConfigPlaystationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteIapConfigPlaystation()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystation],
    mutationFn,
    ...options
  })
}

export const useAdmIapConfigPlaystation = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PlayStationIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayStationIapConfigInfo) => void
): UseQueryResult<PlayStationIapConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigPlaystation>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigPlaystation()
    callback && callback(data)
    return data
  }

  return useQuery<PlayStationIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigPlaystation, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigPlaystationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlayStationIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PlaystationIapConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlayStationIapConfigInfo) => void
): UseMutationResult<PlayStationIapConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PlaystationIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PlaystationIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigPlaystation(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystation],
    mutationFn,
    ...options
  })
}

export const useAdmIapAll_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<IapOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: IapOrderPagingSlicedResult) => void
): UseQueryResult<IapOrderPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapAll_ByUserId>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapAll_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<IapOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapAll_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmIapConfigPlaystationValidate = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConfigPlaystationValidate>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConfigPlaystationValidate()
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigPlaystationValidate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateIapConfigPlaystationValidateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: PlaystationIapConfigRequest }>, 'mutationKey'>,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: PlaystationIapConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PlaystationIapConfigRequest }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapConfigPlaystationValidate(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystationValidate],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateIapMockReceipt_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: MockIapReceipt }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: MockIapReceipt }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: MockIapReceipt }) => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateIapMockReceipt_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_IapAdmin.IapMockReceipt_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmIapConsumeHistory_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: IapConsumeHistoryPagingSlicedResult) => void
): UseQueryResult<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmIapConsumeHistory_ByUserId>[1]) => async () => {
    const data = await IapAdminApi(sdk, { namespace: input.namespace }).getIapConsumeHistory_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConsumeHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
