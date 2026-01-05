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
import { DeletionData } from '../../generated-definitions/DeletionData.js'
import { ListDeletionDataResponse } from '../../generated-definitions/ListDeletionDataResponse.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'

export class DataDeletionAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve all user&#39;s account deletion requests in specified date Scope: account
   */
  getDeletions(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
    offset?: number
    requestDate?: string | null
  }): Promise<Response<ListDeletionDataResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/deletions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListDeletionDataResponse,
      'ListDeletionDataResponse'
    )
  }
  /**
   * Cancel user&#39;s account deletion request Scope: account
   */
  deleteDeletion_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Retrieve specific user&#39;s account deletion request Scope: account
   */
  getDeletions_ByUserId(userId: string): Promise<Response<DeletionData>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeletionData, 'DeletionData')
  }
  /**
   * Submit user&#39;s account deletion request. Scope: account
   */
  createDeletion_ByUserId(userId: string): Promise<Response<RequestDeleteResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RequestDeleteResponse, 'RequestDeleteResponse')
  }
}
