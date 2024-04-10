/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AddCountryGroupRequest } from '../generated-definitions/AddCountryGroupRequest.js'
import { AddCountryGroupResponse } from '../generated-definitions/AddCountryGroupResponse.js'
import { CountryGroupObject } from '../generated-definitions/CountryGroupObject.js'
import { CountryObjectArray } from '../generated-definitions/CountryObjectArray.js'
import { MiscAdmin$ } from './endpoints/MiscAdmin$.js'
import { RetrieveCountryGroupResponseArray } from '../generated-definitions/RetrieveCountryGroupResponseArray.js'
import { UpdateCountryGroupRequest } from '../generated-definitions/UpdateCountryGroupRequest.js'

export function MiscAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11204&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscCountries(queryParams?: { lang?: string | null }): Promise<CountryObjectArray> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMiscCountries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11206&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscLanguages(): Promise<unknown> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMiscLanguages()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11205&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscTimezones(): Promise<unknown> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMiscTimezones()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List country groups. Will return all available country groups if the query param is not specified&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11203&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of country groups&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscCountrygroups(queryParams?: { groupCode?: string | null }): Promise<RetrieveCountryGroupResponseArray> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMiscCountrygroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add a country groups&lt;br&gt;Country code must follow ISO3166-1 alpha-2.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11201&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: newly created country group&lt;/li&gt;&lt;/ul&gt;
   */
  async function createMiscCountrygroup(data: AddCountryGroupRequest): Promise<AddCountryGroupResponse> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createMiscCountrygroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a country groups by its country group code. This endpoint usually used for testing purpose to cleanup test data.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteMiscCountrygroup_ByCountryGroupCode(countryGroupCode: string): Promise<unknown> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteMiscCountrygroup_ByCountryGroupCode(countryGroupCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a country groups. The countryGroupCode must be exist beforehand.&lt;br&gt;Valid update behaviour :&lt;br/&gt;- To update &lt;i&gt;countryGroupName&lt;/i&gt; only, do not include &lt;i&gt;countries&lt;/i&gt; key or just specify it with empty array.&lt;br/&gt;- To update &lt;i&gt;countries&lt;/i&gt; only, do not include &lt;i&gt;countryGroupName&lt;/i&gt; key or just specify it with blank value.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11202&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated country group&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateMiscCountrygroup_ByCountryGroupCode(
    countryGroupCode: string,
    data: UpdateCountryGroupRequest
  ): Promise<CountryGroupObject> {
    const $ = new MiscAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateMiscCountrygroup_ByCountryGroupCode(countryGroupCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMiscCountries,
    getMiscLanguages,
    getMiscTimezones,
    getMiscCountrygroups,
    createMiscCountrygroup,
    deleteMiscCountrygroup_ByCountryGroupCode,
    updateMiscCountrygroup_ByCountryGroupCode
  }
}
