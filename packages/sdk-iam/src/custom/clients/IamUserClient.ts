/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK, ApiArgs, Network, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { ReadyPlayerMe } from '../models/ReadyPlayerMe.js'
import { Users$ } from '../../generated-public/endpoints/Users$'

/**
 * @deprecated, this is original *Api class
 */
export class IamUserClient {
  conf: SDKRequestConfig
  namespace: string
  cache

  /**
   * @internal
   */
  constructor(sdk: AccelbyteSDK, args?: ApiArgs) {
    const amb = sdk.assembly()
    this.conf = amb.config
    this.namespace = args?.namespace ? args?.namespace : amb.namespace
    this.cache = args?.cache ? args?.cache : amb.cache
  }

  /**
   * GET [/iam/v3/public/users/me](api)
   *
   * get currently logged-in user
   */
  getCurrentUser = () => {
    return this.newInstance().getUsersMe()
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
    return new Users$(Network.create(this.conf), namespace || this.namespace, this.cache)
  }
}
