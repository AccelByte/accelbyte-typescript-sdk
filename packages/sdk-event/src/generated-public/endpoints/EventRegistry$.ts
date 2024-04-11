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
import { EventRegistry } from '../../generated-definitions/EventRegistry.js'

export class EventRegistry$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getRegistryEventIds(): Promise<IResponse<EventRegistry>> {
    const params = {} as SDKRequestConfig
    const url = '/event/registry/eventIds'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, EventRegistry, 'EventRegistry')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  createRegistryEventId(data: EventRegistry): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/event/registry/eventIds'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [DELETE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  deleteRegistryEventId_ByEventId(eventId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/event/registry/eventIds/{eventId}'.replace('{eventId}', eventId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getRegistryEventId_ByEventId(eventId: string): Promise<IResponse<EventRegistry>> {
    const params = {} as SDKRequestConfig
    const url = '/event/registry/eventIds/{eventId}'.replace('{eventId}', eventId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, EventRegistry, 'EventRegistry')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  createRegistryEventId_ByEventId(eventId: string, data: EventRegistry): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/event/registry/eventIds/{eventId}'.replace('{eventId}', eventId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  getRegistryEventType_ByEventType(eventType: string): Promise<IResponse<EventRegistry>> {
    const params = {} as SDKRequestConfig
    const url = '/event/registry/eventTypes/{eventType}'.replace('{eventType}', eventType)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, EventRegistry, 'EventRegistry')
  }
}
