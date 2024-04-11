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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a namespace slot configuration, the configuration will be default after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SLOTCONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteConfig(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot configuration for a given namespace. In case slot configuration is not set, the default will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SLOTCONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace slot config info&lt;/li&gt;&lt;/ul&gt;
   */
  getConfig(): Promise<IResponse<NamespaceSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceSlotConfigInfo, 'NamespaceSlotConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a slot namespace configuration.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:SLOTCONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace slot config&lt;/li&gt;&lt;/ul&gt;
   */
  updateConfig(data: SlotConfigUpdate): Promise<IResponse<NamespaceSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, NamespaceSlotConfigInfo, 'NamespaceSlotConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a user slot configuration in given namespace, the namespace slot configuration will be returned after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTCONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/li&gt;
   */
  deleteConfig_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/config'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get a user slot configuration in given namespace. In case the user slot configuration is not set, the namespace configuration will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTCONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;Returns&lt;/i&gt;: slot config info&lt;/li&gt;
   */
  getConfig_ByUserId(userId: string): Promise<IResponse<UserSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/config'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserSlotConfigInfo, 'UserSlotConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a user slot configuration in given namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:SLOTCONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot config&lt;/li&gt;
   */
  updateConfig_ByUserId(userId: string, data: SlotConfigUpdate): Promise<IResponse<UserSlotConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/admin/namespaces/{namespace}/users/{userId}/config'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserSlotConfigInfo, 'UserSlotConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
