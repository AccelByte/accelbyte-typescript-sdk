/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PlatformAccountClosureClientRequest } from '../../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../../generated-definitions/PlatformAccountClosureClientResponse.js'
import { PlatformAccountClosureClientsResponse } from '../../generated-definitions/PlatformAccountClosureClientsResponse.js'
import { PlatformAccountClosureMockRequest } from '../../generated-definitions/PlatformAccountClosureMockRequest.js'
import { XboxBpCertValidationRequest } from '../../generated-definitions/XboxBpCertValidationRequest.js'
import { XboxBpCertValidationResponse } from '../../generated-definitions/XboxBpCertValidationResponse.js'

export class PlatformAccountClosureClientAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get platform account closure configs. ------ Platform: - steamnetwork - xbox - psn Scope: account
   */
  getPlatformsClosureClients(): Promise<Response<PlatformAccountClosureClientsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/closure/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlatformAccountClosureClientsResponse,
      'PlatformAccountClosureClientsResponse'
    )
  }
  /**
   * Mock platform account closure data. ----- **This is only for testing** Platform: - steamnetwork - xbox - psn Scope: account
   */
  updateClosureMock_ByPlatform(platform: string, data: PlatformAccountClosureMockRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/mock'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Delete platform account closure client. The namespace should be **publisher or studio namespace** ------- Platform: - steamnetwork - xbox - psn
   */
  deleteClosureClient_ByPlatform(platform: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get platform account closure config. The namespace should be **publisher or studio namespace** ---------- Platform: - steamnetwork - xbox - psn Scope: account
   */
  getClosureClient_ByPlatform(platform: string): Promise<Response<PlatformAccountClosureClientResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlatformAccountClosureClientResponse,
      'PlatformAccountClosureClientResponse'
    )
  }
  /**
   * Update platform account closure client. The namespace should be the **publisher or studio namespace**. ------ Platform: - steamnetwork - xbox - psn Scope: account
   */
  updateClosureClient_ByPlatform(platform: string, data: PlatformAccountClosureClientRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Check xbox BP cert file whether it&#39;s expired and return expiration date
   */
  fetchPlatformXboxClosureCertValidation(data: XboxBpCertValidationRequest): Promise<Response<XboxBpCertValidationResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/xbox/closure/cert/validation'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XboxBpCertValidationResponse,
      'XboxBpCertValidationResponse'
    )
  }
}
