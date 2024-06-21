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
import { EventResponse } from '../generated-definitions/EventResponse.js'
import { UserLastActivity } from '../generated-definitions/UserLastActivity.js'
import { UserInformation$ } from './endpoints/UserInformation$.js'

export function UserInformationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function deleteActivity_ByUserId_DEPRECATED(userId: string): Promise<unknown> {
    const $ = new UserInformation$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteActivity_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getActivities_ByUserId_DEPRECATED(
    userId: string,
    queryParams: { pageSize: number; offset?: number }
  ): Promise<EventResponse> {
    const $ = new UserInformation$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getActivities_ByUserId_DEPRECATED(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getLastActivityTime_ByUserId_DEPRECATED(userId: string): Promise<UserLastActivity> {
    const $ = new UserInformation$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLastActivityTime_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteActivity_ByUserId_DEPRECATED,
    getActivities_ByUserId_DEPRECATED,
    getLastActivityTime_ByUserId_DEPRECATED
  }
}
