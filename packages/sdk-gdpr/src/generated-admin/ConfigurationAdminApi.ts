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
import { ConfigurationAdmin$ } from './endpoints/ConfigurationAdmin$.js'
import { ServiceConfigurationUpdateRequest } from '../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../generated-definitions/ServicesConfigurationResponse.js'

export function ConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Delete a list of admin email addresses to stop receiving personal data request notification. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [DELETE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function deleteEmailConfiguration(queryParams: { emails: string[] }): Promise<unknown> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteEmailConfiguration(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of admin email address configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function getEmailsConfigurations(): Promise<unknown> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEmailsConfigurations()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add admin email address for receiving personal data request notification. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [CREATE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function createEmailConfiguration(data: string[]): Promise<unknown> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createEmailConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update admin email address for receiving personal data request notification. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [UPDATE]&lt;/code&gt;&lt;/p&gt;
   */
  async function updateEmailConfiguration(data: string[]): Promise<unknown> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateEmailConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get Registered Services Configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:GDPR:CONFIGURATION [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function getServicesConfigurations(): Promise<ServicesConfigurationResponse> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getServicesConfigurations()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update Registered Services Configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:GDPR:CONFIGURATION [UPDATE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function updateServiceConfiguration(data: ServiceConfigurationUpdateRequest): Promise<ServiceConfigurationUpdateRequest> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateServiceConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY]&lt;/b&gt;&lt;br/&gt;Reset Registered Services Configuration to use the default configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:GDPR:CONFIGURATION [DELETE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  async function deleteServiceConfigurationReset(): Promise<unknown> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteServiceConfigurationReset()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteEmailConfiguration,
    getEmailsConfigurations,
    createEmailConfiguration,
    updateEmailConfiguration,
    getServicesConfigurations,
    updateServiceConfiguration,
    deleteServiceConfigurationReset
  }
}
