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
import { GrpcServerInfo } from '../generated-definitions/GrpcServerInfo.js'
import { LootBoxPluginConfigInfo } from '../generated-definitions/LootBoxPluginConfigInfo.js'
import { LootBoxPluginConfigUpdate } from '../generated-definitions/LootBoxPluginConfigUpdate.js'
import { RevocationPluginConfigInfo } from '../generated-definitions/RevocationPluginConfigInfo.js'
import { RevocationPluginConfigUpdate } from '../generated-definitions/RevocationPluginConfigUpdate.js'
import { SectionPluginConfigInfo } from '../generated-definitions/SectionPluginConfigInfo.js'
import { SectionPluginConfigUpdate } from '../generated-definitions/SectionPluginConfigUpdate.js'
import { ServicePluginConfigAdmin$ } from './endpoints/ServicePluginConfigAdmin$.js'
import { ServicePluginConfigInfo } from '../generated-definitions/ServicePluginConfigInfo.js'
import { ServicePluginConfigUpdate } from '../generated-definitions/ServicePluginConfigUpdate.js'

export function ServicePluginConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * @deprecated
   * Delete service plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:CONFIG:SERVICEPLUGIN, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteConfigServicePlugin(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfigServicePlugin()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Get service plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:CONFIG:SERVICEPLUGIN&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getConfigsServicePlugin(): Promise<ServicePluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigsServicePlugin()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:CONFIG:SERVICEPLUGIN, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateConfigServicePlugin(data: ServicePluginConfigUpdate): Promise<ServicePluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateConfigServicePlugin(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete service plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteCatalogPluginLootbox(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteCatalogPluginLootbox()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get lootbox plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCatalogPluginsLootbox(): Promise<LootBoxPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCatalogPluginsLootbox()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginLootbox(data: LootBoxPluginConfigUpdate): Promise<LootBoxPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCatalogPluginLootbox(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete section plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteCatalogPluginSection(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteCatalogPluginSection()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get section plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCatalogPluginsSection(): Promise<SectionPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCatalogPluginsSection()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginSection(data: SectionPluginConfigUpdate): Promise<SectionPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCatalogPluginSection(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete service plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteRevocationPluginRevocation(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteRevocationPluginRevocation()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get revocation plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRevocationPluginsRevocation(): Promise<RevocationPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRevocationPluginsRevocation()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevocationPluginRevocation(data: RevocationPluginConfigUpdate): Promise<RevocationPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateRevocationPluginRevocation(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get lootbox plugin gRPC info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCatalogPluginsLootboxGrpcInfo(queryParams?: { force?: boolean | null }): Promise<GrpcServerInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCatalogPluginsLootboxGrpcInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginLootboxCustomConfigCert(data: { file?: File }): Promise<LootBoxPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCatalogPluginLootboxCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginSectionCustomConfigCert(data: { file?: File }): Promise<SectionPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCatalogPluginSectionCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevocationPluginRevocationRevocationCustomConfigCert(data: { file?: File }): Promise<RevocationPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateRevocationPluginRevocationRevocationCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteConfigServicePlugin,
    getConfigsServicePlugin,
    updateConfigServicePlugin,
    deleteCatalogPluginLootbox,
    getCatalogPluginsLootbox,
    updateCatalogPluginLootbox,
    deleteCatalogPluginSection,
    getCatalogPluginsSection,
    updateCatalogPluginSection,
    deleteRevocationPluginRevocation,
    getRevocationPluginsRevocation,
    updateRevocationPluginRevocation,
    getCatalogPluginsLootboxGrpcInfo,
    updateCatalogPluginLootboxCustomConfigCert,
    updateCatalogPluginSectionCustomConfigCert,
    updateRevocationPluginRevocationRevocationCustomConfigCert
  }
}
