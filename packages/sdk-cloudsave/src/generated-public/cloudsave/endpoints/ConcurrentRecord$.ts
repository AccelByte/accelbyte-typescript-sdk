/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ConcurrentRecordRequest } from '../definitions/ConcurrentRecordRequest.js'

export class ConcurrentRecord$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or replace the existing game record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updateConcurrentRecord_ByKey(key: string, data: ConcurrentRecordRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/concurrent/records/{key}'.replace('{key}', key).replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player record or replace the existing player record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updateConcurrentRecord_ByUserId_ByKey(key: string, userId: string, data: ConcurrentRecordRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/concurrent/records/{key}'
      .replace('{key}', key)
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player public record or replace the existing player public record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updatePublicConcurrent_ByUserId_ByKey(key: string, userId: string, data: ConcurrentRecordRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/concurrent/records/{key}/public'
      .replace('{key}', key)
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
