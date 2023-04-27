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
import { EventResponseV2 } from './definitions/EventResponseV2.js'
import { EventV2$ } from './endpoints/EventV2$.js'

export function EventV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Requires valid user access token</p>
   */
  async function getEvent_ByUserId(
    userId: string,
    queryParams?: { pageSize?: number; startDate?: string | null; endDate?: string | null; offset?: number; eventName?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEvent_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Available Type: </p> <ul> <li>email</li> <li>password</li> <li>displayname</li> <li>dateofbirth</li> <li>country</li> <li>language</li> </ul> <p>Requires a valid user access token</p>
   */
  async function getEdithistory_ByUserId(
    userId: string,
    queryParams?: { pageSize?: number; startDate?: string | null; endDate?: string | null; offset?: number; type?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEdithistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEvent_ByUserId,
    getEdithistory_ByUserId
  }
}
