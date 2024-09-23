/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { RetrieveUserEligibilitiesIndirectResponse } from '../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'
import { RetrieveUserEligibilitiesResponseArray } from '../generated-definitions/RetrieveUserEligibilitiesResponseArray.js'
import { Eligibilities$ } from './endpoints/Eligibilities$.js'

export function EligibilitiesApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEligibility_ByNamespace(): Promise<AxiosResponse<RetrieveUserEligibilitiesResponseArray>> {
    const $ = new Eligibilities$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEligibility_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUserEligibility_ByCountryCode_ByClientId_ByUserId(
    countryCode: string,
    clientId: string,
    userId: string
  ): Promise<AxiosResponse<RetrieveUserEligibilitiesIndirectResponse>> {
    const $ = new Eligibilities$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUserEligibility_ByCountryCode_ByClientId_ByUserId(countryCode, clientId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.
     */
    getEligibility_ByNamespace,
    /**
     * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.
     */
    getUserEligibility_ByCountryCode_ByClientId_ByUserId
  }
}
