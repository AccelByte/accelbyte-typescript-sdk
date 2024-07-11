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
import { SlotConfigUpdate } from '../generated-definitions/SlotConfigUpdate.js'
import { UserSlotConfigInfo } from '../generated-definitions/UserSlotConfigInfo.js'
import { SlotConfigAdmin$ } from './endpoints/SlotConfigAdmin$.js'

export function SlotConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a namespace slot configuration, the configuration will be default after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt;
   */
  async function deleteConfig_DEPRECATED(): Promise<unknown> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteConfig_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot configuration for a given namespace. In case slot configuration is not set, the default will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace slot config info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getConfig_DEPRECATED(): Promise<NamespaceSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a slot namespace configuration.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace slot config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateConfig_DEPRECATED(data: SlotConfigUpdate): Promise<NamespaceSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateConfig_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a user slot configuration in given namespace, the namespace slot configuration will be returned after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/li&gt;
   */
  async function deleteConfig_ByUserId_DEPRECATED(userId: string): Promise<unknown> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteConfig_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get a user slot configuration in given namespace. In case the user slot configuration is not set, the namespace configuration will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;Returns&lt;/i&gt;: slot config info&lt;/li&gt;
   */
  async function getConfig_ByUserId_DEPRECATED(userId: string): Promise<UserSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfig_ByUserId_DEPRECATED(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a user slot configuration in given namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot config&lt;/li&gt;
   */
  async function updateConfig_ByUserId_DEPRECATED(userId: string, data: SlotConfigUpdate): Promise<UserSlotConfigInfo> {
    const $ = new SlotConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateConfig_ByUserId_DEPRECATED(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteConfig_DEPRECATED,
    getConfig_DEPRECATED,
    updateConfig_DEPRECATED,
    deleteConfig_ByUserId_DEPRECATED,
    getConfig_ByUserId_DEPRECATED,
    updateConfig_ByUserId_DEPRECATED
  }
}
