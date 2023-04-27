/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BulkGetGameRecordRequest } from '../definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from '../definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from '../definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../definitions/GameRecordResponse.js'

export class PublicGameRecord$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Bulk get game records. Maximum key per request 20.
   */
  createRecordBulk(data: BulkGetGameRecordRequest): Promise<IResponse<BulkGetGameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetGameRecordResponse, 'BulkGetGameRecordResponse')
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Get game record by its key.
   */
  getRecord_ByKey(key: string): Promise<IResponseWithSync<GameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameRecordResponse, 'GameRecordResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: <code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]</code> Required scope: <code>social</code> <h2>Description</h2> This endpoints will create new game record or replace the existing game record. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<IResponse<GameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }

  /**
   * Required permission: <code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]</code> Required scope: <code>social</code> <h2>Description</h2> This endpoints will create new game record or append the existing game record. <b>Append example:</b> Example 1 - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data1": "value", "data2": "new value" }</pre> Example 2 - Existing JSON: <pre>{ "data1": { "data2": "value" }</pre> - New JSON: <pre>{ "data1": { "data3": "new value" }</pre> - Result: <pre>{ "data1": { "data2": "value", "data3": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  createRecord_ByKey(key: string, data: GameRecordRequest): Promise<IResponse<GameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Delete records by its key
   */
  deleteRecord_ByKey(key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
