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
import { TagCreateRequestV3 } from '../../generated-definitions/TagCreateRequestV3.js'
import { TagResponse } from '../../generated-definitions/TagResponse.js'
import { TagUpdateRequestV3 } from '../../generated-definitions/TagUpdateRequestV3.js'
import { TagsGetResponseV3 } from '../../generated-definitions/TagsGetResponseV3.js'

export class AccountIdentifierTagAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve Account Identifier Tags. This endpoint allows administrators to retrieve tags that are used to identify and categorize user accounts. Tag Name can be used for partial content search.
   */
  getTags_v3(queryParams?: { limit?: number; offset?: number; tagName?: string | null }): Promise<Response<TagsGetResponseV3>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TagsGetResponseV3, 'TagsGetResponseV3')
  }
  /**
   * Create a new Account Identifier Tag for users. This endpoint allows administrators to create tags that can be used to identify and categorize user accounts.
   */
  createTag_v3(data: TagCreateRequestV3): Promise<Response<TagResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TagResponse, 'TagResponse')
  }
  /**
   * Delete an Account Identifier Tag. This endpoint allows administrators to delete a tag that is used to identify and categorize user accounts.
   */
  deleteTag_ByTagId_v3(tagId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/tags/{tagId}'.replace('{namespace}', this.namespace).replace('{tagId}', tagId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update an existing Account Identifier Tag. This endpoint allows administrators to update the details of a tag that is used to identify and categorize user accounts.
   */
  updateTag_ByTagId_v3(tagId: string, data: TagUpdateRequestV3): Promise<Response<TagResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/tags/{tagId}'.replace('{namespace}', this.namespace).replace('{tagId}', tagId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TagResponse, 'TagResponse')
  }
}
