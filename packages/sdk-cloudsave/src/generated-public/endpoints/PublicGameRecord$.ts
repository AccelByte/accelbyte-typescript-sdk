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
import { BulkGetGameRecordRequest } from '../../generated-definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from '../../generated-definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../../generated-definitions/GameRecordResponse.js'

export class PublicGameRecord$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Bulk get game records. Maximum key per request 20.
   */
  fetchRecordBulk(data: BulkGetGameRecordRequest): Promise<Response<BulkGetGameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetGameRecordResponse,
      'BulkGetGameRecordResponse'
    )
  }
  /**
   * Delete records by its key
   */
  deleteRecord_ByKey(key: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get game record by its key.
   */
  getRecord_ByKey(key: string): Promise<Response<GameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }
  /**
   * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
   */
  createRecord_ByKey(key: string, data: GameRecordRequest): Promise<Response<GameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }
  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
   */
  updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<Response<GameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }
}
