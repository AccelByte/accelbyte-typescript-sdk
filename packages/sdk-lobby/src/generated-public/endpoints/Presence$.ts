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
import { GetUsersPresenceResponse } from '../../generated-definitions/GetUsersPresenceResponse.js'
import { RequestUserPresence } from '../../generated-definitions/RequestUserPresence.js'

export class Presence$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query users presence with given namespace and userIds.
   */
  getPresenceUsersPresence(queryParams: {
    userIds: string | null
    countOnly?: boolean | null
  }): Promise<Response<GetUsersPresenceResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/lobby/v1/public/presence/namespaces/{namespace}/users/presence'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUsersPresenceResponse,
      'GetUsersPresenceResponse'
    )
  }
  /**
   * Query users presence with given namespace and userIds.
   */
  createPresenceUserPresence(
    data: RequestUserPresence,
    queryParams?: { countOnly?: boolean | null }
  ): Promise<Response<GetUsersPresenceResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/lobby/v1/public/presence/namespaces/{namespace}/users/presence'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUsersPresenceResponse,
      'GetUsersPresenceResponse'
    )
  }
}
