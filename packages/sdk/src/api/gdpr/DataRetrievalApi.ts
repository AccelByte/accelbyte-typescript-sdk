/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * <p>Fetch personal data request list</p>
   * <p>Requires valid user access token</p>
   */
  getGdprDataRequestList({ userId, queryParams }: { userId: string; queryParams?: { limit?: number; offset?: number } }) {
    return this.newInstance().fetchGdprNsUsersByUseridRequests(userId, queryParams)
  }

  /**
   * <p>Create a request for personal data download</p>
   * <p>Requires valid user access token</p>
   */
  requestGdprData({ userId, data }: { userId: string; data: { password: string | null } }) {
    return this.newInstance().postGdprNsUsersByUseridRequests(userId, data)
  }

  /**
   * <p>Cancel the request for personal data dowwnload</p>
   * <p>Requires valid user access token</p>
   */
  cancelGdprDataRequest({ userId, requestDate }: { userId: string; requestDate: string }) {
    return this.newInstance().deleteGdprNsUsersByUseridRequestsByRequestdate(userId, requestDate)
  }

  /**
   * <p>Create a download URL for personal data request</p>
   * <p>Requires valid user access token</p>
   */
  requestGdprDataDownloadUrl({ userId, requestDate, data }: { userId: string; requestDate: string; data: { password: string | null } }) {
    return this.newInstance().postGdprNsUsersByUseridRequestsByRequestdateGenerate(userId, requestDate, data)
  }

  private newInstance() {
    return new DataRetrieval$(Network.create(this.conf), this.namespace, this.cache)
  }
}
