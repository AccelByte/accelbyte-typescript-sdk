/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Dictionary } from '../generated-definitions/Dictionary.js'
import { DictionaryExport } from '../generated-definitions/DictionaryExport.js'
import { DictionaryGroupArray } from '../generated-definitions/DictionaryGroupArray.js'
import { DictionaryImportResult } from '../generated-definitions/DictionaryImportResult.js'
import { DictionaryInsertBulkRequest } from '../generated-definitions/DictionaryInsertBulkRequest.js'
import { DictionaryInsertRequest } from '../generated-definitions/DictionaryInsertRequest.js'
import { DictionaryQueryResult } from '../generated-definitions/DictionaryQueryResult.js'
import { DictionaryUpdateRequest } from '../generated-definitions/DictionaryUpdateRequest.js'
import { ProfanityAdmin$ } from './endpoints/ProfanityAdmin$.js'

export function ProfanityAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getProfanityDictionary(queryParams?: {
    filterMask?: string | null
    includeChildren?: boolean | null
    limit?: number
    offset?: number
    parentId?: string | null
    startWith?: string | null
    wordType?: string | null
  }): Promise<AxiosResponse<DictionaryQueryResult>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityDictionary(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createProfanityDictionary(data: DictionaryInsertRequest): Promise<AxiosResponse<Dictionary>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfanityDictionary(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteProfanityDictionary_ById(id: string): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteProfanityDictionary_ById(id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfanityDictionary_ById(id: string, data: DictionaryUpdateRequest): Promise<AxiosResponse<Dictionary>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfanityDictionary_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createProfanityDictionaryBulk(data: DictionaryInsertBulkRequest): Promise<AxiosResponse<Dictionary>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfanityDictionaryBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfanityDictionaryGroup(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<DictionaryGroupArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityDictionaryGroup(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfanityDictionaryExport(): Promise<AxiosResponse<DictionaryExport>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityDictionaryExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createProfanityDictionaryImport(
    data: { file: File },
    queryParams?: { action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE'; showResult?: boolean | null }
  ): Promise<AxiosResponse<DictionaryImportResult>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfanityDictionaryImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query all profanity words.
     */
    getProfanityDictionary,
    /**
     * Insert new word for profanity censor
     */
    createProfanityDictionary,
    /**
     * Delete profanity words.
     */
    deleteProfanityDictionary_ById,
    /**
     * Update profanity word
     */
    updateProfanityDictionary_ById,
    /**
     * Bulk insert new word for profanity censor
     */
    createProfanityDictionaryBulk,
    /**
     * Get profanity words group.
     */
    getProfanityDictionaryGroup,
    /**
     * Export profanity words
     */
    getProfanityDictionaryExport,
    /**
     * Import profanity words
     */
    createProfanityDictionaryImport
  }
}
