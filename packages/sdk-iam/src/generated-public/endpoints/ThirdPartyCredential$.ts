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
import { PublicThirdPartyPlatformInfoArray } from '../../generated-definitions/PublicThirdPartyPlatformInfoArray.js'

export class ThirdPartyCredential$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * This is the Public API to Get All Active OIDC Platform Credential By Client ID
   */
  getPlatformsClientsOidc(queryParams: { clientId: string | null }): Promise<IResponse<PublicThirdPartyPlatformInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/clients/oidc'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PublicThirdPartyPlatformInfoArray,
      'PublicThirdPartyPlatformInfoArray'
    )
  }

  /**
   * This is the Public API to Get All Active 3rd Platform Credential.
   */
  getPlatformsClientsActive(): Promise<IResponse<PublicThirdPartyPlatformInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/platforms/clients/active'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PublicThirdPartyPlatformInfoArray,
      'PublicThirdPartyPlatformInfoArray'
    )
  }
}
