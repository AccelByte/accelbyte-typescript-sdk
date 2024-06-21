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
import { PartyQueryResponse } from '../../generated-definitions/PartyQueryResponse.js'

export class PartyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Query parties.
   */
  getParties(queryParams?: {
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
  }): Promise<IResponse<PartyQueryResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyQueryResponse, 'PartyQueryResponse')
  }

  /**
   * Trigger user&#39;s active party session to native platform.
   */
  createNativeSync_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/users/{userId}/native-sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
