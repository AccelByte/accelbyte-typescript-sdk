/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { CreatorResponse } from '../../generated-definitions/CreatorResponse.js'
import { PaginatedCreatorOverviewResponse } from '../../generated-definitions/PaginatedCreatorOverviewResponse.js'

export class PublicCreator$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getUsers(queryParams?: {
    limit?: number
    offset?: number
    orderby?: string | null
    sortby?: string | null
  }): Promise<Response<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedCreatorOverviewResponse,
      'PaginatedCreatorOverviewResponse'
    )
  }
  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getUser_ByUserId(userId: string): Promise<Response<CreatorResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreatorResponse, 'CreatorResponse')
  }
}
