/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { IResponse, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'

/* eslint-disable camelcase */

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class SsoSaml20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postV3SsoSamlPlatformsByPlatformidAuthenticate(
    platformId: string,
    queryParams?: { state: string | null; code?: string | null; error?: string | null }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/sso/saml/platforms/' + platformId + '/authenticate'
    const resultPromise = this.axiosInstance.post(url, null, {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }
}
