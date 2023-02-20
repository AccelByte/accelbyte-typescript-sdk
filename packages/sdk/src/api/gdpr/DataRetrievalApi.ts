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
   * GET [/gdpr/public/namespaces/{namespace}/users/{userId}/requests](api)
   *
   * Fetch personal data request list
   *
   * _Requires a valid user access token_
   */
  getGdprDataRequestList = ({ userId, queryParams }: { userId: string; queryParams?: { limit?: number; offset?: number } }) => {
    return this.newInstance().fetchGdprNsUsersByUseridRequests(userId, queryParams)
  }

  /**
   * POST [/gdpr/public/namespaces/{namespace}/users/{userId}/requests](api)
   *
   * Create a request for personal data download
   *
   * _Requires a valid user access token_
   */
  requestGdprData = ({ userId, data }: { userId: string; data: { password: string | null } }) => {
    return this.newInstance().postGdprNsUsersByUseridRequests(userId, data)
  }

  /**
   * DELETE [/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}](api)
   *
   * Cancel the request for personal data download
   *
   * _Requires a valid user access token_
   */
  cancelGdprDataRequest = ({ userId, requestDate }: { userId: string; requestDate: string }) => {
    return this.newInstance().deleteGdprNsUsersByUseridRequestsByRequestdate(userId, requestDate)
  }

  /**
   * POST [/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate](api)
   *
   * Create a download URL for personal data request
   *
   * _Requires a valid user access token_
   */
  requestGdprDataDownloadUrl = ({
    userId,
    requestDate,
    data
  }: {
    userId: string
    requestDate: string
    data: { password: string | null }
  }) => {
    return this.newInstance().postGdprNsUsersByUseridRequestsByRequestdateGenerate(userId, requestDate, data)
  }

  private newInstance() {
    return new DataRetrieval$(Network.create(this.conf), this.namespace, this.cache)
  }
}
