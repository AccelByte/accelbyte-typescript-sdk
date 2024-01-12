/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AddCountryGroupRequest } from '../../generated-definitions/AddCountryGroupRequest.js'
import { AddCountryGroupResponse } from '../../generated-definitions/AddCountryGroupResponse.js'
import { CountryGroupObject } from '../../generated-definitions/CountryGroupObject.js'
import { RetrieveCountryGroupResponseArray } from '../../generated-definitions/RetrieveCountryGroupResponseArray.js'
import { UpdateCountryGroupRequest } from '../../generated-definitions/UpdateCountryGroupRequest.js'

export class MiscAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11206&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscLanguages(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/misc/languages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11205&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscTimezones(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/misc/timezones'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List country groups. Will return all available country groups if the query param is not specified&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11203&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of country groups&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscCountrygroups(queryParams?: { groupCode?: string | null }): Promise<IResponseWithSync<RetrieveCountryGroupResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/misc/countrygroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveCountryGroupResponseArray, 'RetrieveCountryGroupResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Add a country groups&lt;br&gt;Country code must follow ISO3166-1 alpha-2.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11201&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: newly created country group&lt;/li&gt;&lt;/ul&gt;
   */
  createMiscCountrygroup(data: AddCountryGroupRequest): Promise<IResponse<AddCountryGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/misc/countrygroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AddCountryGroupResponse, 'AddCountryGroupResponse')
  }

  /**
   * Delete a country groups by its country group code. This endpoint usually used for testing purpose to cleanup test data.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  deleteMiscCountrygroup_ByCountryGroupCode(countryGroupCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/misc/countrygroups/{countryGroupCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryGroupCode}', countryGroupCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update a country groups. The countryGroupCode must be exist beforehand.&lt;br&gt;Valid update behaviour :&lt;br/&gt;- To update &lt;i&gt;countryGroupName&lt;/i&gt; only, do not include &lt;i&gt;countries&lt;/i&gt; key or just specify it with empty array.&lt;br/&gt;- To update &lt;i&gt;countries&lt;/i&gt; only, do not include &lt;i&gt;countryGroupName&lt;/i&gt; key or just specify it with blank value.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:MISC&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11202&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated country group&lt;/li&gt;&lt;/ul&gt;
   */
  updateMiscCountrygroup_ByCountryGroupCode(
    countryGroupCode: string,
    data: UpdateCountryGroupRequest
  ): Promise<IResponse<CountryGroupObject>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/misc/countrygroups/{countryGroupCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryGroupCode}', countryGroupCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, CountryGroupObject, 'CountryGroupObject')
  }
}
