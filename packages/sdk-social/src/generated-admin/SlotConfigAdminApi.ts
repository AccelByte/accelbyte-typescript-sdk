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
import { NamespaceSlotConfigInfo } from '../generated-definitions/NamespaceSlotConfigInfo.js'
import { SlotConfigAdmin$ } from './endpoints/SlotConfigAdmin$.js'
import { SlotConfigUpdate } from '../generated-definitions/SlotConfigUpdate.js'
import { UserSlotConfigInfo } from '../generated-definitions/UserSlotConfigInfo.js'

export function SlotConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a namespace slot configuration, the configuration will be default after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SLOTCONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteConfig(): Promise<unknown> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot configuration for a given namespace. In case slot configuration is not set, the default will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SLOTCONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace slot config info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getConfig(): Promise<NamespaceSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a slot namespace configuration.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SLOTCONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace slot config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateConfig(data: SlotConfigUpdate): Promise<NamespaceSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateConfig(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a user slot configuration in given namespace, the namespace slot configuration will be returned after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTCONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/li&gt;
   */
  async function deleteConfig_ByUserId(userId: string): Promise<unknown> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfig_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get a user slot configuration in given namespace. In case the user slot configuration is not set, the namespace configuration will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTCONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;Returns&lt;/i&gt;: slot config info&lt;/li&gt;
   */
  async function getConfig_ByUserId(userId: string): Promise<UserSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfig_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a user slot configuration in given namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTCONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot config&lt;/li&gt;
   */
  async function updateConfig_ByUserId(userId: string, data: SlotConfigUpdate): Promise<UserSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateConfig_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteConfig,
    getConfig,
    updateConfig,
    deleteConfig_ByUserId,
    getConfig_ByUserId,
    updateConfig_ByUserId
  }
}
