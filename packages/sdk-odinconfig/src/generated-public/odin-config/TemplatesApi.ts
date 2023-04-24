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
import { Config } from './definitions/Config'
import { Configs } from './definitions/Configs'
import { Templates$ } from './endpoints/Templates$'

export function TemplatesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getConfigs_ByTemplate(template: string): Promise<Configs> {
    const $ = new Templates$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getConfigs_ByTemplate(template)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getConfig_ByTemplate_ByConfig(template: string, config: string): Promise<Config> {
    const $ = new Templates$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getConfig_ByTemplate_ByConfig(template, config)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigs_ByTemplate,
    getConfig_ByTemplate_ByConfig
  }
}
