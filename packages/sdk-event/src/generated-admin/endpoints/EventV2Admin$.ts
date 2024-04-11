/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EventResponseV2 } from '../../generated-definitions/EventResponseV2.js'
import { GenericQueryPayload } from '../../generated-definitions/GenericQueryPayload.js'

export class EventV2Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * This endpoint is using POST which is somewhat unfamiliar, but it&#39;s logical that we have to send/post a filter (search term) in order to get the data. This endpoint will not return anything if you give it an empty filters in the request body.
   */
  createQuery(
    data: GenericQueryPayload,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<IResponse<EventResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/admin/namespaces/{namespace}/query'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EventResponseV2, 'EventResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get events from a specific user
   */
  getEvent_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<IResponse<EventResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/admin/namespaces/{namespace}/users/{userId}/event'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, EventResponseV2, 'EventResponseV2')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
