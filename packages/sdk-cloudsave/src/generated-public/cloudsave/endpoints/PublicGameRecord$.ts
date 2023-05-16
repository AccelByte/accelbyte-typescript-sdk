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
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Bulk get game records. Maximum key per request 20.
   */
  createRecordBulk(data: BulkGetGameRecordRequest): Promise<IResponse<BulkGetGameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetGameRecordResponse, 'BulkGetGameRecordResponse')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Delete records by its key
   */
  deleteRecord_ByKey(key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{key}', key).replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Get game record by its key.
   */
  getRecord_ByKey(key: string): Promise<IResponseWithSync<GameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{key}', key).replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameRecordResponse, 'GameRecordResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or append the existing game record. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  createRecord_ByKey(key: string, data: GameRecordRequest): Promise<IResponse<GameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{key}', key).replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or replace the existing game record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<IResponse<GameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/records/{key}'.replace('{key}', key).replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameRecordResponse, 'GameRecordResponse')
  }
}
