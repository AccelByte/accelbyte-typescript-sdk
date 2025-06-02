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
import { PartyAdminApi } from '../PartyAdminApi.js'

import { DeleteBulkPartySessionRequest } from '../../generated-definitions/DeleteBulkPartySessionRequest.js'
import { DeleteBulkPartySessionsApiResponse } from '../../generated-definitions/DeleteBulkPartySessionsApiResponse.js'
import { PartyQueryResponse } from '../../generated-definitions/PartyQueryResponse.js'

export enum Key_PartyAdmin {
  Parties = 'Session.PartyAdmin.Parties',
  PartyBulk = 'Session.PartyAdmin.PartyBulk',
  NativeSync_ByUserId = 'Session.PartyAdmin.NativeSync_ByUserId'
}

/**
 * Query parties.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PartyAdmin.Parties, input]
 * }
 * ```
 */
export const usePartyAdminApi_GetParties = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      fromTime?: string | null
      isSoftDeleted?: string | null
      joinability?: string | null
      key?: string | null
      leaderID?: string | null
      limit?: number
      memberID?: string | null
      memberStatus?: string | null
      offset?: number
      order?: string | null
      orderBy?: string | null
      partyID?: string | null
      toTime?: string | null
      value?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PartyQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PartyQueryResponse>) => void
): UseQueryResult<PartyQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePartyAdminApi_GetParties>[1]) => async () => {
    const response = await PartyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getParties(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PartyQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_PartyAdmin.Parties, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete bulk parties.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PartyAdmin.PartyBulk, input]
 * }
 * ```
 */
export const usePartyAdminApi_DeletePartyBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeleteBulkPartySessionsApiResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: DeleteBulkPartySessionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeleteBulkPartySessionsApiResponse) => void
): UseMutationResult<
  DeleteBulkPartySessionsApiResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: DeleteBulkPartySessionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkPartySessionRequest }) => {
    const response = await PartyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deletePartyBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PartyAdmin.PartyBulk],
    mutationFn,
    ...options
  })
}

/**
 * Trigger user&#39;s active party session to native platform.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PartyAdmin.NativeSync_ByUserId, input]
 * }
 * ```
 */
export const usePartyAdminApi_CreateNativeSync_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await PartyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNativeSync_ByUserId(
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PartyAdmin.NativeSync_ByUserId],
    mutationFn,
    ...options
  })
}
