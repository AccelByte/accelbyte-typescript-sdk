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
   * Get list of slots for a given user in namespace.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=2 (READ)</li><li><i>Returns</i>: list of slots</li></ul>
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
   * Creates a slot.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=1 (CREATE)</li><li><i>Returns</i>: created slot info</li></ul>
   */
  createSlot_ByUserId(
    userId: string,
    data: { customAttribute?: string | null; checksum?: string | null; file?: File | null },
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
   * Get slot data.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=2 (READ)</li><li><i>Returns</i>: slot data</li></ul>
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
   * Updates a slot.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=4 (UPDATE)</li><li><i>Returns</i>: updated slot</li></ul>
   */
  updateSlot_ByUserId_BySlotId(
    userId: string,
    slotId: string,
    data: { customAttribute?: string | null; checksum?: string | null; file?: File | null },
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
   * Deletes the slot.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=8 (DELETE)</li></ul>
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
   * Updates the slot metadata.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=4 (UPDATE)</li><li><i>Returns</i>: updated slot</li></ul>
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
