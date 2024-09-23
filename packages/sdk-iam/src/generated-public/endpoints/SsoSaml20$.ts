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

export class SsoSaml20$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint authenticates user platform for SAML protocol. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. ## Supported platforms: - **azure** Microsoft login page will redirects to this endpoint after login success as previously defined on authentication request SAML
   */
  postAuthenticateSamlSso_ByPlatformId_v3(
    platformId: string,
    queryParams: { state: string | null; code?: string | null; error?: string | null }
  ): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/sso/saml/platforms/{platformId}/authenticate'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, null, {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
