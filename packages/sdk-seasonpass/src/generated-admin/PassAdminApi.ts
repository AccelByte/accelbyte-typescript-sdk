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
import { PassCreate } from '../generated-definitions/PassCreate.js'
import { PassInfo } from '../generated-definitions/PassInfo.js'
import { PassInfoArray } from '../generated-definitions/PassInfoArray.js'
import { PassUpdate } from '../generated-definitions/PassUpdate.js'
import { UserPassGrant } from '../generated-definitions/UserPassGrant.js'
import { UserSeasonSummary } from '../generated-definitions/UserSeasonSummary.js'
import { PassAdmin$ } from './endpoints/PassAdmin$.js'

export function PassAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getPasses_BySeasonId(seasonId: string): Promise<AxiosResponse<PassInfoArray>> {
    const $ = new PassAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPasses_BySeasonId(seasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPasse_BySeasonId(seasonId: string, data: PassCreate): Promise<AxiosResponse<PassInfo>> {
    const $ = new PassAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPasse_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<AxiosResponse<unknown>> {
    const $ = new PassAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePasse_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPasse_BySeasonId_ByCode(seasonId: string, code: string): Promise<AxiosResponse<PassInfo>> {
    const $ = new PassAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPasse_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchPasse_BySeasonId_ByCode(seasonId: string, code: string, data: PassUpdate): Promise<AxiosResponse<PassInfo>> {
    const $ = new PassAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchPasse_BySeasonId_ByCode(seasonId, code, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSeasonCurrentPasse_ByUserId(userId: string, data: UserPassGrant): Promise<AxiosResponse<UserSeasonSummary>> {
    const $ = new PassAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentPasse_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query all passes for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
     */
    getPasses_BySeasonId,
    /**
     * This API is used to create a pass for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created pass&lt;/li&gt;&lt;/ul&gt;
     */
    createPasse_BySeasonId,
    /**
     * This API is used to delete a pass permanently, only draft season pass can be deleted. &lt;p&gt;
     */
    deletePasse_BySeasonId_ByCode,
    /**
     * This API is used to get a pass for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: pass data&lt;/li&gt;&lt;/ul&gt;
     */
    getPasse_BySeasonId_ByCode,
    /**
     * This API is used to update a pass. Only draft season pass can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated pass&lt;/li&gt;&lt;/ul&gt;
     */
    patchPasse_BySeasonId_ByCode,
    /**
     * This API is used to grant pass to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
     */
    createSeasonCurrentPasse_ByUserId
  }
}
