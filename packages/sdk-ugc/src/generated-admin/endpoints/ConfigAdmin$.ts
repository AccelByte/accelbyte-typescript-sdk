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
import { PaginatedGetConfigsResponse } from '../../generated-definitions/PaginatedGetConfigsResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'

export class ConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get config paginated
   */
  getConfigs_v2(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedGetConfigsResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGetConfigsResponse,
      'PaginatedGetConfigsResponse'
    )
  }
  /**
   * This endpoint will create a new config if the *key* doesn&#39;t exist. Allowed key value: - *contentReview*: *enabled*,*disabled*
   */
  patchConfig_ByKey_v2(key: string, data: UpdateConfigRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/configs/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
