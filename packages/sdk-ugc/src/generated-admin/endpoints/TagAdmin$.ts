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
import { z } from 'zod'
import { CreateTagRequest } from '../../generated-definitions/CreateTagRequest.js'
import { CreateTagResponse } from '../../generated-definitions/CreateTagResponse.js'
import { PaginatedGetTagResponse } from '../../generated-definitions/PaginatedGetTagResponse.js'

export class TagAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get available tags paginated
   */
  getTags(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedGetTagResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGetTagResponse,
      'PaginatedGetTagResponse'
    )
  }
  /**
   * Creates a new tag
   */
  createTag(data: CreateTagRequest): Promise<Response<CreateTagResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTagResponse, 'CreateTagResponse')
  }
  /**
   * Delete existing tag
   */
  deleteTag_ByTagId(tagId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags/{tagId}'.replace('{namespace}', this.namespace).replace('{tagId}', tagId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update existing tag
   */
  updateTag_ByTagId(tagId: string, data: CreateTagRequest): Promise<Response<CreateTagResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags/{tagId}'.replace('{namespace}', this.namespace).replace('{tagId}', tagId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTagResponse, 'CreateTagResponse')
  }
}
