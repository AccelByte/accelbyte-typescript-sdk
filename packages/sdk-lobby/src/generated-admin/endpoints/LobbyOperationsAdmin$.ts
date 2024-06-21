/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PartyData } from '../../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../../generated-definitions/PartyPutCustomAttributesRequest.js'

export class LobbyOperationsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Update party attributes in a namespace.
   */
  updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<IResponse<PartyData>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyData, 'PartyData')
  }

  /**
   * Admin join a player into a party.
   */
  createJoinParty_ByPartyId_ByUserId(partyId: string, userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}/join/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
