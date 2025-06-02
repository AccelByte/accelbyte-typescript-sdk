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
import { PlatformCredentials } from '../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../generated-definitions/PutPlatformCredentialsRequest.js'
import { XblCertificateResponseBody } from '../generated-definitions/XblCertificateResponseBody.js'
import { PlatformCredentialAdmin$ } from './endpoints/PlatformCredentialAdmin$.js'

export function PlatformCredentialAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deletePlatformCredential(): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlatformCredential()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformCredentials(): Promise<AxiosResponse<PlatformCredentials>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformCredentials()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePlatformCredential(data: PutPlatformCredentialsRequest): Promise<AxiosResponse<PlatformCredentials>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlatformCredential(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePlatformCredential_ByPlatformId(platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlatformCredential_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSync_ByPlatformId(platformId: string): Promise<AxiosResponse<XblCertificateResponseBody>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSync_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete platform credentials used for Native Session sync.
     */
    deletePlatformCredential,
    /**
     * Get platform credentials used for Native Session sync. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret. For security, only the first few characters are shown. - scope: should be psn:s2s.service (For Sync non PSN member to PSN Session) XBOX: - namespace: namespace of the configuration - businessPartnerCertFileName: name of pfx xbox configuration file - businessPartnerCertFileBytes: the pfx configuration file - updatedAt: date time when the record is updated - createdAt: date time when the record is created - createdBy: the actor who trigger the xbox configuration sync
     */
    getPlatformCredentials,
    /**
     * Update platform credentials for Native Session sync. Currently supports PSN platform. Send an empty body to clear data. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret - scope: psn:s2s.service (For Sync non PSN member to PSN Session)
     */
    updatePlatformCredential,
    /**
     * Delete platform credentials for specific platform used for Native Session sync. Supported platforms: XBOX, PSN
     */
    deletePlatformCredential_ByPlatformId,
    /**
     * Sync Platform Credentials. Supported Platforms: 1. XBOX With this method, we will be performing sync to Platform Service to retrieve the existing PFX certificate which uploaded through IAP. If the API returns Not Found, alternatively what you can do is either: a. upload PFX file to IAP. You can access it from Admin Portal {BASE_URL}/admin/namespaces/{NAMESPACE}/in-app-purchase/xbox, or directly through API /platform/admin/namespaces/{NAMESPACE}/iap/config/xbl/cert. b. upload PFX file through Session API /session/v1/admin/namespaces/{namespace}/certificates/pfx/platforms/xbl We recommend approach #a, since you need to only upload the file once, and the service will do the sync. If you set the PFX through Session service, when this API is invoked, we will sync and replace the existing PFX file with the one from Platform (IAP).
     */
    updateSync_ByPlatformId
  }
}
