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
import { ListTagsResp } from '../../generated-definitions/ListTagsResp.js'

export class PublicTags$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination.
   */
  getTags(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<IResponse<ListTagsResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListTagsResp, 'ListTagsResp')
  }
}
