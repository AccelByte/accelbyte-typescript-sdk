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
import { ServiceConfigurationUpdateRequest } from '../../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../../generated-definitions/ServicesConfigurationResponse.js'

export class ConfigurationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Delete a list of admin email addresses to stop receiving personal data request notification. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [DELETE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  deleteEmailConfiguration(queryParams: { emails: string[] }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get list of admin email address configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  getEmailsConfigurations(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Add admin email address for receiving personal data request notification. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [CREATE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  createEmailConfiguration(data: string[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update admin email address for receiving personal data request notification. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EMAIL:CONFIGURATION [UPDATE]&lt;/code&gt;&lt;/p&gt;
   */
  updateEmailConfiguration(data: string[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get Registered Services Configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:GDPR:CONFIGURATION [READ]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  getServicesConfigurations(): Promise<IResponseWithSync<ServicesConfigurationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ServicesConfigurationResponse, 'ServicesConfigurationResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update Registered Services Configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:GDPR:CONFIGURATION [UPDATE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  updateServiceConfiguration(data: ServiceConfigurationUpdateRequest): Promise<IResponse<ServiceConfigurationUpdateRequest>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ServiceConfigurationUpdateRequest, 'ServiceConfigurationUpdateRequest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[TEST FACILITY ONLY]&lt;/b&gt;&lt;br/&gt;Reset Registered Services Configuration to use the default configuration. &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:GDPR:CONFIGURATION [DELETE]&lt;/code&gt; and scope &lt;code&gt;account&lt;/code&gt;&lt;/p&gt;
   */
  deleteServiceConfigurationReset(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/configurations/reset'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
