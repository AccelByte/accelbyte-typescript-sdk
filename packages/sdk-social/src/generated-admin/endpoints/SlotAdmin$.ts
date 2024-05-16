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
import { SlotInfoArray } from '../../generated-definitions/SlotInfoArray.js'

export class SlotAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slots for a given user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt;
   */
  getSlots_ByUserId_DEPRECATED(userId: string): Promise<IResponse<SlotInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/slots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, SlotInfoArray, 'SlotInfoArray')
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt;
   */
  getSlot_ByUserId_BySlotId_DEPRECATED(userId: string, slotId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
