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
import { PlatformAccountClosureClientRequest } from '../../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../../generated-definitions/PlatformAccountClosureClientResponse.js'

export class PlatformAccountClosureClientAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Delete platform account closure client.
   */
  deleteClosureClient_ByPlatform(platform: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get platform account closure config. Scope: account
   */
  getClosureClient_ByPlatform(platform: string): Promise<IResponse<PlatformAccountClosureClientResponse>> {
    const params = {} as SDKRequestConfig
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
   * Update platform account closure client. Scope: account
   */
  createClosureClient_ByPlatform(platform: string, data: PlatformAccountClosureClientRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/platforms/{platform}/closure/client'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
