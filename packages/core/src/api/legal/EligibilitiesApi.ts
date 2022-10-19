/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Eligibilities$ } from '@od-web-sdk/generated-public/legal/Eligibilities$'
import { Network } from '@od-web-sdk/utils/Network'

export class EligibilitiesApi {
  // need to get updated response on EligibilitiesApi, use cache: false
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = false) {}

  newInstance() {
    return new Eligibilities$(Network.create(this.conf), this.namespace, this.cache)
  }

  getUserEligibilities() {
    return this.newInstance().fetchPublicEligibilitiesNamespacesByNamespace()
  }
}
