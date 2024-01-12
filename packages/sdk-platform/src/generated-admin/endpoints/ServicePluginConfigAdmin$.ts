/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { GrpcServerInfo } from '../../generated-definitions/GrpcServerInfo.js'
import { LootBoxPluginConfigInfo } from '../../generated-definitions/LootBoxPluginConfigInfo.js'
import { LootBoxPluginConfigUpdate } from '../../generated-definitions/LootBoxPluginConfigUpdate.js'
import { RevocationPluginConfigInfo } from '../../generated-definitions/RevocationPluginConfigInfo.js'
import { RevocationPluginConfigUpdate } from '../../generated-definitions/RevocationPluginConfigUpdate.js'
import { SectionPluginConfigInfo } from '../../generated-definitions/SectionPluginConfigInfo.js'
import { SectionPluginConfigUpdate } from '../../generated-definitions/SectionPluginConfigUpdate.js'

export class ServicePluginConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Delete service plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteCatalogPluginLootbox(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get lootbox plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getCatalogPluginsLootbox(): Promise<IResponseWithSync<LootBoxPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, LootBoxPluginConfigInfo, 'LootBoxPluginConfigInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginLootbox(data: LootBoxPluginConfigUpdate): Promise<IResponse<LootBoxPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, LootBoxPluginConfigInfo, 'LootBoxPluginConfigInfo')
  }

  /**
   * Delete section plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteCatalogPluginSection(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get section plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getCatalogPluginsSection(): Promise<IResponseWithSync<SectionPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SectionPluginConfigInfo, 'SectionPluginConfigInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginSection(data: SectionPluginConfigUpdate): Promise<IResponse<SectionPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SectionPluginConfigInfo, 'SectionPluginConfigInfo')
  }

  /**
   * Delete service plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteRevocationPluginRevocation(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get revocation plugin config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getRevocationPluginsRevocation(): Promise<IResponseWithSync<RevocationPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RevocationPluginConfigInfo, 'RevocationPluginConfigInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocationPluginRevocation(data: RevocationPluginConfigUpdate): Promise<IResponse<RevocationPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, RevocationPluginConfigInfo, 'RevocationPluginConfigInfo')
  }

  /**
   * Get lootbox plugin gRPC info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getCatalogPluginsLootboxGrpcInfo(queryParams?: { force?: boolean | null }): Promise<IResponseWithSync<GrpcServerInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox/grpcInfo'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GrpcServerInfo, 'GrpcServerInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginLootboxCustomConfigCert(data: { file?: File }): Promise<IResponse<LootBoxPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox/customConfig/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, LootBoxPluginConfigInfo, 'LootBoxPluginConfigInfo')
  }

  /**
   * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:CATALOG, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginSectionCustomConfigCert(data: { file?: File }): Promise<IResponse<SectionPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section/customConfig/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SectionPluginConfigInfo, 'SectionPluginConfigInfo')
  }

  /**
   * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:PLUGIN:REVOCATION, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocationPluginRevocationRevocationCustomConfigCert(data: { file?: File }): Promise<IResponse<RevocationPluginConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation/revocation/customConfig/cert'.replace(
      '{namespace}',
      this.namespace
    )
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, RevocationPluginConfigInfo, 'RevocationPluginConfigInfo')
  }
}
