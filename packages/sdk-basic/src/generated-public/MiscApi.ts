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
import { CountryObjectArray } from '../generated-definitions/CountryObjectArray.js'
import { RetrieveTimeResponse } from '../generated-definitions/RetrieveTimeResponse.js'
import { Misc$ } from './endpoints/Misc$.js'

export function MiscApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getMiscTime(): Promise<AxiosResponse<RetrieveTimeResponse>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscTime()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMiscCountries(queryParams?: { lang?: string | null }): Promise<AxiosResponse<CountryObjectArray>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscCountries(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMiscLanguages(): Promise<AxiosResponse<unknown>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscLanguages()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMiscTimezones(): Promise<AxiosResponse<unknown>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscTimezones()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get server time
     */
    getMiscTime,
    /**
     * @deprecated
     * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt;
     */
    getMiscCountries,
    /**
     * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
     */
    getMiscLanguages,
    /**
     * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
     */
    getMiscTimezones
  }
}
