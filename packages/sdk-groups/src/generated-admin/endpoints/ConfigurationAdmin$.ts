/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateGroupConfigurationRequestV1 } from '../../generated-definitions/CreateGroupConfigurationRequestV1.js'
import { CreateGroupConfigurationResponseV1 } from '../../generated-definitions/CreateGroupConfigurationResponseV1.js'
import { GetGroupConfigurationResponseV1 } from '../../generated-definitions/GetGroupConfigurationResponseV1.js'
import { ListConfigurationResponseV1 } from '../../generated-definitions/ListConfigurationResponseV1.js'
import { UpdateGroupConfigurationGlobalRulesRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationGlobalRulesRequestV1.js'
import { UpdateGroupConfigurationRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationRequestV1.js'
import { UpdateGroupConfigurationResponseV1 } from '../../generated-definitions/UpdateGroupConfigurationResponseV1.js'

export class ConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
   */
  getConfiguration(queryParams?: { limit?: number; offset?: number }): Promise<Response<ListConfigurationResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListConfigurationResponseV1,
      'ListConfigurationResponseV1'
    )
  }
  /**
   * This endpoint is used to create new configuration. Before creating the configuration, make sure that member role for admin and group member are already created before. For each of the global rule, it will be the rule detail that consists of these fields: * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked Allowed Action can only be filled with any available action in the Group Service. For the configuration, the only value is **&#34;createGroup&#34;** Action Code: 73103
   */
  createConfiguration(data: CreateGroupConfigurationRequestV1): Promise<Response<CreateGroupConfigurationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateGroupConfigurationResponseV1,
      'CreateGroupConfigurationResponseV1'
    )
  }
  /**
   * This endpoint is used to initiate configuration. This endpoint will automatically create default configuration and member roles with default permission Default Permission for admin role will cover these permission: - Permission to invite user to group - Permission to accept or reject join request - Permission to kick group member Default max member value will be 50 and global rules will be empty Action Code: 73104
   */
  createConfigurationInitiate(): Promise<Response<CreateGroupConfigurationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/initiate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateGroupConfigurationResponseV1,
      'CreateGroupConfigurationResponseV1'
    )
  }
  /**
   * This endpoint is used to delete group configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
   */
  deleteConfiguration_ByConfigurationCode(configurationCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
   */
  getConfiguration_ByConfigurationCode(configurationCode: string): Promise<Response<GetGroupConfigurationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetGroupConfigurationResponseV1,
      'GetGroupConfigurationResponseV1'
    )
  }
  /**
   * This endpoint is used to update existing configuration. groupAdminRoleId and groupMemberRoleId won&#39;t be able to be updated. User can try to change the member role permission instead for each of those member role Action Code: 73102
   */
  patchConfiguration_ByConfigurationCode(
    configurationCode: string,
    data: UpdateGroupConfigurationRequestV1
  ): Promise<Response<UpdateGroupConfigurationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateGroupConfigurationResponseV1,
      'UpdateGroupConfigurationResponseV1'
    )
  }
  /**
   * This endpoint is used to delete existing global rule configuration based on the allowed action. It will not give any error if the allowed action is not existed in the global rule Action Code: 73105
   */
  deleteRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string
  ): Promise<Response<UpdateGroupConfigurationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}/rules/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateGroupConfigurationResponseV1,
      'UpdateGroupConfigurationResponseV1'
    )
  }
  /**
   * This endpoint is used to update existing global rule configuration based on the allowed action. It will replace the permission with the request Action Code: 73106
   */
  updateRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string,
    data: UpdateGroupConfigurationGlobalRulesRequestV1
  ): Promise<Response<UpdateGroupConfigurationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}/rules/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateGroupConfigurationResponseV1,
      'UpdateGroupConfigurationResponseV1'
    )
  }
}
