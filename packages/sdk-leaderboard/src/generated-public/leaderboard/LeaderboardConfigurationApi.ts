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
import { GetAllLeaderboardConfigsPublicResp } from './definitions/GetAllLeaderboardConfigsPublicResp'
import { LeaderboardConfigReq } from './definitions/LeaderboardConfigReq'
import { LeaderboardConfiguration$ } from './endpoints/LeaderboardConfiguration$'

export function LeaderboardConfigurationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
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
    isArchived?: boolean | null
  }): Promise<GetAllLeaderboardConfigsPublicResp> {
    const $ = new LeaderboardConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public endpoint to create a new leaderboard. <p>Required permission 'NAMESPACE:{namespace}:LEADERBOARD [CREATE]'</p> <p><b>Fields :</b></p> <ul><li>LeaderboardConfig code must be lowercase and maximum length is 48 characters. <b>(required)</b>.</li> <li>Maximum length for leaderboard name is 128 characters. <b>(required)</b>.</li> <li>Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z<b>(required)</b>.</li> <li>Season period must be greater than 31 days.</li> <li>If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.</li> <li>Reset Date must be a number 1 - 31. Default is '1'.</li> <li>Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is '0'.</li> <li>Reset time must be <b>hours:minutes</b> in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is '00:00'.</li> <li>Stat Code is related with statistic code in statistic service. <b>(required)</b>.</li> </ul>
   */
  async function createLeaderboard(data: LeaderboardConfigReq): Promise<LeaderboardConfigReq> {
    const $ = new LeaderboardConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLeaderboard(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint return all leaderboard configurations
   */
  async function getLeaderboards_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<GetAllLeaderboardConfigsPublicResp> {
    const $ = new LeaderboardConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLeaderboards_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLeaderboards,
    createLeaderboard,
    getLeaderboards_ByNS
  }
}
