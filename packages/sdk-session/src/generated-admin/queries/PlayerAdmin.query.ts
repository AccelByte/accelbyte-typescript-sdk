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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PlayerAdminApi } from '../PlayerAdminApi.js'

import { PlayerAttributesResponseBody } from '../../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayerAttributesResponseBodyArray } from '../../generated-definitions/PlayerAttributesResponseBodyArray.js'

export enum Key_PlayerAdmin {
  UsersAttributes = 'Session.PlayerAdmin.UsersAttributes',
  Attributes_ByUserId = 'Session.PlayerAdmin.Attributes_ByUserId'
}

/**
 * Admin get attributes of players. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.UsersAttributes, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetUsersAttributes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { users?: string | null } },
  options?: Omit<UseQueryOptions<PlayerAttributesResponseBodyArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerAttributesResponseBodyArray>) => void
): UseQueryResult<PlayerAttributesResponseBodyArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetUsersAttributes>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersAttributes(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerAttributesResponseBodyArray, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.UsersAttributes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin get attributes of a player. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.Attributes_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetAttributes_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<PlayerAttributesResponseBody, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerAttributesResponseBody>) => void
): UseQueryResult<PlayerAttributesResponseBody, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetAttributes_ByUserId>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAttributes_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerAttributesResponseBody, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.Attributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
