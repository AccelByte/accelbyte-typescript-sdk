/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { LocalizedPolicyVersions$ } from '@od-web-sdk/generated-public/legal/LocalizedPolicyVersions$'
import { Network } from '@od-web-sdk/utils/Network'

export class LocalizedPolicyVersionsApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new LocalizedPolicyVersions$(Network.create(this.conf), this.namespace, this.cache)
  }

  fetchPoliciesByCountry(localizedPolicyVersionId: string) {
    return this.newInstance().fetchPublicLocalizedPolicyVersionsByLocalizedpolicyversionid(localizedPolicyVersionId)
  }
}
