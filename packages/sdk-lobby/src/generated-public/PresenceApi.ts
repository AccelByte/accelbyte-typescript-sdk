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
import { GetUsersPresenceResponse } from '../generated-definitions/GetUsersPresenceResponse.js'
import { RequestUserPresence } from '../generated-definitions/RequestUserPresence.js'
import { Presence$ } from './endpoints/Presence$.js'

export function PresenceApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Query users presence with given namespace and userIds.
   */
  async function getPresenceUsersPresence(queryParams: {
    userIds: string | null
    countOnly?: boolean | null
  }): Promise<GetUsersPresenceResponse> {
    const $ = new Presence$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPresenceUsersPresence(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query users presence with given namespace and userIds.
   */
  async function createPresenceUserPresence(
    data: RequestUserPresence,
    queryParams?: { countOnly?: boolean | null }
  ): Promise<GetUsersPresenceResponse> {
    const $ = new Presence$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPresenceUserPresence(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPresenceUsersPresence,
    createPresenceUserPresence
  }
}
