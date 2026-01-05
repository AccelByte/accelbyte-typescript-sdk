/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { AmsQoSAdminApi } from '../AmsQoSAdminApi.js'

import { QoSEndpointResponse } from '../../generated-definitions/QoSEndpointResponse.js'
import { UpdateServerRequest } from '../../generated-definitions/UpdateServerRequest.js'

export enum Key_AmsQoSAdmin {
  Qos = 'Ams.AmsQoSAdmin.Qos',
  Qo_ByRegion = 'Ams.AmsQoSAdmin.Qo_ByRegion'
}

/**
 * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [READ] This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AmsQoSAdmin.Qos, input]
 * }
 * ```
 */
export const useAmsQoSAdminApi_GetQos = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { status?: string | null } },
  options?: Omit<UseQueryOptions<QoSEndpointResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<QoSEndpointResponse>) => void
): UseQueryResult<QoSEndpointResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAmsQoSAdminApi_GetQos>[1]) => async () => {
    const response = await AmsQoSAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getQos(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<QoSEndpointResponse, AxiosError<ApiError>>({
    queryKey: [Key_AmsQoSAdmin.Qos, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] This endpoint updates the registered QoS service&#39;s configurable configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AmsQoSAdmin.Qo_ByRegion, input]
 * }
 * ```
 */
export const useAmsQoSAdminApi_PatchQo_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region: string; data: UpdateServerRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region: string; data: UpdateServerRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { region: string; data: UpdateServerRequest }) => {
    const response = await AmsQoSAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchQo_ByRegion(
      input.region,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AmsQoSAdmin.Qo_ByRegion],
    mutationFn,
    ...options
  })
}
