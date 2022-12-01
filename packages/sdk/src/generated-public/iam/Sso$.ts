/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'

/* eslint-disable camelcase */

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Sso$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  fetchV3SsoByPlatformid(platformId: string, queryParams?: { payload?: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/sso/{platformId}'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Logout user's session on platform that logged in using SSO.
   *
   * Supported platforms:
   * - discourse
   *
   */
  postV3SsoByPlatformidLogout(platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/sso/{platformId}/logout'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }
}
