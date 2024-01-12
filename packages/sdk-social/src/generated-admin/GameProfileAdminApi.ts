/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GameProfileAdmin$ } from './endpoints/GameProfileAdmin$.js'
import { GameProfileHeaderArray } from '../generated-definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../generated-definitions/GameProfileInfo.js'

export function GameProfileAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Returns all profiles&#39; header for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfiles_ByUserId(userId: string): Promise<GameProfileHeaderArray> {
    const $ = new GameProfileAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Returns profile for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: game profile info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<GameProfileInfo> {
    const $ = new GameProfileAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfile_ByUserId_ByProfileId(userId, profileId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProfiles_ByUserId,
    getProfile_ByUserId_ByProfileId
  }
}
