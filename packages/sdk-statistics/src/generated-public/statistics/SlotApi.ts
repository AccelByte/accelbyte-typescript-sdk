/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Slot$ } from './endpoints/Slot$'
import { SlotInfo } from './definitions/SlotInfo'
import { SlotInfoArray } from './definitions/SlotInfoArray'
import { SlotMetadataUpdate } from './definitions/SlotMetadataUpdate'

export function SlotApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get list of slots for a given user in namespace.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=2 (READ)</li><li><i>Returns</i>: list of slots</li></ul>
   */
  async function getSlots_ByUserId(userId: string): Promise<SlotInfoArray> {
    const $ = new Slot$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSlots_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Creates a slot.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=1 (CREATE)</li><li><i>Returns</i>: created slot info</li></ul>
   */
  async function createSlot_ByUserId(
    userId: string,
    data: { customAttribute?: string | null; checksum?: string | null; file?: File | null },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSlot_ByUserId(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get slot data.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=2 (READ)</li><li><i>Returns</i>: slot data</li></ul>
   */
  async function getSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSlot_ByUserId_BySlotId(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates a slot.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=4 (UPDATE)</li><li><i>Returns</i>: updated slot</li></ul>
   */
  async function updateSlot_ByUserId_BySlotId(
    userId: string,
    slotId: string,
    data: { customAttribute?: string | null; checksum?: string | null; file?: File | null },
    queryParams?: { label?: string | null; tags?: string[] }
  ): Promise<SlotInfo> {
    const $ = new Slot$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateSlot_ByUserId_BySlotId(userId, slotId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes the slot.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=8 (DELETE)</li></ul>
   */
  async function deleteSlot_ByUserId_BySlotId(userId: string, slotId: string): Promise<unknown> {
    const $ = new Slot$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteSlot_ByUserId_BySlotId(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates the slot metadata.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:SLOTDATA", action=4 (UPDATE)</li><li><i>Returns</i>: updated slot</li></ul>
   */
  async function updateMetadata_ByUserId_BySlotId(userId: string, slotId: string, data: SlotMetadataUpdate): Promise<SlotInfo> {
    const $ = new Slot$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMetadata_ByUserId_BySlotId(userId, slotId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSlots_ByUserId,
    createSlot_ByUserId,
    getSlot_ByUserId_BySlotId,
    updateSlot_ByUserId_BySlotId,
    deleteSlot_ByUserId_BySlotId,
    updateMetadata_ByUserId_BySlotId
  }
}
