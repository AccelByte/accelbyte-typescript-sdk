/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { DataDeletion$ } from '@od-web-sdk/generated-public/gdpr/DataDeletion$'
import { Network } from '@od-web-sdk/utils/Network'

export class DataDeletionApi {
  // need to get updated response on DataDeletionApi, use cache: false
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = false) {}

  newInstance() {
    return new DataDeletion$(Network.create(this.conf), this.namespace, this.cache)
  }

  getGdprDeletionStatus(userId: string) {
    return this.newInstance().fetchGdprUsersByUseridDeletionsStatus(userId)
  }

  requestAccountDeletion({ userId, data }: { userId: string; data: { password: string | null } }) {
    return this.newInstance().postGdprUsersByUseridDeletions(userId, data)
  }

  cancelAccountDeletion(userId: string) {
    return this.newInstance().deleteGdprUsersByUseridDeletions(userId)
  }
}
