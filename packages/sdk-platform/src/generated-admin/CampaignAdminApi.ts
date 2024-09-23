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
import { BulkOperationResult } from '../generated-definitions/BulkOperationResult.js'
import { CampaignBatchNameChange } from '../generated-definitions/CampaignBatchNameChange.js'
import { CampaignBatchNameInfoArray } from '../generated-definitions/CampaignBatchNameInfoArray.js'
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
import { CampaignAdmin$ } from './endpoints/CampaignAdmin$.js'

export function CampaignAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getCampaigns(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<AxiosResponse<CampaignPagingSlicedResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCampaigns(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createCampaign(data: CampaignCreate): Promise<AxiosResponse<CampaignInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCampaign(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCode_ByCode(
    code: string,
    queryParams?: { redeemable?: boolean | null; withBatchName?: boolean | null }
  ): Promise<AxiosResponse<CodeInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCode_ByCode(code, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnable_ByCode(code: string): Promise<AxiosResponse<CodeInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByCode(code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisable_ByCode(code: string): Promise<AxiosResponse<CodeInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByCode(code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCampaign_ByCampaignId(campaignId: string): Promise<AxiosResponse<CampaignInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCampaign_ByCampaignId(campaignId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCampaign_ByCampaignId(campaignId: string, data: CampaignUpdate): Promise<AxiosResponse<CampaignInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCampaign_ByCampaignId(campaignId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRedemption_ByUserId(userId: string, data: RedeemRequest): Promise<AxiosResponse<RedeemResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRedemption_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCodeCampaign_ByCampaignId(
    campaignId: string,
    queryParams?: {
      activeOnly?: boolean | null
      batchName?: string | null
      batchNo?: number[]
      code?: string | null
      limit?: number
      offset?: number
      withBatchName?: boolean | null
    }
  ): Promise<AxiosResponse<CodeInfoPagingSlicedResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCodeCampaign_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createCodeCampaign_ByCampaignId(campaignId: string, data: CodeCreate): Promise<AxiosResponse<CodeCreateResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCodeCampaign_ByCampaignId(campaignId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDynamic_ByCampaignId(campaignId: string): Promise<AxiosResponse<CampaignDynamicInfo>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDynamic_ByCampaignId(campaignId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBatchName_ByCampaignId(campaignId: string, data: CampaignBatchNameChange): Promise<AxiosResponse<unknown>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBatchName_ByCampaignId(campaignId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBatchNames_ByCampaignId(
    campaignId: string,
    queryParams?: { batchName?: string | null; limit?: number }
  ): Promise<AxiosResponse<CampaignBatchNameInfoArray>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBatchNames_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getHistoryCodes_ByCampaignId(
    campaignId: string,
    queryParams?: { code?: string | null; limit?: number; offset?: number; userId?: string | null }
  ): Promise<AxiosResponse<RedeemHistoryPagingSlicedResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistoryCodes_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCodesCsv_ByCampaignId(
    campaignId: string,
    queryParams?: { batchName?: string | null; batchNo?: number[]; withBatchName?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCodesCsv_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnableBulkCode_ByCampaignId(
    campaignId: string,
    queryParams?: { batchName?: string | null; batchNo?: number[] }
  ): Promise<AxiosResponse<BulkOperationResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnableBulkCode_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisableBulkCode_ByCampaignId(
    campaignId: string,
    queryParams?: { batchName?: string | null; batchNo?: number[] }
  ): Promise<AxiosResponse<BulkOperationResult>> {
    const $ = new CampaignAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisableBulkCode_ByCampaignId(campaignId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query campaigns, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of campaigns&lt;/li&gt;&lt;/ul&gt;
     */
    getCampaigns,
    /**
     * Create campaign.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created campaign&lt;/li&gt;&lt;/ul&gt;
     */
    createCampaign,
    /**
     * Get campaign code, it will check code whether available to redeem if redeemable true.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: code info&lt;/li&gt;&lt;/ul&gt;
     */
    getCode_ByCode,
    /**
     * Enable code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enabled code&lt;/li&gt;&lt;/ul&gt;
     */
    updateEnable_ByCode,
    /**
     * Disable code.&lt;p&gt;Disable an active code, the code can&#39;t be disabled if it has already been redeemed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disabled code&lt;/li&gt;&lt;/ul&gt;
     */
    updateDisable_ByCode,
    /**
     * Get campaign info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: campaign info&lt;/li&gt;&lt;/ul&gt;
     */
    getCampaign_ByCampaignId,
    /**
     * Update campaign.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated campaign&lt;/li&gt;&lt;/ul&gt;
     */
    updateCampaign_ByCampaignId,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Redeem code. If the campaign which the code belongs to is INACTIVE, the code couldn&#39;t be redeemed even if its status is ACTIVE.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Redeem result&lt;/li&gt;&lt;/ul&gt;
     */
    createRedemption_ByUserId,
    /**
     * Query campaign codes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of codes&lt;/li&gt;&lt;li&gt;The &lt;i&gt;batchName&lt;/i&gt; field in the codes response will be present only when the &lt;i&gt;withBatchName&lt;/i&gt; parameter is &lt;i&gt;true&lt;/i&gt;, or when the &lt;i&gt;batchName&lt;/i&gt; filter is not blank.&lt;/li&gt;&lt;/ul&gt;
     */
    getCodeCampaign_ByCampaignId,
    /**
     * This API is used to create campaign codes, it will increase the batch No. based on last creation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: number of codes created&lt;/li&gt;&lt;/ul&gt;
     */
    createCodeCampaign_ByCampaignId,
    /**
     * Get campaign dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: campaign dynamic&lt;/li&gt;&lt;/ul&gt;
     */
    getDynamic_ByCampaignId,
    /**
     * Change campaign batch name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
     */
    updateBatchName_ByCampaignId,
    /**
     * Query campaign batch name by fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of campaign batch names&lt;/li&gt;&lt;/ul&gt;
     */
    getBatchNames_ByCampaignId,
    /**
     * Query redeem history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of redeem history&lt;/li&gt;&lt;/ul&gt;
     */
    getHistoryCodes_ByCampaignId,
    /**
     * Download all or a batch of campaign&#39;s codes as a csv file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: codes csv file&lt;/li&gt;&lt;li&gt;The csv file will always have &lt;i&gt;Batch Name&lt;/i&gt; column, but this column will be filled only when the &lt;i&gt;withBatchName&lt;/i&gt; parameter is &lt;i&gt;true&lt;/i&gt;, or when the &lt;i&gt;batchName&lt;/i&gt; filter is not blank.&lt;/li&gt;&lt;/ul&gt;
     */
    getCodesCsv_ByCampaignId,
    /**
     * Bulk enable campaign codes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the number of code actually enabled&lt;/li&gt;&lt;/ul&gt;
     */
    updateEnableBulkCode_ByCampaignId,
    /**
     * Bulk disable codes.&lt;p&gt;Bulk disable campaign codes, all matched codes will be disabled except those have already been redeemed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the number of code actually disabled&lt;/li&gt;&lt;/ul&gt;
     */
    updateDisableBulkCode_ByCampaignId
  }
}
