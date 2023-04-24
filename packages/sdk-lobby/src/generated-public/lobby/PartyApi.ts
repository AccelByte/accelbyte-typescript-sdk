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
import { Party$ } from './endpoints/Party$'
import { PartyData } from './definitions/PartyData'
import { PartyPutCustomAttributesRequest } from './definitions/PartyPutCustomAttributesRequest'
import { PartyPutLimitSizeRequest } from './definitions/PartyPutLimitSizeRequest'

export function PartyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required valid user authorization <br/> <br>load personal party data in a namespace based on Party ID <br/> Action Code: 50101
   */
  async function getPartyParty_ByPartyId(partyId: string): Promise<PartyData> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPartyParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization <br/> <br>Set party limit, only party leader can call this endpoint.
   */
  async function updateLimitParty_ByPartyId(partyId: string, data: PartyPutLimitSizeRequest): Promise<unknown> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateLimitParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization <br/> <br>update party attributes in a namespace.
   */
  async function updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<PartyData> {
    const $ = new Party$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAttributeParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPartyParty_ByPartyId,
    updateLimitParty_ByPartyId,
    updateAttributeParty_ByPartyId
  }
}
