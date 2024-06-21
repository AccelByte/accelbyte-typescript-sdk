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
import { CreateConfigRequest } from '../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../generated-definitions/UpdateConfigResponse.js'
import { ThirdPartyAdmin$ } from './endpoints/ThirdPartyAdmin$.js'

export function ThirdPartyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:THIRDPARTY:CONFIG [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete third party config in a namespace.
   */
  async function deleteThirdpartyConfigSteam(): Promise<unknown> {
    const $ = new ThirdPartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteThirdpartyConfigSteam()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get third party config for specified namespace.
   */
  async function getThirdpartyConfigSteam(): Promise<GetConfigResponse> {
    const $ = new ThirdPartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getThirdpartyConfigSteam()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create third party config in a namespace.
   */
  async function createThirdpartyConfigSteam(data: CreateConfigRequest): Promise<CreateConfigResponse> {
    const $ = new ThirdPartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createThirdpartyConfigSteam(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update third party config in a namespace.
   */
  async function updateThirdpartyConfigSteam(data: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    const $ = new ThirdPartyAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateThirdpartyConfigSteam(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteThirdpartyConfigSteam,
    getThirdpartyConfigSteam,
    createThirdpartyConfigSteam,
    updateThirdpartyConfigSteam
  }
}
