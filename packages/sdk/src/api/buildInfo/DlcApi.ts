/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Dlc$ } from '@accelbyte/sdk/generated-public/buildinfo/Dlc$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class DlcApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string) {}

  /**
   * Retrieve the list of DLC available on specific game. Use game's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: list of DLC</li></ul>
   */
  getLatestDLCByGameAppId(appId: string) {
    return this.newInstance().fetchDlcsLatestByGameAppIdByAppid(appId)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use DLC's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: appId of game and list of its builds by platformId</li></ul>
   */
  getBaseGamesByDlcAppId(dlcAppId: string) {
    return this.newInstance().fetchAppsLatestByDlcAppIdByDlcappid(dlcAppId)
  }

  private newInstance() {
    //  this is be expensive to cache, apply "cache: false"
    return new Dlc$(Network.create(this.conf), this.namespace, false)
  }
}
