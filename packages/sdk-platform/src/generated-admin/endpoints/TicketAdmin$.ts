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
import { TicketAcquireRequest } from '../../generated-definitions/TicketAcquireRequest.js'
import { TicketAcquireResult } from '../../generated-definitions/TicketAcquireResult.js'
import { TicketBoothId } from '../../generated-definitions/TicketBoothId.js'
import { TicketDynamicInfo } from '../../generated-definitions/TicketDynamicInfo.js'
import { TicketSaleDecrementRequest } from '../../generated-definitions/TicketSaleDecrementRequest.js'
import { TicketSaleIncrementRequest } from '../../generated-definitions/TicketSaleIncrementRequest.js'
import { TicketSaleIncrementResult } from '../../generated-definitions/TicketSaleIncrementResult.js'

export class TicketAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get ticket(code/key) dynamic based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:TICKET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket dynamic&lt;/li&gt;&lt;/ul&gt;
   */
  getTicket_ByBoothName(boothName: string): Promise<IResponse<TicketDynamicInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/tickets/{boothName}'
      .replace('{namespace}', this.namespace)
      .replace('{boothName}', boothName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TicketDynamicInfo, 'TicketDynamicInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get ticket(code/key) booth ID.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:TICKET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket booth id&lt;/li&gt;&lt;/ul&gt;
   */
  getId_ByBoothName(boothName: string): Promise<IResponse<TicketBoothId>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/tickets/{boothName}/id'
      .replace('{namespace}', this.namespace)
      .replace('{boothName}', boothName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TicketBoothId, 'TicketBoothId')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Decrease ticket(code/key) sale if requested orderNo is already increased.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:TICKET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateDecrement_ByBoothName(boothName: string, data: TicketSaleDecrementRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/tickets/{boothName}/decrement'
      .replace('{namespace}', this.namespace)
      .replace('{boothName}', boothName)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; increase ticket(code/key) sale.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:TICKET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Ticket sale increment result&lt;/li&gt;&lt;/ul&gt;
   */
  updateIncrement_ByBoothName(boothName: string, data: TicketSaleIncrementRequest): Promise<IResponse<TicketSaleIncrementResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/tickets/{boothName}/increment'
      .replace('{namespace}', this.namespace)
      .replace('{boothName}', boothName)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TicketSaleIncrementResult, 'TicketSaleIncrementResult')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Acquire ticket(code/key) based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:TICKET&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: acquire result&lt;/li&gt;&lt;/ul&gt;
   */
  createTicket_ByUserId_ByBoothName(
    userId: string,
    boothName: string,
    data: TicketAcquireRequest
  ): Promise<IResponse<TicketAcquireResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/tickets/{boothName}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{boothName}', boothName)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TicketAcquireResult, 'TicketAcquireResult')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
