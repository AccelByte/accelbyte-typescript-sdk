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
import { RetrieveUserInfoCacheStatusResponseArray } from '../../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'

export class UserInfoAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Invalidate user info cache in agreement service.
   */
  deleteUserInfo(queryParams?: { namespace?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/userInfo'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get user info cache last updated time per namespace.&lt;br&gt;The query parameter namespaces can be a list of namespace separated by comma.&lt;br&gt;If query parameter namespaces is empty, user info cache status for all available namespaces will be returned.
   */
  getUserInfo(queryParams?: { namespaces?: string | null }): Promise<Response<RetrieveUserInfoCacheStatusResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/userInfo'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveUserInfoCacheStatusResponseArray,
      'RetrieveUserInfoCacheStatusResponseArray'
    )
  }
  /**
   * @deprecated
   * Sync user info cache in agreement service with iam service.
   */
  updateUserInfo(queryParams: { namespace: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/userInfo'
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
