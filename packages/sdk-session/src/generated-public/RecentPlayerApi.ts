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
import { RecentPlayerQueryResponse } from '../generated-definitions/RecentPlayerQueryResponse.js'
import { RecentPlayer$ } from './endpoints/RecentPlayer$.js'

export function RecentPlayerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Query user&#39;s recent player. Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  async function getRecentPlayer(queryParams?: { limit?: number }): Promise<RecentPlayerQueryResponse> {
    const $ = new RecentPlayer$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRecentPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query user&#39;s recent player who were on the same team. Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  async function getRecentTeamPlayer(queryParams?: { limit?: number }): Promise<RecentPlayerQueryResponse> {
    const $ = new RecentPlayer$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRecentTeamPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRecentPlayer,
    getRecentTeamPlayer
  }
}
