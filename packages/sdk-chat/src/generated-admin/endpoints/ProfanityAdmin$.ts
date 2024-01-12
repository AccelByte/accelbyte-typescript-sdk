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
import { Dictionary } from '../../generated-definitions/Dictionary.js'
import { DictionaryExport } from '../../generated-definitions/DictionaryExport.js'
import { DictionaryGroupArray } from '../../generated-definitions/DictionaryGroupArray.js'
import { DictionaryImportResult } from '../../generated-definitions/DictionaryImportResult.js'
import { DictionaryInsertBulkRequest } from '../../generated-definitions/DictionaryInsertBulkRequest.js'
import { DictionaryInsertRequest } from '../../generated-definitions/DictionaryInsertRequest.js'
import { DictionaryQueryResult } from '../../generated-definitions/DictionaryQueryResult.js'
import { DictionaryUpdateRequest } from '../../generated-definitions/DictionaryUpdateRequest.js'

export class ProfanityAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query all profanity words.
   */
  getProfanityDictionary(queryParams?: {
    filterMask?: string | null
    includeChildren?: boolean | null
    limit?: number
    offset?: number
    parentId?: string | null
    startWith?: string | null
    wordType?: string | null
  }): Promise<IResponseWithSync<DictionaryQueryResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DictionaryQueryResult, 'DictionaryQueryResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Insert new word for profanity censor
   */
  createProfanityDictionary(data: DictionaryInsertRequest): Promise<IResponse<Dictionary>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, Dictionary, 'Dictionary')
  }

  /**
   * Delete profanity words.
   */
  deleteProfanityDictionary_ById(id: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary/{id}'.replace('{namespace}', this.namespace).replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update profanity word
   */
  updateProfanityDictionary_ById(id: string, data: DictionaryUpdateRequest): Promise<IResponse<Dictionary>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary/{id}'.replace('{namespace}', this.namespace).replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, Dictionary, 'Dictionary')
  }

  /**
   * Bulk insert new word for profanity censor
   */
  createProfanityDictionaryBulk(data: DictionaryInsertBulkRequest): Promise<IResponse<Dictionary>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, Dictionary, 'Dictionary')
  }

  /**
   * Get profanity words group.
   */
  getProfanityDictionaryGroup(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<DictionaryGroupArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary/group'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DictionaryGroupArray, 'DictionaryGroupArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Export profanity words
   */
  getProfanityDictionaryExport(): Promise<IResponseWithSync<DictionaryExport>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DictionaryExport, 'DictionaryExport')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Import profanity words
   */
  createProfanityDictionaryImport(
    data: { file: File },
    queryParams?: { action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE'; showResult?: boolean | null }
  ): Promise<IResponse<DictionaryImportResult>> {
    const params = { action: 'REPLACE', ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/profanity/namespaces/{namespace}/dictionary/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, DictionaryImportResult, 'DictionaryImportResult')
  }
}
