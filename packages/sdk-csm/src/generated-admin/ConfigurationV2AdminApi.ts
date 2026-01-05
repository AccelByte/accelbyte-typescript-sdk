/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { GetListOfConfigurationsV2Response } from '../generated-definitions/GetListOfConfigurationsV2Response.js'
import { SaveConfigurationV2Request } from '../generated-definitions/SaveConfigurationV2Request.js'
import { SaveConfigurationV2Response } from '../generated-definitions/SaveConfigurationV2Response.js'
import { SaveSecretConfigurationV2Request } from '../generated-definitions/SaveSecretConfigurationV2Request.js'
import { UpdateConfigurationV2Request } from '../generated-definitions/UpdateConfigurationV2Request.js'
import { UpdateConfigurationV2Response } from '../generated-definitions/UpdateConfigurationV2Response.js'
import { UpdateSecretConfigurationV2Request } from '../generated-definitions/UpdateSecretConfigurationV2Request.js'
import { ConfigurationV2Admin$ } from './endpoints/ConfigurationV2Admin$.js'

export function ConfigurationV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getSecrets_ByApp_v2(
    app: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetListOfConfigurationsV2Response>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSecrets_ByApp_v2(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSecret_ByApp_v2(
    app: string,
    data: SaveSecretConfigurationV2Request
  ): Promise<AxiosResponse<SaveConfigurationV2Response>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSecret_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getVariables_ByApp_v2(
    app: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetListOfConfigurationsV2Response>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVariables_ByApp_v2(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createVariable_ByApp_v2(
    app: string,
    data: SaveConfigurationV2Request
  ): Promise<AxiosResponse<SaveConfigurationV2Response>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createVariable_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteSecret_ByApp_ByConfigId_v2(app: string, configId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSecret_ByApp_ByConfigId_v2(app, configId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSecret_ByApp_ByConfigId_v2(
    app: string,
    configId: string,
    data: UpdateSecretConfigurationV2Request
  ): Promise<AxiosResponse<UpdateConfigurationV2Response>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSecret_ByApp_ByConfigId_v2(app, configId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteVariable_ByApp_ByConfigId_v2(app: string, configId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteVariable_ByApp_ByConfigId_v2(app, configId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateVariable_ByApp_ByConfigId_v2(
    app: string,
    configId: string,
    data: UpdateConfigurationV2Request
  ): Promise<AxiosResponse<UpdateConfigurationV2Response>> {
    const $ = new ConfigurationV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVariable_ByApp_ByConfigId_v2(app, configId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [READ]&lt;/code&gt; Get list of environment secrets per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
     */
    getSecrets_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [CREATE]&lt;/code&gt; Save an environment secret. Secret will always be masked. Request body: - configName : environment secret name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional.
     */
    createSecret_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [READ]&lt;/code&gt; Get list of environment variables per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
     */
    getVariables_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [CREATE]&lt;/code&gt; Save an environment variable. Request body: - configName : environment variable name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
     */
    createVariable_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [DELETE]&lt;/code&gt; Delete an environment secret by its config id
     */
    deleteSecret_ByApp_ByConfigId_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [UPDATE]&lt;/code&gt; Update an environment secret. Secret will always be masked. Request body: - value : configuration value - Required. - description : description of the configuration - Optional.
     */
    updateSecret_ByApp_ByConfigId_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [DELETE]&lt;/code&gt; Delete an environment variable by its config id
     */
    deleteVariable_ByApp_ByConfigId_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [UPDATE]&lt;/code&gt; Update an environment variable. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
     */
    updateVariable_ByApp_ByConfigId_v2
  }
}
