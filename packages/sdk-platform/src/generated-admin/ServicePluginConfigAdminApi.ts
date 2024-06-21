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
import { ServicePluginConfigInfo } from '../generated-definitions/ServicePluginConfigInfo.js'
import { ServicePluginConfigUpdate } from '../generated-definitions/ServicePluginConfigUpdate.js'
import { ServicePluginConfigAdmin$ } from './endpoints/ServicePluginConfigAdmin$.js'

export function ServicePluginConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * Delete service plugin config
   */
  async function deleteConfigServicePlugin_DEPRECATED(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteConfigServicePlugin_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Get service plugin config
   */
  async function getConfigsServicePlugin_DEPRECATED(): Promise<ServicePluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigsServicePlugin_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateConfigServicePlugin_DEPRECATED(data: ServicePluginConfigUpdate): Promise<ServicePluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateConfigServicePlugin_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete service plugin config.
   */
  async function deleteCatalogPluginLootbox(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteCatalogPluginLootbox()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get lootbox plugin config.
   */
  async function getCatalogPluginsLootbox(): Promise<LootBoxPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsLootbox()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginLootbox(data: LootBoxPluginConfigUpdate): Promise<LootBoxPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginLootbox(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete section plugin config.
   */
  async function deleteCatalogPluginSection(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteCatalogPluginSection()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get section plugin config.
   */
  async function getCatalogPluginsSection(): Promise<SectionPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsSection()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginSection(data: SectionPluginConfigUpdate): Promise<SectionPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginSection(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete service plugin config.
   */
  async function deleteRevocationPluginRevocation(): Promise<unknown> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteRevocationPluginRevocation()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get revocation plugin config.
   */
  async function getRevocationPluginsRevocation(): Promise<RevocationPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRevocationPluginsRevocation()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevocationPluginRevocation(data: RevocationPluginConfigUpdate): Promise<RevocationPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRevocationPluginRevocation(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get lootbox plugin gRPC info.
   */
  async function getCatalogPluginsLootboxGrpcInfo(queryParams?: { force?: boolean | null }): Promise<GrpcServerInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsLootboxGrpcInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginLootboxCustomConfigCert(data: { file?: File }): Promise<LootBoxPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginLootboxCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCatalogPluginSectionCustomConfigCert(data: { file?: File }): Promise<SectionPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginSectionCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevocationPluginRevocationRevocationCustomConfigCert(data: { file?: File }): Promise<RevocationPluginConfigInfo> {
    const $ = new ServicePluginConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRevocationPluginRevocationRevocationCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteConfigServicePlugin_DEPRECATED,
    getConfigsServicePlugin_DEPRECATED,
    updateConfigServicePlugin_DEPRECATED,
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
