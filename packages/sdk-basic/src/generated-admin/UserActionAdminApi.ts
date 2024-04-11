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
import { ADtoForUnbanUserApiCall } from '../generated-definitions/ADtoForUnbanUserApiCall.js'
import { ADtoObjectForEqu8UserBanStatusArray } from '../generated-definitions/ADtoObjectForEqu8UserBanStatusArray.js'
import { ADtoObjectForEqu8UserStatus } from '../generated-definitions/ADtoObjectForEqu8UserStatus.js'
import { ActionArray } from '../generated-definitions/ActionArray.js'
import { UserActionAdmin$ } from './endpoints/UserActionAdmin$.js'
import { UserBanRequest } from '../generated-definitions/UserBanRequest.js'
import { UserReportRequest } from '../generated-definitions/UserReportRequest.js'

export function UserActionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get configured actions.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getActions(): Promise<ActionArray> {
    const $ = new UserActionAdmin$(Network.create(requestConfig), namespace,isValidationEnabled)
    const resp = await $.getActions()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ban user.&lt;br&gt; actionId: 1 means permanent ban, actionId: 10 means Temporary ban.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function createActionBan(data: UserBanRequest): Promise<unknown> {
    const $ = new UserActionAdmin$(Network.create(requestConfig), namespace,isValidationEnabled)
    const resp = await $.createActionBan(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unban user.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function createActionUnban(data: ADtoForUnbanUserApiCall): Promise<unknown> {
    const $ = new UserActionAdmin$(Network.create(requestConfig), namespace,isValidationEnabled)
    const resp = await $.createActionUnban(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get banned status.&lt;br&gt;Unbanned users will not return, for example: request has 8 userIds, only 5 of then were banned, then the api will these 5 user status.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getActionsBanned(queryParams: { userIds: string[] }): Promise<ADtoObjectForEqu8UserBanStatusArray> {
    const $ = new UserActionAdmin$(Network.create(requestConfig), namespace,isValidationEnabled)
    const resp = await $.getActionsBanned(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is for game service to report a game player.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createActionReport(data: UserReportRequest): Promise<unknown> {
    const $ = new UserActionAdmin$(Network.create(requestConfig), namespace,isValidationEnabled)
    const resp = await $.createActionReport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user status.&lt;br&gt;If actionId does not exist, then the user is not banned.If actionId and expires exist, then the user is temporarily banned, if expires does not exist, then the user is permanently banned.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:ACTION&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getActionsStatus(queryParams: { userId: string | null }): Promise<ADtoObjectForEqu8UserStatus> {
    const $ = new UserActionAdmin$(Network.create(requestConfig), namespace,isValidationEnabled)
    const resp = await $.getActionsStatus(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getActions,
    createActionBan,
    createActionUnban,
    getActionsBanned,
    createActionReport,
    getActionsStatus
  }
}
