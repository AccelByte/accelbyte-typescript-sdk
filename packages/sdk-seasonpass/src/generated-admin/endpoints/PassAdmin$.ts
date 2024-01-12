/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PassCreate } from '../../generated-definitions/PassCreate.js'
import { PassInfo } from '../../generated-definitions/PassInfo.js'
import { PassInfoArray } from '../../generated-definitions/PassInfoArray.js'
import { PassUpdate } from '../../generated-definitions/PassUpdate.js'
import { UserPassGrant } from '../../generated-definitions/UserPassGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'

export class PassAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to query all passes for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
   */
  getPasses_BySeasonId(seasonId: string): Promise<IResponseWithSync<PassInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PassInfoArray, 'PassInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create a pass for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created pass&lt;/li&gt;&lt;/ul&gt;
   */
  createPasse_BySeasonId(seasonId: string, data: PassCreate): Promise<IResponse<PassInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PassInfo, 'PassInfo')
  }

  /**
   * This API is used to delete a pass permanently, only draft season pass can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deletePasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get a pass for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: pass data&lt;/li&gt;&lt;/ul&gt;
   */
  getPasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<IResponseWithSync<PassInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PassInfo, 'PassInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update a pass. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated pass&lt;/li&gt;&lt;/ul&gt;
   */
  patchPasse_BySeasonId_ByCode(seasonId: string, code: string, data: PassUpdate): Promise<IResponse<PassInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, PassInfo, 'PassInfo')
  }

  /**
   * This API is used to grant pass to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentPasse_ByUserId(userId: string, data: UserPassGrant): Promise<IResponse<UserSeasonSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/passes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserSeasonSummary, 'UserSeasonSummary')
  }
}
