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
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  Bulk remove user&#39;s own items.
   */
  deleteItemMeUser_ByInventoryId(inventoryId: string, data: RemoveInventoryItemReq[]): Promise<Response<UpdateItemRespArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
  }
  /**
   *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.
   */
  getItemsMeUsers_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<Response<ListItemResp>> {
    const params = { limit: 25, sortBy: 'createdAt', ...queryParams } as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListItemResp, 'ListItemResp')
  }
  /**
   *  Bulk Updating user&#39;s own items.
   */
  updateItemMeUser_ByInventoryId(inventoryId: string, data: UpdateItemReq[]): Promise<Response<UpdateItemRespArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateItemRespArray, 'UpdateItemRespArray')
  }
  /**
   *  Consume user&#39;s own item. Client should pass item ID in options if item type is OPTIONBOX
   */
  createConsumeUser_ByInventoryId(inventoryId: string, data: ConsumeItemReq): Promise<Response<ItemResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/consume'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
  /**
   * Move items between inventories that is owned by the same user. For Ecommerce items, the *qty* is *useCount*. For example, moving 2 of an item&#39;s *qty* will move 2 of the entitlement&#39;s *useCount*.
   */
  createItemMovementUser_ByInventoryId(inventoryId: string, data: MoveItemsReq): Promise<Response<MoveItemsResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items/movement'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MoveItemsResp, 'MoveItemsResp')
  }
  /**
   *  Getting an user&#39;s owned item info.
   */
  getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<Response<ItemResp>> {
    const params = {} as AxiosRequestConfig
    const url = '/inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/slots/{slotId}/sourceItems/{sourceItemId}'
      .replace('{namespace}', this.namespace)
      .replace('{inventoryId}', inventoryId)
      .replace('{slotId}', slotId)
      .replace('{sourceItemId}', sourceItemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemResp, 'ItemResp')
  }
}
