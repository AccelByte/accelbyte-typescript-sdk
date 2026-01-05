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
import { GlobalStatItemInfo } from '../../generated-definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from '../../generated-definitions/GlobalStatItemPagingSlicedResult.js'

export class GlobalStatisticAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List global statItems by pagination.&lt;br&gt;
   */
  getGlobalstatitems(queryParams?: {
    limit?: number
    offset?: number
    statCodes?: string | null
  }): Promise<Response<GlobalStatItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/globalstatitems'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GlobalStatItemPagingSlicedResult,
      'GlobalStatItemPagingSlicedResult'
    )
  }
  /**
   * Get global statItem by stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: global stat item&lt;/li&gt;&lt;/ul&gt;
   */
  getGlobalstatitem_ByStatCode(statCode: string): Promise<Response<GlobalStatItemInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/globalstatitems/{statCode}'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GlobalStatItemInfo, 'GlobalStatItemInfo')
  }
}
