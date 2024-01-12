/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { SessionStorageAdmin$ } from './endpoints/SessionStorageAdmin$.js'

export function SessionStorageAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  Delete Session Storage.
   */
  async function deleteStorage_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new SessionStorageAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteStorage_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read Session Storage.
   */
  async function getStorage_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new SessionStorageAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStorage_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read Session Storage User.
   */
  async function getStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<unknown> {
    const $ = new SessionStorageAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStorageUser_BySessionId_ByUserId(sessionId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteStorage_BySessionId,
    getStorage_BySessionId,
    getStorageUser_BySessionId_ByUserId
  }
}
