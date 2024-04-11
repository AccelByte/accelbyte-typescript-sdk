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
import { CacheResult } from '../generated-definitions/CacheResult.js'
import { Config } from '../generated-definitions/Config.js'
import { Configs } from '../generated-definitions/Configs.js'
import { Template } from '../generated-definitions/Template.js'
import { TemplateCompactArray } from '../generated-definitions/TemplateCompactArray.js'
import { TemplatesAdmin$ } from './endpoints/TemplatesAdmin$.js'

export function TemplatesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve templates on a given namespace
   */
  async function getTemplates(): Promise<TemplateCompactArray> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTemplates()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create template on a given namespace
   */
  async function createTemplate(data: Template): Promise<Template> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createTemplate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get template config on redis cache on a given namespace
   */
  async function getCache_ByTemplate(template: string): Promise<CacheResult> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getCache_ByTemplate(template)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revalidate template config redis cache on a given namespace
   */
  async function createCache_ByTemplate(template: string): Promise<unknown> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createCache_ByTemplate(template)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve template configs from a given namespace.
   */
  async function getConfigs_ByTemplate(template: string): Promise<Configs> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getConfigs_ByTemplate(template)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create template config on a given namespace
   */
  async function createConfig_ByTemplate(template: string, data: Config): Promise<Config> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createConfig_ByTemplate(template, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve specific template config from a given namespace
   */
  async function getConfig_ByTemplate_ByConfig(template: string, config: string): Promise<Config> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getConfig_ByTemplate_ByConfig(template, config)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update specific template config on a given namespace
   */
  async function updateConfig_ByTemplate_ByConfig(template: string, config: string, data: Config): Promise<Config> {
    const $ = new TemplatesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateConfig_ByTemplate_ByConfig(template, config, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTemplates,
    createTemplate,
    getCache_ByTemplate,
    createCache_ByTemplate,
    getConfigs_ByTemplate,
    createConfig_ByTemplate,
    getConfig_ByTemplate_ByConfig,
    updateConfig_ByTemplate_ByConfig
  }
}
