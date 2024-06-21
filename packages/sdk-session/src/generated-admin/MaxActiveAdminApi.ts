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
import { MemberActiveSession } from '../generated-definitions/MemberActiveSession.js'
import { RequestReconcileMaxActiveSession } from '../generated-definitions/RequestReconcileMaxActiveSession.js'
import { MaxActiveAdmin$ } from './endpoints/MaxActiveAdmin$.js'

export function MaxActiveAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  Reconcile Max Active Session.
   */
  async function createReconcile_ByName(name: string, data: RequestReconcileMaxActiveSession): Promise<unknown> {
    const $ = new MaxActiveAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createReconcile_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Get Member Active Session.
   */
  async function getMemberactivesession_ByName_ByUserId(name: string, userId: string): Promise<MemberActiveSession> {
    const $ = new MaxActiveAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMemberactivesession_ByName_ByUserId(name, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createReconcile_ByName,
    getMemberactivesession_ByName_ByUserId
  }
}
