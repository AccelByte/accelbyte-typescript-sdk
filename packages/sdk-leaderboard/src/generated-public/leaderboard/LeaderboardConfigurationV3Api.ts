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
import { GetAllLeaderboardConfigsPublicRespV3 } from './definitions/GetAllLeaderboardConfigsPublicRespV3'
import { GetLeaderboardConfigPublicRespV3 } from './definitions/GetLeaderboardConfigPublicRespV3'
import { LeaderboardConfigurationV3$ } from './endpoints/LeaderboardConfigurationV3$'

export function LeaderboardConfigurationV3Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>This endpoint return all leaderboard configurations</p>
   */
  async function getLeaderboards(queryParams?: {
    limit?: number
    offset?: number
    isDeleted?: boolean | null
  }): Promise<GetAllLeaderboardConfigsPublicRespV3> {
    const $ = new LeaderboardConfigurationV3$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>This endpoint returns a leaderboard configuration</p>
   */
  async function getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<GetLeaderboardConfigPublicRespV3> {
    const $ = new LeaderboardConfigurationV3$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLeaderboards,
    getLeaderboard_ByLeaderboardCode
  }
}
