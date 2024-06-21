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
import { PartyQueryResponse } from '../generated-definitions/PartyQueryResponse.js'
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'

export function PartyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Query parties.
   */
  async function getParties(queryParams?: {
    isSoftDeleted?: string | null
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
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Trigger user&#39;s active party session to native platform.
   */
  async function createNativeSync_ByUserId(userId: string): Promise<unknown> {
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createNativeSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getParties,
    createNativeSync_ByUserId
  }
}
