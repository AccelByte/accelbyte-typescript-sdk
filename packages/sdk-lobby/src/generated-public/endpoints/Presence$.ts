/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { GetUsersPresenceResponse } from '../../generated-definitions/GetUsersPresenceResponse.js'

export class Presence$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Query users presence with given namespace and userIds.
   */
  getPresenceUsersPresence(queryParams: {
    userIds: string | null
    countOnly?: boolean | null
  }): Promise<IResponseWithSync<GetUsersPresenceResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/public/presence/namespaces/{namespace}/users/presence'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUsersPresenceResponse, 'GetUsersPresenceResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
