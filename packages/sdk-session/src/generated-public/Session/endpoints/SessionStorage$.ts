/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'

export class SessionStorage$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   *  Update Insert Session Storage Leader. only Leader can update or insert user session storage data Leader. can store generic json example json can store : { "leader": { "leader": 1 }, "data": 123 }
   */
  patchStorageLeader_BySessionId(sessionId: string, data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/sessions/{sessionId}/storage/leader'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Update Insert Session Storage User. user can only update or insert user session storage data itself. can store generic json example json can store : { "storage": { "storage": 1 }, "data": 123 }
   */
  patchStorageUser_BySessionId_ByUserId(sessionId: string, userId: string, data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/sessions/{sessionId}/storage/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
