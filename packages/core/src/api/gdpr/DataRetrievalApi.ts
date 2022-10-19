/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { DataRetrieval$ } from '@od-web-sdk/generated-public/gdpr/DataRetrieval$'
import { Network } from '@od-web-sdk/utils/Network'

export class DataRetrievalApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new DataRetrieval$(Network.create(this.conf), this.namespace, this.cache)
  }

  getGdprDataRequestList({ userId, queryParams }: { userId: string; queryParams?: { limit?: number; offset?: number } }) {
    return this.newInstance().fetchGdprUsersByUseridRequests(userId, queryParams)
  }

  requestGdprData({ userId, data }: { userId: string; data: { password: string | null } }) {
    return this.newInstance().postGdprUsersByUseridRequests(userId, data)
  }

  cancelGdprDataRequest({ userId, requestDate }: { userId: string; requestDate: string }) {
    return this.newInstance().deleteGdprUsersByUseridRequestsByRequestdate(userId, requestDate)
  }

  requestGdprDataDownloadUrl({ userId, requestDate, data }: { userId: string; requestDate: string; data: { password: string | null } }) {
    return this.newInstance().postGdprUsersByUseridRequestsByRequestdateGenerate(userId, requestDate, data)
  }
}
