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
import { LobbyOperationsAdminApi } from '../LobbyOperationsAdminApi.js'

import { PartyData } from '../../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../../generated-definitions/PartyPutCustomAttributesRequest.js'

export enum Key_LobbyOperationsAdmin {
  AttributeParty_ByPartyId = 'Lobby.LobbyOperationsAdmin.AttributeParty_ByPartyId',
  JoinParty_ByPartyId_ByUserId = 'Lobby.LobbyOperationsAdmin.JoinParty_ByPartyId_ByUserId'
}

/**
 * Update party attributes in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LobbyOperationsAdmin.AttributeParty_ByPartyId, input]
 * }
 * ```
 */
export const useLobbyOperationsAdminApi_UpdateAttributeParty_ByPartyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PartyData, AxiosError<ApiError>, SdkSetConfigParam & { partyId: string; data: PartyPutCustomAttributesRequest }>,
    'mutationKey'
  >,
  callback?: (data: PartyData) => void
): UseMutationResult<PartyData, AxiosError<ApiError>, SdkSetConfigParam & { partyId: string; data: PartyPutCustomAttributesRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { partyId: string; data: PartyPutCustomAttributesRequest }) => {
    const response = await LobbyOperationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAttributeParty_ByPartyId(input.partyId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LobbyOperationsAdmin.AttributeParty_ByPartyId],
    mutationFn,
    ...options
  })
}

/**
 * Admin join a player into a party.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LobbyOperationsAdmin.JoinParty_ByPartyId_ByUserId, input]
 * }
 * ```
 */
export const useLobbyOperationsAdminApi_UpdateJoinParty_ByPartyId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId: string; userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { partyId: string; userId: string }) => {
    const response = await LobbyOperationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateJoinParty_ByPartyId_ByUserId(input.partyId, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LobbyOperationsAdmin.JoinParty_ByPartyId_ByUserId],
    mutationFn,
    ...options
  })
}
