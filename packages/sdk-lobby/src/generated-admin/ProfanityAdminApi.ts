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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminAddProfanityFilterIntoListRequest } from '../generated-definitions/AdminAddProfanityFilterIntoListRequest.js'
import { AdminAddProfanityFiltersRequest } from '../generated-definitions/AdminAddProfanityFiltersRequest.js'
import { AdminCreateProfanityListRequest } from '../generated-definitions/AdminCreateProfanityListRequest.js'
import { AdminDeleteProfanityFilterRequest } from '../generated-definitions/AdminDeleteProfanityFilterRequest.js'
import { AdminGetProfanityListFiltersV1Response } from '../generated-definitions/AdminGetProfanityListFiltersV1Response.js'
import { AdminGetProfanityListsListResponseArray } from '../generated-definitions/AdminGetProfanityListsListResponseArray.js'
import { AdminSetProfanityRuleForNamespaceRequest } from '../generated-definitions/AdminSetProfanityRuleForNamespaceRequest.js'
import { AdminUpdateProfanityList } from '../generated-definitions/AdminUpdateProfanityList.js'
import { AdminVerifyMessageProfanityRequest } from '../generated-definitions/AdminVerifyMessageProfanityRequest.js'
import { AdminVerifyMessageProfanityResponse } from '../generated-definitions/AdminVerifyMessageProfanityResponse.js'
import { DebugProfanityFilterRequest } from '../generated-definitions/DebugProfanityFilterRequest.js'
import { ProfanityAdmin$ } from './endpoints/ProfanityAdmin$.js'
import { ProfanityFilterArray } from '../generated-definitions/ProfanityFilterArray.js'
import { ProfanityRule } from '../generated-definitions/ProfanityRule.js'

export function ProfanityAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get current profanity rule
   */
  async function getProfanityRule(): Promise<ProfanityRule> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getProfanityRule()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Set current profanity rule
   */
  async function createProfanityRule(data: AdminSetProfanityRuleForNamespaceRequest): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createProfanityRule(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get lists
   */
  async function getProfanityLists(): Promise<AdminGetProfanityListsListResponseArray> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getProfanityLists()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a new list
   */
  async function createProfanityList(data: AdminCreateProfanityListRequest): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createProfanityList(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Verify a message directly from the UI or other services
   */
  async function createProfanityVerify(data: AdminVerifyMessageProfanityRequest): Promise<AdminVerifyMessageProfanityResponse> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createProfanityVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a list include all filters inside of it
   */
  async function deleteProfanityList_ByList(list: string): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteProfanityList_ByList(list)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update the list
   */
  async function createProfanityList_ByList(list: string, data: AdminUpdateProfanityList): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createProfanityList_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get the list of filters that would modify the phrase
   */
  async function createProfanityFilterDebug(data: DebugProfanityFilterRequest): Promise<ProfanityFilterArray> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createProfanityFilterDebug(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get the list of filters inside the list.
   */
  async function getFiltersProfanity_ByList(list: string): Promise<AdminGetProfanityListFiltersV1Response> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getFiltersProfanity_ByList(list)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add a single filter into the list
   */
  async function createFilterProfanity_ByList(list: string, data: AdminAddProfanityFilterIntoListRequest): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFilterProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add multiple filters into the list
   */
  async function createFilterBulkProfanity_ByList(list: string, data: AdminAddProfanityFiltersRequest): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFilterBulkProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete the filter from the list
   */
  async function createFilterDeleteProfanity_ByList(list: string, data: AdminDeleteProfanityFilterRequest): Promise<ProfanityFilterArray> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFilterDeleteProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Import a file with filters
   */
  async function createFilterBulkFileProfanity_ByList(list: string, data: number[]): Promise<unknown> {
    const $ = new ProfanityAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFilterBulkFileProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProfanityRule,
    createProfanityRule,
    getProfanityLists,
    createProfanityList,
    createProfanityVerify,
    deleteProfanityList_ByList,
    createProfanityList_ByList,
    createProfanityFilterDebug,
    getFiltersProfanity_ByList,
    createFilterProfanity_ByList,
    createFilterBulkProfanity_ByList,
    createFilterDeleteProfanity_ByList,
    createFilterBulkFileProfanity_ByList
  }
}
