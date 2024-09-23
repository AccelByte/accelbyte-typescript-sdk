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
import { SsoPlatformCredentialRequest } from '../../generated-definitions/SsoPlatformCredentialRequest.js'
import { SsoPlatformCredentialResponse } from '../../generated-definitions/SsoPlatformCredentialResponse.js'
import { SsoPlatformCredentialResponseArray } from '../../generated-definitions/SsoPlatformCredentialResponseArray.js'

export class SsoCredentialAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This is the API to Get All Active SSO Platform Credential.
   */
  getPlatformsSso_v3(queryParams?: { limit?: number; offset?: number }): Promise<Response<SsoPlatformCredentialResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/sso'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SsoPlatformCredentialResponseArray,
      'SsoPlatformCredentialResponseArray'
    )
  }
  /**
   * This is the API to Delete SSO Platform Credential.
   */
  deleteSso_ByPlatformId_v3(platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the API to Get SSO Platform Credential.
   */
  getSso_ByPlatformId_v3(platformId: string): Promise<Response<SsoPlatformCredentialResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SsoPlatformCredentialResponse,
      'SsoPlatformCredentialResponse'
    )
  }
  /**
   * This is the API to Delete SSO Platform Credential.
   */
  patchSso_ByPlatformId_v3(platformId: string, data: SsoPlatformCredentialRequest): Promise<Response<SsoPlatformCredentialResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SsoPlatformCredentialResponse,
      'SsoPlatformCredentialResponse'
    )
  }
  /**
   * This is the API to Add SSO Platform Credential. ## Supported platforms: - **discourse** the ssoUrl of the discourse is the discourse forum url. example: https://forum.example.com - **azure with SAML** **appId** is an application identifier in IdP, in azure it&#39;s called EntityID **acsUrl** is an endpoint on the service provider where the identity provider will redirect to with its authentication response. example: /iam/v3/sso/saml/azuresaml/authenticate **federationMetadataUrl** is an endpoint on the Identity Provider(IdP) to get IdP federation metadata for service provider to build trust relationship
   */
  createSso_ByPlatformId_v3(platformId: string, data: SsoPlatformCredentialRequest): Promise<Response<SsoPlatformCredentialResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SsoPlatformCredentialResponse,
      'SsoPlatformCredentialResponse'
    )
  }
}
