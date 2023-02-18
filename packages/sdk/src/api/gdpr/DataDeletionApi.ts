/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { DataDeletion$ } from '@accelbyte/sdk/generated-public/gdpr/DataDeletion$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class DataDeletionApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Fetch the status to check whether or not a user's account is on a deletion status
   * Requires valid user access token
   */
  getGdprDeletionStatus(userId: string) {
    return this.newInstance().fetchGdprNsUsersByUseridDeletionsStatus(userId)
  }

  /**
   * Request an account's deletion
   * Requires valid user access token and password
   */
  requestAccountDeletion({ userId, data }: { userId: string; data: { password: string | null } }) {
    return this.newInstance().postGdprNsUsersByUseridDeletions(userId, data)
  }

  /**
   * Cancel a deletion request
   * Requires valid user access token
   */
  cancelAccountDeletion(userId: string) {
    return this.newInstance().deleteGdprNsUsersByUseridDeletions(userId)
  }

  private newInstance() {
    return new DataDeletion$(Network.create(this.conf), this.namespace, this.cache)
  }
}
