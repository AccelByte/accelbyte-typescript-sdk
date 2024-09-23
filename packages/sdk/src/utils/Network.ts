/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'query-string'
import { SdkDevice } from './SdkDevice'

export class Network {
  static create(...configs: AxiosRequestConfig[]): AxiosInstance {
    const axiosInstance = axios.create(
      Object.assign(
        {
          paramsSerializer: qs.stringify
        },
        ...configs
      )
    )

    return axiosInstance
  }

  static withBearerToken(accessToken: string, config?: AxiosRequestConfig): AxiosInstance {
    return Network.create(config || {}, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  }

  static setDeviceTokenCookie = () => {
    const deviceId = SdkDevice.getDeviceId()
    document.cookie = `device_token=${deviceId}; path=/;`
  }

  static removeDeviceTokenCookie = () => {
    document.cookie = `device_token=; expires=${new Date(0).toUTCString()}`
  }

  static getFormUrlEncodedData = (data: any): URLSearchParams => {
    const formPayload = new URLSearchParams()
    const formKeys = Object.keys(data) as []
    formKeys.forEach(key => {
      if (data[key]) formPayload.append(key, data[key])
    })
    return formPayload
  }
}
