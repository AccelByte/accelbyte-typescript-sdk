/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { DlcConfigRewardShortInfo } from '../../generated-definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../../generated-definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../../generated-definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../../generated-definitions/PlayStationDlcSyncRequest.js'
import { SimpleUserDlcRewardContentsResponse } from '../../generated-definitions/SimpleUserDlcRewardContentsResponse.js'
import { SteamDlcSyncRequest } from '../../generated-definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../../generated-definitions/XblDlcSyncRequest.js'

export class Dlc$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get user dlc reward contents. If includeAllNamespaces is false, will only return the dlc synced from the current namespace&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeDlcContent(queryParams: {
    type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
    includeAllNamespaces?: boolean | null
  }): Promise<Response<SimpleUserDlcRewardContentsResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/users/me/dlc/content'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SimpleUserDlcRewardContentsResponse,
      'SimpleUserDlcRewardContentsResponse'
    )
  }
  /**
   * Get dlc reward simple map, only return the sku of durable item reward.
   */
  getDlcRewardsDurableMap(queryParams: {
    dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'
  }): Promise<Response<DlcConfigRewardShortInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/dlc/rewards/durable/map'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DlcConfigRewardShortInfo,
      'DlcConfigRewardShortInfo'
    )
  }
  /**
   * Synchronize with dlc entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcPsnSync_ByUserId(userId: string, data: PlayStationDlcSyncRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync Xbox inventory&#39;s dlc items
   */
  updateDlcXblSync_ByUserId(userId: string, data: XblDlcSyncRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/xbl/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync steam dlc
   */
  updateDlcSteamSync_ByUserId(userId: string, data: SteamDlcSyncRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/steam/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync oculus dlc
   */
  updateDlcOculuSync_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/oculus/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sync epic games dlc items
   */
  updateDlcEpicgameSync_ByUserId(userId: string, data: EpicGamesDlcSyncRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/epicgames/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt;
   */
  updateDlcPsnSyncMultiServiceLabel_ByUserId(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
