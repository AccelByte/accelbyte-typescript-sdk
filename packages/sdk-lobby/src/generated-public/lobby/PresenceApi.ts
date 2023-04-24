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
import { GetUsersPresenceResponse } from './definitions/GetUsersPresenceResponse'
import { Presence$ } from './endpoints/Presence$'

export function PresenceApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query users presence with given namespace and userIds.
   */
  async function getPresenceUsersPresence(queryParams: {
    userIds: string | null
    countOnly?: boolean | null
  }): Promise<GetUsersPresenceResponse> {
    const $ = new Presence$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPresenceUsersPresence(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPresenceUsersPresence
  }
}
