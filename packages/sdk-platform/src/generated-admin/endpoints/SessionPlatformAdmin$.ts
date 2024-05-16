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
import { XblUserSessionRequest } from '../../generated-definitions/XblUserSessionRequest.js'

export class SessionPlatformAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * This API is used to register/update a session on xbox.
   */
  updateSessionXbl_ByUserId(userId: string, data: XblUserSessionRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/session/xbl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
