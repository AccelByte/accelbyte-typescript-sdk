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
import { GetAllPlayerBlockedByUsersResponse } from './definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from './definitions/GetAllPlayerBlockedUsersResponse.js'
import { Player$ } from './endpoints/Player$.js'

export function PlayerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load blocked players in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  async function getPlayerUsersMeBlocked(): Promise<GetAllPlayerBlockedUsersResponse> {
    const $ = new Player$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlayerUsersMeBlocked()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load get players who blocked this player in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  async function getPlayerUsersMeBlockedBy(): Promise<GetAllPlayerBlockedByUsersResponse> {
    const $ = new Player$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlayerUsersMeBlockedBy()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPlayerUsersMeBlocked,
    getPlayerUsersMeBlockedBy
  }
}
