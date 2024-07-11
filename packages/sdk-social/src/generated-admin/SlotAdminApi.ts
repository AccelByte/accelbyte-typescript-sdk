/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { SlotInfoArray } from '../generated-definitions/SlotInfoArray.js'
import { SlotAdmin$ } from './endpoints/SlotAdmin$.js'

export function SlotAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slots for a given user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSlots_ByUserId_DEPRECATED(userId: string): Promise<SlotInfoArray> {
    const $ = new SlotAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSlots_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSlot_ByUserId_BySlotId_DEPRECATED(userId: string, slotId: string): Promise<unknown> {
    const $ = new SlotAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSlot_ByUserId_BySlotId_DEPRECATED(userId, slotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSlots_ByUserId_DEPRECATED,
    getSlot_ByUserId_BySlotId_DEPRECATED
  }
}
