/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [READ]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration&lt;/p&gt; &lt;p&gt;Action Code: 73101&lt;/p&gt;
   */
  getConfiguration(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<ListConfigurationResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListConfigurationResponseV1, 'ListConfigurationResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [CREATE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to create new configuration. Before creating the configuration, make sure that member role for admin and group member are already created before.&lt;/p&gt; &lt;p&gt;For each of the global rule, it will be the rule detail that consists of these fields: &lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;ruleAttribute&lt;/b&gt;: attribute of the player that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleCriteria&lt;/b&gt;: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleValue&lt;/b&gt;: value that needs to be checked&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Allowed Action can only be filled with any available action in the Group Service. For the configuration, the only value is &lt;b&gt;&#34;createGroup&#34;&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Action Code: 73103&lt;/p&gt;
   */
  createConfiguration(data: CreateGroupConfigurationRequestV1): Promise<IResponse<CreateGroupConfigurationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateGroupConfigurationResponseV1, 'CreateGroupConfigurationResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [CREATE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to initiate configuration. This endpoint will automatically create default configuration and member roles with default permission&lt;/p&gt; &lt;p&gt;Default Permission for admin role will cover these permission: &lt;/p&gt; &lt;ul&gt; &lt;li&gt;Permission to invite user to group&lt;/li&gt; &lt;li&gt;Permission to accept or reject join request&lt;/li&gt; &lt;li&gt;Permission to kick group member&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Default max member value will be 50 and global rules will be empty&lt;/p&gt; &lt;p&gt;Action Code: 73104&lt;/p&gt;
   */
  createConfigurationInitiate(): Promise<IResponse<CreateGroupConfigurationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/initiate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateGroupConfigurationResponseV1, 'CreateGroupConfigurationResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to delete group configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration&lt;/p&gt; &lt;p&gt;Action Code: 73101&lt;/p&gt;
   */
  deleteConfiguration_ByConfigurationCode(configurationCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [READ]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration&lt;/p&gt; &lt;p&gt;Action Code: 73101&lt;/p&gt;
   */
  getConfiguration_ByConfigurationCode(configurationCode: string): Promise<IResponseWithSync<GetGroupConfigurationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetGroupConfigurationResponseV1, 'GetGroupConfigurationResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [UPDATE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to update existing configuration. groupAdminRoleId and groupMemberRoleId won&#39;t be able to be updated. User can try to change the member role permission instead for each of those member role&lt;/p&gt; &lt;p&gt;Action Code: 73102&lt;/p&gt;
   */
  patchConfiguration_ByConfigurationCode(
    configurationCode: string,
    data: UpdateGroupConfigurationRequestV1
  ): Promise<IResponse<UpdateGroupConfigurationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateGroupConfigurationResponseV1, 'UpdateGroupConfigurationResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [UPDATE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to delete existing global rule configuration based on the allowed action. It will not give any error if the allowed action is not existed in the global rule&lt;/p&gt; &lt;p&gt;Action Code: 73105&lt;/p&gt;
   */
  deleteRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string
  ): Promise<IResponse<UpdateGroupConfigurationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}/rules/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateGroupConfigurationResponseV1, 'UpdateGroupConfigurationResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:GROUP:CONFIGURATION [UPDATE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint is used to update existing global rule configuration based on the allowed action. It will replace the permission with the request&lt;/p&gt; &lt;p&gt;Action Code: 73106&lt;/p&gt;
   */
  updateRule_ByConfigurationCode_ByAllowedAction(
    configurationCode: string,
    allowedAction: string,
    data: UpdateGroupConfigurationGlobalRulesRequestV1
  ): Promise<IResponse<UpdateGroupConfigurationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}/rules/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{configurationCode}', configurationCode)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateGroupConfigurationResponseV1, 'UpdateGroupConfigurationResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
