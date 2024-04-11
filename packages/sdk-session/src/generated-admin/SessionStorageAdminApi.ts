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
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  Delete Session Storage By sessionID Session Storage feature only available for Gamesession
   */
  async function deleteStorage_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new SessionStorageAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteStorage_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read Session Storage by sessionID Session Storage feature only available for Gamesession
   */
  async function getStorage_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new SessionStorageAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStorage_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Read Session Storage by sessionID and userID Session Storage feature only available for Gamesession
   */
  async function getStorageUser_BySessionId_ByUserId(sessionId: string, userId: string): Promise<unknown> {
    const $ = new SessionStorageAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
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
