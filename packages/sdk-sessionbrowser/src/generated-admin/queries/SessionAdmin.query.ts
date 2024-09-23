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
import { SessionAdminApi } from '../SessionAdminApi.js'

import { ActiveCustomGameResponse } from '../../generated-definitions/ActiveCustomGameResponse.js'
import { ActiveMatchmakingGameResponse } from '../../generated-definitions/ActiveMatchmakingGameResponse.js'
import { AdminSessionResponse } from '../../generated-definitions/AdminSessionResponse.js'
import { CountActiveSessionResponse } from '../../generated-definitions/CountActiveSessionResponse.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponseV2 } from '../../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { SessionQueryResponse } from '../../generated-definitions/SessionQueryResponse.js'

export enum Key_SessionAdmin {
  Gamesession = 'Sessionbrowser.SessionAdmin.Gamesession',
  Gamesession_BySessionId = 'Sessionbrowser.SessionAdmin.Gamesession_BySessionId',
  SessionsHistorySearch = 'Sessionbrowser.SessionAdmin.SessionsHistorySearch',
  GamesessionActiveCount = 'Sessionbrowser.SessionAdmin.GamesessionActiveCount',
  GamesessionActiveCustomGame = 'Sessionbrowser.SessionAdmin.GamesessionActiveCustomGame',
  GamesessionActiveMatchmakingGame = 'Sessionbrowser.SessionAdmin.GamesessionActiveMatchmakingGame',
  HistoryDetailed_ByMatchId = 'Sessionbrowser.SessionAdmin.HistoryDetailed_ByMatchId'
}

/**
 * Query to available game session
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.Gamesession, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetGamesession = (
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
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetGamesession>[1]) => async () => {
    const response = await SessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesession(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.Gamesession, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin delete the session by session ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useSessionAdminApi_DeleteGamesession_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<AdminSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: AdminSessionResponse) => void
): UseMutationResult<AdminSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string }) => {
    const response = await SessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteGamesession_BySessionId(input.sessionID)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SessionAdmin.Gamesession_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Get the session by session ID for admin user
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetGamesession_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionID: string },
  options?: Omit<UseQueryOptions<AdminSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AdminSessionResponse>) => void
): UseQueryResult<AdminSessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetGamesession_BySessionId>[1]) => async () => {
    const response = await SessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGamesession_BySessionId(input.sessionID)
    callback && callback(response)
    return response.data
  }

  return useQuery<AdminSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.Gamesession_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.SessionsHistorySearch, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetSessionsHistorySearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      limit: number
      offset: number
      channel?: string | null
      deleted?: boolean | null
      matchID?: string | null
      partyID?: string | null
      sessionType?: string | null
      status?: string | null
      userID?: string | null
    }
  },
  options?: Omit<UseQueryOptions<GetSessionHistorySearchResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetSessionHistorySearchResponseV2>) => void
): UseQueryResult<GetSessionHistorySearchResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetSessionsHistorySearch>[1]) => async () => {
    const response = await SessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSessionsHistorySearch(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetSessionHistorySearchResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.SessionsHistorySearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all active session
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.GamesessionActiveCount, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetGamesessionActiveCount = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { session_type?: string | null } },
  options?: Omit<UseQueryOptions<CountActiveSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountActiveSessionResponse>) => void
): UseQueryResult<CountActiveSessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetGamesessionActiveCount>[1]) => async () => {
    const response = await SessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesessionActiveCount(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CountActiveSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.GamesessionActiveCount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all active session for custom game, this return only dedicated session type
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.GamesessionActiveCustomGame, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetGamesessionActiveCustomGame = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; offset?: number; server_region?: string | null; session_id?: string | null }
  },
  options?: Omit<UseQueryOptions<ActiveCustomGameResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ActiveCustomGameResponse>) => void
): UseQueryResult<ActiveCustomGameResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetGamesessionActiveCustomGame>[1]) => async () => {
    const response = await SessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGamesessionActiveCustomGame(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ActiveCustomGameResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.GamesessionActiveCustomGame, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all active session for matchmaking game, this return only dedicated session type
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.GamesessionActiveMatchmakingGame, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetGamesessionActiveMatchmakingGame = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; match_id?: string | null; offset?: number; server_region?: string | null; session_id?: string | null }
  },
  options?: Omit<UseQueryOptions<ActiveMatchmakingGameResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ActiveMatchmakingGameResponse>) => void
): UseQueryResult<ActiveMatchmakingGameResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetGamesessionActiveMatchmakingGame>[1]) => async () => {
    const response = await SessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGamesessionActiveMatchmakingGame(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ActiveMatchmakingGameResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.GamesessionActiveMatchmakingGame, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get session history detailed. if party_id value empty/null, field will not show in response body.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionAdmin.HistoryDetailed_ByMatchId, input]
 * }
 * ```
 */
export const useSessionAdminApi_GetHistoryDetailed_ByMatchId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { matchID: string },
  options?: Omit<UseQueryOptions<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetSessionHistoryDetailedResponseItemArray>) => void
): UseQueryResult<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionAdminApi_GetHistoryDetailed_ByMatchId>[1]) => async () => {
    const response = await SessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getHistoryDetailed_ByMatchId(input.matchID)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.HistoryDetailed_ByMatchId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
