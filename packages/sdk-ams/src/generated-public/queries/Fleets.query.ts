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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { FleetsApi } from '../FleetsApi.js'

import { FleetClaimByKeysReq } from '../../generated-definitions/FleetClaimByKeysReq.js'
import { FleetClaimReq } from '../../generated-definitions/FleetClaimReq.js'
import { FleetClaimResponse } from '../../generated-definitions/FleetClaimResponse.js'

export enum Key_Fleets {
  ServerClaim = 'Ams.Fleets.ServerClaim',
  Claim_ByFleetId = 'Ams.Fleets.Claim_ByFleetId'
}

/**
 * Claim a dedicated server from fleets with matching claim keys. If the claim key is for a regular fleet (non development), the request will instantly fail if there are no DS available (HTTP 404). If the claim key is for a development fleet and there are no DS available, a new DS will be launched and the request might take up to 8 seconds to return (depending on the environment configuration). If it&#39;s not ready after that duration the request will still return HTTP 404. In either case, the call to this endpoint may be retried at any time to check if a DS has become available. Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Fleets.ServerClaim, input]
 * }
 * ```
 */
export const useFleetsApi_UpdateServerClaimMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: FleetClaimByKeysReq }>,
    'mutationKey'
  >,
  callback?: (data: FleetClaimResponse) => void
): UseMutationResult<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: FleetClaimByKeysReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: FleetClaimByKeysReq }) => {
    const response = await FleetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateServerClaim(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Fleets.ServerClaim],
    mutationFn,
    ...options
  })
}

/**
 * Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Fleets.Claim_ByFleetId, input]
 * }
 * ```
 */
export const useFleetsApi_UpdateClaim_ByFleetIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { fleetID: string; data: FleetClaimReq }>,
    'mutationKey'
  >,
  callback?: (data: FleetClaimResponse) => void
): UseMutationResult<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { fleetID: string; data: FleetClaimReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { fleetID: string; data: FleetClaimReq }) => {
    const response = await FleetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateClaim_ByFleetId(
      input.fleetID,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Fleets.Claim_ByFleetId],
    mutationFn,
    ...options
  })
}
