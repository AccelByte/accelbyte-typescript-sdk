/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'

export class RewardAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query rewards for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  getRewards_BySeasonId(seasonId: string, queryParams?: { q?: string | null }): Promise<Response<RewardInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RewardInfoArray, 'RewardInfoArray')
  }
  /**
   * This API is used to create a reward for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward&lt;/li&gt;&lt;/ul&gt;
   */
  createReward_BySeasonId(seasonId: string, data: RewardCreate): Promise<Response<RewardInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RewardInfo, 'RewardInfo')
  }
  /**
   * This API is used to delete a reward permanently, only draft season reward can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
   */
  deleteReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to get a reward for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward data&lt;/li&gt;&lt;/ul&gt;
   */
  getReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<Response<RewardInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RewardInfo, 'RewardInfo')
  }
  /**
   * This API is used to update a reward. Only draft season reward can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated reward&lt;/li&gt;&lt;/ul&gt;
   */
  patchReward_BySeasonId_ByCode(seasonId: string, code: string, data: RewardUpdate): Promise<Response<RewardInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/rewards/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RewardInfo, 'RewardInfo')
  }
}
