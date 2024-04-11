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
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'
import { PartyData } from '../generated-definitions/PartyData.js'

export function PartyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get party data in a namespace.
   */
  async function getPartyParty_ByPartyId(partyId: string): Promise<PartyData> {
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPartyParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get party data in a namespace.
   */
  async function getParty_ByUserId(userId: string): Promise<PartyData> {
    const $ = new PartyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getParty_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPartyParty_ByPartyId,
    getParty_ByUserId
  }
}
