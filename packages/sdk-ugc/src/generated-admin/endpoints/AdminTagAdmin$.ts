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
import { CreateTagRequest } from '../../generated-definitions/CreateTagRequest.js'
import { CreateTagResponse } from '../../generated-definitions/CreateTagResponse.js'
import { PaginatedGetTagResponse } from '../../generated-definitions/PaginatedGetTagResponse.js'

export class AdminTagAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get available tags paginated
   */
  getTags(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<PaginatedGetTagResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedGetTagResponse, 'PaginatedGetTagResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Creates a new tag
   */
  createTag(data: CreateTagRequest): Promise<IResponse<CreateTagResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateTagResponse, 'CreateTagResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete existing tag
   */
  deleteTag_ByTagId(tagId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags/{tagId}'.replace('{namespace}', this.namespace).replace('{tagId}', tagId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update existing tag
   */
  updateTag_ByTagId(tagId: string, data: CreateTagRequest): Promise<IResponse<CreateTagResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/tags/{tagId}'.replace('{namespace}', this.namespace).replace('{tagId}', tagId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateTagResponse, 'CreateTagResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
