/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { GrpcServerInfo } from '../../generated-definitions/GrpcServerInfo.js'
import { LootBoxPluginConfigInfo } from '../../generated-definitions/LootBoxPluginConfigInfo.js'
import { LootBoxPluginConfigUpdate } from '../../generated-definitions/LootBoxPluginConfigUpdate.js'
import { RevocationPluginConfigInfo } from '../../generated-definitions/RevocationPluginConfigInfo.js'
import { RevocationPluginConfigUpdate } from '../../generated-definitions/RevocationPluginConfigUpdate.js'
import { SectionPluginConfigInfo } from '../../generated-definitions/SectionPluginConfigInfo.js'
import { SectionPluginConfigUpdate } from '../../generated-definitions/SectionPluginConfigUpdate.js'
import { ServicePluginConfigInfo } from '../../generated-definitions/ServicePluginConfigInfo.js'
import { ServicePluginConfigUpdate } from '../../generated-definitions/ServicePluginConfigUpdate.js'

export class ServicePluginConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Delete service plugin config
   */
  deleteConfigServicePlugin(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/configs/servicePlugin'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Get service plugin config
   */
  getConfigsServicePlugin(): Promise<Response<ServicePluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/configs/servicePlugin'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServicePluginConfigInfo,
      'ServicePluginConfigInfo'
    )
  }
  /**
   * @deprecated
   * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateConfigServicePlugin(data: ServicePluginConfigUpdate): Promise<Response<ServicePluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/configs/servicePlugin'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServicePluginConfigInfo,
      'ServicePluginConfigInfo'
    )
  }
  /**
   * Delete service plugin config.
   */
  deleteCatalogPluginLootbox(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get lootbox plugin config.
   */
  getCatalogPluginsLootbox(): Promise<Response<LootBoxPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LootBoxPluginConfigInfo,
      'LootBoxPluginConfigInfo'
    )
  }
  /**
   * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginLootbox(data: LootBoxPluginConfigUpdate): Promise<Response<LootBoxPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LootBoxPluginConfigInfo,
      'LootBoxPluginConfigInfo'
    )
  }
  /**
   * Delete section plugin config.
   */
  deleteCatalogPluginSection(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get section plugin config.
   */
  getCatalogPluginsSection(): Promise<Response<SectionPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SectionPluginConfigInfo,
      'SectionPluginConfigInfo'
    )
  }
  /**
   * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginSection(data: SectionPluginConfigUpdate): Promise<Response<SectionPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SectionPluginConfigInfo,
      'SectionPluginConfigInfo'
    )
  }
  /**
   * Delete service plugin config.
   */
  deleteRevocationPluginRevocation(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get revocation plugin config.
   */
  getRevocationPluginsRevocation(): Promise<Response<RevocationPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RevocationPluginConfigInfo,
      'RevocationPluginConfigInfo'
    )
  }
  /**
   * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocationPluginRevocation(data: RevocationPluginConfigUpdate): Promise<Response<RevocationPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RevocationPluginConfigInfo,
      'RevocationPluginConfigInfo'
    )
  }
  /**
   * Get lootbox plugin gRPC info.
   */
  getCatalogPluginsLootboxGrpcInfo(queryParams?: { force?: boolean | null }): Promise<Response<GrpcServerInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox/grpcInfo'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GrpcServerInfo, 'GrpcServerInfo')
  }
  /**
   * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginLootboxCustomConfigCert(data: { file?: File }): Promise<Response<LootBoxPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/lootbox/customConfig/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LootBoxPluginConfigInfo,
      'LootBoxPluginConfigInfo'
    )
  }
  /**
   * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCatalogPluginSectionCustomConfigCert(data: { file?: File }): Promise<Response<SectionPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/catalog/plugins/section/customConfig/cert'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SectionPluginConfigInfo,
      'SectionPluginConfigInfo'
    )
  }
  /**
   * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
   */
  updateRevocationPluginRevocationRevocationCustomConfigCert(data: { file?: File }): Promise<Response<RevocationPluginConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/revocation/plugins/revocation/revocation/customConfig/cert'.replace(
      '{namespace}',
      this.namespace
    )
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RevocationPluginConfigInfo,
      'RevocationPluginConfigInfo'
    )
  }
}
