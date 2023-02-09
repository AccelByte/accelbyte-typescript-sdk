/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { ThirdPartyCredential$ } from '@accelbyte/sdk/generated-public/iam/ThirdPartyCredential$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class ThirdPartyCredentialApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * This is the Public API to Get All Active 3rd Platform Credential.
   */
  getThirdPartyPlatformInfo = () => {
    return this.newInstance().fetchV3NsPlatformsClientsActive()
  }

  /**
   * @internal
   */
  newInstance() {
    return new ThirdPartyCredential$(Network.create(this.conf), this.namespace, this.cache)
  }
}
