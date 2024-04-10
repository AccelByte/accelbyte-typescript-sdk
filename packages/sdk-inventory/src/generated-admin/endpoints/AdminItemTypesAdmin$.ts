/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateItemTypeReq } from '../../generated-definitions/CreateItemTypeReq.js'
import { CreateItemTypeResp } from '../../generated-definitions/CreateItemTypeResp.js'
import { ListItemTypesResp } from '../../generated-definitions/ListItemTypesResp.js'

export class AdminItemTypesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [READ]
   */
  getItemtypes(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<IResponseWithSync<ListItemTypesResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/itemtypes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListItemTypesResp, 'ListItemTypesResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  This endpoint will create a new itemtype. The itemtype name must be unique per namespace. It is safe to call this endpoint even if the itemtype already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [CREATE]
   */
  createItemtype(data: CreateItemTypeReq): Promise<IResponse<CreateItemTypeResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/itemtypes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateItemTypeResp, 'CreateItemTypeResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  This endpoint will delete a item type by itemtypeName in a specified namespace. If the itemtypeName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [DELETE]
   */
  deleteItemtype_ByItemTypeName(itemTypeName: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/admin/namespaces/{namespace}/itemtypes/{itemTypeName}'
      .replace('{namespace}', this.namespace)
      .replace('{itemTypeName}', itemTypeName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
