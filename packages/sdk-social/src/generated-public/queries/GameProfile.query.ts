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
import { GameProfileApi } from '../GameProfileApi.js'

import { Attribute } from '../../generated-definitions/Attribute.js'
import { GameProfileHeaderArray } from '../../generated-definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../../generated-definitions/GameProfileInfo.js'
import { GameProfileRequest } from '../../generated-definitions/GameProfileRequest.js'
import { UserGameProfilesArray } from '../../generated-definitions/UserGameProfilesArray.js'

export enum Key_GameProfile {
  Profiles = 'Social.GameProfile.Profiles',
  Profiles_ByUserId = 'Social.GameProfile.Profiles_ByUserId',
  Profile_ByUserId = 'Social.GameProfile.Profile_ByUserId',
  Profile_ByUserId_ByProfileId = 'Social.GameProfile.Profile_ByUserId_ByProfileId',
  Attribute_ByUserId_ByProfileId_ByAttributeName = 'Social.GameProfile.Attribute_ByUserId_ByProfileId_ByAttributeName'
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns all profiles for specified users.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Profiles, input]
 * }
 * ```
 */
export const useGameProfileApi_GetProfiles = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { userIds: string[] } },
  options?: Omit<UseQueryOptions<UserGameProfilesArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserGameProfilesArray>) => void
): UseQueryResult<UserGameProfilesArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameProfileApi_GetProfiles>[1]) => async () => {
    const response = await GameProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProfiles(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserGameProfilesArray, AxiosError<ApiError>>({
    queryKey: [Key_GameProfile.Profiles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns all profiles&#39; header for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Profiles_ByUserId, input]
 * }
 * ```
 */
export const useGameProfileApi_GetProfiles_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GameProfileHeaderArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameProfileHeaderArray>) => void
): UseQueryResult<GameProfileHeaderArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameProfileApi_GetProfiles_ByUserId>[1]) => async () => {
    const response = await GameProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProfiles_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameProfileHeaderArray, AxiosError<ApiError>>({
    queryKey: [Key_GameProfile.Profiles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Create new profile for user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/li&gt;: created game profile&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Profile_ByUserId, input]
 * }
 * ```
 */
export const useGameProfileApi_CreateProfile_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: GameProfileRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: GameProfileRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: GameProfileRequest }) => {
    const response = await GameProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createProfile_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameProfile.Profile_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes game profile.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Profile_ByUserId_ByProfileId, input]
 * }
 * ```
 */
export const useGameProfileApi_DeleteProfile_ByUserId_ByProfileIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; profileId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; profileId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; profileId: string }) => {
    const response = await GameProfileApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteProfile_ByUserId_ByProfileId(input.userId, input.profileId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameProfile.Profile_ByUserId_ByProfileId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns profile for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: game profile info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Profile_ByUserId_ByProfileId, input]
 * }
 * ```
 */
export const useGameProfileApi_GetProfile_ByUserId_ByProfileId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; profileId: string },
  options?: Omit<UseQueryOptions<GameProfileInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameProfileInfo>) => void
): UseQueryResult<GameProfileInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameProfileApi_GetProfile_ByUserId_ByProfileId>[1]) => async () => {
    const response = await GameProfileApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getProfile_ByUserId_ByProfileId(input.userId, input.profileId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GameProfileInfo, AxiosError<ApiError>>({
    queryKey: [Key_GameProfile.Profile_ByUserId_ByProfileId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates user game profile, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated game profile&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Profile_ByUserId_ByProfileId, input]
 * }
 * ```
 */
export const useGameProfileApi_UpdateProfile_ByUserId_ByProfileIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GameProfileInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; profileId: string; data: GameProfileRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GameProfileInfo) => void
): UseMutationResult<
  GameProfileInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; profileId: string; data: GameProfileRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; profileId: string; data: GameProfileRequest }) => {
    const response = await GameProfileApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProfile_ByUserId_ByProfileId(input.userId, input.profileId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameProfile.Profile_ByUserId_ByProfileId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Returns game profile attribute.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: attribute info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Attribute_ByUserId_ByProfileId_ByAttributeName, input]
 * }
 * ```
 */
export const useGameProfileApi_GetAttribute_ByUserId_ByProfileId_ByAttributeName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; profileId: string; attributeName: string },
  options?: Omit<UseQueryOptions<Attribute, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Attribute>) => void
): UseQueryResult<Attribute, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGameProfileApi_GetAttribute_ByUserId_ByProfileId_ByAttributeName>[1]) => async () => {
      const response = await GameProfileApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAttribute_ByUserId_ByProfileId_ByAttributeName(input.userId, input.profileId, input.attributeName)
      callback && callback(response)
      return response.data
    }

  return useQuery<Attribute, AxiosError<ApiError>>({
    queryKey: [Key_GameProfile.Attribute_ByUserId_ByProfileId_ByAttributeName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates game profile attribute, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated attribute&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameProfile.Attribute_ByUserId_ByProfileId_ByAttributeName, input]
 * }
 * ```
 */
export const useGameProfileApi_UpdateAttribute_ByUserId_ByProfileId_ByAttributeNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GameProfileInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; profileId: string; attributeName: string; data: Attribute }
    >,
    'mutationKey'
  >,
  callback?: (data: GameProfileInfo) => void
): UseMutationResult<
  GameProfileInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; profileId: string; attributeName: string; data: Attribute }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; profileId: string; attributeName: string; data: Attribute }) => {
    const response = await GameProfileApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAttribute_ByUserId_ByProfileId_ByAttributeName(input.userId, input.profileId, input.attributeName, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameProfile.Attribute_ByUserId_ByProfileId_ByAttributeName],
    mutationFn,
    ...options
  })
}
