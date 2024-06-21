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
import { CreateIntegrationConfigurationReq } from '../../generated-definitions/CreateIntegrationConfigurationReq.js'
import { IntegrationConfigurationResp } from '../../generated-definitions/IntegrationConfigurationResp.js'
import { ListIntegrationConfigurationsResp } from '../../generated-definitions/ListIntegrationConfigurationsResp.js'
import { UpdateIntegrationConfigurationReq } from '../../generated-definitions/UpdateIntegrationConfigurationReq.js'
import { UpdateStatusIntegrationConfigurationReq } from '../../generated-definitions/UpdateStatusIntegrationConfigurationReq.js'

export class AdminIntegrationConfigurationsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   *  Listing all integration configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [READ]
   */
  getIntegrationConfigurations(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
  }): Promise<IResponse<ListIntegrationConfigurationsResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/integrationConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListIntegrationConfigurationsResp,
      'ListIntegrationConfigurationsResp'
    )
  }

  /**
   *  Creating integration configuration. There cannot be one duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [CREATE]
   */
  createIntegrationConfiguration(data: CreateIntegrationConfigurationReq): Promise<IResponse<IntegrationConfigurationResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/integrationConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IntegrationConfigurationResp,
      'IntegrationConfigurationResp'
    )
  }

  /**
   *  to update integration configuration There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
   */
  updateIntegrationConfiguration_ByIntegrationConfigurationId(
    integrationConfigurationId: string,
    data: UpdateIntegrationConfigurationReq
  ): Promise<IResponse<IntegrationConfigurationResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/integrationConfigurations/{integrationConfigurationId}'
      .replace('{namespace}', this.namespace)
      .replace('{integrationConfigurationId}', integrationConfigurationId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IntegrationConfigurationResp,
      'IntegrationConfigurationResp'
    )
  }

  /**
   *  to update status integration configuration to be Active / Not Active. There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
   */
  updateStatus_ByIntegrationConfigurationId(
    integrationConfigurationId: string,
    data: UpdateStatusIntegrationConfigurationReq
  ): Promise<IResponse<IntegrationConfigurationResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/integrationConfigurations/{integrationConfigurationId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{integrationConfigurationId}', integrationConfigurationId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      IntegrationConfigurationResp,
      'IntegrationConfigurationResp'
    )
  }
}
