/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PartyData } from '../../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../../generated-definitions/PartyPutCustomAttributesRequest.js'
import { PartyPutLimitSizeRequest } from '../../generated-definitions/PartyPutLimitSizeRequest.js'

export class Party$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load personal party data in a namespace based on Party ID &lt;br/&gt; Action Code: 50101
   */
  getPartyParty_ByPartyId(partyId: string): Promise<Response<PartyData>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyData, 'PartyData')
  }
  /**
   * @deprecated
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;Set party limit, only party leader can call this endpoint.
   */
  updateLimitParty_ByPartyId(partyId: string, data: PartyPutLimitSizeRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/limit'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;update party attributes in a namespace.
   */
  updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<Response<PartyData>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/public/party/namespaces/{namespace}/parties/{partyId}/attributes'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyData, 'PartyData')
  }
}
