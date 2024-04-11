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
import { RecentPlayerAdmin$ } from './endpoints/RecentPlayerAdmin$.js'
import { RecentPlayerQueryResponse } from '../generated-definitions/RecentPlayerQueryResponse.js'

export function RecentPlayerAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Query recent player with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  async function getRecentPlayer(queryParams?: { limit?: number; userId?: string | null }): Promise<RecentPlayerQueryResponse> {
    const $ = new RecentPlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRecentPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query recent player who were on the same team with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  async function getRecentTeamPlayer(queryParams?: { limit?: number; userId?: string | null }): Promise<RecentPlayerQueryResponse> {
    const $ = new RecentPlayerAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRecentTeamPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRecentPlayer,
    getRecentTeamPlayer
  }
}
