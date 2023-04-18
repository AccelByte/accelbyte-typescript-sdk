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

export class SsoSaml20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This endpoint authenticates user platform for SAML protocol. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. <br> <h2>Supported platforms:</h2><ul> <li><strong>azure</strong></li>Microsoft login page will redirects to this endpoint after login success as previously defined on authentication request SAML </ul>
   */
  postAuthenticateSamlSso_ByPlatformId(
    platformId: string,
    queryParams: { state: string | null; code?: string | null; error?: string | null }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/sso/saml/platforms/{platformId}/authenticate'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, null, {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
