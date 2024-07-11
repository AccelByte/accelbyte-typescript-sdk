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
import { z } from 'zod'
import { NamespaceSlotConfigInfo } from '../../generated-definitions/NamespaceSlotConfigInfo.js'
import { SlotConfigUpdate } from '../../generated-definitions/SlotConfigUpdate.js'
import { UserSlotConfigInfo } from '../../generated-definitions/UserSlotConfigInfo.js'

export class SlotConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a namespace slot configuration, the configuration will be default after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt;
   */
  deleteConfig_DEPRECATED(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot configuration for a given namespace. In case slot configuration is not set, the default will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace slot config info&lt;/li&gt;&lt;/ul&gt;
   */
  getConfig_DEPRECATED(): Promise<IResponse<NamespaceSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NamespaceSlotConfigInfo,
      'NamespaceSlotConfigInfo'
    )
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a slot namespace configuration.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace slot config&lt;/li&gt;&lt;/ul&gt;
   */
  updateConfig_DEPRECATED(data: SlotConfigUpdate): Promise<IResponse<NamespaceSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NamespaceSlotConfigInfo,
      'NamespaceSlotConfigInfo'
    )
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a user slot configuration in given namespace, the namespace slot configuration will be returned after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/li&gt;
   */
  deleteConfig_ByUserId_DEPRECATED(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/config'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get a user slot configuration in given namespace. In case the user slot configuration is not set, the namespace configuration will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;Returns&lt;/i&gt;: slot config info&lt;/li&gt;
   */
  getConfig_ByUserId_DEPRECATED(userId: string): Promise<IResponse<UserSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/config'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserSlotConfigInfo, 'UserSlotConfigInfo')
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a user slot configuration in given namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot config&lt;/li&gt;
   */
  updateConfig_ByUserId_DEPRECATED(userId: string, data: SlotConfigUpdate): Promise<IResponse<UserSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/config'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserSlotConfigInfo, 'UserSlotConfigInfo')
  }
}
