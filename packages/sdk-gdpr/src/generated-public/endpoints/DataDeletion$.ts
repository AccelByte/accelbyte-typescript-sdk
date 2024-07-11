/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { DeletionStatus } from '../../generated-definitions/DeletionStatus.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'

export class DataDeletion$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Cancel my account deletion request Requires valid user access token
   */
  deleteUserMeDeletion(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/users/me/deletions'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Submit my account deletion requests. Requires valid user access token This is for in-game only and require a valid platformId and platform token. If a full account is not logged by 3rd platform, then please use [/gdpr/public/namespaces/{namespace}/users/{userId}/deletions](#operations-Data_Deletion-PublicSubmitUserAccountDeletionRequest) ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
   */
  postUserMeDeletion(data: { platformId: string | null; platformToken: string | null }): Promise<IResponse<RequestDeleteResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/users/me/deletions'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RequestDeleteResponse, 'RequestDeleteResponse')
  }

  /**
   * Retrieve my account deletion status Requires valid user access token
   */
  getUsersMeDeletionsStatus(): Promise<IResponse<DeletionStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/users/me/deletions/status'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeletionStatus, 'DeletionStatus')
  }

  /**
   * Cancel user&#39;s account deletion request Requires valid user access token Scope: account
   */
  deleteDeletion_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Submit user&#39;s account deletion request. Requires valid user access token and password Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
   */
  postDeletion_ByUserId(
    userId: string,
    data: { password: string | null; languageTag?: string | null }
  ): Promise<IResponse<RequestDeleteResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RequestDeleteResponse, 'RequestDeleteResponse')
  }

  /**
   * Retrieve specific user&#39;s account deletion status Requires valid user access token Scope: account
   */
  getDeletionsStatus_ByUserId(userId: string): Promise<IResponse<DeletionStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeletionStatus, 'DeletionStatus')
  }
}
