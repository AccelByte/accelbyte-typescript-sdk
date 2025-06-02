/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { SsoPlatformCredentialRequest } from '../generated-definitions/SsoPlatformCredentialRequest.js'
import { SsoPlatformCredentialResponse } from '../generated-definitions/SsoPlatformCredentialResponse.js'
import { SsoPlatformCredentialResponseArray } from '../generated-definitions/SsoPlatformCredentialResponseArray.js'
import { SsoCredentialAdmin$ } from './endpoints/SsoCredentialAdmin$.js'

export function SsoCredentialAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getPlatformsSso_v3(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<SsoPlatformCredentialResponseArray>> {
    const $ = new SsoCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsSso_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSso_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SsoCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSso_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSso_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<SsoPlatformCredentialResponse>> {
    const $ = new SsoCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSso_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchSso_ByPlatformId_v3(
    platformId: string,
    data: SsoPlatformCredentialRequest
  ): Promise<AxiosResponse<SsoPlatformCredentialResponse>> {
    const $ = new SsoCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchSso_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSso_ByPlatformId_v3(
    platformId: string,
    data: SsoPlatformCredentialRequest
  ): Promise<AxiosResponse<SsoPlatformCredentialResponse>> {
    const $ = new SsoCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSso_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This is the API to Get All Active SSO Platform Credential.
     */
    getPlatformsSso_v3,
    /**
     * This is the API to Delete SSO Platform Credential.
     */
    deleteSso_ByPlatformId_v3,
    /**
     * This is the API to Get SSO Platform Credential.
     */
    getSso_ByPlatformId_v3,
    /**
     * This is the API to Delete SSO Platform Credential.
     */
    patchSso_ByPlatformId_v3,
    /**
     * This is the API to Add SSO Platform Credential. ## Supported platforms: - **discourse** the ssoUrl of the discourse is the discourse forum url. example: https://forum.example.com - **azure with SAML** **appId** is an application identifier in IdP, in azure it&#39;s called EntityID **acsUrl** is an endpoint on the service provider where the identity provider will redirect to with its authentication response. example: /iam/v3/sso/saml/azuresaml/authenticate **federationMetadataUrl** is an endpoint on the Identity Provider(IdP) to get IdP federation metadata for service provider to build trust relationship
     */
    createSso_ByPlatformId_v3
  }
}
