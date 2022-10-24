/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { IResponse, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
/* eslint-disable camelcase */
import { EpicGamesDlcSyncRequest } from './definitions/EpicGamesDlcSyncRequest'
import { PlayStationDlcSyncRequest } from './definitions/PlayStationDlcSyncRequest'
import { SteamDlcSyncRequest } from './definitions/SteamDlcSyncRequest'
import { XblDlcSyncRequest } from './definitions/XblDlcSyncRequest'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Dlc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  putUsersByUseridDlcSteamSync(userId: string, data: SteamDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/dlc/steam/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridDlcXblSync(userId: string, data: XblDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/dlc/xbl/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridDlcPsnSync(userId: string, data: PlayStationDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/dlc/psn/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  putUsersByUseridDlcEpicgamesSync(userId: string, data: EpicGamesDlcSyncRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/dlc/epicgames/sync'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }
}
