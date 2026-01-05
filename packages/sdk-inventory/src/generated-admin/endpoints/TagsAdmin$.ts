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
import { CreateTagReq } from '../../generated-definitions/CreateTagReq.js'
import { CreateTagResp } from '../../generated-definitions/CreateTagResp.js'
import { ListTagsResp } from '../../generated-definitions/ListTagsResp.js'

export class TagsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [READ]
   */
  getTags(queryParams?: {
    limit?: number
    offset?: number
    owner?: string | null
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<Response<ListTagsResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListTagsResp, 'ListTagsResp')
  }
  /**
   *  This endpoint will create a new tag. The tag name must be unique per namespace. It is safe to call this endpoint even if the tag already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [CREATE]
   */
  createTag(data: CreateTagReq): Promise<Response<CreateTagResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTagResp, 'CreateTagResp')
  }
  /**
   *  This endpoint will delete a tag by tagName in a specified namespace. If the tagName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [DELETE]
   */
  deleteTag_ByTagName(tagName: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/tags/{tagName}'
      .replace('{namespace}', this.namespace)
      .replace('{tagName}', tagName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
