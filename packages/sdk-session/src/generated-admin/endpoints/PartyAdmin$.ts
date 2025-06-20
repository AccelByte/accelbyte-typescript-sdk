/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { DeleteBulkPartySessionRequest } from '../../generated-definitions/DeleteBulkPartySessionRequest.js'
import { DeleteBulkPartySessionsApiResponse } from '../../generated-definitions/DeleteBulkPartySessionsApiResponse.js'
import { PartyQueryResponse } from '../../generated-definitions/PartyQueryResponse.js'

export class PartyAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query parties.
   */
  getParties(queryParams?: {
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
  }): Promise<Response<PartyQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyQueryResponse, 'PartyQueryResponse')
  }
  /**
   * Delete bulk parties.
   */
  deletePartyBulk(data: DeleteBulkPartySessionRequest): Promise<Response<DeleteBulkPartySessionsApiResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/parties/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeleteBulkPartySessionsApiResponse,
      'DeleteBulkPartySessionsApiResponse'
    )
  }
  /**
   * Trigger user&#39;s active party session to native platform.
   */
  createNativeSync_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/users/{userId}/native-sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
