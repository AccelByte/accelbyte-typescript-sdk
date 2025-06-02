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
import { CreateConfigRequest } from '../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../generated-definitions/UpdateConfigResponse.js'
import { ThirdPartyAdmin$ } from './endpoints/ThirdPartyAdmin$.js'

export function ThirdPartyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteThirdpartyConfigSteam(): Promise<AxiosResponse<unknown>> {
    const $ = new ThirdPartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteThirdpartyConfigSteam()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getThirdpartyConfigSteam(): Promise<AxiosResponse<GetConfigResponse>> {
    const $ = new ThirdPartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getThirdpartyConfigSteam()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createThirdpartyConfigSteam(data: CreateConfigRequest): Promise<AxiosResponse<CreateConfigResponse>> {
    const $ = new ThirdPartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createThirdpartyConfigSteam(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateThirdpartyConfigSteam(data: UpdateConfigRequest): Promise<AxiosResponse<UpdateConfigResponse>> {
    const $ = new ThirdPartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateThirdpartyConfigSteam(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:THIRDPARTY:CONFIG [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete third party config in a namespace.
     */
    deleteThirdpartyConfigSteam,
    /**
     * @deprecated
     * Get third party config for specified namespace.
     */
    getThirdpartyConfigSteam,
    /**
     * @deprecated
     * Create third party config in a namespace.
     */
    createThirdpartyConfigSteam,
    /**
     * @deprecated
     * Update third party config in a namespace.
     */
    updateThirdpartyConfigSteam
  }
}
