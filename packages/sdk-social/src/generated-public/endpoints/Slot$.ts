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
import { z } from 'zod'
import { SlotInfo } from '../../generated-definitions/SlotInfo.js'
import { SlotInfoArray } from '../../generated-definitions/SlotInfoArray.js'
import { SlotMetadataUpdate } from '../../generated-definitions/SlotMetadataUpdate.js'

export class Slot$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get list of slots for a given user in namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt;
   */
  getSlots_ByUserId(userId: string): Promise<Response<SlotInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SlotInfoArray, 'SlotInfoArray')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Creates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created slot info&lt;/li&gt;&lt;/ul&gt;
   */
  createSlot_ByUserId(
    userId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes the slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt;
   */
  deleteSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt;
   */
  getSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  updateSlot_ByUserId_BySlotId(
    userId: string,
    slotId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<Response<SlotInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SlotInfo, 'SlotInfo')
  }
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates the slot metadata.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  updateMetadata_ByUserId_BySlotId(userId: string, slotId: string, data: SlotMetadataUpdate): Promise<Response<SlotInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SlotInfo, 'SlotInfo')
  }
}
