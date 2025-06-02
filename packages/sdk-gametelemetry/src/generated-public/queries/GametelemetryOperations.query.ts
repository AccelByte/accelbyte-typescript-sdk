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
import { GametelemetryOperationsApi } from '../GametelemetryOperationsApi.js'

import { PlayTimeResponse } from '../../generated-definitions/PlayTimeResponse.js'
import { TelemetryBody } from '../../generated-definitions/TelemetryBody.js'

export enum Key_GametelemetryOperations {
  ProtectedEvent = 'Gametelemetry.GametelemetryOperations.ProtectedEvent',
  PlaytimeProtected_BySteamId = 'Gametelemetry.GametelemetryOperations.PlaytimeProtected_BySteamId',
  PlaytimeProtected_BySteamId_ByPlaytime = 'Gametelemetry.GametelemetryOperations.PlaytimeProtected_BySteamId_ByPlaytime'
}

/**
 * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint send events into designated streaming pipeline and each request can contain single or multiple events. &lt;p&gt; Format of the event: - **EventNamespace (required)**: Namespace of the relevant game with domain name format. &lt;p&gt; Only accept input with valid characters. Allowed characters: &lt;b&gt;Aa-Zz0-9_.-&lt;/b&gt; &lt;p&gt; &lt;p&gt; It is encouraged to use alphanumeric only characters. &lt;b&gt;_.-&lt;/b&gt; will be deprecated soon &lt;p&gt; &lt;p&gt; Example: accelbyte &lt;/p&gt; - **EventName (required)**: Name of the event. &lt;p&gt; Only accept input with valid characters. Allowed characters: &lt;b&gt;Aa-Zz0-9_.-&lt;/b&gt; &lt;p&gt; &lt;p&gt; It is encouraged to use alphanumeric only characters. &lt;b&gt;_.-&lt;/b&gt; will be deprecated soon &lt;p&gt; &lt;p&gt; Example: player_killed, mission_accomplished &lt;/p&gt; - **Payload (required)**: An arbitrary json with the payload of the said event. &lt;p&gt; Default maximum payload size is &lt;b&gt;1MB&lt;/b&gt; &lt;p&gt; - **ClientTimestamp (optional)**: Timestamp of the event captured by the client SDK. - **DeviceType (optional)**: The device type of the user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GametelemetryOperations.ProtectedEvent, input]
 * }
 * ```
 */
export const useGametelemetryOperationsApi_CreateProtectedEventMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: TelemetryBody[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: TelemetryBody[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: TelemetryBody[] }) => {
    const response = await GametelemetryOperationsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createProtectedEvent(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GametelemetryOperations.ProtectedEvent],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint retrieves player&#39;s total playtime in Steam for a specific game (AppId) and store them in service&#39;s cache. Players&#39; Steam account must be set into public to enable the service fetch their total playtime data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId, input]
 * }
 * ```
 */
export const useGametelemetryOperationsApi_GetPlaytimeProtected_BySteamId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { steamId: string },
  options?: Omit<UseQueryOptions<PlayTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayTimeResponse>) => void
): UseQueryResult<PlayTimeResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGametelemetryOperationsApi_GetPlaytimeProtected_BySteamId>[1]) => async () => {
      const response = await GametelemetryOperationsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlaytimeProtected_BySteamId(input.steamId)
      callback && callback(response)
      return response.data
    }

  return useQuery<PlayTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint update player&#39;s total playtime in a specific game (AppId) from service&#39;s cache.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId_ByPlaytime, input]
 * }
 * ```
 */
export const useGametelemetryOperationsApi_UpdatePlaytimeProtected_BySteamId_ByPlaytimeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PlayTimeResponse, AxiosError<ApiError>, SdkSetConfigParam & { steamId: string; playtime: string }>,
    'mutationKey'
  >,
  callback?: (data: PlayTimeResponse) => void
): UseMutationResult<PlayTimeResponse, AxiosError<ApiError>, SdkSetConfigParam & { steamId: string; playtime: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { steamId: string; playtime: string }) => {
    const response = await GametelemetryOperationsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePlaytimeProtected_BySteamId_ByPlaytime(input.steamId, input.playtime)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId_ByPlaytime],
    mutationFn,
    ...options
  })
}
