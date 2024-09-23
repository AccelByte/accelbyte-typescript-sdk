/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'

export class SessionStorageAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  Delete Session Storage By sessionID Session Storage feature only available for Gamesession
   */
  deleteStorage_BySessionId(sessionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/sessions/{sessionId}/storage'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   *  Read Session Storage by sessionID Session Storage feature only available for Gamesession
   */
  getStorage_BySessionId(sessionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/sessions/{sessionId}/storage'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   *  Read Session Storage by sessionID and userID Session Storage feature only available for Gamesession
   */
  getStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/sessions/{sessionId}/storage/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
