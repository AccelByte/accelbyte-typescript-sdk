/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { IResponse, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AppleIapReceipt } from './definitions/AppleIapReceipt'
/* eslint-disable camelcase */
import { EpicGamesReconcileRequest } from './definitions/EpicGamesReconcileRequest'
import { EpicGamesReconcileResultArray } from './definitions/EpicGamesReconcileResultArray'
import { GoogleIapReceipt } from './definitions/GoogleIapReceipt'
import { GoogleReceiptResolveResult } from './definitions/GoogleReceiptResolveResult'
import { PlayStationReconcileRequest } from './definitions/PlayStationReconcileRequest'
import { PlayStationReconcileResultArray } from './definitions/PlayStationReconcileResultArray'
import { StadiaSyncRequest } from './definitions/StadiaSyncRequest'
import { SteamSyncRequest } from './definitions/SteamSyncRequest'
import { TwitchSyncRequest } from './definitions/TwitchSyncRequest'
import { XblReconcileRequest } from './definitions/XblReconcileRequest'
import { XblReconcileResultArray } from './definitions/XblReconcileResultArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Iap$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  putUsersByUseridIapSteamSync(userId: string, data: SteamSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/steam/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridIapAppleReceipt(userId: string, data: AppleIapReceipt): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/apple/receipt'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridIapPsnSync<T = PlayStationReconcileResultArray>(
    userId: string,
    data: PlayStationReconcileRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/psn/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, PlayStationReconcileResultArray)
  }

  putUsersByUseridIapTwitchSync(userId: string, data: TwitchSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/twitch/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridIapStadiaSync(userId: string, data: StadiaSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/stadia/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridIapGoogleReceipt<T = GoogleReceiptResolveResult>(userId: string, data: GoogleIapReceipt): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/google/receipt'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, GoogleReceiptResolveResult)
  }

  putUsersByUseridIapXblSync<T = XblReconcileResultArray>(userId: string, data: XblReconcileRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/xbl/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, XblReconcileResultArray)
  }

  putUsersByUseridIapEpicgamesSync<T = EpicGamesReconcileResultArray>(
    userId: string,
    data: EpicGamesReconcileRequest
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/iap/epicgames/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, EpicGamesReconcileResultArray)
  }
}
