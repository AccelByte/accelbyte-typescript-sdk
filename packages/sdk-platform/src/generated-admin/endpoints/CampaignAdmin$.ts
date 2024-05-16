/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { CampaignCreate } from '../../generated-definitions/CampaignCreate.js'
import { CampaignDynamicInfo } from '../../generated-definitions/CampaignDynamicInfo.js'
import { CampaignInfo } from '../../generated-definitions/CampaignInfo.js'
import { CampaignPagingSlicedResult } from '../../generated-definitions/CampaignPagingSlicedResult.js'
import { CampaignUpdate } from '../../generated-definitions/CampaignUpdate.js'
import { CodeCreate } from '../../generated-definitions/CodeCreate.js'
import { CodeCreateResult } from '../../generated-definitions/CodeCreateResult.js'
import { CodeInfo } from '../../generated-definitions/CodeInfo.js'
import { CodeInfoPagingSlicedResult } from '../../generated-definitions/CodeInfoPagingSlicedResult.js'
import { RedeemHistoryPagingSlicedResult } from '../../generated-definitions/RedeemHistoryPagingSlicedResult.js'
import { RedeemRequest } from '../../generated-definitions/RedeemRequest.js'
import { RedeemResult } from '../../generated-definitions/RedeemResult.js'

export class CampaignAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Query campaigns, if name is presented, it&#39;s fuzzy match.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of campaigns&lt;/li&gt;&lt;/ul&gt;
   */
  getCampaigns(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    tag?: string | null
  }): Promise<IResponse<CampaignPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/campaigns'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      CampaignPagingSlicedResult,
      'CampaignPagingSlicedResult'
    )
  }

  /**
   * Create campaign.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created campaign&lt;/li&gt;&lt;/ul&gt;
   */
  createCampaign(data: CampaignCreate): Promise<IResponse<CampaignInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/campaigns'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CampaignInfo, 'CampaignInfo')
  }

  /**
   * Get campaign code, it will check code whether available to redeem if redeemable true.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: code info&lt;/li&gt;&lt;/ul&gt;
   */
  getCode_ByCode(code: string, queryParams?: { redeemable?: boolean | null }): Promise<IResponse<CodeInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/{code}'.replace('{namespace}', this.namespace).replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CodeInfo, 'CodeInfo')
  }

  /**
   * Enable code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enabled code&lt;/li&gt;&lt;/ul&gt;
   */
  updateEnable_ByCode(code: string): Promise<IResponse<CodeInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/{code}/enable'.replace('{namespace}', this.namespace).replace('{code}', code)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CodeInfo, 'CodeInfo')
  }

  /**
   * Disable code.&lt;p&gt;Disable an active code, the code can&#39;t be disabled if it has already been redeemed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disabled code&lt;/li&gt;&lt;/ul&gt;
   */
  updateDisable_ByCode(code: string): Promise<IResponse<CodeInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/{code}/disable'.replace('{namespace}', this.namespace).replace('{code}', code)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CodeInfo, 'CodeInfo')
  }

  /**
   * Get campaign info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: campaign info&lt;/li&gt;&lt;/ul&gt;
   */
  getCampaign_ByCampaignId(campaignId: string): Promise<IResponse<CampaignInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/campaigns/{campaignId}'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CampaignInfo, 'CampaignInfo')
  }

  /**
   * Update campaign.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated campaign&lt;/li&gt;&lt;/ul&gt;
   */
  updateCampaign_ByCampaignId(campaignId: string, data: CampaignUpdate): Promise<IResponse<CampaignInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/campaigns/{campaignId}'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CampaignInfo, 'CampaignInfo')
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Redeem code. If the campaign which the code belongs to is INACTIVE, the code couldn&#39;t be redeemed even if its status is ACTIVE.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Redeem result&lt;/li&gt;&lt;/ul&gt;
   */
  createRedemption_ByUserId(userId: string, data: RedeemRequest): Promise<IResponse<RedeemResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/redemption'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, RedeemResult, 'RedeemResult')
  }

  /**
   * Query campaign codes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of codes&lt;/li&gt;&lt;/ul&gt;
   */
  getCodeCampaign_ByCampaignId(
    campaignId: string,
    queryParams?: { activeOnly?: boolean | null; batchNo?: number; code?: string | null; limit?: number; offset?: number }
  ): Promise<IResponse<CodeInfoPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/campaigns/{campaignId}'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      CodeInfoPagingSlicedResult,
      'CodeInfoPagingSlicedResult'
    )
  }

  /**
   * This API is used to create campaign codes, it will increase the batch No. based on last creation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: number of codes created&lt;/li&gt;&lt;/ul&gt;
   */
  createCodeCampaign_ByCampaignId(campaignId: string, data: CodeCreate): Promise<IResponse<CodeCreateResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/campaigns/{campaignId}'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CodeCreateResult, 'CodeCreateResult')
  }

  /**
   * Get campaign dynamic.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: campaign dynamic&lt;/li&gt;&lt;/ul&gt;
   */
  getDynamic_ByCampaignId(campaignId: string): Promise<IResponse<CampaignDynamicInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/campaigns/{campaignId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CampaignDynamicInfo, 'CampaignDynamicInfo')
  }

  /**
   * Query redeem history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slice of redeem history&lt;/li&gt;&lt;/ul&gt;
   */
  getHistoryCodes_ByCampaignId(
    campaignId: string,
    queryParams?: { code?: string | null; limit?: number; offset?: number; userId?: string | null }
  ): Promise<IResponse<RedeemHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/campaigns/{campaignId}/history'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      RedeemHistoryPagingSlicedResult,
      'RedeemHistoryPagingSlicedResult'
    )
  }

  /**
   * Download all or a batch of campaign&#39;s codes as a csv file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: codes csv file&lt;/li&gt;&lt;/ul&gt;
   */
  getCodesCsv_ByCampaignId(campaignId: string, queryParams?: { batchNo?: number }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/campaigns/{campaignId}/codes.csv'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Bulk enable campaign codes.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the number of code actually enabled&lt;/li&gt;&lt;/ul&gt;
   */
  updateEnableBulkCode_ByCampaignId(campaignId: string, queryParams?: { batchNo?: number }): Promise<IResponse<BulkOperationResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/campaigns/{campaignId}/enable/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, BulkOperationResult, 'BulkOperationResult')
  }

  /**
   * Bulk disable codes.&lt;p&gt;Bulk disable campaign codes, all matched codes will be disabled except those have already been redeemed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the number of code actually disabled&lt;/li&gt;&lt;/ul&gt;
   */
  updateDisableBulkCode_ByCampaignId(campaignId: string, queryParams?: { batchNo?: number }): Promise<IResponse<BulkOperationResult>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/codes/campaigns/{campaignId}/disable/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{campaignId}', campaignId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, BulkOperationResult, 'BulkOperationResult')
  }
}
