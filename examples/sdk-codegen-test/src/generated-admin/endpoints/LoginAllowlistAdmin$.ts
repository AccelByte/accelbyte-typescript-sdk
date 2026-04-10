/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { Response } from '@accelbyte/sdk'
import { Validate } from '@accelbyte/sdk'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { LoginAllowlistRequest } from '../../generated-definitions/LoginAllowlistRequest.js'
import { LoginAllowlistResponse } from '../../generated-definitions/LoginAllowlistResponse.js'

export class LoginAllowlistAdmin$ {
  private axiosInstance: AxiosInstance
  private namespace: string
  private useSchemaValidation: boolean

  constructor(axiosInstance: AxiosInstance, namespace: string, useSchemaValidation = true) {
    this.axiosInstance = axiosInstance
    this.namespace = namespace
    this.useSchemaValidation = useSchemaValidation
  }

  /**
   * This endpoint return login allowlist configuration from specific namespace.
   */
  getLoginAllowlist_v3(): Promise<Response<LoginAllowlistResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/iam/v3/admin/namespaces/{namespace}/loginAllowlist'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LoginAllowlistResponse,
      'LoginAllowlistResponse'
    )
  }
  /**
   * This endpoint update login allowlist configuration from specific game namespace. roleIds: are list of role that allowed to login Note: only accept game namespace
   */
  updateLoginAllowlist_v3(data: LoginAllowlistRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/iam/v3/admin/namespaces/{namespace}/loginAllowlist'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
