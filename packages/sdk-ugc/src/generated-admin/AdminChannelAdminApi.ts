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
import { ChannelRequest } from '../generated-definitions/ChannelRequest.js'
import { ChannelResponse } from '../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../generated-definitions/PaginatedGetChannelResponse.js'
import { UpdateChannelRequest } from '../generated-definitions/UpdateChannelRequest.js'
import { AdminChannelAdmin$ } from './endpoints/AdminChannelAdmin$.js'

export function AdminChannelAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get official channel paginated
   */
  async function getChannels(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetChannelResponse> {
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getChannels(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create official channel
   */
  async function createChannel(data: ChannelRequest): Promise<ChannelResponse> {
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createChannel(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete official channel
   */
  async function deleteChannel_ByChannelId(channelId: string): Promise<unknown> {
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteChannel_ByChannelId(channelId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update official channel
   */
  async function updateChannel_ByChannelId(channelId: string, data: UpdateChannelRequest): Promise<ChannelResponse> {
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateChannel_ByChannelId(channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user channel paginated
   */
  async function getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<PaginatedGetChannelResponse> {
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getChannels_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user channel
   */
  async function deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<unknown> {
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
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
    const $ = new AdminChannelAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateChannel_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChannels,
    createChannel,
    deleteChannel_ByChannelId,
    updateChannel_ByChannelId,
    getChannels_ByUserId,
    deleteChannel_ByUserId_ByChannelId,
    updateChannel_ByUserId_ByChannelId
  }
}
