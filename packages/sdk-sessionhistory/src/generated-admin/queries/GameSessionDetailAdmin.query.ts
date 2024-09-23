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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GameSessionDetailAdminApi } from '../GameSessionDetailAdminApi.js'

import { GameSessionDetail } from '../../generated-definitions/GameSessionDetail.js'
import { GameSessionDetailQueryResponse } from '../../generated-definitions/GameSessionDetailQueryResponse.js'
import { MatchmakingDetail } from '../../generated-definitions/MatchmakingDetail.js'
import { MatchmakingDetailQueryResponse } from '../../generated-definitions/MatchmakingDetailQueryResponse.js'
import { PartyDetail } from '../../generated-definitions/PartyDetail.js'
import { PartyDetailQueryResponse } from '../../generated-definitions/PartyDetailQueryResponse.js'
import { TicketDetailQueryResponse } from '../../generated-definitions/TicketDetailQueryResponse.js'
import { TicketObservabilityDetail } from '../../generated-definitions/TicketObservabilityDetail.js'

export enum Key_GameSessionDetailAdmin {
  Parties = 'Sessionhistory.GameSessionDetailAdmin.Parties',
  Tickets = 'Sessionhistory.GameSessionDetailAdmin.Tickets',
  Matchmaking = 'Sessionhistory.GameSessionDetailAdmin.Matchmaking',
  Gamesessions = 'Sessionhistory.GameSessionDetailAdmin.Gamesessions',
  Ticket_ByTicketId = 'Sessionhistory.GameSessionDetailAdmin.Ticket_ByTicketId',
  Party_BySessionId = 'Sessionhistory.GameSessionDetailAdmin.Party_BySessionId',
  Gamesession_BySessionId = 'Sessionhistory.GameSessionDetailAdmin.Gamesession_BySessionId',
  MatchmakingTicket_ByTicketId = 'Sessionhistory.GameSessionDetailAdmin.MatchmakingTicket_ByTicketId',
  MatchmakingSession_BySessionId = 'Sessionhistory.GameSessionDetailAdmin.MatchmakingSession_BySessionId'
}

/**
 * Get all parties.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Parties, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetParties = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      limit?: number
      offset?: number
      order?: string | null
      orderBy?: string | null
      partyID?: string | null
      userID?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PartyDetailQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PartyDetailQueryResponse>) => void
): UseQueryResult<PartyDetailQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetParties>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getParties(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PartyDetailQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Parties, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all matchmaking ticket.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Tickets, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetTickets = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endDate?: string | null
      gameMode?: string | null
      limit?: number
      offset?: number
      order?: string | null
      partyID?: string | null
      region?: string | null
      startDate?: string | null
      userIDs?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TicketDetailQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketDetailQueryResponse>) => void
): UseQueryResult<TicketDetailQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetTickets>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTickets(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketDetailQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Tickets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all matchmaking.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Matchmaking, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetMatchmaking = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      gameSessionID?: string | null
      limit?: number
      offset?: number
      order?: string | null
      orderBy?: string | null
      ticketID?: string | null
      userID?: string | null
    }
  },
  options?: Omit<UseQueryOptions<MatchmakingDetailQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchmakingDetailQueryResponse>) => void
): UseQueryResult<MatchmakingDetailQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetMatchmaking>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMatchmaking(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchmakingDetailQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Matchmaking, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get all game sessions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Gamesessions, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetGamesessions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endDate?: string | null
      gameSessionID?: string | null
      limit?: number
      offset?: number
      order?: string | null
      orderBy?: string | null
      startDate?: string | null
      userID?: string | null
    }
  },
  options?: Omit<UseQueryOptions<GameSessionDetailQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameSessionDetailQueryResponse>) => void
): UseQueryResult<GameSessionDetailQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetGamesessions>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesessions(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameSessionDetailQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Gamesessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get detail matchmaking ticket history by ticket ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Ticket_ByTicketId, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetTicket_ByTicketId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { ticketId: string },
  options?: Omit<UseQueryOptions<TicketObservabilityDetail, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketObservabilityDetail>) => void
): UseQueryResult<TicketObservabilityDetail, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetTicket_ByTicketId>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTicket_ByTicketId(input.ticketId)
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketObservabilityDetail, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Ticket_ByTicketId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get party detail.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Party_BySessionId, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetParty_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionId: string },
  options?: Omit<UseQueryOptions<PartyDetail, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PartyDetail>) => void
): UseQueryResult<PartyDetail, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetParty_BySessionId>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getParty_BySessionId(input.sessionId)
    callback && callback(response)
    return response.data
  }

  return useQuery<PartyDetail, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Party_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get game session detail.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetGamesession_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionId: string },
  options?: Omit<UseQueryOptions<GameSessionDetail, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameSessionDetail>) => void
): UseQueryResult<GameSessionDetail, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetGamesession_BySessionId>[1]) => async () => {
    const response = await GameSessionDetailAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGamesession_BySessionId(input.sessionId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GameSessionDetail, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.Gamesession_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get detail matchmaking history by ticket ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.MatchmakingTicket_ByTicketId, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetMatchmakingTicket_ByTicketId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { ticketId: string },
  options?: Omit<UseQueryOptions<MatchmakingDetail, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchmakingDetail>) => void
): UseQueryResult<MatchmakingDetail, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetMatchmakingTicket_ByTicketId>[1]) => async () => {
      const response = await GameSessionDetailAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getMatchmakingTicket_ByTicketId(input.ticketId)
      callback && callback(response)
      return response.data
    }

  return useQuery<MatchmakingDetail, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.MatchmakingTicket_ByTicketId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get detail matchmaking history by session ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetailAdmin.MatchmakingSession_BySessionId, input]
 * }
 * ```
 */
export const useGameSessionDetailAdminApi_GetMatchmakingSession_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionId: string },
  options?: Omit<UseQueryOptions<MatchmakingDetail, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchmakingDetail>) => void
): UseQueryResult<MatchmakingDetail, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailAdminApi_GetMatchmakingSession_BySessionId>[1]) => async () => {
      const response = await GameSessionDetailAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getMatchmakingSession_BySessionId(input.sessionId)
      callback && callback(response)
      return response.data
    }

  return useQuery<MatchmakingDetail, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetailAdmin.MatchmakingSession_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
