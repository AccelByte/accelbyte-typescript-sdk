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
import { GameSessionAdminApi } from '../GameSessionAdminApi.js'

import { DeleteBulkGameSessionRequest } from '../../generated-definitions/DeleteBulkGameSessionRequest.js'
import { DeleteBulkGameSessionsApiResponse } from '../../generated-definitions/DeleteBulkGameSessionsApiResponse.js'
import { GameSessionQueryResponse } from '../../generated-definitions/GameSessionQueryResponse.js'
import { SetDsReadyRequest } from '../../generated-definitions/SetDsReadyRequest.js'
import { UpdateGameSessionMemberStatusResponse } from '../../generated-definitions/UpdateGameSessionMemberStatusResponse.js'

export enum Key_GameSessionAdmin {
  Gamesessions = 'Session.GameSessionAdmin.Gamesessions',
  Gamesession = 'Session.GameSessionAdmin.Gamesession',
  GamesessionBulk = 'Session.GameSessionAdmin.GamesessionBulk',
  D_BySessionId = 'Session.GameSessionAdmin.D_BySessionId',
  Kick_BySessionId_ByMemberId = 'Session.GameSessionAdmin.Kick_BySessionId_ByMemberId',
  Statu_BySessionId_ByMemberId_ByStatusType = 'Session.GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType'
}

/**
 * Get all game sessions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.Gamesessions, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_GetGamesessions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      configurationName?: string | null
      dsPodName?: string | null
      fromTime?: string | null
      gameMode?: string | null
      isPersistent?: string | null
      isSoftDeleted?: string | null
      joinability?: string | null
      limit?: number
      matchPool?: string | null
      memberID?: string | null
      offset?: number
      order?: string | null
      orderBy?: string | null
      sessionID?: string | null
      status?: string | null
      statusV2?: string | null
      toTime?: string | null
    }
  },
  options?: Omit<UseQueryOptions<GameSessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameSessionQueryResponse>) => void
): UseQueryResult<GameSessionQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionAdminApi_GetGamesessions>[1]) => async () => {
    const response = await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGamesessions(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionAdmin.Gamesessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query game sessions by admin. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC. query parameter \&#34;availability\&#34; to filter sessions&#39; availability: all: return all sessions regardless it&#39;s full full: only return active sessions default behavior (unset or else): return only available sessions (not full)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.Gamesession, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_FetchGamesession = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GameSessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameSessionQueryResponse>) => void
): UseQueryResult<GameSessionQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionAdminApi_FetchGamesession>[1]) => async () => {
    const response = await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchGamesession()
    callback && callback(response)
    return response.data
  }

  return useQuery<GameSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionAdmin.Gamesession, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete bulk game sessions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.GamesessionBulk, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_DeleteGamesessionBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DeleteBulkGameSessionsApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkGameSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: DeleteBulkGameSessionsApiResponse) => void
): UseMutationResult<
  DeleteBulkGameSessionsApiResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: DeleteBulkGameSessionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkGameSessionRequest }) => {
    const response = await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGamesessionBulk(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.GamesessionBulk],
    mutationFn,
    ...options
  })
}

/**
 * When the session template has ds_manual_set_ready as true. Then the DS need to calls this end point in order to notify game client if the DS is ready to accept any game client connection.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.D_BySessionId, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_UpdateD_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string; data: SetDsReadyRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string; data: SetDsReadyRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionId: string; data: SetDsReadyRequest }) => {
    const response = await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateD_BySessionId(
      input.sessionId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.D_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 * Kick member from a game session.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.Kick_BySessionId_ByMemberId, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_DeleteKick_BySessionId_ByMemberIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string; memberId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string; memberId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionId: string; memberId: string }) => {
    const response = await GameSessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteKick_BySessionId_ByMemberId(input.sessionId, input.memberId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.Kick_BySessionId_ByMemberId],
    mutationFn,
    ...options
  })
}

/**
 * Update a game session member status.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_UpdateStatu_BySessionId_ByMemberId_ByStatusTypeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGameSessionMemberStatusResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { sessionId: string; memberId: string; statusType: string }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGameSessionMemberStatusResponse) => void
): UseMutationResult<
  UpdateGameSessionMemberStatusResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { sessionId: string; memberId: string; statusType: string }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionId: string; memberId: string; statusType: string }) => {
    const response = await GameSessionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatu_BySessionId_ByMemberId_ByStatusType(input.sessionId, input.memberId, input.statusType)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType],
    mutationFn,
    ...options
  })
}
