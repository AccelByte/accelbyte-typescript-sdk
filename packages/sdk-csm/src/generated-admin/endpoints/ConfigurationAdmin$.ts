/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { GetListOfConfigurationsV1Response } from '../../generated-definitions/GetListOfConfigurationsV1Response.js'
import { SaveConfigurationV1Request } from '../../generated-definitions/SaveConfigurationV1Request.js'
import { SaveConfigurationV1Response } from '../../generated-definitions/SaveConfigurationV1Response.js'
import { UpdateConfigurationV1Request } from '../../generated-definitions/UpdateConfigurationV1Request.js'
import { UpdateConfigurationV1Response } from '../../generated-definitions/UpdateConfigurationV1Response.js'

export class ConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [READ]&lt;/code&gt; Get list of environment secrets per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
   */
  getSecrets_ByApp(app: string, queryParams?: { limit?: number; offset?: number }): Promise<Response<GetListOfConfigurationsV1Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetListOfConfigurationsV1Response,
      'GetListOfConfigurationsV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [CREATE]&lt;/code&gt; Save an environment secret. Request body: - configName : environment secret name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
   */
  createSecret_ByApp(app: string, data: SaveConfigurationV1Request): Promise<Response<SaveConfigurationV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SaveConfigurationV1Response,
      'SaveConfigurationV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [READ]&lt;/code&gt; Get list of environment variables per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
   */
  getVariables_ByApp(app: string, queryParams?: { limit?: number; offset?: number }): Promise<Response<GetListOfConfigurationsV1Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/variables'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetListOfConfigurationsV1Response,
      'GetListOfConfigurationsV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [CREATE]&lt;/code&gt; Save an environment variable. Request body: - configName : environment variable name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
   */
  createVariable_ByApp(app: string, data: SaveConfigurationV1Request): Promise<Response<SaveConfigurationV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/variables'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SaveConfigurationV1Response,
      'SaveConfigurationV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [DELETE]&lt;/code&gt; Delete an environment secret.
   */
  deleteSecret_ByApp_ByConfigId(app: string, configId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [UPDATE]&lt;/code&gt; Update an environment secret. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
   */
  updateSecret_ByApp_ByConfigId(
    app: string,
    configId: string,
    data: UpdateConfigurationV1Request
  ): Promise<Response<UpdateConfigurationV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateConfigurationV1Response,
      'UpdateConfigurationV1Response'
    )
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [DELETE]&lt;/code&gt; Delete an environment variable.
   */
  deleteVariable_ByApp_ByConfigId(app: string, configId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/variables/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [UPDATE]&lt;/code&gt; Update an environment variable. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
   */
  updateVariable_ByApp_ByConfigId(
    app: string,
    configId: string,
    data: UpdateConfigurationV1Request
  ): Promise<Response<UpdateConfigurationV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/variables/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateConfigurationV1Response,
      'UpdateConfigurationV1Response'
    )
  }
}
