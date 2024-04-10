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

export class SessionStorage$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   *  Update Insert Session Storage Leader. only Leader can update or insert user session storage data Leader. can store generic json example json can store : { &#34;leader&#34;: { &#34;leader&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
   */
  patchStorageLeader_BySessionId(sessionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/sessions/{sessionId}/storage/leader'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Update Insert Session Storage User. user can only update or insert user session storage data itself. can store generic json example json can store : { &#34;storage&#34;: { &#34;storage&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
   */
  patchStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/sessions/{sessionId}/storage/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
