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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PartyAdminApi } from '../PartyAdminApi.js'

import { PartyData } from '../../generated-definitions/PartyData.js'

export enum Key_PartyAdmin {
  PartyParty_ByPartyId = 'PartyAdmin.PartyParty_ByPartyId',
  Party_ByUserId = 'PartyAdmin.Party_ByUserId'
}

export const useAdmPartyParty_ByPartyId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { partyId: string },
  options?: Omit<UseQueryOptions<PartyData, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PartyData) => void
): UseQueryResult<PartyData, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPartyParty_ByPartyId>[1]) => async () => {
    const data = await PartyAdminApi(sdk, { namespace: input.namespace }).getPartyParty_ByPartyId(input.partyId)
    callback && callback(data)
    return data
  }

  return useQuery<PartyData, AxiosError<ApiError>>({
    queryKey: [Key_PartyAdmin.PartyParty_ByPartyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmParty_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<PartyData, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PartyData) => void
): UseQueryResult<PartyData, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmParty_ByUserId>[1]) => async () => {
    const data = await PartyAdminApi(sdk, { namespace: input.namespace }).getParty_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<PartyData, AxiosError<ApiError>>({
    queryKey: [Key_PartyAdmin.Party_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
