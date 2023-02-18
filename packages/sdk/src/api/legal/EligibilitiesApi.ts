/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * Retrieve the active policies and its conformance status by user.This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.Other detail info:
   * - _Required permission_: login user
   */
  getUserEligibilities() {
    return this.newInstance().fetchPublicEligibilitiesNamespacesByNamespace()
  }

  private newInstance() {
    return new Eligibilities$(Network.create(this.conf), this.namespace, this.cache)
  }
}
