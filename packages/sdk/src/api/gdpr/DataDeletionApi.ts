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
   * GET [/gdpr/public/namespaces/{namespace}/users/{userId}/deletions/status](api)
   *
   * Fetch the status to check whether or not a user's account is on a deletion status
   *
   * _Requires a valid user access token_
   */
  getGdprDeletionStatus = (userId: string) => {
    return this.newInstance().fetchDeletionsStatus_ByUserId(userId)
  }

  /**
   * POST [/gdpr/public/namespaces/{namespace}/users/{userId}/deletions](api)
   *
   * Request an account's deletion
   *
   * _Requires a valid user access token and password_
   */
  requestAccountDeletion = ({ userId, data }: { userId: string; data: { password: string | null } }) => {
    return this.newInstance().postDeletion_ByUserId(userId, data)
  }

  /**
   * DELETE [/gdpr/public/namespaces/{namespace}/users/{userId}/deletions](api)
   *
   * Cancel a deletion request
   *
   * _Requires a valid user access token_
   */
  cancelAccountDeletion = (userId: string) => {
    return this.newInstance().deleteDeletion_ByUserId(userId)
  }

  private newInstance() {
    return new DataDeletion$(Network.create(this.conf), this.namespace, this.cache)
  }
}
