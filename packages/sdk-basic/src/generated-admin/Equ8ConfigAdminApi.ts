/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ADtoForUpdateEqu8ConfigApiCall } from '../generated-definitions/ADtoForUpdateEqu8ConfigApiCall.js'
import { Equ8Config } from '../generated-definitions/Equ8Config.js'
import { Equ8ConfigAdmin$ } from './endpoints/Equ8ConfigAdmin$.js'

export function Equ8ConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Delete equ8 config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:EQU8CONFIG&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteEqu8Config(): Promise<unknown> {
    const $ = new Equ8ConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteEqu8Config()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get equ8 config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:EQU8CONFIG&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEqu8Config(): Promise<Equ8Config> {
    const $ = new Equ8ConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEqu8Config()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update equ8 config, create if not exists.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:EQU8CONFIG&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchEqu8Config(data: ADtoForUpdateEqu8ConfigApiCall): Promise<Equ8Config> {
    const $ = new Equ8ConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchEqu8Config(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteEqu8Config,
    getEqu8Config,
    patchEqu8Config
  }
}
