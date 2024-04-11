/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Dictionary } from '../generated-definitions/Dictionary.js'
import { DictionaryExport } from '../generated-definitions/DictionaryExport.js'
import { DictionaryGroupArray } from '../generated-definitions/DictionaryGroupArray.js'
import { DictionaryImportResult } from '../generated-definitions/DictionaryImportResult.js'
import { DictionaryInsertBulkRequest } from '../generated-definitions/DictionaryInsertBulkRequest.js'
import { DictionaryInsertRequest } from '../generated-definitions/DictionaryInsertRequest.js'
import { DictionaryQueryResult } from '../generated-definitions/DictionaryQueryResult.js'
import { DictionaryUpdateRequest } from '../generated-definitions/DictionaryUpdateRequest.js'
import { ProfanityAdmin$ } from './endpoints/ProfanityAdmin$.js'

export function ProfanityAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Query all profanity words.
   */
  async function getProfanityDictionary(queryParams?: {
    filterMask?: string | null
    includeChildren?: boolean | null
    limit?: number
    offset?: number
    parentId?: string | null
    startWith?: string | null
    wordType?: string | null
  }): Promise<DictionaryQueryResult> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getProfanityDictionary(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Insert new word for profanity censor
   */
  async function createProfanityDictionary(data: DictionaryInsertRequest): Promise<Dictionary> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createProfanityDictionary(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete profanity words.
   */
  async function deleteProfanityDictionary_ById(id: string): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteProfanityDictionary_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update profanity word
   */
  async function updateProfanityDictionary_ById(id: string, data: DictionaryUpdateRequest): Promise<Dictionary> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateProfanityDictionary_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk insert new word for profanity censor
   */
  async function createProfanityDictionaryBulk(data: DictionaryInsertBulkRequest): Promise<Dictionary> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createProfanityDictionaryBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get profanity words group.
   */
  async function getProfanityDictionaryGroup(queryParams?: { limit?: number; offset?: number }): Promise<DictionaryGroupArray> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getProfanityDictionaryGroup(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Export profanity words
   */
  async function getProfanityDictionaryExport(): Promise<DictionaryExport> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getProfanityDictionaryExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Import profanity words
   */
  async function createProfanityDictionaryImport(
    data: { file: File },
    queryParams?: { action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE'; showResult?: boolean | null }
  ): Promise<DictionaryImportResult> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createProfanityDictionaryImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProfanityDictionary,
    createProfanityDictionary,
    deleteProfanityDictionary_ById,
    updateProfanityDictionary_ById,
    createProfanityDictionaryBulk,
    getProfanityDictionaryGroup,
    getProfanityDictionaryExport,
    createProfanityDictionaryImport
  }
}
