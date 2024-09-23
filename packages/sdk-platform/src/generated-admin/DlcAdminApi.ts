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
import { DlcItemConfigInfo } from '../generated-definitions/DlcItemConfigInfo.js'
import { DlcItemConfigUpdate } from '../generated-definitions/DlcItemConfigUpdate.js'
import { PlatformDlcConfigInfo } from '../generated-definitions/PlatformDlcConfigInfo.js'
import { PlatformDlcConfigUpdate } from '../generated-definitions/PlatformDlcConfigUpdate.js'
import { UserDlc } from '../generated-definitions/UserDlc.js'
import { UserDlcRecordArray } from '../generated-definitions/UserDlcRecordArray.js'
import { DlcAdmin$ } from './endpoints/DlcAdmin$.js'

export function DlcAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteDlcConfigItem(): Promise<AxiosResponse<unknown>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDlcConfigItem()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDlcConfigItem(): Promise<AxiosResponse<DlcItemConfigInfo>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcConfigItem()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcConfigItem(data: DlcItemConfigUpdate): Promise<AxiosResponse<DlcItemConfigInfo>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcConfigItem(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDlc_ByUserId(
    userId: string,
    queryParams: { type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' }
  ): Promise<AxiosResponse<UserDlc>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlc_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteDlcConfigPlatformMap(): Promise<AxiosResponse<unknown>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDlcConfigPlatformMap()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDlcConfigPlatformMap(): Promise<AxiosResponse<PlatformDlcConfigInfo>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcConfigPlatformMap()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDlcConfigPlatformMap(data: PlatformDlcConfigUpdate): Promise<AxiosResponse<PlatformDlcConfigInfo>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcConfigPlatformMap(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDlcRecords_ByUserId(
    userId: string,
    queryParams?: {
      includeAllNamespaces?: boolean | null
      status?: 'FULFILLED' | 'REVOKED' | 'REVOKE_FAILED'
      type?: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
    }
  ): Promise<AxiosResponse<UserDlcRecordArray>> {
    const $ = new DlcAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcRecords_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * delete a DLC item config.
     */
    deleteDlcConfigItem,
    /**
     * Get DLC item config.
     */
    getDlcConfigItem,
    /**
     * Update DLC item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated DLC item config&lt;/li&gt;&lt;/ul&gt;
     */
    updateDlcConfigItem,
    /**
     * Get user dlc by platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
     */
    getDlc_ByUserId,
    /**
     * delete a Platform DLC config.
     */
    deleteDlcConfigPlatformMap,
    /**
     * Get Platform DLC config.
     */
    getDlcConfigPlatformMap,
    /**
     * Update Platform DLC config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated Platform DLC config&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for platform dlc map&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    updateDlcConfigPlatformMap,
    /**
     * Get user dlc records.&lt;br&gt;Note: includeAllNamespaces means this endpoint will return user dlcs from all namespace, example scenario isadmin may need to check the user dlcs before unlink a 3rd party account, so the user dlcs should be from all namespaces because unlinking is a platform level action &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
     */
    getDlcRecords_ByUserId
  }
}
