/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { Response } from '@accelbyte/sdk'
import { Validate } from '@accelbyte/sdk'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'

export class SsoSaml20$ {
  private axiosInstance: AxiosInstance
  private useSchemaValidation: boolean

  constructor(axiosInstance: AxiosInstance, _namespace: string, useSchemaValidation = true) {
    this.axiosInstance = axiosInstance
    this.useSchemaValidation = useSchemaValidation
  }

  /**
   * This endpoint authenticates user platform for SAML protocol. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. ## Supported platforms: - **azure** Microsoft login page will redirects to this endpoint after login success as previously defined on authentication request SAML
   */
  postAuthenticateSamlSso_ByPlatformId_v3(
    platformId: string,
    queryParams: { state: string | null; code?: string | null; error?: string | null }
  ): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/iam/v3/sso/saml/platforms/{platformId}/authenticate'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, null, {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
