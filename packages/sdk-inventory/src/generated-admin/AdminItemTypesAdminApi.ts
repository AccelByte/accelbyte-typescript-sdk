/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminItemTypesAdmin$ } from './endpoints/AdminItemTypesAdmin$.js'
import { CreateItemTypeReq } from '../generated-definitions/CreateItemTypeReq.js'
import { CreateItemTypeResp } from '../generated-definitions/CreateItemTypeResp.js'
import { ListItemTypesResp } from '../generated-definitions/ListItemTypesResp.js'

export function AdminItemTypesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [READ]
   */
  async function getItemtypes(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<ListItemTypesResp> {
    const $ = new AdminItemTypesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getItemtypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  This endpoint will create a new itemtype. The itemtype name must be unique per namespace. It is safe to call this endpoint even if the itemtype already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [CREATE]
   */
  async function createItemtype(data: CreateItemTypeReq): Promise<CreateItemTypeResp> {
    const $ = new AdminItemTypesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createItemtype(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  This endpoint will delete a item type by itemtypeName in a specified namespace. If the itemtypeName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [DELETE]
   */
  async function deleteItemtype_ByItemTypeName(itemTypeName: string): Promise<unknown> {
    const $ = new AdminItemTypesAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteItemtype_ByItemTypeName(itemTypeName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getItemtypes,
    createItemtype,
    deleteItemtype_ByItemTypeName
  }
}
