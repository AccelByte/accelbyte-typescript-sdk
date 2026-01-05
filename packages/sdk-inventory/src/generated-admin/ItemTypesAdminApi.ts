/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { CreateItemTypeReq } from '../generated-definitions/CreateItemTypeReq.js'
import { CreateItemTypeResp } from '../generated-definitions/CreateItemTypeResp.js'
import { ListItemTypesResp } from '../generated-definitions/ListItemTypesResp.js'
import { ItemTypesAdmin$ } from './endpoints/ItemTypesAdmin$.js'

export function ItemTypesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getItemtypes(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<AxiosResponse<ListItemTypesResp>> {
    const $ = new ItemTypesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemtypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createItemtype(data: CreateItemTypeReq): Promise<AxiosResponse<CreateItemTypeResp>> {
    const $ = new ItemTypesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItemtype(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteItemtype_ByItemTypeName(itemTypeName: string): Promise<AxiosResponse<unknown>> {
    const $ = new ItemTypesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteItemtype_ByItemTypeName(itemTypeName)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [READ]
     */
    getItemtypes,
    /**
     *  This endpoint will create a new itemtype. The itemtype name must be unique per namespace. It is safe to call this endpoint even if the itemtype already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [CREATE]
     */
    createItemtype,
    /**
     *  This endpoint will delete a item type by itemtypeName in a specified namespace. If the itemtypeName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:ITEMTYPE [DELETE]
     */
    deleteItemtype_ByItemTypeName
  }
}
