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
import { PlayFeatureFlag } from '../generated-definitions/PlayFeatureFlag.js'
import { PlayFeatureFlagAdmin$ } from './endpoints/PlayFeatureFlagAdmin$.js'

export function PlayFeatureFlagAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deletePlayfeatureflag(): Promise<AxiosResponse<unknown>> {
    const $ = new PlayFeatureFlagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlayfeatureflag()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlayfeatureflag(): Promise<AxiosResponse<PlayFeatureFlag>> {
    const $ = new PlayFeatureFlagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlayfeatureflag()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePlayfeatureflag(data: PlayFeatureFlag): Promise<AxiosResponse<PlayFeatureFlag>> {
    const $ = new PlayFeatureFlagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlayfeatureflag(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Delete matchmaking Play Feature Flag. Deleting the current namespace&#39;s custom config only removes it from the database, the system will then use the environment variable defined in the ConfigMap instead.
     */
    deletePlayfeatureflag,
    /**
     * Get matchmaking Play Feature Flag.
     */
    getPlayfeatureflag,
    /**
     * Upsert matchmaking Play Feature Flag.
     */
    updatePlayfeatureflag
  }
}
