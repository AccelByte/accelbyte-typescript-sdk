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
import { ListInventoryResp } from '../../generated-definitions/ListInventoryResp.js'

export class PublicInventories$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  Listing all my inventories in a namespace. The response body will be in the form of standard pagination.
   */
  getUsersMeInventories(queryParams?: {
    inventoryConfigurationCode?: string | null
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
  }): Promise<Response<ListInventoryResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListInventoryResp, 'ListInventoryResp')
  }
}
