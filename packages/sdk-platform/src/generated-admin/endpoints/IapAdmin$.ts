/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AppleIapConfigInfo } from '../../generated-definitions/AppleIapConfigInfo.js'
import { AppleIapConfigRequest } from '../../generated-definitions/AppleIapConfigRequest.js'
import { EpicGamesIapConfigInfo } from '../../generated-definitions/EpicGamesIapConfigInfo.js'
import { EpicGamesIapConfigRequest } from '../../generated-definitions/EpicGamesIapConfigRequest.js'
import { GoogleIapConfigInfo } from '../../generated-definitions/GoogleIapConfigInfo.js'
import { GoogleIapConfigRequest } from '../../generated-definitions/GoogleIapConfigRequest.js'
import { IapConsumeHistoryPagingSlicedResult } from '../../generated-definitions/IapConsumeHistoryPagingSlicedResult.js'
import { IapItemConfigInfo } from '../../generated-definitions/IapItemConfigInfo.js'
import { IapItemConfigUpdate } from '../../generated-definitions/IapItemConfigUpdate.js'
import { IapOrderConsumeDetailInfoArray } from '../../generated-definitions/IapOrderConsumeDetailInfoArray.js'
import { IapOrderInfo } from '../../generated-definitions/IapOrderInfo.js'
import { IapOrderLineItemInfoArray } from '../../generated-definitions/IapOrderLineItemInfoArray.js'
import { IapOrderPagingSlicedResult } from '../../generated-definitions/IapOrderPagingSlicedResult.js'
import { IapOrderShortInfo } from '../../generated-definitions/IapOrderShortInfo.js'
import { MockIapReceipt } from '../../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../../generated-definitions/PlaystationIapConfigRequest.js'
import { ResetJobRequest } from '../../generated-definitions/ResetJobRequest.js'
import { SteamAbnormalTransactionPagingSlicedResult } from '../../generated-definitions/SteamAbnormalTransactionPagingSlicedResult.js'
import { SteamIapConfig } from '../../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../../generated-definitions/SteamIapConfigRequest.js'
import { SteamReportInfoPagingSlicedResult } from '../../generated-definitions/SteamReportInfoPagingSlicedResult.js'
import { SteamReportJobInfo } from '../../generated-definitions/SteamReportJobInfo.js'
import { SteamReportJobInfoArray } from '../../generated-definitions/SteamReportJobInfoArray.js'
import { SteamSyncByTransactionRequest } from '../../generated-definitions/SteamSyncByTransactionRequest.js'
import { TestResult } from '../../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../../generated-definitions/XblIapConfigRequest.js'

export class IapAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query steam report info
   */
  getIapSteamJob(): Promise<Response<SteamReportJobInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/steam/job'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SteamReportJobInfoArray,
      'SteamReportJobInfoArray'
    )
  }
  /**
   * Delete xbl iap config.
   */
  deleteIapConfigXbl(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get xbox iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: xbox iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigXbl(): Promise<Response<XblIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblIapConfigInfo, 'XblIapConfigInfo')
  }
  /**
   * Update xbl iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigXbl(data: XblIapConfigRequest): Promise<Response<XblIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblIapConfigInfo, 'XblIapConfigInfo')
  }
  /**
   * delete a iap item config.
   */
  deleteIapConfigItem(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/item'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get iap item config.
   */
  getIapConfigItem(): Promise<Response<IapItemConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/item'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapItemConfigInfo, 'IapItemConfigInfo')
  }
  /**
   * Update iap item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated iap item config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigItem(data: IapItemConfigUpdate): Promise<Response<IapItemConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/item'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapItemConfigInfo, 'IapItemConfigInfo')
  }
  /**
   * Delete apple iap config.
   */
  deleteIapConfigApple(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get apple iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigApple(): Promise<Response<AppleIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppleIapConfigInfo, 'AppleIapConfigInfo')
  }
  /**
   * Update apple iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigApple(data: AppleIapConfigRequest): Promise<Response<AppleIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppleIapConfigInfo, 'AppleIapConfigInfo')
  }
  /**
   * Delete steam iap config.
   */
  deleteIapConfigSteam(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get steam iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigSteam(): Promise<Response<SteamIapConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SteamIapConfig, 'SteamIapConfig')
  }
  /**
   * Update steam iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigSteam(data: SteamIapConfigRequest): Promise<Response<SteamIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SteamIapConfigInfo, 'SteamIapConfigInfo')
  }
  /**
   * Delete google iap config.
   */
  deleteIapConfigGoogle(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get google iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigGoogle(): Promise<Response<GoogleIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoogleIapConfigInfo, 'GoogleIapConfigInfo')
  }
  /**
   * Update google iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigGoogle(data: GoogleIapConfigRequest): Promise<Response<GoogleIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoogleIapConfigInfo, 'GoogleIapConfigInfo')
  }
  /**
   * Delete oculus iap config.
   */
  deleteIapConfigOculu(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/oculus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get oculus iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigOculus(): Promise<Response<OculusIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/oculus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, OculusIapConfigInfo, 'OculusIapConfigInfo')
  }
  /**
   * Update oculus iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigOculu(data: OculusIapConfigRequest): Promise<Response<OculusIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/oculus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, OculusIapConfigInfo, 'OculusIapConfigInfo')
  }
  /**
   * Delete twitch iap config.
   */
  deleteIapConfigTwitch(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/twitch'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get twitch iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: twitch iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigTwitch(): Promise<Response<TwitchIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/twitch'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TwitchIapConfigInfo, 'TwitchIapConfigInfo')
  }
  /**
   * Update twitch iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated twitch iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigTwitch(data: TwitchIapConfigRequest): Promise<Response<TwitchIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/twitch'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TwitchIapConfigInfo, 'TwitchIapConfigInfo')
  }
  /**
   * Query IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
   */
  getIap_ByUserId(
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
  ): Promise<Response<IapOrderPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IapOrderPagingSlicedResult,
      'IapOrderPagingSlicedResult'
    )
  }
  /**
   * Upload xbl business partner cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigXblCert(data: { file?: File; password?: string | null }): Promise<Response<XblIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblIapConfigInfo, 'XblIapConfigInfo')
  }

  updateIapSteamJobReset(data: ResetJobRequest): Promise<Response<SteamReportJobInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/steam/job/reset'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SteamReportJobInfo, 'SteamReportJobInfo')
  }
  /**
   * Delete epic games iap config.
   */
  deleteIapConfigEpicgame(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/epicgames'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get epic games iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: epic games iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigEpicgames(): Promise<Response<EpicGamesIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/epicgames'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EpicGamesIapConfigInfo,
      'EpicGamesIapConfigInfo'
    )
  }
  /**
   * Update epic games iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated epic games iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigEpicgame(data: EpicGamesIapConfigRequest): Promise<Response<EpicGamesIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/epicgames'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EpicGamesIapConfigInfo,
      'EpicGamesIapConfigInfo'
    )
  }
  /**
   * Upload Apple Store p8 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigAppleCert(data: { file?: File }): Promise<Response<AppleIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppleIapConfigInfo, 'AppleIapConfigInfo')
  }
  /**
   * Upload google play p12 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigGoogleCert(data: { file?: File }): Promise<Response<GoogleIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoogleIapConfigInfo, 'GoogleIapConfigInfo')
  }
  /**
   * Delete playstation iap config.
   */
  deleteIapConfigPlaystation(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get playstation iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: playstation iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigPlaystation(): Promise<Response<PlayStationIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayStationIapConfigInfo,
      'PlayStationIapConfigInfo'
    )
  }
  /**
   * Update playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated playstation iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigPlaystation(data: PlaystationIapConfigRequest): Promise<Response<PlayStationIapConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayStationIapConfigInfo,
      'PlayStationIapConfigInfo'
    )
  }
  /**
   * Query all user IAP orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of iap orders&lt;/li&gt;&lt;/ul&gt;
   */
  getIapAll_ByUserId(userId: string): Promise<Response<IapOrderPagingSlicedResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/all'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IapOrderPagingSlicedResult,
      'IapOrderPagingSlicedResult'
    )
  }

  getIapSteamReportHistories(queryParams?: {
    limit?: number
    offset?: number
    orderId?: string | null
    processStatus?: 'ERROR' | 'IGNORED' | 'PROCESSED'
    steamId?: string | null
  }): Promise<Response<SteamReportInfoPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/steam/report/histories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SteamReportInfoPagingSlicedResult,
      'SteamReportInfoPagingSlicedResult'
    )
  }
  /**
   * Get IAP Order Consume Details by IAP Order Number.
   */
  getConsumedetails_ByIapOrderNo(iapOrderNo: string): Promise<Response<IapOrderConsumeDetailInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/{iapOrderNo}/consumedetails'
      .replace('{namespace}', this.namespace)
      .replace('{iapOrderNo}', iapOrderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IapOrderConsumeDetailInfoArray,
      'IapOrderConsumeDetailInfoArray'
    )
  }
  /**
   * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigPlaystationValidate(): Promise<Response<TestResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigPlaystationValidate(data: PlaystationIapConfigRequest): Promise<Response<TestResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }

  getIapSteamAbnormalTransactions(queryParams?: {
    limit?: number
    offset?: number
    orderId?: string | null
    steamId?: string | null
  }): Promise<Response<SteamAbnormalTransactionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/steam/abnormal_transactions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SteamAbnormalTransactionPagingSlicedResult,
      'SteamAbnormalTransactionPagingSlicedResult'
    )
  }
  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Mock fulfill iap item without validate receipt.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapMockReceipt_ByUserId(userId: string, data: MockIapReceipt): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/mock/receipt'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Query IAP consume history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap consume history&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConsumeHistory_ByUserId(
    userId: string,
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      status?: 'FAIL' | 'PENDING' | 'SUCCESS'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  ): Promise<Response<IapConsumeHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/consume/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IapConsumeHistoryPagingSlicedResult,
      'IapConsumeHistoryPagingSlicedResult'
    )
  }
  /**
   * Only support steam transaction mode
   */
  updateRefundSteamIap_ByIapOrderNo(iapOrderNo: string): Promise<Response<IapOrderInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/steam/orders/{iapOrderNo}/refund'
      .replace('{namespace}', this.namespace)
      .replace('{iapOrderNo}', iapOrderNo)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapOrderInfo, 'IapOrderInfo')
  }

  updateIapSteamSyncByTransaction_ByUserId(userId: string, data: SteamSyncByTransactionRequest): Promise<Response<IapOrderShortInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/steam/syncByTransaction'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapOrderShortInfo, 'IapOrderShortInfo')
  }

  updateIapSteamSyncAbnormalTransaction_ByUserId(userId: string): Promise<Response<IapOrderShortInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/steam/syncAbnormalTransaction'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapOrderShortInfo, 'IapOrderShortInfo')
  }
  /**
   * Query IAP order ine items.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated iap orders&lt;/li&gt;&lt;/ul&gt;
   */
  getLineItemsIap_ByUserId_ByIapOrderNo(userId: string, iapOrderNo: string): Promise<Response<IapOrderLineItemInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/iap/orders/{iapOrderNo}/line_items'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{iapOrderNo}', iapOrderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IapOrderLineItemInfoArray,
      'IapOrderLineItemInfoArray'
    )
  }
}
