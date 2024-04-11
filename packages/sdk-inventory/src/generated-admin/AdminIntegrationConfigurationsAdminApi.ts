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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminIntegrationConfigurationsAdmin$ } from './endpoints/AdminIntegrationConfigurationsAdmin$.js'
import { CreateIntegrationConfigurationReq } from '../generated-definitions/CreateIntegrationConfigurationReq.js'
import { IntegrationConfigurationResp } from '../generated-definitions/IntegrationConfigurationResp.js'
import { ListIntegrationConfigurationsResp } from '../generated-definitions/ListIntegrationConfigurationsResp.js'
import { UpdateIntegrationConfigurationReq } from '../generated-definitions/UpdateIntegrationConfigurationReq.js'
import { UpdateStatusIntegrationConfigurationReq } from '../generated-definitions/UpdateStatusIntegrationConfigurationReq.js'

export function AdminIntegrationConfigurationsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   *  Listing all integration configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [READ]
   */
  async function getIntegrationConfigurations(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
  }): Promise<ListIntegrationConfigurationsResp> {
    const $ = new AdminIntegrationConfigurationsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getIntegrationConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Creating integration configuration. There cannot be one duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [CREATE]
   */
  async function createIntegrationConfiguration(data: CreateIntegrationConfigurationReq): Promise<IntegrationConfigurationResp> {
    const $ = new AdminIntegrationConfigurationsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createIntegrationConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  to update integration configuration There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
   */
  async function updateIntegrationConfiguration_ByIntegrationConfigurationId(
    integrationConfigurationId: string,
    data: UpdateIntegrationConfigurationReq
  ): Promise<IntegrationConfigurationResp> {
    const $ = new AdminIntegrationConfigurationsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateIntegrationConfiguration_ByIntegrationConfigurationId(integrationConfigurationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  to update status integration configuration to be Active / Not Active. There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
   */
  async function updateStatus_ByIntegrationConfigurationId(
    integrationConfigurationId: string,
    data: UpdateStatusIntegrationConfigurationReq
  ): Promise<IntegrationConfigurationResp> {
    const $ = new AdminIntegrationConfigurationsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStatus_ByIntegrationConfigurationId(integrationConfigurationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getIntegrationConfigurations,
    createIntegrationConfiguration,
    updateIntegrationConfiguration_ByIntegrationConfigurationId,
    updateStatus_ByIntegrationConfigurationId
  }
}
