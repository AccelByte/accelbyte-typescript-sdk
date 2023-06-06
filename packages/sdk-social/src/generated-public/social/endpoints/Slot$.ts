/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { SlotInfo } from '../definitions/SlotInfo.js'
import { SlotInfoArray } from '../definitions/SlotInfoArray.js'
import { SlotMetadataUpdate } from '../definitions/SlotMetadataUpdate.js'

export class Slot$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get list of slots for a given user in namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt;
   */
  getSlots_ByUserId(userId: string): Promise<IResponseWithSync<SlotInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SlotInfoArray, 'SlotInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Creates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created slot info&lt;/li&gt;&lt;/ul&gt;
   */
  createSlot_ByUserId(
    userId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File | null },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Deletes the slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt;
   */
  getSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  updateSlot_ByUserId_BySlotId(
    userId: string,
    slotId: string,
    data: { checksum?: string | null; customAttribute?: string | null; file?: File | null },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<IResponse<SlotInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SlotInfo, 'SlotInfo')
  }

  /**
   * Updates the slot metadata.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SLOTDATA&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt;
   */
  updateMetadata_ByUserId_BySlotId(userId: string, slotId: string, data: SlotMetadataUpdate): Promise<IResponse<SlotInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/public/namespaces/{namespace}/users/{userId}/slots/{slotId}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{slotId}', slotId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SlotInfo, 'SlotInfo')
  }
}
