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
import { PartyData } from '../generated-definitions/PartyData.js'
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'

export function PartyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get party data in a namespace.
   */
  async function getPartyParty_ByPartyId(partyId: string): Promise<PartyData> {
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPartyParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get party data in a namespace.
   */
  async function getParty_ByUserId(userId: string): Promise<PartyData> {
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getParty_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPartyParty_ByPartyId,
    getParty_ByUserId
  }
}
