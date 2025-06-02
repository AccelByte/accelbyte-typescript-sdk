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
import { ItemReferenceResponse } from '../../generated-definitions/ItemReferenceResponse.js'

export class UtilitiesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
   */
  getChallengesItemReferences(queryParams: { itemId: string | null }): Promise<Response<ItemReferenceResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/item/references'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemReferenceResponse, 'ItemReferenceResponse')
  }
}
