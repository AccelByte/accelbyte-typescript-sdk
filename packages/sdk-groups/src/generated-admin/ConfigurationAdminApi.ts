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
import { ConfigurationAdmin$ } from './endpoints/ConfigurationAdmin$.js'
import { CreateGroupConfigurationRequestV1 } from '../generated-definitions/CreateGroupConfigurationRequestV1.js'
import { CreateGroupConfigurationResponseV1 } from '../generated-definitions/CreateGroupConfigurationResponseV1.js'
import { GetGroupConfigurationResponseV1 } from '../generated-definitions/GetGroupConfigurationResponseV1.js'
import { ListConfigurationResponseV1 } from '../generated-definitions/ListConfigurationResponseV1.js'
import { UpdateGroupConfigurationGlobalRulesRequestV1 } from '../generated-definitions/UpdateGroupConfigurationGlobalRulesRequestV1.js'
import { UpdateGroupConfigurationRequestV1 } from '../generated-definitions/UpdateGroupConfigurationRequestV1.js'
import { UpdateGroupConfigurationResponseV1 } from '../generated-definitions/UpdateGroupConfigurationResponseV1.js'

export function ConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
   */
  async function getConfiguration(queryParams?: { limit?: number; offset?: number }): Promise<ListConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfiguration(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to create new configuration. Before creating the configuration, make sure that member role for admin and group member are already created before. For each of the global rule, it will be the rule detail that consists of these fields: * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked Allowed Action can only be filled with any available action in the Group Service. For the configuration, the only value is **&#34;createGroup&#34;** Action Code: 73103
   */
  async function createConfiguration(data: CreateGroupConfigurationRequestV1): Promise<CreateGroupConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to initiate configuration. This endpoint will automatically create default configuration and member roles with default permission Default Permission for admin role will cover these permission: - Permission to invite user to group - Permission to accept or reject join request - Permission to kick group member Default max member value will be 50 and global rules will be empty Action Code: 73104
   */
  async function createConfigurationInitiate(): Promise<CreateGroupConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfigurationInitiate()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to delete group configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
   */
  async function deleteConfiguration_ByConfigurationCode(configurationCode: string): Promise<unknown> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfiguration_ByConfigurationCode(configurationCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
   */
  async function getConfiguration_ByConfigurationCode(configurationCode: string): Promise<GetGroupConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfiguration_ByConfigurationCode(configurationCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to update existing configuration. groupAdminRoleId and groupMemberRoleId won&#39;t be able to be updated. User can try to change the member role permission instead for each of those member role Action Code: 73102
   */
  async function patchConfiguration_ByConfigurationCode(
    configurationCode: string,
    data: UpdateGroupConfigurationRequestV1
  ): Promise<UpdateGroupConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchConfiguration_ByConfigurationCode(configurationCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to delete existing global rule configuration based on the allowed action. It will not give any error if the allowed action is not existed in the global rule Action Code: 73105
   */
  async function deleteRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string
  ): Promise<UpdateGroupConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteRule_ByConfigurationCode_ByAllowedAction(configurationCode, allowedAction)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to update existing global rule configuration based on the allowed action. It will replace the permission with the request Action Code: 73106
   */
  async function updateRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string,
    data: UpdateGroupConfigurationGlobalRulesRequestV1
  ): Promise<UpdateGroupConfigurationResponseV1> {
    const $ = new ConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateRule_ByConfigurationCode_ByAllowedAction(configurationCode, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfiguration,
    createConfiguration,
    createConfigurationInitiate,
    deleteConfiguration_ByConfigurationCode,
    getConfiguration_ByConfigurationCode,
    patchConfiguration_ByConfigurationCode,
    deleteRule_ByConfigurationCode_ByAllowedAction,
    updateRule_ByConfigurationCode_ByAllowedAction
  }
}
