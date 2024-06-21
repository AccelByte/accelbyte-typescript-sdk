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
import { ListItemTypesResp } from '../generated-definitions/ListItemTypesResp.js'
import { PublicItemTypes$ } from './endpoints/PublicItemTypes$.js'

export function PublicItemTypesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  This endpoint will list all item types in a namespace. The response body will be in the form of standard pagination.
   */
  async function getItemtypes(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<ListItemTypesResp> {
    const $ = new PublicItemTypes$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getItemtypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getItemtypes
  }
}
