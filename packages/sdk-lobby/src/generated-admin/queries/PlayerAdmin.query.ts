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
import { PlayerAdminApi } from '../PlayerAdminApi.js'

import { GetAllPlayerBlockedByUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { GetAllPlayerSessionAttributeResponse } from '../../generated-definitions/GetAllPlayerSessionAttributeResponse.js'
import { GetBulkAllPlayerBlockedUsersRequest } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersRequest.js'
import { GetBulkAllPlayerBlockedUsersResponse } from '../../generated-definitions/GetBulkAllPlayerBlockedUsersResponse.js'
import { GetLobbyCcuResponse } from '../../generated-definitions/GetLobbyCcuResponse.js'
import { GetPlayerSessionAttributeResponse } from '../../generated-definitions/GetPlayerSessionAttributeResponse.js'
import { ListBlockedPlayerRequest } from '../../generated-definitions/ListBlockedPlayerRequest.js'
import { ListUnblockPlayerRequest } from '../../generated-definitions/ListUnblockPlayerRequest.js'
import { SetPlayerSessionAttributeRequest } from '../../generated-definitions/SetPlayerSessionAttributeRequest.js'

export enum Key_PlayerAdmin {
  PlayerCcu = 'Lobby.PlayerAdmin.PlayerCcu',
  PlayerUserBulkBlocked = 'Lobby.PlayerAdmin.PlayerUserBulkBlocked',
  BlockedPlayer_ByUserId = 'Lobby.PlayerAdmin.BlockedPlayer_ByUserId',
  AttributesPlayer_ByUserId = 'Lobby.PlayerAdmin.AttributesPlayer_ByUserId',
  AttributePlayer_ByUserId = 'Lobby.PlayerAdmin.AttributePlayer_ByUserId',
  BlockedByPlayer_ByUserId = 'Lobby.PlayerAdmin.BlockedByPlayer_ByUserId',
  BulkBlockPlayer_ByUserId = 'Lobby.PlayerAdmin.BulkBlockPlayer_ByUserId',
  BulkUnblockPlayer_ByUserId = 'Lobby.PlayerAdmin.BulkUnblockPlayer_ByUserId',
  AttributePlayer_ByUserId_ByAttribute = 'Lobby.PlayerAdmin.AttributePlayer_ByUserId_ByAttribute'
}

/**
 * Get the number of players connected to the Lobby in the given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.PlayerCcu, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetPlayerCcu = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetLobbyCcuResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLobbyCcuResponse>) => void
): UseQueryResult<GetLobbyCcuResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetPlayerCcu>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlayerCcu()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLobbyCcuResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.PlayerCcu, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get blocked players data by bulk user ids in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.PlayerUserBulkBlocked, input]
 * }
 * ```
 */
export const usePlayerAdminApi_FetchPlayerUserBulkBlocked = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: GetBulkAllPlayerBlockedUsersRequest },
  options?: Omit<UseQueryOptions<GetBulkAllPlayerBlockedUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetBulkAllPlayerBlockedUsersResponse>) => void
): UseQueryResult<GetBulkAllPlayerBlockedUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_FetchPlayerUserBulkBlocked>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchPlayerUserBulkBlocked(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetBulkAllPlayerBlockedUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.PlayerUserBulkBlocked, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get blocked players data by user id in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.BlockedPlayer_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetBlockedPlayer_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllPlayerBlockedUsersResponse>) => void
): UseQueryResult<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetBlockedPlayer_ByUserId>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBlockedPlayer_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllPlayerBlockedUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.BlockedPlayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Get all player&#39;s session attribute by user id in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.AttributesPlayer_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetAttributesPlayer_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetAllPlayerSessionAttributeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllPlayerSessionAttributeResponse>) => void
): UseQueryResult<GetAllPlayerSessionAttributeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetAttributesPlayer_ByUserId>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAttributesPlayer_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllPlayerSessionAttributeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.AttributesPlayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Set player&#39;s session attribute by user id in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.AttributePlayer_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_UpdateAttributePlayer_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SetPlayerSessionAttributeRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: SetPlayerSessionAttributeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: SetPlayerSessionAttributeRequest }) => {
    const response = await PlayerAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAttributePlayer_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerAdmin.AttributePlayer_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Load get players who blocked this player in a namespace based on user id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.BlockedByPlayer_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetBlockedByPlayer_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllPlayerBlockedByUsersResponse>) => void
): UseQueryResult<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetBlockedByPlayer_ByUserId>[1]) => async () => {
    const response = await PlayerAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getBlockedByPlayer_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllPlayerBlockedByUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.BlockedByPlayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk block player in a namespace by list of user id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.BulkBlockPlayer_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_CreateBulkBlockPlayer_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: ListBlockedPlayerRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: ListBlockedPlayerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: ListBlockedPlayerRequest }) => {
    const response = await PlayerAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBulkBlockPlayer_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerAdmin.BulkBlockPlayer_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Bulk unblock player in a namespace by list of user id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.BulkUnblockPlayer_ByUserId, input]
 * }
 * ```
 */
export const usePlayerAdminApi_DeleteBulkUnblockPlayer_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: ListUnblockPlayerRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: ListUnblockPlayerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: ListUnblockPlayerRequest }) => {
    const response = await PlayerAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBulkUnblockPlayer_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerAdmin.BulkUnblockPlayer_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Get player&#39;s specific session attribute by user id in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerAdmin.AttributePlayer_ByUserId_ByAttribute, input]
 * }
 * ```
 */
export const usePlayerAdminApi_GetAttributePlayer_ByUserId_ByAttribute = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; attribute: string },
  options?: Omit<UseQueryOptions<GetPlayerSessionAttributeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetPlayerSessionAttributeResponse>) => void
): UseQueryResult<GetPlayerSessionAttributeResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePlayerAdminApi_GetAttributePlayer_ByUserId_ByAttribute>[1]) => async () => {
      const response = await PlayerAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAttributePlayer_ByUserId_ByAttribute(input.userId, input.attribute)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetPlayerSessionAttributeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerAdmin.AttributePlayer_ByUserId_ByAttribute, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
