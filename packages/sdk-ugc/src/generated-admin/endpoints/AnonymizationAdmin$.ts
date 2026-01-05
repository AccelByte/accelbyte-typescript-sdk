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

export class AnonymizationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Delete all user group
   */
  deleteGroup_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:USER:{userId} [DELETE]
   */
  deleteState_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/states'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Delete all user channel
   */
  deleteChannel_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContent_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
