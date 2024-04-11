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
import { AdminAddProfanityFilterIntoListRequest } from '../../generated-definitions/AdminAddProfanityFilterIntoListRequest.js'
import { AdminAddProfanityFiltersRequest } from '../../generated-definitions/AdminAddProfanityFiltersRequest.js'
import { AdminCreateProfanityListRequest } from '../../generated-definitions/AdminCreateProfanityListRequest.js'
import { AdminDeleteProfanityFilterRequest } from '../../generated-definitions/AdminDeleteProfanityFilterRequest.js'
import { AdminGetProfanityListFiltersV1Response } from '../../generated-definitions/AdminGetProfanityListFiltersV1Response.js'
import { AdminGetProfanityListsListResponseArray } from '../../generated-definitions/AdminGetProfanityListsListResponseArray.js'
import { AdminSetProfanityRuleForNamespaceRequest } from '../../generated-definitions/AdminSetProfanityRuleForNamespaceRequest.js'
import { AdminUpdateProfanityList } from '../../generated-definitions/AdminUpdateProfanityList.js'
import { AdminVerifyMessageProfanityRequest } from '../../generated-definitions/AdminVerifyMessageProfanityRequest.js'
import { AdminVerifyMessageProfanityResponse } from '../../generated-definitions/AdminVerifyMessageProfanityResponse.js'
import { DebugProfanityFilterRequest } from '../../generated-definitions/DebugProfanityFilterRequest.js'
import { ProfanityFilterArray } from '../../generated-definitions/ProfanityFilterArray.js'
import { ProfanityRule } from '../../generated-definitions/ProfanityRule.js'

export class ProfanityAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get current profanity rule
   */
  getProfanityRule(): Promise<IResponse<ProfanityRule>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/rule'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ProfanityRule, 'ProfanityRule')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Set current profanity rule
   */
  createProfanityRule(data: AdminSetProfanityRuleForNamespaceRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/rule'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get lists
   */
  getProfanityLists(): Promise<IResponse<AdminGetProfanityListsListResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminGetProfanityListsListResponseArray, 'AdminGetProfanityListsListResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create a new list
   */
  createProfanityList(data: AdminCreateProfanityListRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Verify a message directly from the UI or other services
   */
  createProfanityVerify(data: AdminVerifyMessageProfanityRequest): Promise<IResponse<AdminVerifyMessageProfanityResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminVerifyMessageProfanityResponse, 'AdminVerifyMessageProfanityResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a list include all filters inside of it
   */
  deleteProfanityList_ByList(list: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists/{list}'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update the list
   */
  createProfanityList_ByList(list: string, data: AdminUpdateProfanityList): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists/{list}'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get the list of filters that would modify the phrase
   */
  createProfanityFilterDebug(data: DebugProfanityFilterRequest): Promise<IResponse<ProfanityFilterArray>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/filters/debug'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ProfanityFilterArray, 'ProfanityFilterArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get the list of filters inside the list.
   */
  getFiltersProfanity_ByList(list: string): Promise<IResponse<AdminGetProfanityListFiltersV1Response>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminGetProfanityListFiltersV1Response, 'AdminGetProfanityListFiltersV1Response')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Add a single filter into the list
   */
  createFilterProfanity_ByList(list: string, data: AdminAddProfanityFilterIntoListRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Add multiple filters into the list
   */
  createFilterBulkProfanity_ByList(list: string, data: AdminAddProfanityFiltersRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete the filter from the list
   */
  createFilterDeleteProfanity_ByList(list: string, data: AdminDeleteProfanityFilterRequest): Promise<IResponse<ProfanityFilterArray>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/delete'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ProfanityFilterArray, 'ProfanityFilterArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Import a file with filters
   */
  createFilterBulkFileProfanity_ByList(list: string, data: number[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/bulk-file'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
