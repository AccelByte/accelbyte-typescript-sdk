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
import { GetListOfConfigurationsV1Response } from '../generated-definitions/GetListOfConfigurationsV1Response.js'
import { SaveConfigurationV1Request } from '../generated-definitions/SaveConfigurationV1Request.js'
import { SaveConfigurationV1Response } from '../generated-definitions/SaveConfigurationV1Response.js'
import { UpdateConfigurationV1Request } from '../generated-definitions/UpdateConfigurationV1Request.js'
import { UpdateConfigurationV1Response } from '../generated-definitions/UpdateConfigurationV1Response.js'
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

  async function getSecrets_ByApp(
    app: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetListOfConfigurationsV1Response>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSecrets_ByApp(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSecret_ByApp(app: string, data: SaveConfigurationV1Request): Promise<AxiosResponse<SaveConfigurationV1Response>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSecret_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getVariables_ByApp(
    app: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetListOfConfigurationsV1Response>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVariables_ByApp(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createVariable_ByApp(app: string, data: SaveConfigurationV1Request): Promise<AxiosResponse<SaveConfigurationV1Response>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createVariable_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSecret_ByApp_ByConfigId(app: string, configId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSecret_ByApp_ByConfigId(app, configId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSecret_ByApp_ByConfigId(
    app: string,
    configId: string,
    data: UpdateConfigurationV1Request
  ): Promise<AxiosResponse<UpdateConfigurationV1Response>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSecret_ByApp_ByConfigId(app, configId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteVariable_ByApp_ByConfigId(app: string, configId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteVariable_ByApp_ByConfigId(app, configId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateVariable_ByApp_ByConfigId(
    app: string,
    configId: string,
    data: UpdateConfigurationV1Request
  ): Promise<AxiosResponse<UpdateConfigurationV1Response>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVariable_ByApp_ByConfigId(app, configId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [READ]&lt;/code&gt; Get list of environment secrets per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
     */
    getSecrets_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [CREATE]&lt;/code&gt; Save an environment secret. Request body: - configName : environment secret name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
     */
    createSecret_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [READ]&lt;/code&gt; Get list of environment variables per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
     */
    getVariables_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [CREATE]&lt;/code&gt; Save an environment variable. Request body: - configName : environment variable name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
     */
    createVariable_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [DELETE]&lt;/code&gt; Delete an environment secret.
     */
    deleteSecret_ByApp_ByConfigId,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [UPDATE]&lt;/code&gt; Update an environment secret. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
     */
    updateSecret_ByApp_ByConfigId,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [DELETE]&lt;/code&gt; Delete an environment variable.
     */
    deleteVariable_ByApp_ByConfigId,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [UPDATE]&lt;/code&gt; Update an environment variable. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
     */
    updateVariable_ByApp_ByConfigId
  }
}
