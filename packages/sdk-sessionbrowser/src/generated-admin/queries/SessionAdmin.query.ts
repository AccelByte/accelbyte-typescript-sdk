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
import { SessionAdminApi } from '../SessionAdminApi.js'

import { ActiveCustomGameResponse } from '../../generated-definitions/ActiveCustomGameResponse.js'
import { ActiveMatchmakingGameResponse } from '../../generated-definitions/ActiveMatchmakingGameResponse.js'
import { AdminSessionResponse } from '../../generated-definitions/AdminSessionResponse.js'
import { CountActiveSessionResponse } from '../../generated-definitions/CountActiveSessionResponse.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponseV2 } from '../../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { SessionQueryResponse } from '../../generated-definitions/SessionQueryResponse.js'

export enum Key_SessionAdmin {
  Gamesession = 'SessionAdmin.Gamesession',
  Gamesession_BySessionId = 'SessionAdmin.Gamesession_BySessionId',
  SessionsHistorySearch = 'SessionAdmin.SessionsHistorySearch',
  GamesessionActiveCount = 'SessionAdmin.GamesessionActiveCount',
  GamesessionActiveCustomGame = 'SessionAdmin.GamesessionActiveCustomGame',
  GamesessionActiveMatchmakingGame = 'SessionAdmin.GamesessionActiveMatchmakingGame',
  HistoryDetailed_ByMatchId = 'SessionAdmin.HistoryDetailed_ByMatchId'
}

export const useAdmGamesession = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: SessionQueryResponse) => void
): UseQueryResult<SessionQueryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGamesession>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getGamesession(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<SessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.Gamesession, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteGamesession_BySessionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<AdminSessionResponse, AxiosError<ApiError>, ApiArgs & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: AdminSessionResponse) => void
): UseMutationResult<AdminSessionResponse, AxiosError<ApiError>, ApiArgs & { sessionID: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { sessionID: string }) => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGamesession_BySessionId(
      input.sessionID
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SessionAdmin.Gamesession_BySessionId],
    mutationFn,
    ...options
  })
}

export const useAdmGamesession_BySessionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { sessionID: string },
  options?: Omit<UseQueryOptions<AdminSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminSessionResponse) => void
): UseQueryResult<AdminSessionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGamesession_BySessionId>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getGamesession_BySessionId(input.sessionID)
    callback && callback(data)
    return data
  }

  return useQuery<AdminSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.Gamesession_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSessionsHistorySearch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: GetSessionHistorySearchResponseV2) => void
): UseQueryResult<GetSessionHistorySearchResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSessionsHistorySearch>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getSessionsHistorySearch(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetSessionHistorySearchResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.SessionsHistorySearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmGamesessionActiveCount = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { session_type?: string | null } },
  options?: Omit<UseQueryOptions<CountActiveSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CountActiveSessionResponse) => void
): UseQueryResult<CountActiveSessionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGamesessionActiveCount>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getGamesessionActiveCount(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CountActiveSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.GamesessionActiveCount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmGamesessionActiveCustomGame = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; server_region?: string | null; session_id?: string | null } },
  options?: Omit<UseQueryOptions<ActiveCustomGameResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ActiveCustomGameResponse) => void
): UseQueryResult<ActiveCustomGameResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGamesessionActiveCustomGame>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getGamesessionActiveCustomGame(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ActiveCustomGameResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.GamesessionActiveCustomGame, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmGamesessionActiveMatchmakingGame = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { limit?: number; match_id?: string | null; offset?: number; server_region?: string | null; session_id?: string | null }
  },
  options?: Omit<UseQueryOptions<ActiveMatchmakingGameResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ActiveMatchmakingGameResponse) => void
): UseQueryResult<ActiveMatchmakingGameResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGamesessionActiveMatchmakingGame>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getGamesessionActiveMatchmakingGame(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ActiveMatchmakingGameResponse, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.GamesessionActiveMatchmakingGame, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmHistoryDetailed_ByMatchId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { matchID: string },
  options?: Omit<UseQueryOptions<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetSessionHistoryDetailedResponseItemArray) => void
): UseQueryResult<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmHistoryDetailed_ByMatchId>[1]) => async () => {
    const data = await SessionAdminApi(sdk, { namespace: input.namespace }).getHistoryDetailed_ByMatchId(input.matchID)
    callback && callback(data)
    return data
  }

  return useQuery<GetSessionHistoryDetailedResponseItemArray, AxiosError<ApiError>>({
    queryKey: [Key_SessionAdmin.HistoryDetailed_ByMatchId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
