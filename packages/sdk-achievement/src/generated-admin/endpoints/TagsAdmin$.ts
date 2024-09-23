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
import { PaginatedTagResponse } from '../../generated-definitions/PaginatedTagResponse.js'

export class TagsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getTags(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
  }): Promise<Response<PaginatedTagResponse>> {
    const params = { limit: 10, sortBy: 'name:asc', ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaginatedTagResponse, 'PaginatedTagResponse')
  }
}
