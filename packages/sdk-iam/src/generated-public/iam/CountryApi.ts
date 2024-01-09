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
import { Country$ } from './endpoints/Country$.js'
import { CountryResponseArray } from './definitions/CountryResponseArray.js'

export function CountryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Public get country list, will filter out countries in black list
   */
  async function getCountries(): Promise<CountryResponseArray> {
    const $ = new Country$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getCountries()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCountries
  }
}
