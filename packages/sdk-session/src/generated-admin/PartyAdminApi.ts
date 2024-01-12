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
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'
import { PartyQueryResponse } from '../generated-definitions/PartyQueryResponse.js'

export function PartyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query parties.
   */
  async function getParties(queryParams?: {
    joinability?: string | null
    key?: string | null
    leaderID?: string | null
    limit?: number
    memberID?: string | null
    memberStatus?: string | null
    offset?: number
    order?: string | null
    orderBy?: string | null
    partyID?: string | null
    value?: string | null
  }): Promise<PartyQueryResponse> {
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getParties
  }
}
