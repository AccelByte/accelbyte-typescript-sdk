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
import { ChannelResponse } from '../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../generated-definitions/PaginatedGetChannelResponse.js'
import { PublicChannel$ } from './endpoints/PublicChannel$.js'
import { PublicChannelRequest } from '../generated-definitions/PublicChannelRequest.js'
import { UpdateChannelRequest } from '../generated-definitions/UpdateChannelRequest.js'

export function PublicChannelApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get user channel paginated
   */
  async function getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<PaginatedGetChannelResponse> {
    const $ = new PublicChannel$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getChannels_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create user channel
   */
  async function createChannel_ByUserId(userId: string, data: PublicChannelRequest): Promise<ChannelResponse> {
    const $ = new PublicChannel$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createChannel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user channel
   */
  async function deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<unknown> {
    const $ = new PublicChannel$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteChannel_ByUserId_ByChannelId(userId, channelId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user channel
   */
  async function updateChannel_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: UpdateChannelRequest
  ): Promise<ChannelResponse> {
    const $ = new PublicChannel$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateChannel_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChannels_ByUserId,
    createChannel_ByUserId,
    deleteChannel_ByUserId_ByChannelId,
    updateChannel_ByUserId_ByChannelId
  }
}
