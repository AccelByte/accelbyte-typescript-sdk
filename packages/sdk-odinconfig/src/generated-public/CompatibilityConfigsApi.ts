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
import { Configs } from '../generated-definitions/Configs.js'
import { CompatibilityConfigs$ } from './endpoints/CompatibilityConfigs$.js'

export function CompatibilityConfigsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  async function getTemplatesDefaultConfigs_DEPRECATED(): Promise<Configs> {
    const $ = new CompatibilityConfigs$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTemplatesDefaultConfigs_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getTemplatesTemplateDiscoveryConfigs_DEPRECATED(): Promise<Configs> {
    const $ = new CompatibilityConfigs$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTemplatesTemplateDiscoveryConfigs_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTemplatesDefaultConfigs_DEPRECATED,
    getTemplatesTemplateDiscoveryConfigs_DEPRECATED
  }
}
