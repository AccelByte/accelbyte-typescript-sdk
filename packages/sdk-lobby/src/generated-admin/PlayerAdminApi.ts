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
import { GetAllPlayerBlockedByUsersResponse } from '../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { GetAllPlayerSessionAttributeResponse } from '../generated-definitions/GetAllPlayerSessionAttributeResponse.js'
import { GetBulkAllPlayerBlockedUsersRequest } from '../generated-definitions/GetBulkAllPlayerBlockedUsersRequest.js'
import { GetBulkAllPlayerBlockedUsersResponse } from '../generated-definitions/GetBulkAllPlayerBlockedUsersResponse.js'
import { GetLobbyCcuResponse } from '../generated-definitions/GetLobbyCcuResponse.js'
import { GetPlayerSessionAttributeResponse } from '../generated-definitions/GetPlayerSessionAttributeResponse.js'
import { ListBlockedPlayerRequest } from '../generated-definitions/ListBlockedPlayerRequest.js'
import { PlayerAdmin$ } from './endpoints/PlayerAdmin$.js'
import { SetPlayerSessionAttributeRequest } from '../generated-definitions/SetPlayerSessionAttributeRequest.js'

export function PlayerAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get the number of players connected to the Lobby in the given namespace.
   */
  async function getPlayerCcu(): Promise<GetLobbyCcuResponse> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPlayerCcu()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get blocked players data by bulk user ids in a namespace.
   */
  async function createPlayerUserBulkBlocked(data: GetBulkAllPlayerBlockedUsersRequest): Promise<GetBulkAllPlayerBlockedUsersResponse> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPlayerUserBulkBlocked(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get blocked players data by user id in a namespace.
   */
  async function getBlockedPlayer_ByUserId(userId: string): Promise<GetAllPlayerBlockedUsersResponse> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getBlockedPlayer_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all player&#39;s session attribute by user id in a namespace.
   */
  async function getAttributesPlayer_ByUserId(userId: string): Promise<GetAllPlayerSessionAttributeResponse> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAttributesPlayer_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Set player&#39;s session attribute by user id in a namespace.
   */
  async function updateAttributePlayer_ByUserId(userId: string, data: SetPlayerSessionAttributeRequest): Promise<unknown> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateAttributePlayer_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Load get players who blocked this player in a namespace based on user id
   */
  async function getBlockedByPlayer_ByUserId(userId: string): Promise<GetAllPlayerBlockedByUsersResponse> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getBlockedByPlayer_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk block player in a namespace by list of user id
   */
  async function createBulkBlockPlayer_ByUserId(userId: string, data: ListBlockedPlayerRequest): Promise<unknown> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createBulkBlockPlayer_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get player&#39;s specific session attribute by user id in a namespace.
   */
  async function getAttributePlayer_ByUserId_ByAttribute(userId: string, attribute: string): Promise<GetPlayerSessionAttributeResponse> {
    const $ = new PlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAttributePlayer_ByUserId_ByAttribute(userId, attribute)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPlayerCcu,
    createPlayerUserBulkBlocked,
    getBlockedPlayer_ByUserId,
    getAttributesPlayer_ByUserId,
    updateAttributePlayer_ByUserId,
    getBlockedByPlayer_ByUserId,
    createBulkBlockPlayer_ByUserId,
    getAttributePlayer_ByUserId_ByAttribute
  }
}
