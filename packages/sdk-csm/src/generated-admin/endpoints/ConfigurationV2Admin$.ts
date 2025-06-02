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
import { GetListOfConfigurationsV2Response } from '../../generated-definitions/GetListOfConfigurationsV2Response.js'
import { SaveConfigurationV2Request } from '../../generated-definitions/SaveConfigurationV2Request.js'
import { SaveConfigurationV2Response } from '../../generated-definitions/SaveConfigurationV2Response.js'
import { SaveSecretConfigurationV2Request } from '../../generated-definitions/SaveSecretConfigurationV2Request.js'
import { UpdateConfigurationV2Request } from '../../generated-definitions/UpdateConfigurationV2Request.js'
import { UpdateConfigurationV2Response } from '../../generated-definitions/UpdateConfigurationV2Response.js'
import { UpdateSecretConfigurationV2Request } from '../../generated-definitions/UpdateSecretConfigurationV2Request.js'

export class ConfigurationV2Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [READ]&lt;/code&gt; Get list of environment secrets per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
   */
  getSecrets_ByApp_v2(
    app: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetListOfConfigurationsV2Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetListOfConfigurationsV2Response,
      'GetListOfConfigurationsV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [CREATE]&lt;/code&gt; Save an environment secret. Secret will always be masked. Request body: - configName : environment secret name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional.
   */
  createSecret_ByApp_v2(app: string, data: SaveSecretConfigurationV2Request): Promise<Response<SaveConfigurationV2Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SaveConfigurationV2Response,
      'SaveConfigurationV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [READ]&lt;/code&gt; Get list of environment variables per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
   */
  getVariables_ByApp_v2(
    app: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetListOfConfigurationsV2Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/variables'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetListOfConfigurationsV2Response,
      'GetListOfConfigurationsV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [CREATE]&lt;/code&gt; Save an environment variable. Request body: - configName : environment variable name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
   */
  createVariable_ByApp_v2(app: string, data: SaveConfigurationV2Request): Promise<Response<SaveConfigurationV2Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/variables'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SaveConfigurationV2Response,
      'SaveConfigurationV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [DELETE]&lt;/code&gt; Delete an environment secret by its config id
   */
  deleteSecret_ByApp_ByConfigId_v2(app: string, configId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [UPDATE]&lt;/code&gt; Update an environment secret. Secret will always be masked. Request body: - value : configuration value - Required. - description : description of the configuration - Optional.
   */
  updateSecret_ByApp_ByConfigId_v2(
    app: string,
    configId: string,
    data: UpdateSecretConfigurationV2Request
  ): Promise<Response<UpdateConfigurationV2Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/secrets/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateConfigurationV2Response,
      'UpdateConfigurationV2Response'
    )
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [DELETE]&lt;/code&gt; Delete an environment variable by its config id
   */
  deleteVariable_ByApp_ByConfigId_v2(app: string, configId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/variables/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [UPDATE]&lt;/code&gt; Update an environment variable. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
   */
  updateVariable_ByApp_ByConfigId_v2(
    app: string,
    configId: string,
    data: UpdateConfigurationV2Request
  ): Promise<Response<UpdateConfigurationV2Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/variables/{configId}'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
      .replace('{configId}', configId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateConfigurationV2Response,
      'UpdateConfigurationV2Response'
    )
  }
}
