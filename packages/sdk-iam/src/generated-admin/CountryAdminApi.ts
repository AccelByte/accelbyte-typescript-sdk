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
import { CountryBlacklistRequest } from '../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../generated-definitions/CountryResponseArray.js'
import { CountryAdmin$ } from './endpoints/CountryAdmin$.js'

export function CountryAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getCountries_v3(queryParams?: { filterBlacklist?: boolean | null }): Promise<AxiosResponse<CountryResponseArray>> {
    const $ = new CountryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountries_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCountriesBlacklist_v3(): Promise<AxiosResponse<CountryBlacklistResponse>> {
    const $ = new CountryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountriesBlacklist_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCountryBlacklist_v3(data: CountryBlacklistRequest): Promise<AxiosResponse<unknown>> {
    const $ = new CountryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCountryBlacklist_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Admin get country list
     */
    getCountries_v3,
    /**
     * Admin get country blacklist
     */
    getCountriesBlacklist_v3,
    /**
     * Admin update country blacklist
     */
    updateCountryBlacklist_v3
  }
}
