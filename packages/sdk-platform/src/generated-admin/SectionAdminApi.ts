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
import { FullSectionInfo } from '../generated-definitions/FullSectionInfo.js'
import { SectionCreate } from '../generated-definitions/SectionCreate.js'
import { SectionPagingSlicedResult } from '../generated-definitions/SectionPagingSlicedResult.js'
import { SectionUpdate } from '../generated-definitions/SectionUpdate.js'
import { SectionAdmin$ } from './endpoints/SectionAdmin$.js'

export function SectionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getSections(queryParams?: {
    end?: string | null
    limit?: number
    offset?: number
    start?: string | null
    storeId?: string | null
    viewId?: string | null
  }): Promise<AxiosResponse<SectionPagingSlicedResult>> {
    const $ = new SectionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSections(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSection(data: SectionCreate, queryParams: { storeId: string | null }): Promise<AxiosResponse<FullSectionInfo>> {
    const $ = new SectionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSection(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSection_BySectionId(sectionId: string, queryParams: { storeId: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new SectionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSection_BySectionId(sectionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSection_BySectionId(
    sectionId: string,
    queryParams?: { storeId?: string | null }
  ): Promise<AxiosResponse<FullSectionInfo>> {
    const $ = new SectionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSection_BySectionId(sectionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSection_BySectionId(
    sectionId: string,
    data: SectionUpdate,
    queryParams: { storeId: string | null }
  ): Promise<AxiosResponse<FullSectionInfo>> {
    const $ = new SectionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSection_BySectionId(sectionId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSectionPurgeExpired(queryParams: { storeId: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new SectionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSectionPurgeExpired(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query sections.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated sections&lt;/li&gt;&lt;/ul&gt;
     */
    getSections,
    /**
     * This API is used to create a section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a section&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for section extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    createSection,
    /**
     * This API is used to delete s section.
     */
    deleteSection_BySectionId,
    /**
     * This API is used to get a section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: section data&lt;/li&gt;&lt;/ul&gt;
     */
    getSection_BySectionId,
    /**
     * This API is used to update s section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated section data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for section extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    updateSection_BySectionId,
    /**
     * This API is used to purge expired section.
     */
    deleteSectionPurgeExpired
  }
}
