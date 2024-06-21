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
import { PlayerAttributesRequestBody } from '../generated-definitions/PlayerAttributesRequestBody.js'
import { PlayerAttributesResponseBody } from '../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayersCurrentPlatformRequest } from '../generated-definitions/PlayersCurrentPlatformRequest.js'
import { PlayersCurrentPlatformResponse } from '../generated-definitions/PlayersCurrentPlatformResponse.js'
import { Player$ } from './endpoints/Player$.js'

export function PlayerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get bulk players current platform.
   */
  async function createUserBulkPlatform(data: PlayersCurrentPlatformRequest): Promise<PlayersCurrentPlatformResponse> {
    const $ = new Player$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserBulkPlatform(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reset player attributes.
   */
  async function deleteUserMeAttribute(): Promise<unknown> {
    const $ = new Player$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUserMeAttribute()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get player attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  async function getUsersMeAttributes(): Promise<PlayerAttributesResponseBody> {
    const $ = new Player$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeAttributes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API behaves to upsert player&#39;s attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  async function createUserMeAttribute(data: PlayerAttributesRequestBody): Promise<PlayerAttributesResponseBody> {
    const $ = new Player$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeAttribute(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserBulkPlatform,
    deleteUserMeAttribute,
    getUsersMeAttributes,
    createUserMeAttribute
  }
}
