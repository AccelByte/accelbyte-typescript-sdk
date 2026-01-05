/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { PublicThirdPartyPlatformInfoArray } from '../../generated-definitions/PublicThirdPartyPlatformInfoArray.js'

export class ThirdPartyCredential$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This is the Public API to Get All Active OIDC Platform Credential By Client ID
   */
  getPlatformsClientsOidc_v3(queryParams: { clientId: string | null }): Promise<Response<PublicThirdPartyPlatformInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/clients/oidc'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicThirdPartyPlatformInfoArray,
      'PublicThirdPartyPlatformInfoArray'
    )
  }
  /**
   * This is the Public API to Get All Active 3rd Platform Credential.
   */
  getPlatformsClientsActive_v3(): Promise<Response<PublicThirdPartyPlatformInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/clients/active'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicThirdPartyPlatformInfoArray,
      'PublicThirdPartyPlatformInfoArray'
    )
  }
}
