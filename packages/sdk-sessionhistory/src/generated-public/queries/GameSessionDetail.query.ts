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
import { GameSessionDetailApi } from '../GameSessionDetailApi.js'

import { GameSessionDetailQueryResponse } from '../../generated-definitions/GameSessionDetailQueryResponse.js'

export enum Key_GameSessionDetail {
  UsersMeGamesessions = 'Sessionhistory.GameSessionDetail.UsersMeGamesessions'
}

/**
 * Get all game sessions history for current user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionDetail.UsersMeGamesessions, input]
 * }
 * ```
 */
export const useGameSessionDetailApi_GetUsersMeGamesessions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; order?: string | null } },
  options?: Omit<UseQueryOptions<GameSessionDetailQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameSessionDetailQueryResponse>) => void
): UseQueryResult<GameSessionDetailQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameSessionDetailApi_GetUsersMeGamesessions>[1]) => async () => {
    const response = await GameSessionDetailApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeGamesessions(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GameSessionDetailQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionDetail.UsersMeGamesessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
