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
import { InputValidationConfigVersion } from './definitions/InputValidationConfigVersion.js'
import { InputValidationsPublic$ } from './endpoints/InputValidationsPublic$.js'
import { InputValidationsPublicResponse } from './definitions/InputValidationsPublicResponse.js'

export function InputValidationsPublicApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;No role required&lt;/p&gt; &lt;p&gt;This endpoint is to get list of input validation configuration.&lt;/p&gt; &lt;p&gt;&lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.&lt;/p&gt;
   */
  async function getInputValidations(queryParams?: {
    defaultOnEmpty?: boolean | null
    languageCode?: string | null
  }): Promise<InputValidationsPublicResponse> {
    const $ = new InputValidationsPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInputValidations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is to get input validation configuration by field.&lt;/p&gt;
   */
  async function getInputValidation_ByField(field: string): Promise<InputValidationConfigVersion> {
    const $ = new InputValidationsPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInputValidation_ByField(field)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInputValidations,
    getInputValidation_ByField
  }
}
