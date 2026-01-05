/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ListFinishedDataDeletion } from '../../generated-definitions/ListFinishedDataDeletion.js'
import { S2SRequestDeleteResponse } from '../../generated-definitions/S2SRequestDeleteResponse.js'

export class DataDeletionS2S$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Scope: account Get list of finished account deletion requests based on the finished time period. Unfinished deletion requests will not appear here, i.e. have Status **Request**, **Pending** or **In-Progress**. **Anonymize userId for deleted account:** For user accounts that have been deleted, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only
   */
  getS2SDeletionsFinished(queryParams: { end: string | null; start: string | null }): Promise<Response<ListFinishedDataDeletion>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/s2s/namespaces/{namespace}/deletions/finished'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListFinishedDataDeletion,
      'ListFinishedDataDeletion'
    )
  }
  /**
   * Scope: account Submit user&#39;s account deletion request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification. 2. This API will **perform account deletion immediately** without GDPR grace period (i.e. 28 days grace period).
   */
  createDeletionS2_ByUserId(userId: string): Promise<Response<S2SRequestDeleteResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/s2s/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      S2SRequestDeleteResponse,
      'S2SRequestDeleteResponse'
    )
  }
}
