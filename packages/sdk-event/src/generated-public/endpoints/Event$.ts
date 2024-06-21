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
import { z } from 'zod'
import { Event } from '../../generated-definitions/Event.js'
import { EventResponse } from '../../generated-definitions/EventResponse.js'

export class Event$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getNamespace_ByNamespace_DEPRECATED(queryParams: {
    endDate: string | null
    pageSize: number
    startDate: string | null
    offset?: number
  }): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  createNamespace_ByNamespace_DEPRECATED(data: Event): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/event/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getUser_ByUserId_DEPRECATED(
    userId: string,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventId_ByEventId_DEPRECATED(
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/eventId/{eventId}'
      .replace('{namespace}', this.namespace)
      .replace('{eventId}', String(eventId))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventType_ByEventType_DEPRECATED(
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/eventType/{eventType}'
      .replace('{namespace}', this.namespace)
      .replace('{eventType}', String(eventType))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventId_ByUserId_ByEventId_DEPRECATED(
    userId: string,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/eventId/{eventId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{eventId}', String(eventId))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventType_ByUserId_ByEventType_DEPRECATED(
    userId: string,
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/eventType/{eventType}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{eventType}', String(eventType))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventId_ByEventType_ByEventId_DEPRECATED(
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/eventType/{eventType}/eventId/{eventId}'
      .replace('{namespace}', this.namespace)
      .replace('{eventType}', String(eventType))
      .replace('{eventId}', String(eventId))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventId_ByUserId_ByEventType_ByEventId_DEPRECATED(
    userId: string,
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<IResponse<EventResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/eventType/{eventType}/eventId/{eventId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{eventType}', String(eventType))
      .replace('{eventId}', String(eventId))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }
}
