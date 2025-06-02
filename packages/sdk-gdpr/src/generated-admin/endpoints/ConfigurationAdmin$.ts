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
import { ServiceConfigurationUpdateRequest } from '../../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../../generated-definitions/ServicesConfigurationResponse.js'

export class ConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Delete a list of admin email addresses to stop receiving personal data request notification. Scope: account
   */
  deleteEmailConfiguration(queryParams: { emails: string[] }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get list of admin email address configuration. Scope: account
   */
  getEmailsConfigurations(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Add admin email address for receiving personal data request notification. Scope: account
   */
  createEmailConfiguration(data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update admin email address for receiving personal data request notification. Scope: account
   */
  updateEmailConfiguration(data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/emails/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get Registered Services Configuration. Scope: account
   */
  getServicesConfigurations(): Promise<Response<ServicesConfigurationResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServicesConfigurationResponse,
      'ServicesConfigurationResponse'
    )
  }
  /**
   * Update Registered Services Configuration. Scope: account
   */
  updateServiceConfiguration(data: ServiceConfigurationUpdateRequest): Promise<Response<ServiceConfigurationUpdateRequest>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServiceConfigurationUpdateRequest,
      'ServiceConfigurationUpdateRequest'
    )
  }
  /**
   * **[TEST FACILITY ONLY]** Reset Registered Services Configuration to use the default configuration. Scope: account
   */
  deleteServiceConfigurationReset(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/configurations/reset'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * **[TEST FACILITY ONLY]** Reset registered platform account closure services configuration to use the default configuration. Scope: account
   */
  deleteServicePlatformClosureConfig(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/platforms/closure/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get registered platform account closure services configuration. Scope: account
   */
  getServicesPlatformsClosureConfig(): Promise<Response<ServicesConfigurationResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/platforms/closure/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServicesConfigurationResponse,
      'ServicesConfigurationResponse'
    )
  }
  /**
   * Update registered platform account closure services configuration. Scope: account
   */
  updateServicePlatformClosureConfig(data: ServiceConfigurationUpdateRequest): Promise<Response<ServiceConfigurationUpdateRequest>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/services/platforms/closure/config'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ServiceConfigurationUpdateRequest,
      'ServiceConfigurationUpdateRequest'
    )
  }
}
