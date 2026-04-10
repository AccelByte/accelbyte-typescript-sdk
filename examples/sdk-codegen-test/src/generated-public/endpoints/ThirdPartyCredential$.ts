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
import { PublicThirdPartyPlatformInfoArray } from '../../generated-definitions/PublicThirdPartyPlatformInfoArray.js'

export class ThirdPartyCredential$ {
  private axiosInstance: AxiosInstance
  private namespace: string
  private useSchemaValidation: boolean

  constructor(axiosInstance: AxiosInstance, namespace: string, useSchemaValidation = true) {
    this.axiosInstance = axiosInstance
    this.namespace = namespace
    this.useSchemaValidation = useSchemaValidation
  }

  /**
   * This is the Public API to Get All Active OIDC Platform Credential By Client ID
   */
  getPlatformsClientsOidc_v3(queryParams: { clientId: string | null }): Promise<Response<PublicThirdPartyPlatformInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/iam/v3/public/namespaces/{namespace}/platforms/clients/oidc'.replace('{namespace}', this.namespace)
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
    const url = '/iam/iam/v3/public/namespaces/{namespace}/platforms/clients/active'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicThirdPartyPlatformInfoArray,
      'PublicThirdPartyPlatformInfoArray'
    )
  }
}
