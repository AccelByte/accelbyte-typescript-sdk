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
import { SessionPlatformAdmin$ } from './endpoints/SessionPlatformAdmin$.js'
import { XblUserSessionRequest } from '../generated-definitions/XblUserSessionRequest.js'

export function SessionPlatformAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This API is used to register/update a session on xbox.
   */
  async function updateSessionXbl_ByUserId(userId: string, data: XblUserSessionRequest): Promise<unknown> {
    const $ = new SessionPlatformAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateSessionXbl_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateSessionXbl_ByUserId
  }
}
