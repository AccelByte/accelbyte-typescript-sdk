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
import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../../generated-definitions/StatUpdate.js'

export class StatConfigurationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * List stats by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
   */
  getStats(queryParams?: {
    cycleIds?: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<IResponse<StatPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StatPagingSlicedResult,
      'StatPagingSlicedResult'
    )
  }

  /**
   * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;li&gt;Field globalAggregationMethod will be ignored when setAsGlobal field is false&lt;/li&gt;&lt;/ul&gt;
   */
  createStat(data: StatCreate): Promise<IResponse<StatInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatInfo, 'StatInfo')
  }

  /**
   * Export all stat configurations for a given namespace into file At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getStatsExport(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Import stat configurations for a given namespace from file. At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createStatImport(data: { file?: File }, queryParams?: { replaceExisting?: boolean | null }): Promise<IResponse<StatImportInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatImportInfo, 'StatImportInfo')
  }

  /**
   * Query stats by keyword.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
   */
  getStatsSearch(queryParams: {
    keyword: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<IResponse<StatPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StatPagingSlicedResult,
      'StatPagingSlicedResult'
    )
  }

  /**
   * Deletes stat template.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteStat_ByStatCode(statCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/{statCode}'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get stat by statCode.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat info&lt;/ul&gt;
   */
  getStat_ByStatCode(statCode: string): Promise<IResponse<StatInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/{statCode}'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatInfo, 'StatInfo')
  }

  /**
   * Update stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod will be ignored when the stat is not set as global&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod is not updatable when the stat status is TIED&lt;/li&gt;&lt;/ul&gt;
   */
  patchStat_ByStatCode(statCode: string, data: StatUpdate): Promise<IResponse<StatInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/{statCode}'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatInfo, 'StatInfo')
  }

  /**
   * Deletes stat template.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteTied_ByStatCode(statCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/stats/{statCode}/tied'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
