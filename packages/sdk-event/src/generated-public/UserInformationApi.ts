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
import { EventResponse } from '../generated-definitions/EventResponse.js'
import { UserLastActivity } from '../generated-definitions/UserLastActivity.js'
import { UserInformation$ } from './endpoints/UserInformation$.js'

export function UserInformationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteActivity_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserInformation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteActivity_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getActivities_ByUserId(
    userId: string,
    queryParams: { pageSize: number; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new UserInformation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getActivities_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLastActivityTime_ByUserId(userId: string): Promise<AxiosResponse<UserLastActivity>> {
    const $ = new UserInformation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLastActivityTime_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    deleteActivity_ByUserId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getActivities_ByUserId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getLastActivityTime_ByUserId
  }
}
