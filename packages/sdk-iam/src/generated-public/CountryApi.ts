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
import { CountryResponseArray } from '../generated-definitions/CountryResponseArray.js'
import { Country$ } from './endpoints/Country$.js'

export function CountryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Public get country list, will filter out countries in black list
   */
  async function getCountries(): Promise<CountryResponseArray> {
    const $ = new Country$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCountries()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCountries
  }
}
