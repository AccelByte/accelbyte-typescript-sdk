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
import { z } from 'zod'
import { CreateItemTypeReq } from '../../generated-definitions/CreateItemTypeReq.js'
import { CreateItemTypeResp } from '../../generated-definitions/CreateItemTypeResp.js'
import { ListItemTypesResp } from '../../generated-definitions/ListItemTypesResp.js'

export class ItemTypesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [READ]
   */
  getItemtypes(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<Response<ListItemTypesResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/itemtypes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListItemTypesResp, 'ListItemTypesResp')
  }
  /**
   *  This endpoint will create a new itemtype. The itemtype name must be unique per namespace. It is safe to call this endpoint even if the itemtype already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [CREATE]
   */
  createItemtype(data: CreateItemTypeReq): Promise<Response<CreateItemTypeResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/itemtypes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateItemTypeResp, 'CreateItemTypeResp')
  }
  /**
   *  This endpoint will delete a item type by itemtypeName in a specified namespace. If the itemtypeName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [DELETE]
   */
  deleteItemtype_ByItemTypeName(itemTypeName: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/itemtypes/{itemTypeName}'
      .replace('{namespace}', this.namespace)
      .replace('{itemTypeName}', itemTypeName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
