/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * <p>Fetch the status to check whether or not a user's account is on a deletion status</p>
   * <p>Requires valid user access token</p>
   */
  getGdprDeletionStatus(userId: string) {
    return this.newInstance().fetchGdprUsersByUseridDeletionsStatus(userId)
  }

  /**
   * <p>Request an account's deletion</p>
   * <p>Requires valid user access token and password
   */
  requestAccountDeletion({ userId, data }: { userId: string; data: { password: string | null } }) {
    return this.newInstance().postGdprUsersByUseridDeletions(userId, data)
  }

  /**
   * <p>Cancel a deletion request</p>
   * <p>Requires valid user access token</p>
   */
  cancelAccountDeletion(userId: string) {
    return this.newInstance().deleteGdprUsersByUseridDeletions(userId)
  }

  private newInstance() {
    return new DataDeletion$(Network.create(this.conf), this.namespace, this.cache)
  }
}
