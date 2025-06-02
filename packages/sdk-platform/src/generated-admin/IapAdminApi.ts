/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { AppleIapConfigInfo } from '../generated-definitions/AppleIapConfigInfo.js'
import { AppleIapConfigRequest } from '../generated-definitions/AppleIapConfigRequest.js'
import { EpicGamesIapConfigInfo } from '../generated-definitions/EpicGamesIapConfigInfo.js'
import { EpicGamesIapConfigRequest } from '../generated-definitions/EpicGamesIapConfigRequest.js'
import { GoogleIapConfigInfo } from '../generated-definitions/GoogleIapConfigInfo.js'
import { GoogleIapConfigRequest } from '../generated-definitions/GoogleIapConfigRequest.js'
import { IapConsumeHistoryPagingSlicedResult } from '../generated-definitions/IapConsumeHistoryPagingSlicedResult.js'
import { IapItemConfigInfo } from '../generated-definitions/IapItemConfigInfo.js'
import { IapItemConfigUpdate } from '../generated-definitions/IapItemConfigUpdate.js'
import { IapOrderConsumeDetailInfoArray } from '../generated-definitions/IapOrderConsumeDetailInfoArray.js'
import { IapOrderInfo } from '../generated-definitions/IapOrderInfo.js'
import { IapOrderLineItemInfoArray } from '../generated-definitions/IapOrderLineItemInfoArray.js'
import { IapOrderPagingSlicedResult } from '../generated-definitions/IapOrderPagingSlicedResult.js'
import { IapOrderShortInfo } from '../generated-definitions/IapOrderShortInfo.js'
import { MockIapReceipt } from '../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../generated-definitions/PlaystationIapConfigRequest.js'
import { ResetJobRequest } from '../generated-definitions/ResetJobRequest.js'
import { SteamAbnormalTransactionPagingSlicedResult } from '../generated-definitions/SteamAbnormalTransactionPagingSlicedResult.js'
import { SteamIapConfig } from '../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../generated-definitions/SteamIapConfigRequest.js'
import { SteamReportInfoPagingSlicedResult } from '../generated-definitions/SteamReportInfoPagingSlicedResult.js'
import { SteamReportJobInfo } from '../generated-definitions/SteamReportJobInfo.js'
import { SteamReportJobInfoArray } from '../generated-definitions/SteamReportJobInfoArray.js'
import { SteamSyncByTransactionRequest } from '../generated-definitions/SteamSyncByTransactionRequest.js'
import { TestResult } from '../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../generated-definitions/XblIapConfigRequest.js'
import { IapAdmin$ } from './endpoints/IapAdmin$.js'

export function IapAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getIapSteamJob(): Promise<AxiosResponse<SteamReportJobInfoArray>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSteamJob()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigXbl(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigXbl()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigXbl(): Promise<AxiosResponse<XblIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigXbl()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigXbl(data: XblIapConfigRequest): Promise<AxiosResponse<XblIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigXbl(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigItem(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigItem()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigItem(): Promise<AxiosResponse<IapItemConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigItem()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigItem(data: IapItemConfigUpdate): Promise<AxiosResponse<IapItemConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigItem(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigApple(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigApple()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigApple(): Promise<AxiosResponse<AppleIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigApple()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigApple(data: AppleIapConfigRequest): Promise<AxiosResponse<AppleIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigApple(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigSteam(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigSteam()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigSteam(): Promise<AxiosResponse<SteamIapConfig>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigSteam()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigSteam(data: SteamIapConfigRequest): Promise<AxiosResponse<SteamIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigSteam(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigGoogle(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigGoogle()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigGoogle(): Promise<AxiosResponse<GoogleIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigGoogle()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigGoogle(data: GoogleIapConfigRequest): Promise<AxiosResponse<GoogleIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigGoogle(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigOculu(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigOculu()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigOculus(): Promise<AxiosResponse<OculusIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigOculus()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigOculu(data: OculusIapConfigRequest): Promise<AxiosResponse<OculusIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigOculu(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigTwitch(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigTwitch()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigTwitch(): Promise<AxiosResponse<TwitchIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigTwitch()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigTwitch(data: TwitchIapConfigRequest): Promise<AxiosResponse<TwitchIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigTwitch(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIap_ByUserId(
    userId: string,
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      productId?: string | null
      startTime?: string | null
      status?: 'FAILED' | 'FULFILLED' | 'PARTIAL_REVOKED' | 'REVOKED' | 'REVOKE_FAILED' | 'VERIFIED'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  ): Promise<AxiosResponse<IapOrderPagingSlicedResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIap_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigXblCert(data: { file?: File; password?: string | null }): Promise<AxiosResponse<XblIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigXblCert(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapSteamJobReset(data: ResetJobRequest): Promise<AxiosResponse<SteamReportJobInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapSteamJobReset(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigEpicgame(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigEpicgame()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigEpicgames(): Promise<AxiosResponse<EpicGamesIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigEpicgames()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigEpicgame(data: EpicGamesIapConfigRequest): Promise<AxiosResponse<EpicGamesIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigEpicgame(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigAppleCert(data: { file?: File }): Promise<AxiosResponse<AppleIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigAppleCert(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigGoogleCert(data: { file?: File }): Promise<AxiosResponse<GoogleIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigGoogleCert(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteIapConfigPlaystation(): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteIapConfigPlaystation()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigPlaystation(): Promise<AxiosResponse<PlayStationIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigPlaystation()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigPlaystation(data: PlaystationIapConfigRequest): Promise<AxiosResponse<PlayStationIapConfigInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigPlaystation(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapAll_ByUserId(userId: string): Promise<AxiosResponse<IapOrderPagingSlicedResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapAll_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapSteamReportHistories(queryParams?: {
    limit?: number
    offset?: number
    orderId?: string | null
    processStatus?: 'ERROR' | 'IGNORED' | 'PROCESSED'
    steamId?: string | null
  }): Promise<AxiosResponse<SteamReportInfoPagingSlicedResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSteamReportHistories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConsumedetails_ByIapOrderNo(iapOrderNo: string): Promise<AxiosResponse<IapOrderConsumeDetailInfoArray>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConsumedetails_ByIapOrderNo(iapOrderNo)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConfigPlaystationValidate(): Promise<AxiosResponse<TestResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConfigPlaystationValidate()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapConfigPlaystationValidate(data: PlaystationIapConfigRequest): Promise<AxiosResponse<TestResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapConfigPlaystationValidate(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapSteamAbnormalTransactions(queryParams?: {
    limit?: number
    offset?: number
    orderId?: string | null
    steamId?: string | null
  }): Promise<AxiosResponse<SteamAbnormalTransactionPagingSlicedResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapSteamAbnormalTransactions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapMockReceipt_ByUserId(userId: string, data: MockIapReceipt): Promise<AxiosResponse<unknown>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapMockReceipt_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapConsumeHistory_ByUserId(
    userId: string,
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      status?: 'FAIL' | 'PENDING' | 'SUCCESS'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  ): Promise<AxiosResponse<IapConsumeHistoryPagingSlicedResult>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapConsumeHistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRefundSteamIap_ByIapOrderNo(iapOrderNo: string): Promise<AxiosResponse<IapOrderInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRefundSteamIap_ByIapOrderNo(iapOrderNo)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapSteamSyncByTransaction_ByUserId(
    userId: string,
    data: SteamSyncByTransactionRequest
  ): Promise<AxiosResponse<IapOrderShortInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapSteamSyncByTransaction_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIapSteamSyncAbnormalTransaction_ByUserId(userId: string): Promise<AxiosResponse<IapOrderShortInfo>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIapSteamSyncAbnormalTransaction_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLineItemsIap_ByUserId_ByIapOrderNo(
    userId: string,
    iapOrderNo: string
  ): Promise<AxiosResponse<IapOrderLineItemInfoArray>> {
    const $ = new IapAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLineItemsIap_ByUserId_ByIapOrderNo(userId, iapOrderNo)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query steam report info
     */
    getIapSteamJob,
    /**
     * Delete xbl iap config.
     */
    deleteIapConfigXbl,
    /**
     * Get xbox iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: xbox iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigXbl,
    /**
     * Update xbl iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigXbl,
    /**
     * delete a iap item config.
     */
    deleteIapConfigItem,
    /**
     * Get iap item config.
     */
    getIapConfigItem,
    /**
     * Update iap item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated iap item config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigItem,
    /**
     * Delete apple iap config.
     */
    deleteIapConfigApple,
    /**
     * Get apple iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: apple iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigApple,
    /**
     * Update apple iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigApple,
    /**
     * Delete steam iap config.
     */
    deleteIapConfigSteam,
    /**
     * Get steam iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigSteam,
    /**
     * Update steam iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigSteam,
    /**
     * Delete google iap config.
     */
    deleteIapConfigGoogle,
    /**
     * Get google iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: google iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigGoogle,
    /**
     * Update google iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigGoogle,
    /**
     * Delete oculus iap config.
     */
    deleteIapConfigOculu,
    /**
     * Get oculus iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigOculus,
    /**
     * Update oculus iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigOculu,
    /**
     * Delete twitch iap config.
     */
    deleteIapConfigTwitch,
    /**
     * Get twitch iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: twitch iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigTwitch,
    /**
     * Update twitch iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated twitch iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigTwitch,
    /**
     * Query IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
     */
    getIap_ByUserId,
    /**
     * Upload xbl business partner cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigXblCert,

    updateIapSteamJobReset,
    /**
     * Delete epic games iap config.
     */
    deleteIapConfigEpicgame,
    /**
     * Get epic games iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: epic games iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigEpicgames,
    /**
     * Update epic games iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated epic games iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigEpicgame,
    /**
     * Upload Apple Store p8 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigAppleCert,
    /**
     * Upload google play p12 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigGoogleCert,
    /**
     * Delete playstation iap config.
     */
    deleteIapConfigPlaystation,
    /**
     * Get playstation iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: playstation iap config&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigPlaystation,
    /**
     * Update playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated playstation iap config&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigPlaystation,
    /**
     * Query all user IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of iap orders&lt;/li&gt;&lt;/ul&gt;
     */
    getIapAll_ByUserId,

    getIapSteamReportHistories,
    /**
     * Get IAP Order Consume Details by IAP Order Number.
     */
    getConsumedetails_ByIapOrderNo,
    /**
     * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConfigPlaystationValidate,
    /**
     * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
     */
    updateIapConfigPlaystationValidate,

    getIapSteamAbnormalTransactions,
    /**
     * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Mock fulfill iap item without validate receipt.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
     */
    updateIapMockReceipt_ByUserId,
    /**
     * Query IAP consume history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap consume history&lt;/li&gt;&lt;/ul&gt;
     */
    getIapConsumeHistory_ByUserId,
    /**
     * Only support steam transaction mode
     */
    updateRefundSteamIap_ByIapOrderNo,

    updateIapSteamSyncByTransaction_ByUserId,

    updateIapSteamSyncAbnormalTransaction_ByUserId,
    /**
     * Query IAP order ine items.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
     */
    getLineItemsIap_ByUserId_ByIapOrderNo
  }
}
