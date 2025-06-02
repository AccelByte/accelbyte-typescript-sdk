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
import { ListScheduleByGoalResponse } from '../generated-definitions/ListScheduleByGoalResponse.js'
import { ListSchedulesResponse } from '../generated-definitions/ListSchedulesResponse.js'
import { SchedulesAdmin$ } from './endpoints/SchedulesAdmin$.js'

export function SchedulesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getSchedules_ByChallengeCode(
    challengeCode: string,
    queryParams?: { dateTime?: string | null; limit?: number; offset?: number; userId?: string | null }
  ): Promise<AxiosResponse<ListSchedulesResponse>> {
    const $ = new SchedulesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSchedules_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSchedules_ByChallengeCode_ByCode(
    challengeCode: string,
    code: string,
    queryParams?: { limit?: number; offset?: number; userId?: string | null }
  ): Promise<AxiosResponse<ListScheduleByGoalResponse>> {
    const $ = new SchedulesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSchedules_ByChallengeCode_ByCode(challengeCode, code, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;List schedules of given challenge for specific user. To query schedules prior to specific date time, use dateTime parameter.
     */
    getSchedules_ByChallengeCode,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;List schedules of given goal in a challenge for specific user.
     */
    getSchedules_ByChallengeCode_ByCode
  }
}
