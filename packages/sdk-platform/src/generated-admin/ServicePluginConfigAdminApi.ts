/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
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

export function ServicePluginConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function deleteConfigServicePlugin(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigServicePlugin()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigsServicePlugin(): Promise<AxiosResponse<ServicePluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigsServicePlugin()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfigServicePlugin(data: ServicePluginConfigUpdate): Promise<AxiosResponse<ServicePluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfigServicePlugin(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCatalogPluginLootbox(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCatalogPluginLootbox()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCatalogPluginsLootbox(): Promise<AxiosResponse<LootBoxPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsLootbox()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogPluginLootbox(data: LootBoxPluginConfigUpdate): Promise<AxiosResponse<LootBoxPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginLootbox(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCatalogPluginSection(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCatalogPluginSection()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCatalogPluginsSection(): Promise<AxiosResponse<SectionPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsSection()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogPluginSection(data: SectionPluginConfigUpdate): Promise<AxiosResponse<SectionPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginSection(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRevocationPluginRevocation(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRevocationPluginRevocation()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRevocationPluginsRevocation(): Promise<AxiosResponse<RevocationPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRevocationPluginsRevocation()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevocationPluginRevocation(data: RevocationPluginConfigUpdate): Promise<AxiosResponse<RevocationPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevocationPluginRevocation(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCatalogPluginsLootboxGrpcInfo(queryParams?: { force?: boolean | null }): Promise<AxiosResponse<GrpcServerInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsLootboxGrpcInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogPluginLootboxCustomConfigCert(data: { file?: File }): Promise<AxiosResponse<LootBoxPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginLootboxCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCatalogPluginSectionCustomConfigCert(data: { file?: File }): Promise<AxiosResponse<SectionPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginSectionCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevocationPluginRevocationRevocationCustomConfigCert(data: {
    file?: File
  }): Promise<AxiosResponse<RevocationPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevocationPluginRevocationRevocationCustomConfigCert(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Delete service plugin config
     */
    deleteConfigServicePlugin,
    /**
     * @deprecated
     * Get service plugin config
     */
    getConfigsServicePlugin,
    /**
     * @deprecated
     * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateConfigServicePlugin,
    /**
     * Delete service plugin config.
     */
    deleteCatalogPluginLootbox,
    /**
     * Get lootbox plugin config.
     */
    getCatalogPluginsLootbox,
    /**
     * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogPluginLootbox,
    /**
     * Delete section plugin config.
     */
    deleteCatalogPluginSection,
    /**
     * Get section plugin config.
     */
    getCatalogPluginsSection,
    /**
     * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogPluginSection,
    /**
     * Delete service plugin config.
     */
    deleteRevocationPluginRevocation,
    /**
     * Get revocation plugin config.
     */
    getRevocationPluginsRevocation,
    /**
     * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevocationPluginRevocation,
    /**
     * Get lootbox plugin gRPC info.
     */
    getCatalogPluginsLootboxGrpcInfo,
    /**
     * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogPluginLootboxCustomConfigCert,
    /**
     * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateCatalogPluginSectionCustomConfigCert,
    /**
     * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevocationPluginRevocationRevocationCustomConfigCert
  }
}
