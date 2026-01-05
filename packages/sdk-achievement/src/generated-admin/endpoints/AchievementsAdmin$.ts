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
import { AchievementOrderUpdateRequest } from '../../generated-definitions/AchievementOrderUpdateRequest.js'
import { AchievementRequest } from '../../generated-definitions/AchievementRequest.js'
import { AchievementResponse } from '../../generated-definitions/AchievementResponse.js'
import { AchievementUpdateRequest } from '../../generated-definitions/AchievementUpdateRequest.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { PaginatedAchievementResponse } from '../../generated-definitions/PaginatedAchievementResponse.js'

export class AchievementsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getAchievements(queryParams?: {
    global?: boolean | null
    limit?: number
    offset?: number
    sortBy?:
      | 'listOrder'
      | 'listOrder:asc'
      | 'listOrder:desc'
      | 'createdAt'
      | 'createdAt:asc'
      | 'createdAt:desc'
      | 'updatedAt'
      | 'updatedAt:asc'
      | 'updatedAt:desc'
    tags?: string[]
  }): Promise<Response<PaginatedAchievementResponse>> {
    const params = { limit: 10, sortBy: 'listOrder:asc', ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAchievementResponse,
      'PaginatedAchievementResponse'
    )
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [CREATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; Other detail info: - achievementCode: Human readable unique code to indentify the achievement. Must be lowercase and maximum length is 32 - incremental: If the achievement is not incremental, it does not need to store a goal value of a stat to be unlocked. If the achievement is incremental, it needs to set statCode and goalValue - statCode: Selected statistic code, from the published statistic code event.Human readable unique code to indentify the achievement. Must be lowercase and maximum length is 32 - goalValue: Statistics value required to unlock the achievement. - defaultLanguage: localozation for achievement name and achievement description. Allowed format : en, en-US - slug: specify the image they want to use, it can be file image name or something to define the achievement icon.
   */
  createAchievement(data: AchievementRequest): Promise<Response<AchievementResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AchievementResponse, 'AchievementResponse')
  }
  /**
   * &lt;p&gt; Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Required Scope: &lt;code&gt;social&lt;/code&gt;&lt;p&gt;Successful response header will contain: &lt;code&gt;content-disposition: attachment; filename=achievement_&lt;namespace&gt;_config.json&lt;/code&gt;&lt;/p&gt;
   */
  getAchievementsExport(queryParams?: { tags?: string[] }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   *  Required permission ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE] Required Scope: social Import achievement configuration from file. It will merge with existing achievement. Available import strategy: - leaveOut: if achievement with same key exist, the existing will be used and imported one will be ignored (default) - replace: if achievement with same key exist, the imported achievement will be used and existing one will be removed
   */
  updateAchievementImport(data: { file?: File; strategy?: string | null }): Promise<Response<ImportConfigResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  deleteAchievement_ByAchievementCode(achievementCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getAchievement_ByAchievementCode(achievementCode: string): Promise<Response<AchievementResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AchievementResponse, 'AchievementResponse')
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  patchAchievement_ByAchievementCode(achievementCode: string, data: AchievementOrderUpdateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  updateAchievement_ByAchievementCode(achievementCode: string, data: AchievementUpdateRequest): Promise<Response<AchievementResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/achievements/{achievementCode}'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AchievementResponse, 'AchievementResponse')
  }
}
