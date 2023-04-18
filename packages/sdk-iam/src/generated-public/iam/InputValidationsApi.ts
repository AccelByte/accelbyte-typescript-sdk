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
import { InputValidations$ } from './endpoints/InputValidations$'
import { InputValidationsPublicResponse } from './definitions/InputValidationsPublicResponse'

export function InputValidationsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getInputValidations(queryParams?: {
    languageCode?: string | null
    defaultOnEmpty?: boolean | null
  }): Promise<InputValidationsPublicResponse> {
    const $ = new InputValidations$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInputValidations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInputValidations
  }
}
