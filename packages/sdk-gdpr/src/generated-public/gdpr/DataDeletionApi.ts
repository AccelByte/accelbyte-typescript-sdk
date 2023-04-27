/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { DataDeletion$ } from './endpoints/DataDeletion$.js'
import { DeletionStatus } from './definitions/DeletionStatus.js'
import { RequestDeleteResponse } from './definitions/RequestDeleteResponse.js'

export function DataDeletionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Requires valid user access token and password
   */
  async function postDeletion_ByUserId(userId: string, data: { password: string | null }): Promise<RequestDeleteResponse> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postDeletion_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user access token</p>
   */
  async function deleteDeletion_ByUserId(userId: string): Promise<unknown> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user access token</p>
   */
  async function getDeletionsStatus_ByUserId(userId: string): Promise<DeletionStatus> {
    const $ = new DataDeletion$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDeletionsStatus_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    postDeletion_ByUserId,
    deleteDeletion_ByUserId,
    getDeletionsStatus_ByUserId
  }
}
