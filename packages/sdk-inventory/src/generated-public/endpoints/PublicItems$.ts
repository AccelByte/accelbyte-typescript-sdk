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
import { ConsumeItemReq } from '../../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../../generated-definitions/ItemResp.js'
import { ListItemResp } from '../../generated-definitions/ListItemResp.js'
import { MoveItemsReq } from '../../generated-definitions/MoveItemsReq.js'
import { MoveItemsResp } from '../../generated-definitions/MoveItemsResp.js'
import { RemoveInventoryItemReq } from '../../generated-definitions/RemoveInventoryItemReq.js'
import { UpdateItemReq } from '../../generated-definitions/UpdateItemReq.js'
import { UpdateItemRespArray } from '../../generated-definitions/UpdateItemRespArray.js'

export class PublicItems$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   *  Bulk remove user&#39;s own items.
   */
  deleteItemMeUser_ByInventoryId(inventoryId: string, data: RemoveInventoryItemReq[]): Promise<IResponse<UpdateItemRespArray>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.
   */
  getItemsMeUsers_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      qtyGte?: number
      sortBy?:
        | 'createdAt'
        | 'createdAt:asc'
        | 'createdAt:desc'
        | 'qty'
        | 'qty:asc'
        | 'qty:desc'
        | 'updatedAt'
        | 'updatedAt:asc'
        | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<IResponseWithSync<ListItemResp>> {
    const params = { limit: 25, qtyGte: 1, sortBy: 'createdAt', ...queryParams } as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListItemResp, 'ListItemResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Bulk Updating user&#39;s own items.
   */
  updateItemMeUser_ByInventoryId(inventoryId: string, data: UpdateItemReq[]): Promise<IResponse<UpdateItemRespArray>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Consume user&#39;s own item.
   */
  createConsumeUser_ByInventoryId(inventoryId: string, data: ConsumeItemReq): Promise<IResponse<ItemResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/consume'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ItemResp, 'ItemResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Move items between inventories that is owned by the same user.
   */
  createItemMovementUser_ByInventoryId(inventoryId: string, data: MoveItemsReq): Promise<IResponse<MoveItemsResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items/movement'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MoveItemsResp, 'MoveItemsResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Getting an user&#39;s owned item info.
   */
  getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<IResponseWithSync<ItemResp>> {
    const params = {} as SDKRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/slots/{slotId}/sourceItems/{sourceItemId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
      .replace('{slotId}', slotId)
      .replace('{sourceItemId}', sourceItemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ItemResp, 'ItemResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
