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
import { Tier } from '../../generated-definitions/Tier.js'
import { TierArray } from '../../generated-definitions/TierArray.js'
import { TierCreate } from '../../generated-definitions/TierCreate.js'
import { TierInput } from '../../generated-definitions/TierInput.js'
import { TierPagingSlicedResult } from '../../generated-definitions/TierPagingSlicedResult.js'
import { TierReorder } from '../../generated-definitions/TierReorder.js'
import { UserExpGrant } from '../../generated-definitions/UserExpGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'
import { UserTierGrant } from '../../generated-definitions/UserTierGrant.js'

export class TierAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * This API is used to query paginated tiers for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
   */
  getTiers_BySeasonId(seasonId: string, queryParams?: { limit?: number; offset?: number }): Promise<IResponse<TierPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TierPagingSlicedResult,
      'TierPagingSlicedResult'
    )
  }

  /**
   * This API is used to create tier for a draft season, can create multiple tiers at same time.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createTier_BySeasonId(seasonId: string, data: TierCreate): Promise<IResponse<TierArray>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TierArray, 'TierArray')
  }

  /**
   * This API is used to delete a tier permanently, only draft season pass can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteTier_BySeasonId_ById(seasonId: string, id: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers/{id}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to update a tier. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateTier_BySeasonId_ById(seasonId: string, id: string, data: TierInput): Promise<IResponse<Tier>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers/{id}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Tier, 'Tier')
  }

  /**
   * This API is used to grant exp to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentExp_ByUserId(userId: string, data: UserExpGrant): Promise<IResponse<UserSeasonSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/exp'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserSeasonSummary, 'UserSeasonSummary')
  }

  /**
   * This API is used to grant tier to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentTier_ByUserId(userId: string, data: UserTierGrant): Promise<IResponse<UserSeasonSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/tiers'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserSeasonSummary, 'UserSeasonSummary')
  }

  /**
   * This API is used to reorder a tier. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateReorder_BySeasonId_ById(seasonId: string, id: string, data: TierReorder): Promise<IResponse<Tier>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/tiers/{id}/reorder'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Tier, 'Tier')
  }
}
