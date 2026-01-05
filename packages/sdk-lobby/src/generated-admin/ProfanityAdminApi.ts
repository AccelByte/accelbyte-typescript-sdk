/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { ProfanityFilterArray } from '../generated-definitions/ProfanityFilterArray.js'
import { ProfanityRule } from '../generated-definitions/ProfanityRule.js'
import { ProfanityAdmin$ } from './endpoints/ProfanityAdmin$.js'

export function ProfanityAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getProfanityRule(): Promise<AxiosResponse<ProfanityRule>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityRule()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfanityRule(data: AdminSetProfanityRuleForNamespaceRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfanityRule(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProfanityLists(): Promise<AxiosResponse<AdminGetProfanityListsListResponseArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityLists()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createProfanityList(data: AdminCreateProfanityListRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfanityList(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchProfanityVerify(
    data: AdminVerifyMessageProfanityRequest
  ): Promise<AxiosResponse<AdminVerifyMessageProfanityResponse>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchProfanityVerify(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteProfanityList_ByList(list: string): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteProfanityList_ByList(list)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProfanityList_ByList(list: string, data: AdminUpdateProfanityList): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfanityList_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchProfanityFilterDebug(data: DebugProfanityFilterRequest): Promise<AxiosResponse<ProfanityFilterArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchProfanityFilterDebug(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFiltersProfanity_ByList(list: string): Promise<AxiosResponse<AdminGetProfanityListFiltersV1Response>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFiltersProfanity_ByList(list)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFilterProfanity_ByList(list: string, data: AdminAddProfanityFilterIntoListRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFilterBulkProfanity_ByList(list: string, data: AdminAddProfanityFiltersRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterBulkProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFilterDeleteProfanity_ByList(
    list: string,
    data: AdminDeleteProfanityFilterRequest
  ): Promise<AxiosResponse<ProfanityFilterArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterDeleteProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFilterBulkFileProfanity_ByList(list: string, data: number[]): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterBulkFileProfanity_ByList(list, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Get current profanity rule
     */
    getProfanityRule,
    /**
     * @deprecated
     * Set current profanity rule
     */
    updateProfanityRule,
    /**
     * @deprecated
     * Get lists
     */
    getProfanityLists,
    /**
     * @deprecated
     * Create a new list
     */
    createProfanityList,
    /**
     * @deprecated
     * Verify a message directly from the UI or other services
     */
    fetchProfanityVerify,
    /**
     * @deprecated
     * Delete a list include all filters inside of it
     */
    deleteProfanityList_ByList,
    /**
     * @deprecated
     * Update the list
     */
    updateProfanityList_ByList,
    /**
     * @deprecated
     * Get the list of filters that would modify the phrase
     */
    fetchProfanityFilterDebug,
    /**
     * @deprecated
     * Get the list of filters inside the list.
     */
    getFiltersProfanity_ByList,
    /**
     * @deprecated
     * Add a single filter into the list
     */
    createFilterProfanity_ByList,
    /**
     * @deprecated
     * Add multiple filters into the list
     */
    createFilterBulkProfanity_ByList,
    /**
     * @deprecated
     * Delete the filter from the list
     */
    createFilterDeleteProfanity_ByList,
    /**
     * @deprecated
     * Import a file with filters
     */
    createFilterBulkFileProfanity_ByList
  }
}
