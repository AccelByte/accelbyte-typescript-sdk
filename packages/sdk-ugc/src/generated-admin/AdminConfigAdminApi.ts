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
import { AdminConfigAdmin$ } from './endpoints/AdminConfigAdmin$.js'
import { PaginatedGetConfigsResponse } from '../generated-definitions/PaginatedGetConfigsResponse.js'
import { UpdateConfigRequest } from '../generated-definitions/UpdateConfigRequest.js'

export function AdminConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get config paginated
   */
  async function getConfigs(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetConfigsResponse> {
    const $ = new AdminConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigs(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will create a new config if the *key* doesn&#39;t exist. Allowed key value: - *contentReview*: *enabled*,*disabled*
   */
  async function patchConfig_ByKey(key: string, data: UpdateConfigRequest): Promise<unknown> {
    const $ = new AdminConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchConfig_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigs,
    patchConfig_ByKey
  }
}
