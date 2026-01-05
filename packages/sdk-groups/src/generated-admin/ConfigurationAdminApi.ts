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
import { CreateGroupConfigurationRequestV1 } from '../generated-definitions/CreateGroupConfigurationRequestV1.js'
import { CreateGroupConfigurationResponseV1 } from '../generated-definitions/CreateGroupConfigurationResponseV1.js'
import { GetGroupConfigurationResponseV1 } from '../generated-definitions/GetGroupConfigurationResponseV1.js'
import { ListConfigurationResponseV1 } from '../generated-definitions/ListConfigurationResponseV1.js'
import { UpdateGroupConfigurationGlobalRulesRequestV1 } from '../generated-definitions/UpdateGroupConfigurationGlobalRulesRequestV1.js'
import { UpdateGroupConfigurationRequestV1 } from '../generated-definitions/UpdateGroupConfigurationRequestV1.js'
import { UpdateGroupConfigurationResponseV1 } from '../generated-definitions/UpdateGroupConfigurationResponseV1.js'
import { ConfigurationAdmin$ } from './endpoints/ConfigurationAdmin$.js'

export function ConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getConfiguration(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<ListConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfiguration(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfiguration(data: CreateGroupConfigurationRequestV1): Promise<AxiosResponse<CreateGroupConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfigurationInitiate(): Promise<AxiosResponse<CreateGroupConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigurationInitiate()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfiguration_ByConfigurationCode(configurationCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfiguration_ByConfigurationCode(configurationCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfiguration_ByConfigurationCode(configurationCode: string): Promise<AxiosResponse<GetGroupConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfiguration_ByConfigurationCode(configurationCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfiguration_ByConfigurationCode(
    configurationCode: string,
    data: UpdateGroupConfigurationRequestV1
  ): Promise<AxiosResponse<UpdateGroupConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfiguration_ByConfigurationCode(configurationCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string
  ): Promise<AxiosResponse<UpdateGroupConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRule_ByConfigurationCode_ByAllowedAction(configurationCode, allowedAction)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string,
    data: UpdateGroupConfigurationGlobalRulesRequestV1
  ): Promise<AxiosResponse<UpdateGroupConfigurationResponseV1>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRule_ByConfigurationCode_ByAllowedAction(configurationCode, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
     */
    getConfiguration,
    /**
     * This endpoint is used to create new configuration. Before creating the configuration, make sure that member role for admin and group member are already created before. For each of the global rule, it will be the rule detail that consists of these fields: * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked Allowed Action can only be filled with any available action in the Group Service. For the configuration, the only value is **&#34;createGroup&#34;** Action Code: 73103
     */
    createConfiguration,
    /**
     * This endpoint is used to initiate configuration. This endpoint will automatically create default configuration and member roles with default permission Default Permission for admin role will cover these permission: - Permission to invite user to group - Permission to accept or reject join request - Permission to kick group member Default max member value will be 50 and global rules will be empty Action Code: 73104
     */
    createConfigurationInitiate,
    /**
     * This endpoint is used to delete group configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
     */
    deleteConfiguration_ByConfigurationCode,
    /**
     * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
     */
    getConfiguration_ByConfigurationCode,
    /**
     * This endpoint is used to update existing configuration. groupAdminRoleId and groupMemberRoleId won&#39;t be able to be updated. User can try to change the member role permission instead for each of those member role Action Code: 73102
     */
    patchConfiguration_ByConfigurationCode,
    /**
     * This endpoint is used to delete existing global rule configuration based on the allowed action. It will not give any error if the allowed action is not existed in the global rule Action Code: 73105
     */
    deleteRule_ByConfigurationCode_ByAllowedAction,
    /**
     * This endpoint is used to update existing global rule configuration based on the allowed action. It will replace the permission with the request Action Code: 73106
     */
    updateRule_ByConfigurationCode_ByAllowedAction
  }
}
