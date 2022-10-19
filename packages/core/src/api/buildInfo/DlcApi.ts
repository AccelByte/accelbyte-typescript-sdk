/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Dlc$ } from '@od-web-sdk/generated-public/buildinfo/Dlc$'
import { Network } from '@od-web-sdk/utils/Network'

export class DlcApi {
  constructor(private conf: SDKRequestConfig, private namespace: string) {}

  newInstance() {
    //  this may be expensive to cache, use cache: false
    return new Dlc$(Network.create(this.conf), this.namespace, false)
  }

  getLatestDLCByGameAppId(appId: string) {
    return this.newInstance().fetchDlcsLatestByGameAppIdByAppid(appId)
  }

  getBaseGamesByDlcAppId(dlcAppId: string) {
    return this.newInstance().fetchAppsLatestByDlcAppIdByDlcappid(dlcAppId)
  }
}
