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
import { SessionStorage$ } from './endpoints/SessionStorage$.js'

export function SessionStorageApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  Update Insert Session Storage Leader. only Leader can update or insert user session storage data Leader. can store generic json example json can store : { &#34;leader&#34;: { &#34;leader&#34;: 1 }, &#34;data&#34;: 123 }
   */
  async function patchStorageLeader_BySessionId(sessionId: string, data: any): Promise<unknown> {
    const $ = new SessionStorage$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchStorageLeader_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Update Insert Session Storage User. user can only update or insert user session storage data itself. can store generic json example json can store : { &#34;storage&#34;: { &#34;storage&#34;: 1 }, &#34;data&#34;: 123 }
   */
  async function patchStorageUser_BySessionId_ByUserId(sessionId: string, userId: string, data: any): Promise<unknown> {
    const $ = new SessionStorage$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchStorageUser_BySessionId_ByUserId(sessionId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchStorageLeader_BySessionId,
    patchStorageUser_BySessionId_ByUserId
  }
}
