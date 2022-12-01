/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { LocalizedPolicyVersions$ } from '@accelbyte/sdk/generated-public/legal/LocalizedPolicyVersions$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class LocalizedPolicyVersionsApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.<br>Other detail info: <ul></ul>
   */
  fetchLocalizedPolicyVersionById(localizedPolicyVersionId: string) {
    return this.newInstance().fetchPublicLocalizedPolicyVersionsByLocalizedpolicyversionid(localizedPolicyVersionId)
  }

  private newInstance() {
    return new LocalizedPolicyVersions$(Network.create(this.conf), this.namespace, this.cache)
  }
}
