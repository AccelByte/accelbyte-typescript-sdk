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
import { PaginatedTagResponse } from '../../generated-definitions/PaginatedTagResponse.js'

export class Tags$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getTags(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
  }): Promise<IResponse<PaginatedTagResponse>> {
    const params = { limit: 10, sortBy: 'name:asc', ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaginatedTagResponse, 'PaginatedTagResponse')
  }
}
