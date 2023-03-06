/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * GET [/buildinfo/public/namespaces/{namespace}/dlcs/latest/byGameAppId/{appId}](api)
   *
   * Retrieve the list of DLC available on specific game. Use game's appId to query.
   *
   * _Returns_: list of DLC
   */
  getLatestDLCByGameAppId = (appId: string) => {
    return this.newInstance().fetchDlcLatestByGameAppId_ByAppId(appId)
  }

  /**
   * GET [/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}](api)
   *
   * Retrieve the list of DLC available on specific game. Use DLC's appId to query.
   *
   * _Returns_: appId of game and list of its builds by platformId
   */
  getBaseGamesByDlcAppId = (dlcAppId: string) => {
    return this.newInstance().fetchAppLatestByDlcAppId_ByDlcAppId(dlcAppId)
  }

  private newInstance() {
    //  this is be expensive to cache, apply "cache: false"
    return new Dlc$(Network.create(this.conf), this.namespace, false)
  }
}
