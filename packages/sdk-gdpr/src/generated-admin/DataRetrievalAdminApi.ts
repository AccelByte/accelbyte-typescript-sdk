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
import { DataRetrievalAdmin$ } from './endpoints/DataRetrievalAdmin$.js'
import { DataRetrievalResponse } from '../generated-definitions/DataRetrievalResponse.js'
import { ListPersonalDataResponse } from '../generated-definitions/ListPersonalDataResponse.js'
import { UserDataUrl } from '../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../generated-definitions/UserPersonalDataResponse.js'

export function DataRetrievalAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function getRequests(queryParams?: {
    limit?: number
    offset?: number
    requestDate?: string | null
  }): Promise<ListPersonalDataResponse> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRequests(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function getRequests_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<UserPersonalDataResponse> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRequests_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [CREATE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt; &lt;p&gt;If admin request data for themselves, password is need to be set&lt;/p&gt;
   */
  async function postRequest_ByUserId(userId: string, data: { password?: string | null }): Promise<DataRetrievalResponse> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postRequest_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [DELETE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<unknown> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRequest_ByUserId_ByRequestDate(userId, requestDate)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function postGenerate_ByUserId_ByRequestDate(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<UserDataUrl> {
    const $ = new DataRetrievalAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postGenerate_ByUserId_ByRequestDate(userId, requestDate, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRequests,
    getRequests_ByUserId,
    postRequest_ByUserId,
    deleteRequest_ByUserId_ByRequestDate,
    postGenerate_ByUserId_ByRequestDate
  }
}
