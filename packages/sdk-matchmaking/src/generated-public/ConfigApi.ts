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
import { NamespaceConfig } from '../generated-definitions/NamespaceConfig.js'
import { NamespaceConfigList } from '../generated-definitions/NamespaceConfigList.js'
import { PatchNamespaceConfigRequest } from '../generated-definitions/PatchNamespaceConfigRequest.js'
import { Config$ } from './endpoints/Config$.js'

export function ConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get matchmaking config of all namespaces. Will only return namespace configs than have been updated.
   */
  async function getConfig(): Promise<NamespaceConfigList> {
    const $ = new Config$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get matchmaking config of a namespaces.
   */
  async function getConfig_ByNamespace(): Promise<NamespaceConfig> {
    const $ = new Config$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Patch update matchmaking config of a namespaces. Partially update matchmaking config, will only update value that defined on the request.
   */
  async function patchConfig_ByNamespace(data: PatchNamespaceConfigRequest): Promise<NamespaceConfig> {
    const $ = new Config$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchConfig_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfig,
    getConfig_ByNamespace,
    patchConfig_ByNamespace
  }
}
