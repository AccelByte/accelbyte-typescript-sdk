/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { IResponse, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { EpicGamesDlcSyncRequest } from './definitions/EpicGamesDlcSyncRequest'
/* eslint-disable camelcase */
import { PlayStationDlcSyncMultiServiceLabelsRequest } from './definitions/PlayStationDlcSyncMultiServiceLabelsRequest'
import { PlayStationDlcSyncRequest } from './definitions/PlayStationDlcSyncRequest'
import { SteamDlcSyncRequest } from './definitions/SteamDlcSyncRequest'
import { XblDlcSyncRequest } from './definitions/XblDlcSyncRequest'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Dlc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Sync steam dlc.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putUsersByUseridDlcSteamSync(userId: string, data: SteamDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/steam/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Sync Xbox inventory's dlc items.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putUsersByUseridDlcXblSync(userId: string, data: XblDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/xbl/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Synchronize with dlc entitlements in PSN Store.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  putUsersByUseridDlcPsnSync(userId: string, data: PlayStationDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/psn/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Sync epic games dlc items.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: </li></ul>
   */
  putUsersByUseridDlcEpicgamesSync(userId: string, data: EpicGamesDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/epicgames/sync'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:DLC, action=4 (UPDATE)</li><li><i>Returns</i>: result of synchronization</li></ul>
   */
  putUsersByUseridDlcPsnSyncMultiServiceLabels(
    userId: string,
    data: PlayStationDlcSyncMultiServiceLabelsRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/dlc/psn/sync/multiServiceLabels'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }
}
