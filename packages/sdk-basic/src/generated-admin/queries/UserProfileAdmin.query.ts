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
import { UserProfileAdminApi } from '../UserProfileAdminApi.js'

import { UserProfileAdmin } from '../../generated-definitions/UserProfileAdmin.js'
import { UserProfileBulkRequest } from '../../generated-definitions/UserProfileBulkRequest.js'
import { UserProfileInfo } from '../../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateInfo } from '../../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfoArray } from '../../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../../generated-definitions/UserProfileStatusUpdate.js'

export enum Key_UserProfileAdmin {
  ProfilePublic = 'Basic.UserProfileAdmin.ProfilePublic',
  ProfilesByPublicId = 'Basic.UserProfileAdmin.ProfilesByPublicId',
  Profile_ByUserId = 'Basic.UserProfileAdmin.Profile_ByUserId',
  Profiles_ByUserId = 'Basic.UserProfileAdmin.Profiles_ByUserId',
  ProfileStatus_ByUserId = 'Basic.UserProfileAdmin.ProfileStatus_ByUserId',
  ProfilesCustomAttributes_ByUserId = 'Basic.UserProfileAdmin.ProfilesCustomAttributes_ByUserId',
  ProfileCustomAttribute_ByUserId = 'Basic.UserProfileAdmin.ProfileCustomAttribute_ByUserId',
  ProfilesPrivateCustomAttributes_ByUserId = 'Basic.UserProfileAdmin.ProfilesPrivateCustomAttributes_ByUserId',
  ProfilePrivateCustomAttribute_ByUserId = 'Basic.UserProfileAdmin.ProfilePrivateCustomAttribute_ByUserId'
}

/**
 * Admin get user public profile by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:PROFILE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(GET)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11405&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user public profiles&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfilePublic, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_CreateProfilePublicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserProfilePublicInfoArray, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfileBulkRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserProfilePublicInfoArray) => void
): UseMutationResult<UserProfilePublicInfoArray, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfileBulkRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserProfileBulkRequest }) => {
    const response = await UserProfileAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createProfilePublic(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfilePublic],
    mutationFn,
    ...options
  })
}

/**
 * Get user profile by public id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfilesByPublicId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_GetProfilesByPublicId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { publicId: string | null } },
  options?: Omit<UseQueryOptions<UserProfileInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserProfileInfo>) => void
): UseQueryResult<UserProfileInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserProfileAdminApi_GetProfilesByPublicId>[1]) => async () => {
    const response = await UserProfileAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProfilesByPublicId(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserProfileInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.ProfilesByPublicId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11407&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Delete user profile&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.Profile_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_DeleteProfile_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: UserProfilePrivateInfo) => void
): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await UserProfileAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteProfile_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.Profile_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Get user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.Profiles_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_GetProfiles_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserProfilePrivateInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserProfilePrivateInfo>) => void
): UseQueryResult<UserProfilePrivateInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserProfileAdminApi_GetProfiles_ByUserId>[1]) => async () => {
    const response = await UserProfileAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProfiles_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserProfilePrivateInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.Profiles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated user profile&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.Profile_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_UpdateProfile_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserProfileAdmin }>,
    'mutationKey'
  >,
  callback?: (data: UserProfilePrivateInfo) => void
): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserProfileAdmin }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserProfileAdmin }) => {
    const response = await UserProfileAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProfile_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.Profile_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Update user profile status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11406&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user profile&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfileStatus_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_PatchProfileStatus_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserProfileStatusUpdate }>,
    'mutationKey'
  >,
  callback?: (data: UserProfilePrivateInfo) => void
): UseMutationResult<
  UserProfilePrivateInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: UserProfileStatusUpdate }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserProfileStatusUpdate }) => {
    const response = await UserProfileAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchProfileStatus_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfileStatus_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Get user custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfilesCustomAttributes_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_GetProfilesCustomAttributes_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserProfileAdminApi_GetProfilesCustomAttributes_ByUserId>[1]) => async () => {
      const response = await UserProfileAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getProfilesCustomAttributes_ByUserId(input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.ProfilesCustomAttributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update partially custom attributes tied to the user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfileCustomAttribute_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_UpdateProfileCustomAttribute_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: any }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: any }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: any }) => {
    const response = await UserProfileAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProfileCustomAttribute_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfileCustomAttribute_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Get user private custom attributes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: custom attributes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11403&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfilesPrivateCustomAttributes_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_GetProfilesPrivateCustomAttributes_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserProfileAdminApi_GetProfilesPrivateCustomAttributes_ByUserId>[1]) => async () => {
      const response = await UserProfileAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getProfilesPrivateCustomAttributes_ByUserId(input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.ProfilesPrivateCustomAttributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update partially private custom attributes tied to the user id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11402&lt;/li&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: allowed format: JSON object&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Updated custom attributes&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfileAdmin.ProfilePrivateCustomAttribute_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileAdminApi_UpdateProfilePrivateCustomAttribute_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: any }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: any }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: any }) => {
    const response = await UserProfileAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProfilePrivateCustomAttribute_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfilePrivateCustomAttribute_ByUserId],
    mutationFn,
    ...options
  })
}
