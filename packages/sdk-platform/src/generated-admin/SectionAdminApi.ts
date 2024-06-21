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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { FullSectionInfo } from '../generated-definitions/FullSectionInfo.js'
import { FullSectionInfoArray } from '../generated-definitions/FullSectionInfoArray.js'
import { SectionCreate } from '../generated-definitions/SectionCreate.js'
import { SectionPagingSlicedResult } from '../generated-definitions/SectionPagingSlicedResult.js'
import { SectionUpdate } from '../generated-definitions/SectionUpdate.js'
import { SectionAdmin$ } from './endpoints/SectionAdmin$.js'

export function SectionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to query sections.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated sections&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSections(queryParams?: {
    end?: string | null
    limit?: number
    offset?: number
    start?: string | null
    storeId?: string | null
    viewId?: string | null
  }): Promise<SectionPagingSlicedResult> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSections(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create a section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a section&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for section extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function createSection(data: SectionCreate, queryParams: { storeId: string | null }): Promise<FullSectionInfo> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createSection(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to bulk create section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created section list&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for section extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function createSectionBulk(data: SectionCreate[], queryParams: { storeId: string | null }): Promise<FullSectionInfoArray> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createSectionBulk(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete s section.
   */
  async function deleteSection_BySectionId(sectionId: string, queryParams: { storeId: string | null }): Promise<unknown> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteSection_BySectionId(sectionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get a section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: section data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSection_BySectionId(sectionId: string, queryParams?: { storeId?: string | null }): Promise<FullSectionInfo> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSection_BySectionId(sectionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update s section.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated section data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for section extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function updateSection_BySectionId(
    sectionId: string,
    data: SectionUpdate,
    queryParams: { storeId: string | null }
  ): Promise<FullSectionInfo> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateSection_BySectionId(sectionId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to purge expired section.
   */
  async function deleteSectionPurgeExpired(queryParams: { storeId: string | null }): Promise<unknown> {
    const $ = new SectionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteSectionPurgeExpired(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSections,
    createSection,
    createSectionBulk,
    deleteSection_BySectionId,
    getSection_BySectionId,
    updateSection_BySectionId,
    deleteSectionPurgeExpired
  }
}
