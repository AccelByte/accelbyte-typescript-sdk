/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ListFinishedDataRequests } from '../../generated-definitions/ListFinishedDataRequests.js'
import { S2SDataRetrievalResponse } from '../../generated-definitions/S2SDataRetrievalResponse.js'
import { S2SUserDataUrl } from '../../generated-definitions/S2SUserDataUrl.js'

export class DataRetrievalS2S$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Scope: account Get list of finished personal data requests based on the finished time period. Unfinished personal data requests will not appear here, i.e. have Status **Pending**, **In-Progress** or **Canceled**. **Anonymize userId for deleted account:** For user accounts that have been deleted, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only
   */
  getS2SRequestsFinished(queryParams: { end: string | null; start: string | null }): Promise<Response<ListFinishedDataRequests>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/s2s/namespaces/{namespace}/requests/finished'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListFinishedDataRequests,
      'ListFinishedDataRequests'
    )
  }
  /**
   * Scope: account Submit user personal data retrieval request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification.
   */
  createRequestS2_ByUserId(userId: string): Promise<Response<S2SDataRetrievalResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/s2s/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      S2SDataRetrievalResponse,
      'S2SDataRetrievalResponse'
    )
  }
  /**
   * Scope: account Generate personal data download url. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only
   */
  fetchGenerateS2_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<Response<S2SUserDataUrl>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/s2s/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, S2SUserDataUrl, 'S2SUserDataUrl')
  }
}
