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

export class Sso$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  getSso_ByPlatformId_v3(platformId: string, queryParams?: { payload?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/sso/{platformId}'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Logout user&#39;s session on platform that logged in using SSO. Supported platforms: - discourse
   */
  createLogout_ByPlatformId_v3(platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/sso/{platformId}/logout'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
