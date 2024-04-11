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
import { CountryAdmin$ } from './endpoints/CountryAdmin$.js'
import { CountryBlacklistRequest } from '../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../generated-definitions/CountryResponseArray.js'

export function CountryAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Admin get country list
   */
  async function getCountries(queryParams?: { filterBlacklist?: boolean | null }): Promise<CountryResponseArray> {
    const $ = new CountryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCountries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin get country blacklist
   */
  async function getCountriesBlacklist(): Promise<CountryBlacklistResponse> {
    const $ = new CountryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCountriesBlacklist()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin update country blacklist
   */
  async function createCountryBlacklist(data: CountryBlacklistRequest): Promise<unknown> {
    const $ = new CountryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createCountryBlacklist(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCountries,
    getCountriesBlacklist,
    createCountryBlacklist
  }
}
