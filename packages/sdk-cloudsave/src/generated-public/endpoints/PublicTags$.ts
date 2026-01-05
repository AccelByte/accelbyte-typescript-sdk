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
import { ListTagsResponse } from '../../generated-definitions/ListTagsResponse.js'

export class PublicTags$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * ## Description Retrieve list of available tags by namespace
   */
  getTags(queryParams?: { limit?: number; offset?: number }): Promise<Response<ListTagsResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListTagsResponse, 'ListTagsResponse')
  }
}
