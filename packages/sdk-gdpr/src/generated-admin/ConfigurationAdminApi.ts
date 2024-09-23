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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ServiceConfigurationUpdateRequest } from '../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../generated-definitions/ServicesConfigurationResponse.js'
import { ConfigurationAdmin$ } from './endpoints/ConfigurationAdmin$.js'

export function ConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteEmailConfiguration(queryParams: { emails: string[] }): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailConfiguration(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEmailsConfigurations(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEmailConfiguration(data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEmailConfiguration(data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEmailConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServicesConfigurations(): Promise<AxiosResponse<ServicesConfigurationResponse>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServicesConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateServiceConfiguration(
    data: ServiceConfigurationUpdateRequest
  ): Promise<AxiosResponse<ServiceConfigurationUpdateRequest>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateServiceConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteServiceConfigurationReset(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServiceConfigurationReset()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteServicePlatformClosureConfig(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServicePlatformClosureConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServicesPlatformsClosureConfig(): Promise<AxiosResponse<ServicesConfigurationResponse>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServicesPlatformsClosureConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateServicePlatformClosureConfig(
    data: ServiceConfigurationUpdateRequest
  ): Promise<AxiosResponse<ServiceConfigurationUpdateRequest>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateServicePlatformClosureConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete a list of admin email addresses to stop receiving personal data request notification. Scope: account
     */
    deleteEmailConfiguration,
    /**
     * Get list of admin email address configuration. Scope: account
     */
    getEmailsConfigurations,
    /**
     * Add admin email address for receiving personal data request notification. Scope: account
     */
    createEmailConfiguration,
    /**
     * Update admin email address for receiving personal data request notification. Scope: account
     */
    updateEmailConfiguration,
    /**
     * Get Registered Services Configuration. Scope: account
     */
    getServicesConfigurations,
    /**
     * Update Registered Services Configuration. Scope: account
     */
    updateServiceConfiguration,
    /**
     * **[TEST FACILITY ONLY]** Reset Registered Services Configuration to use the default configuration. Scope: account
     */
    deleteServiceConfigurationReset,
    /**
     * **[TEST FACILITY ONLY]** Reset registered platform account closure services configuration to use the default configuration. Scope: account
     */
    deleteServicePlatformClosureConfig,
    /**
     * Get registered platform account closure services configuration. Scope: account
     */
    getServicesPlatformsClosureConfig,
    /**
     * Update registered platform account closure services configuration. Scope: account
     */
    updateServicePlatformClosureConfig
  }
}
