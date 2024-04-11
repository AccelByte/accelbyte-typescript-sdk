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
import { BlockPlayerRequest } from '../generated-definitions/BlockPlayerRequest.js'
import { GetAllPlayerBlockedByUsersResponse } from '../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { Player$ } from './endpoints/Player$.js'
import { UnblockPlayerRequest } from '../generated-definitions/UnblockPlayerRequest.js'

export function PlayerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;add blocked players in a namespace based on user id &lt;br/&gt;
   */
  async function createPlayerUserMeBlock(data: BlockPlayerRequest): Promise<unknown> {
    const $ = new Player$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPlayerUserMeBlock(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load blocked players in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  async function getPlayerUsersMeBlocked(): Promise<GetAllPlayerBlockedUsersResponse> {
    const $ = new Player$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPlayerUsersMeBlocked()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization &lt;br/&gt; unblock player in a namespace based on user id &lt;br/&gt;
   */
  async function createPlayerUserMeUnblock(data: UnblockPlayerRequest): Promise<unknown> {
    const $ = new Player$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPlayerUserMeUnblock(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load get players who blocked this player in a namespace based on user id &lt;br/&gt; Action Code: 50101
   */
  async function getPlayerUsersMeBlockedBy(): Promise<GetAllPlayerBlockedByUsersResponse> {
    const $ = new Player$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPlayerUsersMeBlockedBy()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createPlayerUserMeBlock,
    getPlayerUsersMeBlocked,
    createPlayerUserMeUnblock,
    getPlayerUsersMeBlockedBy
  }
}
