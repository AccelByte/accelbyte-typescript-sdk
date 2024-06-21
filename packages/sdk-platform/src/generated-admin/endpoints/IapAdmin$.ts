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
import { AppleIapConfigInfo } from '../../generated-definitions/AppleIapConfigInfo.js'
import { AppleIapConfigRequest } from '../../generated-definitions/AppleIapConfigRequest.js'
import { EpicGamesIapConfigInfo } from '../../generated-definitions/EpicGamesIapConfigInfo.js'
import { EpicGamesIapConfigRequest } from '../../generated-definitions/EpicGamesIapConfigRequest.js'
import { GoogleIapConfigInfo } from '../../generated-definitions/GoogleIapConfigInfo.js'
import { GoogleIapConfigRequest } from '../../generated-definitions/GoogleIapConfigRequest.js'
import { IapConsumeHistoryPagingSlicedResult } from '../../generated-definitions/IapConsumeHistoryPagingSlicedResult.js'
import { IapItemConfigInfo } from '../../generated-definitions/IapItemConfigInfo.js'
import { IapItemConfigUpdate } from '../../generated-definitions/IapItemConfigUpdate.js'
import { IapOrderPagingSlicedResult } from '../../generated-definitions/IapOrderPagingSlicedResult.js'
import { MockIapReceipt } from '../../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../../generated-definitions/PlaystationIapConfigRequest.js'
import { SteamIapConfig } from '../../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../../generated-definitions/SteamIapConfigRequest.js'
import { TestResult } from '../../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../../generated-definitions/XblIapConfigRequest.js'

export class IapAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Delete xbl iap config.
   */
  deleteIapConfigXbl(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get xbox iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: xbox iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigXbl(): Promise<IResponse<XblIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblIapConfigInfo, 'XblIapConfigInfo')
  }

  /**
   * Update xbl iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated xbl iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigXbl(data: XblIapConfigRequest): Promise<IResponse<XblIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblIapConfigInfo, 'XblIapConfigInfo')
  }

  /**
   * delete a iap item config.
   */
  deleteIapConfigItem(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/item'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get iap item config.
   */
  getIapConfigItem(): Promise<IResponse<IapItemConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/item'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapItemConfigInfo, 'IapItemConfigInfo')
  }

  /**
   * Update iap item config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated iap item config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigItem(data: IapItemConfigUpdate): Promise<IResponse<IapItemConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/item'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, IapItemConfigInfo, 'IapItemConfigInfo')
  }

  /**
   * Delete apple iap config.
   */
  deleteIapConfigApple(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get apple iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigApple(): Promise<IResponse<AppleIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppleIapConfigInfo, 'AppleIapConfigInfo')
  }

  /**
   * Update apple iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated apple iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigApple(data: AppleIapConfigRequest): Promise<IResponse<AppleIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/apple'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppleIapConfigInfo, 'AppleIapConfigInfo')
  }

  /**
   * Delete steam iap config.
   */
  deleteIapConfigSteam(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get steam iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigSteam(): Promise<IResponse<SteamIapConfig>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SteamIapConfig, 'SteamIapConfig')
  }

  /**
   * Update steam iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigSteam(data: SteamIapConfigRequest): Promise<IResponse<SteamIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/steam'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SteamIapConfigInfo, 'SteamIapConfigInfo')
  }

  /**
   * Delete google iap config.
   */
  deleteIapConfigGoogle(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get google iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigGoogle(): Promise<IResponse<GoogleIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoogleIapConfigInfo, 'GoogleIapConfigInfo')
  }

  /**
   * Update google iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigGoogle(data: GoogleIapConfigRequest): Promise<IResponse<GoogleIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoogleIapConfigInfo, 'GoogleIapConfigInfo')
  }

  /**
   * Delete oculus iap config.
   */
  deleteIapConfigOculu(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/oculus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get oculus iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigOculus(): Promise<IResponse<OculusIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/oculus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, OculusIapConfigInfo, 'OculusIapConfigInfo')
  }

  /**
   * Update oculus iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated steam iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigOculu(data: OculusIapConfigRequest): Promise<IResponse<OculusIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/oculus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, OculusIapConfigInfo, 'OculusIapConfigInfo')
  }

  /**
   * Delete twitch iap config.
   */
  deleteIapConfigTwitch(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/twitch'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get twitch iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: twitch iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigTwitch(): Promise<IResponse<TwitchIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/twitch'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TwitchIapConfigInfo, 'TwitchIapConfigInfo')
  }

  /**
   * Update twitch iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated twitch iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigTwitch(data: TwitchIapConfigRequest): Promise<IResponse<TwitchIapConfigInfo>> {
    const params = {} as SDKRequestConfig
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
      status?: 'FAILED' | 'FULFILLED' | 'VERIFIED'
      type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
    }
  ): Promise<IResponse<IapOrderPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
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
  updateIapConfigXblCert(data: { file?: File; password?: string | null }): Promise<IResponse<XblIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/xbl/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblIapConfigInfo, 'XblIapConfigInfo')
  }

  /**
   * Delete epic games iap config.
   */
  deleteIapConfigEpicgame(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/epicgames'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get epic games iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: epic games iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigEpicgames(): Promise<IResponse<EpicGamesIapConfigInfo>> {
    const params = {} as SDKRequestConfig
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
  updateIapConfigEpicgame(data: EpicGamesIapConfigRequest): Promise<IResponse<EpicGamesIapConfigInfo>> {
    const params = {} as SDKRequestConfig
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
   * Upload google play p12 file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated google iap config&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigGoogleCert(data: { file?: File }): Promise<IResponse<GoogleIapConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/google/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoogleIapConfigInfo, 'GoogleIapConfigInfo')
  }

  /**
   * Delete playstation iap config.
   */
  deleteIapConfigPlaystation(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get playstation iap config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: playstation iap config&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigPlaystation(): Promise<IResponse<PlayStationIapConfigInfo>> {
    const params = {} as SDKRequestConfig
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
  updateIapConfigPlaystation(data: PlaystationIapConfigRequest): Promise<IResponse<PlayStationIapConfigInfo>> {
    const params = {} as SDKRequestConfig
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
  getIapAll_ByUserId(userId: string): Promise<IResponse<IapOrderPagingSlicedResult>> {
    const params = {} as SDKRequestConfig
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

  /**
   * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
   */
  getIapConfigPlaystationValidate(): Promise<IResponse<TestResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }

  /**
   * Validate playstation iap config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Test Results&lt;/li&gt;&lt;/ul&gt;
   */
  updateIapConfigPlaystationValidate(data: PlaystationIapConfigRequest): Promise<IResponse<TestResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/iap/config/playstation/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Mock fulfill iap item without validate receipt.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateIapMockReceipt_ByUserId(userId: string, data: MockIapReceipt): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
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
  ): Promise<IResponse<IapConsumeHistoryPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
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
}
