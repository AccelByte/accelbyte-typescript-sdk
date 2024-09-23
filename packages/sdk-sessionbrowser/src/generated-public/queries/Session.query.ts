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
import { SessionApi } from '../SessionApi.js'

import { AddPlayerRequest } from '../../generated-definitions/AddPlayerRequest.js'
import { AddPlayerResponse } from '../../generated-definitions/AddPlayerResponse.js'
import { CreateSessionRequest } from '../../generated-definitions/CreateSessionRequest.js'
import { JoinGameSessionRequest } from '../../generated-definitions/JoinGameSessionRequest.js'
import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'
import { SessionByUserIDsResponse } from '../../generated-definitions/SessionByUserIDsResponse.js'
import { SessionQueryResponse } from '../../generated-definitions/SessionQueryResponse.js'
import { SessionResponse } from '../../generated-definitions/SessionResponse.js'
import { UpdateSessionRequest } from '../../generated-definitions/UpdateSessionRequest.js'
import { UpdateSettingsRequest } from '../../generated-definitions/UpdateSettingsRequest.js'

export enum Key_Session {
  Gamesession = 'Sessionbrowser.Session.Gamesession',
  GamesessionBulk = 'Sessionbrowser.Session.GamesessionBulk',
  Recentplayer_ByUserId = 'Sessionbrowser.Session.Recentplayer_ByUserId',
  Gamesession_BySessionId = 'Sessionbrowser.Session.Gamesession_BySessionId',
  Join_BySessionId = 'Sessionbrowser.Session.Join_BySessionId',
  Player_BySessionId = 'Sessionbrowser.Session.Player_BySessionId',
  Locald_BySessionId = 'Sessionbrowser.Session.Locald_BySessionId',
  Setting_BySessionId = 'Sessionbrowser.Session.Setting_BySessionId',
  Player_BySessionId_ByUserId = 'Sessionbrowser.Session.Player_BySessionId_ByUserId'
}

/**
 * Query available game session
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Gamesession, input]
 * }
 * ```
 */
export const useSessionApi_GetGamesession = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      session_type: string | null
      game_mode?: string | null
      game_version?: string | null
      joinable?: string | null
      limit?: number
      match_exist?: string | null
      match_id?: string | null
      offset?: number
      server_status?: string | null
      user_id?: string | null
    }
  },
  options?: Omit<UseQueryOptions<SessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SessionQueryResponse>) => void
): UseQueryResult<SessionQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionApi_GetGamesession>[1]) => async () => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesession(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.Gamesession, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This end point intended to be called directly by P2P game client host or by DSMC
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Gamesession, input]
 * }
 * ```
 */
export const useSessionApi_CreateGamesessionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: SessionResponse) => void
): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateSessionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateSessionRequest }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createGamesession(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Gamesession],
    mutationFn,
    ...options
  })
}

/**
 * Query game sessions by comma separated user ids
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.GamesessionBulk, input]
 * }
 * ```
 */
export const useSessionApi_GetGamesessionBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { user_ids: string | null } },
  options?: Omit<UseQueryOptions<SessionByUserIDsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SessionByUserIDsResponse>) => void
): UseQueryResult<SessionByUserIDsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionApi_GetGamesessionBulk>[1]) => async () => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesessionBulk(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SessionByUserIDsResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.GamesessionBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query recent player by user ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Recentplayer_ByUserId, input]
 * }
 * ```
 */
export const useSessionApi_GetRecentplayer_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userID: string },
  options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RecentPlayerQueryResponse>) => void
): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionApi_GetRecentplayer_ByUserId>[1]) => async () => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecentplayer_ByUserId(
      input.userID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.Recentplayer_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete the session (p2p) by session ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_DeleteGamesession_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: SessionResponse) => void
): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGamesession_BySessionId(
      input.sessionID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Gamesession_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Get the session by session ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_GetGamesession_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionID: string },
  options?: Omit<UseQueryOptions<SessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SessionResponse>) => void
): UseQueryResult<SessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionApi_GetGamesession_BySessionId>[1]) => async () => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesession_BySessionId(
      input.sessionID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.Gamesession_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update game session, used to update the current player
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_UpdateGamesession_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; data: UpdateSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: SessionResponse) => void
): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; data: UpdateSessionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string; data: UpdateSessionRequest }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateGamesession_BySessionId(
      input.sessionID,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Gamesession_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Join the specified session by session ID. Possible the game required a password to join
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Join_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_FetchJoin_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionID: string; data: JoinGameSessionRequest },
  options?: Omit<UseQueryOptions<SessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SessionResponse>) => void
): UseQueryResult<SessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionApi_FetchJoin_BySessionId>[1]) => async () => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchJoin_BySessionId(
      input.sessionID,
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.Join_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Add player to game session
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Player_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_UpdatePlayer_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AddPlayerResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; data: AddPlayerRequest }>,
    'mutationKey'
  >,
  callback?: (data: AddPlayerResponse) => void
): UseMutationResult<AddPlayerResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; data: AddPlayerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string; data: AddPlayerRequest }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePlayer_BySessionId(
      input.sessionID,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Player_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Only use for local DS entry, will error when calling non local DS entry
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Locald_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_DeleteLocald_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: SessionResponse) => void
): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteLocald_BySessionId(
      input.sessionID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Locald_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Update game session, used to update OtherSettings
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Setting_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_UpdateSetting_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; data: UpdateSettingsRequest }>,
    'mutationKey'
  >,
  callback?: (data: SessionResponse) => void
): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; data: UpdateSettingsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string; data: UpdateSettingsRequest }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateSetting_BySessionId(
      input.sessionID,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Setting_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Remove player from game session
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Player_BySessionId_ByUserId, input]
 * }
 * ```
 */
export const useSessionApi_DeletePlayer_BySessionId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AddPlayerResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; userID: string }>,
    'mutationKey'
  >,
  callback?: (data: AddPlayerResponse) => void
): UseMutationResult<AddPlayerResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string; userID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string; userID: string }) => {
    const response = await SessionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePlayer_BySessionId_ByUserId(input.sessionID, input.userID)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Player_BySessionId_ByUserId],
    mutationFn,
    ...options
  })
}
