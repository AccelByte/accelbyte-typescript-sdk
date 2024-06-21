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
import { GameSessionAdminApi } from '../GameSessionAdminApi.js'

import { DeleteBulkGameSessionRequest } from '../../generated-definitions/DeleteBulkGameSessionRequest.js'
import { DeleteBulkGameSessionsApiResponse } from '../../generated-definitions/DeleteBulkGameSessionsApiResponse.js'
import { GameSessionQueryResponse } from '../../generated-definitions/GameSessionQueryResponse.js'
import { SetDsReadyRequest } from '../../generated-definitions/SetDsReadyRequest.js'
import { UpdateGameSessionMemberStatusResponse } from '../../generated-definitions/UpdateGameSessionMemberStatusResponse.js'

export enum Key_GameSessionAdmin {
  Gamesessions = 'GameSessionAdmin.Gamesessions',
  Gamesession = 'GameSessionAdmin.Gamesession',
  GamesessionBulk = 'GameSessionAdmin.GamesessionBulk',
  D_BySessionId = 'GameSessionAdmin.D_BySessionId',
  Statu_BySessionId_ByMemberId_ByStatusType = 'GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType'
}

export const useAdmGamesessions = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: GameSessionQueryResponse) => void
): UseQueryResult<GameSessionQueryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGamesessions>[1]) => async () => {
    const data = await GameSessionAdminApi(sdk, { namespace: input.namespace }).getGamesessions(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GameSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionAdmin.Gamesessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateGamesessionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<GameSessionQueryResponse, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: GameSessionQueryResponse) => void
): UseMutationResult<GameSessionQueryResponse, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await GameSessionAdminApi(sdk, { namespace: input.namespace, config: input.config }).createGamesession()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.Gamesession],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteGamesessionBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeleteBulkGameSessionsApiResponse, AxiosError<ApiError>, ApiArgs & { data: DeleteBulkGameSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: DeleteBulkGameSessionsApiResponse) => void
): UseMutationResult<DeleteBulkGameSessionsApiResponse, AxiosError<ApiError>, ApiArgs & { data: DeleteBulkGameSessionRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DeleteBulkGameSessionRequest }) => {
    const data = await GameSessionAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGamesessionBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.GamesessionBulk],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateD_BySessionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { sessionId: string; data: SetDsReadyRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { sessionId: string; data: SetDsReadyRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { sessionId: string; data: SetDsReadyRequest }) => {
    const data = await GameSessionAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateD_BySessionId(
      input.sessionId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.D_BySessionId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatu_BySessionId_ByMemberId_ByStatusTypeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGameSessionMemberStatusResponse,
      AxiosError<ApiError>,
      ApiArgs & { sessionId: string; memberId: string; statusType: string }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGameSessionMemberStatusResponse) => void
): UseMutationResult<
  UpdateGameSessionMemberStatusResponse,
  AxiosError<ApiError>,
  ApiArgs & { sessionId: string; memberId: string; statusType: string }
> => {
  //
  const mutationFn = async (input: ApiArgs & { sessionId: string; memberId: string; statusType: string }) => {
    const data = await GameSessionAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateStatu_BySessionId_ByMemberId_ByStatusType(input.sessionId, input.memberId, input.statusType)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType],
    mutationFn,
    ...options
  })
}
