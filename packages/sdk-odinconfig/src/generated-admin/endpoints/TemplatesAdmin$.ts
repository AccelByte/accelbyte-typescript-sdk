/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CacheResult } from '../../generated-definitions/CacheResult.js'
import { Config } from '../../generated-definitions/Config.js'
import { Configs } from '../../generated-definitions/Configs.js'
import { Template } from '../../generated-definitions/Template.js'
import { TemplateCompactArray } from '../../generated-definitions/TemplateCompactArray.js'

export class TemplatesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Retrieve templates on a given namespace
   */
  getTemplates(): Promise<IResponse<TemplateCompactArray>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TemplateCompactArray, 'TemplateCompactArray')
  }

  /**
   * Create template on a given namespace
   */
  createTemplate(data: Template): Promise<IResponse<Template>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Template, 'Template')
  }

  /**
   * Get template config on redis cache on a given namespace
   */
  getCache_ByTemplate(template: string): Promise<IResponse<CacheResult>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/cache'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CacheResult, 'CacheResult')
  }

  /**
   * Revalidate template config redis cache on a given namespace
   */
  createCache_ByTemplate(template: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/cache'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Retrieve template configs from a given namespace.
   */
  getConfigs_ByTemplate(template: string): Promise<IResponse<Configs>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/configs'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Configs, 'Configs')
  }

  /**
   * Create template config on a given namespace
   */
  createConfig_ByTemplate(template: string, data: Config): Promise<IResponse<Config>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/configs'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Config, 'Config')
  }

  /**
   * Retrieve specific template config from a given namespace
   */
  getConfig_ByTemplate_ByConfig(template: string, config: string): Promise<IResponse<Config>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/configs/{config}'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
      .replace('{config}', config)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Config, 'Config')
  }

  /**
   * Update specific template config on a given namespace
   */
  updateConfig_ByTemplate_ByConfig(template: string, config: string, data: Config): Promise<IResponse<Config>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/configs/{config}'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
      .replace('{config}', config)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Config, 'Config')
  }
}
