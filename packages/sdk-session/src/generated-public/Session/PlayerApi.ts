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
import { Player$ } from './endpoints/Player$'
import { PlayerAttributesRequestBody } from './definitions/PlayerAttributesRequestBody'
import { PlayerAttributesResponseBody } from './definitions/PlayerAttributesResponseBody'

export function PlayerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get player attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player's 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - currentPlatform : latest user game platform.
   */
  async function getUsersMeAttributes(): Promise<PlayerAttributesResponseBody> {
    const $ = new Player$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeAttributes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API behaves to upsert player's attributes. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player's 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - currentPlatform : latest user game platform.
   */
  async function createUserMeAttribute(data: PlayerAttributesRequestBody): Promise<PlayerAttributesResponseBody> {
    const $ = new Player$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeAttribute(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reset player attributes.
   */
  async function deleteUserMeAttribute(): Promise<unknown> {
    const $ = new Player$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUserMeAttribute()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeAttributes,
    createUserMeAttribute,
    deleteUserMeAttribute
  }
}
