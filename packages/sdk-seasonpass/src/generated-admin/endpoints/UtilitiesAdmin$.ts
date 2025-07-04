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
import { ItemReferenceInfo } from '../../generated-definitions/ItemReferenceInfo.js'

export class UtilitiesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get season pass ecommerce item references.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item references data&lt;/li&gt;&lt;/ul&gt;
   */
  getSeasonsItemReferences(queryParams: { itemId: string | null }): Promise<Response<ItemReferenceInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/seasonpass/admin/namespaces/{namespace}/seasons/item/references'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemReferenceInfo, 'ItemReferenceInfo')
  }
}
