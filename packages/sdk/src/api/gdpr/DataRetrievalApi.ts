/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { DataRetrieval$ } from '@accelbyte/sdk/generated-public/gdpr/DataRetrieval$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class DataRetrievalApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Fetch personal data request list
   * Requires valid user access token
   */
  getGdprDataRequestList({ userId, queryParams }: { userId: string; queryParams?: { limit?: number; offset?: number } }) {
    return this.newInstance().fetchGdprNsUsersByUseridRequests(userId, queryParams)
  }

  /**
   * Create a request for personal data download
   * Requires valid user access token
   */
  requestGdprData({ userId, data }: { userId: string; data: { password: string | null } }) {
    return this.newInstance().postGdprNsUsersByUseridRequests(userId, data)
  }

  /**
   * Cancel the request for personal data dowwnload
   * Requires valid user access token
   */
  cancelGdprDataRequest({ userId, requestDate }: { userId: string; requestDate: string }) {
    return this.newInstance().deleteGdprNsUsersByUseridRequestsByRequestdate(userId, requestDate)
  }

  /**
   * Create a download URL for personal data request
   * Requires valid user access token
   */
  requestGdprDataDownloadUrl({ userId, requestDate, data }: { userId: string; requestDate: string; data: { password: string | null } }) {
    return this.newInstance().postGdprNsUsersByUseridRequestsByRequestdateGenerate(userId, requestDate, data)
  }

  private newInstance() {
    return new DataRetrieval$(Network.create(this.conf), this.namespace, this.cache)
  }
}
