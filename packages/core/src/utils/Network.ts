/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SdkDevice } from '@od-web-sdk/utils/SdkDevice'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'query-string'

type EjectId = number

type RequestInterceptor = (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>
type ResponseInterceptor = (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>
type ErrorInterceptor = (error: AxiosError) => Promise<unknown> | unknown

const requestInterceptors = new Map<
  EjectId,
  {
    interceptor: RequestInterceptor
    errorInterceptor: ErrorInterceptor
  }
>()

const responseInterceptors = new Map<
  EjectId,
  {
    interceptor: ResponseInterceptor
    errorInterceptor: ErrorInterceptor
  }
>()

export const injectRequestInterceptors = (requestInterceptor: RequestInterceptor, errorInterceptor: ErrorInterceptor): EjectId => {
  const pair = { interceptor: requestInterceptor, errorInterceptor }
  const ejectId = axios.interceptors.request.use(requestInterceptor, errorInterceptor)
  requestInterceptors.set(ejectId, pair)
  return ejectId
}

export const injectResponseInterceptors = (responseInterceptor: ResponseInterceptor, errorInterceptor: ErrorInterceptor): EjectId => {
  const pair = { interceptor: responseInterceptor, errorInterceptor }
  const ejectId = axios.interceptors.response.use(responseInterceptor, errorInterceptor)
  responseInterceptors.set(ejectId, pair)
  return ejectId
}

const loggerInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    config => {
      // Logger.info(config.method?.toUpperCase(), `${config.url}`)
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
}

export class Network {
  //
  static create(...configs: AxiosRequestConfig[]): AxiosInstance {
    const axiosInstance = axios.create(
      Object.assign(
        {
          paramsSerializer: qs.stringify
        },
        ...configs
      )
    )

    Array.from(requestInterceptors).forEach(([_key, interceptorPair]) => {
      const { interceptor, errorInterceptor } = interceptorPair
      axiosInstance.interceptors.request.use(interceptor, errorInterceptor)
    })

    Array.from(responseInterceptors).forEach(([_key, interceptorPair]) => {
      const { interceptor, errorInterceptor } = interceptorPair
      axiosInstance.interceptors.response.use(interceptor, errorInterceptor)
    })

    loggerInterceptor(axiosInstance)

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
