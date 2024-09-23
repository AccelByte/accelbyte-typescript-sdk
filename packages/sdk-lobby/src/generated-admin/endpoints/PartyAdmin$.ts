/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { PartyData } from '../../generated-definitions/PartyData.js'

export class PartyAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get party data in a namespace.
   */
  getPartyParty_ByPartyId(partyId: string): Promise<Response<PartyData>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/party/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyData, 'PartyData')
  }
  /**
   * Get party data in a namespace.
   */
  getParty_ByUserId(userId: string): Promise<Response<PartyData>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/party/namespaces/{namespace}/users/{userId}/party'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyData, 'PartyData')
  }
}
