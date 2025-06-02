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
import { BackfillApi } from '../BackfillApi.js'

import { BackFillAcceptRequest } from '../../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../../generated-definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../../generated-definitions/GameSession.js'
import { ListBackfillQueryResponse } from '../../generated-definitions/ListBackfillQueryResponse.js'

export enum Key_Backfill {
  Backfill = 'Matchmaking.Backfill.Backfill',
  BackfillProposal = 'Matchmaking.Backfill.BackfillProposal',
  Backfill_ByBackfillId = 'Matchmaking.Backfill.Backfill_ByBackfillId',
  ProposalAccept_ByBackfillId = 'Matchmaking.Backfill.ProposalAccept_ByBackfillId',
  ProposalReject_ByBackfillId = 'Matchmaking.Backfill.ProposalReject_ByBackfillId'
}

/**
 * Admin Query backfill ticket
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.Backfill, input]
 * }
 * ```
 */
export const useBackfillApi_GetBackfill = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      fromTime?: string | null
      isActive?: boolean | null
      limit?: number
      matchPool?: string | null
      offset?: number
      playerID?: string | null
      region?: string | null
      sessionID?: string | null
      toTime?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ListBackfillQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListBackfillQueryResponse>) => void
): UseQueryResult<ListBackfillQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBackfillApi_GetBackfill>[1]) => async () => {
    const response = await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBackfill(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListBackfillQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_Backfill.Backfill, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create backfill ticket.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.Backfill, input]
 * }
 * ```
 */
export const useBackfillApi_CreateBackfillMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BackfillCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BackFillCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: BackfillCreateResponse) => void
): UseMutationResult<BackfillCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BackFillCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BackFillCreateRequest }) => {
    const response = await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBackfill(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Backfill.Backfill],
    mutationFn,
    ...options
  })
}

/**
 * Get backfill proposal
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.BackfillProposal, input]
 * }
 * ```
 */
export const useBackfillApi_GetBackfillProposal = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { sessionID: string | null } },
  options?: Omit<UseQueryOptions<BackfillProposalResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BackfillProposalResponse>) => void
): UseQueryResult<BackfillProposalResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBackfillApi_GetBackfillProposal>[1]) => async () => {
    const response = await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBackfillProposal(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BackfillProposalResponse, AxiosError<ApiError>>({
    queryKey: [Key_Backfill.BackfillProposal, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete backfill ticket.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.Backfill_ByBackfillId, input]
 * }
 * ```
 */
export const useBackfillApi_DeleteBackfill_ByBackfillIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { backfillID: string }) => {
    const response = await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteBackfill_ByBackfillId(
      input.backfillID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Backfill.Backfill_ByBackfillId],
    mutationFn,
    ...options
  })
}

/**
 * Get backfill ticket by ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.Backfill_ByBackfillId, input]
 * }
 * ```
 */
export const useBackfillApi_GetBackfill_ByBackfillId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { backfillID: string },
  options?: Omit<UseQueryOptions<BackfillGetResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BackfillGetResponse>) => void
): UseQueryResult<BackfillGetResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBackfillApi_GetBackfill_ByBackfillId>[1]) => async () => {
    const response = await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBackfill_ByBackfillId(
      input.backfillID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BackfillGetResponse, AxiosError<ApiError>>({
    queryKey: [Key_Backfill.Backfill_ByBackfillId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Accept backfill proposal. Field **acceptedTicketIds** can be used to accept specific tickets within a backfill proposal. If the ticketIDs are not mentioned in this field, those tickets will be rejected and reactivated for future proposals. If **acceptedTicketIds** is nil or not specified, then all tickets in the proposal will be accepted.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.ProposalAccept_ByBackfillId, input]
 * }
 * ```
 */
export const useBackfillApi_UpdateProposalAccept_ByBackfillIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameSession, AxiosError<ApiError>, SdkSetConfigParam & { backfillID: string; data: BackFillAcceptRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameSession) => void
): UseMutationResult<GameSession, AxiosError<ApiError>, SdkSetConfigParam & { backfillID: string; data: BackFillAcceptRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { backfillID: string; data: BackFillAcceptRequest }) => {
    const response = await BackfillApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProposalAccept_ByBackfillId(input.backfillID, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Backfill.ProposalAccept_ByBackfillId],
    mutationFn,
    ...options
  })
}

/**
 * Reject backfill proposal
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Backfill.ProposalReject_ByBackfillId, input]
 * }
 * ```
 */
export const useBackfillApi_UpdateProposalReject_ByBackfillIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID: string; data: BackFillRejectRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID: string; data: BackFillRejectRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { backfillID: string; data: BackFillRejectRequest }) => {
    const response = await BackfillApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProposalReject_ByBackfillId(input.backfillID, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Backfill.ProposalReject_ByBackfillId],
    mutationFn,
    ...options
  })
}
