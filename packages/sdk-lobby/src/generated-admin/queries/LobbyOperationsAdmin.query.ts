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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { LobbyOperationsAdminApi } from '../LobbyOperationsAdminApi.js'

import { PartyData } from '../../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../../generated-definitions/PartyPutCustomAttributesRequest.js'

export enum Key_LobbyOperationsAdmin {
  AttributeParty_ByPartyId = 'LobbyOperationsAdmin.AttributeParty_ByPartyId',
  JoinParty_ByPartyId_ByUserId = 'LobbyOperationsAdmin.JoinParty_ByPartyId_ByUserId'
}

export const useAdmUpdateAttributeParty_ByPartyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PartyData, AxiosError<ApiError>, ApiArgs & { partyId: string; data: PartyPutCustomAttributesRequest }>,
    'mutationKey'
  >,
  callback?: (data: PartyData) => void
): UseMutationResult<PartyData, AxiosError<ApiError>, ApiArgs & { partyId: string; data: PartyPutCustomAttributesRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { partyId: string; data: PartyPutCustomAttributesRequest }) => {
    const data = await LobbyOperationsAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAttributeParty_ByPartyId(
      input.partyId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LobbyOperationsAdmin.AttributeParty_ByPartyId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateJoinParty_ByPartyId_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { partyId: string; userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { partyId: string; userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { partyId: string; userId: string }) => {
    const data = await LobbyOperationsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createJoinParty_ByPartyId_ByUserId(input.partyId, input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LobbyOperationsAdmin.JoinParty_ByPartyId_ByUserId],
    mutationFn,
    ...options
  })
}
