/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { CertificateAdmin$ } from './endpoints/CertificateAdmin$.js'

export function CertificateAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function updateCertificatePfxPlatformXbl(data: {
    file: File
    password: string | null
    certname: string | null
    description?: string | null
  }): Promise<AxiosResponse<PlatformCredentials>> {
    const $ = new CertificateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCertificatePfxPlatformXbl(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Upload certificates for XBox. Certificate must be in the valid form of PFX format. &#39;certname&#39;&#39; must be specified to &#39;xbl-pfx&#39; for Session Sync to work
     */
    updateCertificatePfxPlatformXbl
  }
}
