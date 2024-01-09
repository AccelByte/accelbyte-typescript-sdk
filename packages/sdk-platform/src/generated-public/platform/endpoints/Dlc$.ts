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
import { DlcConfigRewardShortInfo } from '../definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../definitions/PlayStationDlcSyncRequest.js'
import { SteamDlcSyncRequest } from '../definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../definitions/XblDlcSyncRequest.js'

export class Dlc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get dlc reward simple map, only return the sku of durable item reward&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: Authorized user&lt;/li&gt;&lt;/ul&gt;
   */
  getDlcRewardsDurableMap(queryParams: {
    dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
  }): Promise<IResponseWithSync<DlcConfigRewardShortInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/dlc/rewards/durable/map'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DlcConfigRewardShortInfo, 'DlcConfigRewardShortInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Synchronize with dlc entitlements in PSN Store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcPsnSync_ByUserId(userId: string, data: PlayStationDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sync Xbox inventory&#39;s dlc items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcXblSync_ByUserId(userId: string, data: XblDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/xbl/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sync steam dlc.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcSteamSync_ByUserId(userId: string, data: SteamDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/steam/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sync oculus dlc.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcOculuSync_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/oculus/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sync epic games dlc items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcEpicgameSync_ByUserId(userId: string, data: EpicGamesDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/epicgames/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
