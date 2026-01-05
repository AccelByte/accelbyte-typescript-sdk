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
import { z } from 'zod'
import { Event } from '../../generated-definitions/Event.js'
import { EventResponse } from '../../generated-definitions/EventResponse.js'

export class Event$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getNamespace_ByNamespace(queryParams: {
    endDate: string | null
    pageSize: number
    startDate: string | null
    offset?: number
  }): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  createNamespace_ByNamespace(data: Event): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getUser_ByUserId(
    userId: string,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getEventId_ByEventId(
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
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
  getEventType_ByEventType(
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
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
  getEventId_ByUserId_ByEventId(
    userId: string,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
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
  getEventType_ByUserId_ByEventType(
    userId: string,
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
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
  getEventId_ByEventType_ByEventId(
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
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
  getEventId_ByUserId_ByEventType_ByEventId(
    userId: string,
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<Response<EventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/event/namespaces/{namespace}/users/{userId}/eventType/{eventType}/eventId/{eventId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{eventType}', String(eventType))
      .replace('{eventId}', String(eventId))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EventResponse, 'EventResponse')
  }
}
