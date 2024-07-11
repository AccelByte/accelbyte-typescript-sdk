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
import { RetrieveBaseGameResponseArray } from '../generated-definitions/RetrieveBaseGameResponseArray.js'
import { RetrieveDependencyCompatibilityResponse } from '../generated-definitions/RetrieveDependencyCompatibilityResponse.js'
import { RetrieveDependencyLinkResponse } from '../generated-definitions/RetrieveDependencyLinkResponse.js'
import { RetrieveLatestDlcResponseArray } from '../generated-definitions/RetrieveLatestDlcResponseArray.js'
import { Dlc$ } from './endpoints/Dlc$.js'

export function DlcApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to retrieve DLC versions against the game version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function getLink_ByBuildId(buildId: string): Promise<RetrieveDependencyLinkResponse> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLink_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCompatibility_ByBuildId(buildId: string): Promise<RetrieveDependencyCompatibilityResponse> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCompatibility_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve the list of DLC available on specific game. Use game&#39;s appId to query.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of DLC&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDlcLatestByGameAppId_ByAppId(appId: string): Promise<RetrieveLatestDlcResponseArray> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlcLatestByGameAppId_ByAppId(appId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve the list of DLC available on specific game. Use DLC&#39;s appId to query.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: appId of game and list of its builds by platformId&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAppLatestByDlcAppId_ByDlcAppId(dlcAppId: string): Promise<RetrieveBaseGameResponseArray> {
    const $ = new Dlc$(Network.create(requestConfig), namespace, useSchemaValidation)
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
