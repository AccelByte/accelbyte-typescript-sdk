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
import { BulkOperationResult } from '../generated-definitions/BulkOperationResult.js'
import { CampaignAdmin$ } from './endpoints/CampaignAdmin$.js'
import { CampaignCreate } from '../generated-definitions/CampaignCreate.js'
import { CampaignDynamicInfo } from '../generated-definitions/CampaignDynamicInfo.js'
import { CampaignInfo } from '../generated-definitions/CampaignInfo.js'
import { CampaignPagingSlicedResult } from '../generated-definitions/CampaignPagingSlicedResult.js'
import { CampaignUpdate } from '../generated-definitions/CampaignUpdate.js'
import { CodeCreate } from '../generated-definitions/CodeCreate.js'
import { CodeCreateResult } from '../generated-definitions/CodeCreateResult.js'
import { CodeInfo } from '../generated-definitions/CodeInfo.js'
import { CodeInfoPagingSlicedResult } from '../generated-definitions/CodeInfoPagingSlicedResult.js'
import { RedeemHistoryPagingSlicedResult } from '../generated-definitions/RedeemHistoryPagingSlicedResult.js'
import { RedeemRequest } from '../generated-definitions/RedeemRequest.js'
import { RedeemResult } from '../generated-definitions/RedeemResult.js'

export function CampaignAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Query campaigns, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ) (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of campaigns&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCampaigns(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<CampaignPagingSlicedResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCampaigns(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create campaign.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created campaign&lt;/li&gt;&lt;/ul&gt;
   */
  async function createCampaign(data: CampaignCreate): Promise<CampaignInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createCampaign(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get campaign code, it will check code whether available to redeem if redeemable true.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ) (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: code info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCode_ByCode(code: string, queryParams?: { redeemable?: boolean | null }): Promise<CodeInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCode_ByCode(code, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Enable code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enabled code&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEnable_ByCode(code: string): Promise<CodeInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEnable_ByCode(code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Disable code.&lt;p&gt;Disable an active code, the code can&#39;t be disabled if it has already been redeemed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disabled code&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDisable_ByCode(code: string): Promise<CodeInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateDisable_ByCode(code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get campaign info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: campaign info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCampaign_ByCampaignId(campaignId: string): Promise<CampaignInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCampaign_ByCampaignId(campaignId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update campaign.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated campaign&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCampaign_ByCampaignId(campaignId: string, data: CampaignUpdate): Promise<CampaignInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateCampaign_ByCampaignId(campaignId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Redeem code. If the campaign which the code belongs to is INACTIVE, the code couldn&#39;t be redeemed even if its status is ACTIVE.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:REDEMPTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Redeem result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createRedemption_ByUserId(userId: string, data: RedeemRequest): Promise<RedeemResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRedemption_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query campaign codes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ) (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of codes&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCodeCampaign_ByCampaignId(
    campaignId: string,
    queryParams?: { activeOnly?: boolean | null; batchNo?: number; code?: string | null; limit?: number; offset?: number }
  ): Promise<CodeInfoPagingSlicedResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCodeCampaign_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to create campaign codes, it will increase the batch No. based on last creation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=1 (CREATE)&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: number of codes created&lt;/li&gt;&lt;/ul&gt;
   */
  async function createCodeCampaign_ByCampaignId(campaignId: string, data: CodeCreate): Promise<CodeCreateResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createCodeCampaign_ByCampaignId(campaignId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get campaign dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: campaign dynamic&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDynamic_ByCampaignId(campaignId: string): Promise<CampaignDynamicInfo> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDynamic_ByCampaignId(campaignId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query redeem history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of redeem history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getHistoryCodes_ByCampaignId(
    campaignId: string,
    queryParams?: { code?: string | null; limit?: number; offset?: number; userId?: string | null }
  ): Promise<RedeemHistoryPagingSlicedResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getHistoryCodes_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Download all or a batch of campaign&#39;s codes as a csv file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: codes csv file&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCodesCsv_ByCampaignId(campaignId: string, queryParams?: { batchNo?: number }): Promise<unknown> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCodesCsv_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk enable campaign codes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the number of code actually enabled&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEnableBulkCode_ByCampaignId(campaignId: string, queryParams?: { batchNo?: number }): Promise<BulkOperationResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEnableBulkCode_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk disable codes.&lt;p&gt;Bulk disable campaign codes, all matched codes will be disabled except those have already been redeemed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CAMPAIGN&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the number of code actually disabled&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDisableBulkCode_ByCampaignId(campaignId: string, queryParams?: { batchNo?: number }): Promise<BulkOperationResult> {
    const $ = new CampaignAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateDisableBulkCode_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCampaigns,
    createCampaign,
    getCode_ByCode,
    updateEnable_ByCode,
    updateDisable_ByCode,
    getCampaign_ByCampaignId,
    updateCampaign_ByCampaignId,
    createRedemption_ByUserId,
    getCodeCampaign_ByCampaignId,
    createCodeCampaign_ByCampaignId,
    getDynamic_ByCampaignId,
    getHistoryCodes_ByCampaignId,
    getCodesCsv_ByCampaignId,
    updateEnableBulkCode_ByCampaignId,
    updateDisableBulkCode_ByCampaignId
  }
}
