/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Eligibilities$ } from '@accelbyte/sdk/generated-public/legal/Eligibilities$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class EligibilitiesApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Retrieve the active policies and its conformance status by user.<br>This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  getUserEligibilities() {
    return this.newInstance().fetchPublicEligibilitiesNamespacesByNamespace()
  }

  private newInstance() {
    return new Eligibilities$(Network.create(this.conf), this.namespace, this.cache)
  }
}
