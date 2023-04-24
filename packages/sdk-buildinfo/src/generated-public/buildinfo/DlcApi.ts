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
import { Dlc$ } from './endpoints/Dlc$'
import { RetrieveBaseGameResponseArray } from './definitions/RetrieveBaseGameResponseArray'
import { RetrieveDependencyCompatibilityResponse } from './definitions/RetrieveDependencyCompatibilityResponse'
import { RetrieveDependencyLinkResponse } from './definitions/RetrieveDependencyLinkResponse'
import { RetrieveLatestDlcResponseArray } from './definitions/RetrieveLatestDlcResponseArray'

export function DlcApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to retrieve DLC versions against the game version.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function getLink_ByBuildId(buildId: string): Promise<RetrieveDependencyLinkResponse> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLink_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  async function getCompatibility_ByBuildId(buildId: string): Promise<RetrieveDependencyCompatibilityResponse> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getCompatibility_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve the list of DLC available on specific game. Use game's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: list of DLC</li></ul>
   */
  async function getDlcLatestByGameAppId_ByAppId(appId: string): Promise<RetrieveLatestDlcResponseArray> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDlcLatestByGameAppId_ByAppId(appId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve the list of DLC available on specific game. Use DLC's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: appId of game and list of its builds by platformId</li></ul>
   */
  async function getAppLatestByDlcAppId_ByDlcAppId(dlcAppId: string): Promise<RetrieveBaseGameResponseArray> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAppLatestByDlcAppId_ByDlcAppId(dlcAppId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLink_ByBuildId,
    getCompatibility_ByBuildId,
    getDlcLatestByGameAppId_ByAppId,
    getAppLatestByDlcAppId_ByDlcAppId
  }
}
