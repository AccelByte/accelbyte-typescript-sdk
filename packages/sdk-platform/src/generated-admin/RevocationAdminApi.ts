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
import { RevocationAdmin$ } from './endpoints/RevocationAdmin$.js'
import { RevocationConfigInfo } from '../generated-definitions/RevocationConfigInfo.js'
import { RevocationConfigUpdate } from '../generated-definitions/RevocationConfigUpdate.js'
import { RevocationHistoryPagingSlicedResult } from '../generated-definitions/RevocationHistoryPagingSlicedResult.js'
import { RevocationRequest } from '../generated-definitions/RevocationRequest.js'
import { RevocationResult } from '../generated-definitions/RevocationResult.js'

export function RevocationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Delete revocation config.
   */
  async function deleteRevocationConfig(): Promise<unknown> {
    const $ = new RevocationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteRevocationConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRevocationConfig(): Promise<RevocationConfigInfo> {
    const $ = new RevocationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRevocationConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevocationConfig(data: RevocationConfigUpdate): Promise<RevocationConfigInfo> {
    const $ = new RevocationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateRevocationConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query revocation histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query revocation history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRevocationHistory(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    source?: 'DLC' | 'IAP' | 'ORDER' | 'OTHER'
    startTime?: string | null
    status?: 'FAIL' | 'SUCCESS'
    transactionId?: string | null
    userId?: string | null
  }): Promise<RevocationHistoryPagingSlicedResult> {
    const $ = new RevocationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRevocationHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Do revocation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revocation results&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevocation_ByUserId(userId: string, data: RevocationRequest): Promise<RevocationResult> {
    const $ = new RevocationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateRevocation_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteRevocationConfig,
    getRevocationConfig,
    updateRevocationConfig,
    getRevocationHistory,
    updateRevocation_ByUserId
  }
}
