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
import { BulkCalculateDiffCacheRequest } from '../../generated-definitions/BulkCalculateDiffCacheRequest.js'
import { CalculateDiffCacheRequest } from '../../generated-definitions/CalculateDiffCacheRequest.js'
import { CommitDiffCacheRequest } from '../../generated-definitions/CommitDiffCacheRequest.js'
import { CreateDiffCacheRequest } from '../../generated-definitions/CreateDiffCacheRequest.js'

export class CachingAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to save detailed diff cache. Only used by differ. Not to be used directly.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffCache(data: CreateDiffCacheRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/diff/cache'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to mark that the diff caching is complete and diff summary file uploaded to s3. Only used by differ. Not to be used directly.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateDiffCache(data: CommitDiffCacheRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/diff/cache'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to dispatch diff caching request.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffCalculate(data: CalculateDiffCacheRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/diff/calculate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to bulk dispatch diff caching requests to differ instance.&lt;br/&gt;The processing order will follow the order of the array.&lt;br/&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Request is skipped if the source and destination versions is same&lt;/li&gt;&lt;li&gt;Request is skipped if the source version is not found&lt;/li&gt;&lt;li&gt;Request is skipped if the destination version is not found&lt;/li&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:DIFFCACHE&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffCalculateBulk(data: BulkCalculateDiffCacheRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/diff/calculate/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
