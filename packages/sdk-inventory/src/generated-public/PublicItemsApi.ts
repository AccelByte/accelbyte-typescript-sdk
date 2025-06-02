/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ConsumeItemReq } from '../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../generated-definitions/ItemResp.js'
import { ListItemResp } from '../generated-definitions/ListItemResp.js'
import { MoveItemsReq } from '../generated-definitions/MoveItemsReq.js'
import { MoveItemsResp } from '../generated-definitions/MoveItemsResp.js'
import { RemoveInventoryItemReq } from '../generated-definitions/RemoveInventoryItemReq.js'
import { UpdateItemReq } from '../generated-definitions/UpdateItemReq.js'
import { UpdateItemRespArray } from '../generated-definitions/UpdateItemRespArray.js'
import { PublicItems$ } from './endpoints/PublicItems$.js'

export function PublicItemsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function deleteItemMeUser_ByInventoryId(
    inventoryId: string,
    data: RemoveInventoryItemReq[]
  ): Promise<AxiosResponse<UpdateItemRespArray>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteItemMeUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getItemsMeUsers_ByInventoryId(
    inventoryId: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      sourceItemId?: string | null
      tags?: string | null
    }
  ): Promise<AxiosResponse<ListItemResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsMeUsers_ByInventoryId(inventoryId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateItemMeUser_ByInventoryId(inventoryId: string, data: UpdateItemReq[]): Promise<AxiosResponse<UpdateItemRespArray>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateItemMeUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConsumeUser_ByInventoryId(inventoryId: string, data: ConsumeItemReq): Promise<AxiosResponse<ItemResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConsumeUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createItemMovementUser_ByInventoryId(inventoryId: string, data: MoveItemsReq): Promise<AxiosResponse<MoveItemsResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItemMovementUser_ByInventoryId(inventoryId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(
    inventoryId: string,
    slotId: string,
    sourceItemId: string
  ): Promise<AxiosResponse<ItemResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(inventoryId, slotId, sourceItemId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Bulk remove user&#39;s own items.
     */
    deleteItemMeUser_ByInventoryId,
    /**
     *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.
     */
    getItemsMeUsers_ByInventoryId,
    /**
     *  Bulk Updating user&#39;s own items.
     */
    updateItemMeUser_ByInventoryId,
    /**
     *  Consume user&#39;s own item. Client should pass item ID in options if item type is OPTIONBOX
     */
    createConsumeUser_ByInventoryId,
    /**
     * Move items between inventories that is owned by the same user. For Ecommerce items, the *qty* is *useCount*. For example, moving 2 of an item&#39;s *qty* will move 2 of the entitlement&#39;s *useCount*.
     */
    createItemMovementUser_ByInventoryId,
    /**
     *  Getting an user&#39;s owned item info.
     */
    getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId
  }
}
