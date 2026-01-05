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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PartyAdminApi } from '../PartyAdminApi.js'

import { PartyData } from '../../generated-definitions/PartyData.js'

export enum Key_PartyAdmin {
  PartyParty_ByPartyId = 'Lobby.PartyAdmin.PartyParty_ByPartyId',
  Party_ByUserId = 'Lobby.PartyAdmin.Party_ByUserId'
}

/**
 * @deprecated
 * Get party data in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PartyAdmin.PartyParty_ByPartyId, input]
 * }
 * ```
 */
export const usePartyAdminApi_GetPartyParty_ByPartyId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { partyId: string },
  options?: Omit<UseQueryOptions<PartyData, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PartyData>) => void
): UseQueryResult<PartyData, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePartyAdminApi_GetPartyParty_ByPartyId>[1]) => async () => {
    const response = await PartyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPartyParty_ByPartyId(
      input.partyId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PartyData, AxiosError<ApiError>>({
    queryKey: [Key_PartyAdmin.PartyParty_ByPartyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Get party data in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PartyAdmin.Party_ByUserId, input]
 * }
 * ```
 */
export const usePartyAdminApi_GetParty_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<PartyData, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PartyData>) => void
): UseQueryResult<PartyData, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePartyAdminApi_GetParty_ByUserId>[1]) => async () => {
    const response = await PartyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getParty_ByUserId(
      input.userId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PartyData, AxiosError<ApiError>>({
    queryKey: [Key_PartyAdmin.Party_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
