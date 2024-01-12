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
import { Eligibilities$ } from './endpoints/Eligibilities$.js'
import { RetrieveUserEligibilitiesIndirectResponse } from '../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'
import { RetrieveUserEligibilitiesResponseArray } from '../generated-definitions/RetrieveUserEligibilitiesResponseArray.js'

export function EligibilitiesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEligibility_ByNamespace(): Promise<RetrieveUserEligibilitiesResponseArray> {
    const $ = new Eligibilities$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEligibility_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUserEligibility_ByCountryCode_ByClientId_ByUserId(
    countryCode: string,
    clientId: string,
    userId: string
  ): Promise<RetrieveUserEligibilitiesIndirectResponse> {
    const $ = new Eligibilities$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserEligibility_ByCountryCode_ByClientId_ByUserId(countryCode, clientId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEligibility_ByNamespace,
    getUserEligibility_ByCountryCode_ByClientId_ByUserId
  }
}
