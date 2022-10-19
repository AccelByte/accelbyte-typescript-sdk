/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { ThirdPartyCredential$ } from '@od-web-sdk/generated-public/iam/ThirdPartyCredential$'
import { Network } from '@od-web-sdk/utils/Network'

export class ThirdPartyCredentialApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new ThirdPartyCredential$(Network.create(this.conf), this.namespace, this.cache)
  }

  getThirdPartyPlatformInfo = () => {
    return this.newInstance().fetchV3PlatformsClientsActive()
  }
}
