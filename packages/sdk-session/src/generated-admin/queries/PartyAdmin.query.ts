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
import { PartyAdminApi } from '../PartyAdminApi.js'

import { PartyQueryResponse } from '../../generated-definitions/PartyQueryResponse.js'

export enum Key_PartyAdmin {
  Parties = 'PartyAdmin.Parties',
  NativeSync_ByUserId = 'PartyAdmin.NativeSync_ByUserId'
}

export const useAdmParties = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
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
      value?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PartyQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PartyQueryResponse) => void
): UseQueryResult<PartyQueryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmParties>[1]) => async () => {
    const data = await PartyAdminApi(sdk, { namespace: input.namespace }).getParties(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PartyQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_PartyAdmin.Parties, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNativeSync_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await PartyAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNativeSync_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PartyAdmin.NativeSync_ByUserId],
    mutationFn,
    ...options
  })
}
