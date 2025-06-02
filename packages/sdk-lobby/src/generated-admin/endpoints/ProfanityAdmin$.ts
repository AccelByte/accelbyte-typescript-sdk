/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
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
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Get current profanity rule
   */
  getProfanityRule(): Promise<Response<ProfanityRule>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/rule'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ProfanityRule, 'ProfanityRule')
  }
  /**
   * @deprecated
   * Set current profanity rule
   */
  updateProfanityRule(data: AdminSetProfanityRuleForNamespaceRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/rule'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Get lists
   */
  getProfanityLists(): Promise<Response<AdminGetProfanityListsListResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminGetProfanityListsListResponseArray,
      'AdminGetProfanityListsListResponseArray'
    )
  }
  /**
   * @deprecated
   * Create a new list
   */
  createProfanityList(data: AdminCreateProfanityListRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Verify a message directly from the UI or other services
   */
  fetchProfanityVerify(data: AdminVerifyMessageProfanityRequest): Promise<Response<AdminVerifyMessageProfanityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminVerifyMessageProfanityResponse,
      'AdminVerifyMessageProfanityResponse'
    )
  }
  /**
   * @deprecated
   * Delete a list include all filters inside of it
   */
  deleteProfanityList_ByList(list: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists/{list}'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Update the list
   */
  updateProfanityList_ByList(list: string, data: AdminUpdateProfanityList): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/lists/{list}'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Get the list of filters that would modify the phrase
   */
  fetchProfanityFilterDebug(data: DebugProfanityFilterRequest): Promise<Response<ProfanityFilterArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/filters/debug'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ProfanityFilterArray, 'ProfanityFilterArray')
  }
  /**
   * @deprecated
   * Get the list of filters inside the list.
   */
  getFiltersProfanity_ByList(list: string): Promise<Response<AdminGetProfanityListFiltersV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminGetProfanityListFiltersV1Response,
      'AdminGetProfanityListFiltersV1Response'
    )
  }
  /**
   * @deprecated
   * Add a single filter into the list
   */
  createFilterProfanity_ByList(list: string, data: AdminAddProfanityFilterIntoListRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Add multiple filters into the list
   */
  createFilterBulkProfanity_ByList(list: string, data: AdminAddProfanityFiltersRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Delete the filter from the list
   */
  createFilterDeleteProfanity_ByList(list: string, data: AdminDeleteProfanityFilterRequest): Promise<Response<ProfanityFilterArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/delete'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ProfanityFilterArray, 'ProfanityFilterArray')
  }
  /**
   * @deprecated
   * Import a file with filters
   */
  createFilterBulkFileProfanity_ByList(list: string, data: number[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/profanity/namespaces/{namespace}/list/{list}/filters/bulk-file'
      .replace('{namespace}', this.namespace)
      .replace('{list}', list)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
