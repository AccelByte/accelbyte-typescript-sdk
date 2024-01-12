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
import { ADtoForUnbanUserApiCall } from '../../generated-definitions/ADtoForUnbanUserApiCall.js'
import { ADtoObjectForEqu8UserBanStatusArray } from '../../generated-definitions/ADtoObjectForEqu8UserBanStatusArray.js'
import { ADtoObjectForEqu8UserStatus } from '../../generated-definitions/ADtoObjectForEqu8UserStatus.js'
import { ActionArray } from '../../generated-definitions/ActionArray.js'
import { UserBanRequest } from '../../generated-definitions/UserBanRequest.js'
import { UserReportRequest } from '../../generated-definitions/UserReportRequest.js'

export class UserActionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get configured actions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getActions(): Promise<IResponseWithSync<ActionArray>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/actions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ActionArray, 'ActionArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Ban user.&lt;br&gt; actionId: 1 means permanent ban, actionId: 10 means Temporary ban.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  createActionBan(data: UserBanRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/actions/ban'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Unban user.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  createActionUnban(data: ADtoForUnbanUserApiCall): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/actions/unban'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get banned status.&lt;br&gt;Unbanned users will not return, for example: request has 8 userIds, only 5 of then were banned, then the api will these 5 user status.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getActionsBanned(queryParams: { userIds: string[] }): Promise<IResponseWithSync<ADtoObjectForEqu8UserBanStatusArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/actions/banned'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ADtoObjectForEqu8UserBanStatusArray, 'ADtoObjectForEqu8UserBanStatusArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is for game service to report a game player.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createActionReport(data: UserReportRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/actions/report'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get user status.&lt;br&gt;If actionId does not exist, then the user is not banned.If actionId and expires exist, then the user is temporarily banned, if expires does not exist, then the user is permanently banned.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getActionsStatus(queryParams: { userId: string | null }): Promise<IResponseWithSync<ADtoObjectForEqu8UserStatus>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/actions/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ADtoObjectForEqu8UserStatus, 'ADtoObjectForEqu8UserStatus')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
