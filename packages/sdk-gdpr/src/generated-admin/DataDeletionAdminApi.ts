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
import { DataDeletionAdmin$ } from './endpoints/DataDeletionAdmin$.js'
import { DeletionData } from '../generated-definitions/DeletionData.js'
import { ListDeletionDataResponse } from '../generated-definitions/ListDeletionDataResponse.js'
import { RequestDeleteResponse } from '../generated-definitions/RequestDeleteResponse.js'

export function DataDeletionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER[READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function getDeletions(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
    offset?: number
    requestDate?: string | null
  }): Promise<ListDeletionDataResponse> {
    const $ = new DataDeletionAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDeletions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [DELETE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function deleteDeletion_ByUserId(userId: string): Promise<unknown> {
    const $ = new DataDeletionAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId}[READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function getDeletions_ByUserId(userId: string): Promise<DeletionData> {
    const $ = new DataDeletionAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDeletions_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:INFORMATION:USER:{userId} [CREATE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function createDeletion_ByUserId(userId: string): Promise<RequestDeleteResponse> {
    const $ = new DataDeletionAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDeletions,
    deleteDeletion_ByUserId,
    getDeletions_ByUserId,
    createDeletion_ByUserId
  }
}
