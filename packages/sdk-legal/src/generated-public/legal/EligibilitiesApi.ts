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
import { Eligibilities$ } from './endpoints/Eligibilities$'
import { RetrieveUserEligibilitiesIndirectResponse } from './definitions/RetrieveUserEligibilitiesIndirectResponse'
import { RetrieveUserEligibilitiesResponseArray } from './definitions/RetrieveUserEligibilitiesResponseArray'

export function EligibilitiesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getEligibility_ByNamespace(): Promise<RetrieveUserEligibilitiesResponseArray> {
    const $ = new Eligibilities$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEligibility_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
