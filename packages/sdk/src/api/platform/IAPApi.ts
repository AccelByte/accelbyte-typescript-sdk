/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Iap$ } from '@accelbyte/sdk/generated-public/platform/Iap$'
import { Network } from '@accelbyte/sdk/utils/Network'
import { TwitchSyncRequest } from '@accelbyte/sdk'

export class IAPApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Twitch drops manual sync.
   */
  syncTwitchDropsEntitlements = (namespace: string, data: TwitchSyncRequest) => {
    return this.newInstance(namespace).updateUserMeIapTwitchSync(data)
  }

  private newInstance(namespace?: string) {
    return new Iap$(Network.create(this.conf), namespace || this.namespace, this.cache)
  }
}
