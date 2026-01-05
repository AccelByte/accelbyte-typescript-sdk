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
import { EncryptedIdentity } from '../generated-definitions/EncryptedIdentity.js'
import { PublicKeyPresignedUrl } from '../generated-definitions/PublicKeyPresignedUrl.js'
import { Drm$ } from './endpoints/Drm$.js'

export function DrmApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getDrmlicenseEncrypt(queryParams: {
    appId: string | null
    machineId: string | null
  }): Promise<AxiosResponse<EncryptedIdentity>> {
    const $ = new Drm$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDrmlicenseEncrypt(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDrmlicenseRetrievePublicKey(): Promise<AxiosResponse<PublicKeyPresignedUrl>> {
    const $ = new Drm$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDrmlicenseRetrievePublicKey()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get encrypted userId and machineId for entitled user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: data field containing encrypted userId and machineId separated by comma&lt;/li&gt;&lt;/ul&gt;
     */
    getDrmlicenseEncrypt,
    /**
     * This API is used to get public key.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: url to download the key&lt;/li&gt;&lt;/ul&gt;
     */
    getDrmlicenseRetrievePublicKey
  }
}
