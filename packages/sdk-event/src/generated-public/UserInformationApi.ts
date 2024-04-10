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
import { EventResponse } from '../generated-definitions/EventResponse.js'
import { UserInformation$ } from './endpoints/UserInformation$.js'
import { UserLastActivity } from '../generated-definitions/UserLastActivity.js'

export function UserInformationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function deleteActivity_ByUserId(userId: string): Promise<unknown> {
    const $ = new UserInformation$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteActivity_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getActivities_ByUserId(userId: string, queryParams: { pageSize: number; offset?: number }): Promise<EventResponse> {
    const $ = new UserInformation$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getActivities_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getLastActivityTime_ByUserId(userId: string): Promise<UserLastActivity> {
    const $ = new UserInformation$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getLastActivityTime_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteActivity_ByUserId,
    getActivities_ByUserId,
    getLastActivityTime_ByUserId
  }
}
