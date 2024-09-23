/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam, Validate } from '@accelbyte/sdk'
import { AxiosRequestConfig } from 'axios'
import { Users$ } from '../../generated-public/endpoints/Users$'
import { ReadyPlayerMe } from '../models/ReadyPlayerMe.js'

/**
 * @deprecated, this is original *Api class
 */
export class IamUserClient {
  conf: AxiosRequestConfig
  namespace: string

  /**
   * @internal
   */
  constructor(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
    const { coreConfig, axiosInstance } = sdk.assembly()
    this.conf = ApiUtils.mergeAxiosConfigs(axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
    this.namespace = args?.coreConfig?.namespace ? args?.coreConfig?.namespace : coreConfig.namespace
  }

  /**
   * GET [/iam/v3/public/users/me](api)
   *
   * get currently logged-in user
   */
  getCurrentUser = () => {
    return this.newInstance().getUsersMe_v3()
  }

  /**
   * Render 2D Avatar via readyplayer.me POST [](https://docs.readyplayer.me/ready-player-me/avatars/2d-avatars/render-api)
   * @internal
   */
  renderImageFromGlbModel = (data: { model: string; scene: string }) => {
    const axios = Network.create({
      ...this.conf
    })
    return Validate.responseType(() => axios.post('https://render.readyplayer.me/render', data), ReadyPlayerMe, 'ReadyPlayerMe')
  }

  /**
   * @internal
   */
  newInstance(namespace?: string) {
    return new Users$(Network.create(this.conf), namespace || this.namespace)
  }
}
