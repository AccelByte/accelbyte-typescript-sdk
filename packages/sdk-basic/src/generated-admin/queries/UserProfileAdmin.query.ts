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
import { UserProfileAdminApi } from '../UserProfileAdminApi.js'

import { UserProfileAdmin } from '../../generated-definitions/UserProfileAdmin.js'
import { UserProfileBulkRequest } from '../../generated-definitions/UserProfileBulkRequest.js'
import { UserProfileInfo } from '../../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateInfo } from '../../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfoArray } from '../../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../../generated-definitions/UserProfileStatusUpdate.js'

export enum Key_UserProfileAdmin {
  ProfilePublic = 'UserProfileAdmin.ProfilePublic',
  ProfilesByPublicId = 'UserProfileAdmin.ProfilesByPublicId',
  Profile_ByUserId = 'UserProfileAdmin.Profile_ByUserId',
  Profiles_ByUserId = 'UserProfileAdmin.Profiles_ByUserId',
  ProfileStatus_ByUserId = 'UserProfileAdmin.ProfileStatus_ByUserId',
  ProfilesCustomAttributes_ByUserId = 'UserProfileAdmin.ProfilesCustomAttributes_ByUserId',
  ProfileCustomAttribute_ByUserId = 'UserProfileAdmin.ProfileCustomAttribute_ByUserId',
  ProfilesPrivateCustomAttributes_ByUserId = 'UserProfileAdmin.ProfilesPrivateCustomAttributes_ByUserId',
  ProfilePrivateCustomAttribute_ByUserId = 'UserProfileAdmin.ProfilePrivateCustomAttribute_ByUserId'
}

export const useAdmCreateProfilePublicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserProfilePublicInfoArray, AxiosError<ApiError>, ApiArgs & { data: UserProfileBulkRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserProfilePublicInfoArray) => void
): UseMutationResult<UserProfilePublicInfoArray, AxiosError<ApiError>, ApiArgs & { data: UserProfileBulkRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UserProfileBulkRequest }) => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfilePublic(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfilePublic],
    mutationFn,
    ...options
  })
}

export const useAdmProfilesByPublicId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { publicId: string | null } },
  options?: Omit<UseQueryOptions<UserProfileInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserProfileInfo) => void
): UseQueryResult<UserProfileInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfilesByPublicId>[1]) => async () => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace }).getProfilesByPublicId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserProfileInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.ProfilesByPublicId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteProfile_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: UserProfilePrivateInfo) => void
): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteProfile_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.Profile_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmProfiles_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<UserProfilePrivateInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserProfilePrivateInfo) => void
): UseQueryResult<UserProfilePrivateInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfiles_ByUserId>[1]) => async () => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace }).getProfiles_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<UserProfilePrivateInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.Profiles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateProfile_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserProfileAdmin }>,
    'mutationKey'
  >,
  callback?: (data: UserProfilePrivateInfo) => void
): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserProfileAdmin }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserProfileAdmin }) => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateProfile_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.Profile_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchProfileStatus_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserProfileStatusUpdate }>,
    'mutationKey'
  >,
  callback?: (data: UserProfilePrivateInfo) => void
): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserProfileStatusUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserProfileStatusUpdate }) => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchProfileStatus_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfileStatus_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmProfilesCustomAttributes_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfilesCustomAttributes_ByUserId>[1]) => async () => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace }).getProfilesCustomAttributes_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.ProfilesCustomAttributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateProfileCustomAttribute_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: any }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: any }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: any }) => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateProfileCustomAttribute_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfileCustomAttribute_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmProfilesPrivateCustomAttributes_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfilesPrivateCustomAttributes_ByUserId>[1]) => async () => {
    const data = await UserProfileAdminApi(sdk, { namespace: input.namespace }).getProfilesPrivateCustomAttributes_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UserProfileAdmin.ProfilesPrivateCustomAttributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateProfilePrivateCustomAttribute_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: any }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: any }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: any }) => {
    const data = await UserProfileAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateProfilePrivateCustomAttribute_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserProfileAdmin.ProfilePrivateCustomAttribute_ByUserId],
    mutationFn,
    ...options
  })
}
