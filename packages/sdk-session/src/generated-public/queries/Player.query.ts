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
import { PlayerApi } from '../PlayerApi.js'

import { PlayerAttributesRequestBody } from '../../generated-definitions/PlayerAttributesRequestBody.js'
import { PlayerAttributesResponseBody } from '../../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayersCurrentPlatformRequest } from '../../generated-definitions/PlayersCurrentPlatformRequest.js'
import { PlayersCurrentPlatformResponse } from '../../generated-definitions/PlayersCurrentPlatformResponse.js'

export enum Key_Player {
  UserBulkPlatform = 'Session.Player.UserBulkPlatform',
  UserMeAttribute = 'Session.Player.UserMeAttribute',
  UsersMeAttributes = 'Session.Player.UsersMeAttributes'
}

/**
 * Get bulk players current platform.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.UserBulkPlatform, input]
 * }
 * ```
 */
export const usePlayerApi_FetchUserBulkPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: PlayersCurrentPlatformRequest },
  options?: Omit<UseQueryOptions<PlayersCurrentPlatformResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayersCurrentPlatformResponse>) => void
): UseQueryResult<PlayersCurrentPlatformResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerApi_FetchUserBulkPlatform>[1]) => async () => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchUserBulkPlatform(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayersCurrentPlatformResponse, AxiosError<ApiError>>({
    queryKey: [Key_Player.UserBulkPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Reset player attributes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.UserMeAttribute, input]
 * }
 * ```
 */
export const usePlayerApi_DeleteUserMeAttributeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUserMeAttribute()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Player.UserMeAttribute],
    mutationFn,
    ...options
  })
}

/**
 * Get player attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.UsersMeAttributes, input]
 * }
 * ```
 */
export const usePlayerApi_GetUsersMeAttributes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PlayerAttributesResponseBody, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerAttributesResponseBody>) => void
): UseQueryResult<PlayerAttributesResponseBody, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerApi_GetUsersMeAttributes>[1]) => async () => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeAttributes()
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerAttributesResponseBody, AxiosError<ApiError>>({
    queryKey: [Key_Player.UsersMeAttributes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API behaves to upsert player&#39;s attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Player.UserMeAttribute, input]
 * }
 * ```
 */
export const usePlayerApi_CreateUserMeAttributeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PlayerAttributesResponseBody, AxiosError<ApiError>, SdkSetConfigParam & { data: PlayerAttributesRequestBody }>,
    'mutationKey'
  >,
  callback?: (data: PlayerAttributesResponseBody) => void
): UseMutationResult<PlayerAttributesResponseBody, AxiosError<ApiError>, SdkSetConfigParam & { data: PlayerAttributesRequestBody }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PlayerAttributesRequestBody }) => {
    const response = await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeAttribute(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Player.UserMeAttribute],
    mutationFn,
    ...options
  })
}
