/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PassCreate } from '../../generated-definitions/PassCreate.js'
import { PassInfo } from '../../generated-definitions/PassInfo.js'
import { PassInfoArray } from '../../generated-definitions/PassInfoArray.js'
import { PassUpdate } from '../../generated-definitions/PassUpdate.js'
import { UserPassGrant } from '../../generated-definitions/UserPassGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'

export class PassAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query all passes for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
   */
  getPasses_BySeasonId(seasonId: string): Promise<Response<PassInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PassInfoArray, 'PassInfoArray')
  }
  /**
   * This API is used to create a pass for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created pass&lt;/li&gt;&lt;/ul&gt;
   */
  createPasse_BySeasonId(seasonId: string, data: PassCreate): Promise<Response<PassInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PassInfo, 'PassInfo')
  }
  /**
   * This API is used to delete a pass permanently, only draft season pass can be deleted. &lt;p&gt;
   */
  deletePasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to get a pass for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: pass data&lt;/li&gt;&lt;/ul&gt;
   */
  getPasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<Response<PassInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PassInfo, 'PassInfo')
  }
  /**
   * This API is used to update a pass. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated pass&lt;/li&gt;&lt;/ul&gt;
   */
  patchPasse_BySeasonId_ByCode(seasonId: string, code: string, data: PassUpdate): Promise<Response<PassInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/{seasonId}/passes/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{seasonId}', seasonId)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PassInfo, 'PassInfo')
  }
  /**
   * This API is used to grant pass to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentPasse_ByUserId(userId: string, data: UserPassGrant): Promise<Response<UserSeasonSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/users/{userId}/seasons/current/passes'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserSeasonSummary, 'UserSeasonSummary')
  }
}
