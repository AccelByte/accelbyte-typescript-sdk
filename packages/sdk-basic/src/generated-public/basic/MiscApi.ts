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
import { CountryObjectArray } from './definitions/CountryObjectArray'
import { Misc$ } from './endpoints/Misc$'
import { RetrieveTimeResponse } from './definitions/RetrieveTimeResponse'

export function MiscApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getMiscTime(): Promise<RetrieveTimeResponse> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscTime()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getMiscCountries(queryParams?: { lang?: string | null }): Promise<CountryObjectArray> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscCountries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getMiscLanguages(): Promise<unknown> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscLanguages()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getMiscTimezones(): Promise<unknown> {
    const $ = new Misc$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMiscTimezones()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMiscTime,
    getMiscCountries,
    getMiscLanguages,
    getMiscTimezones
  }
}
