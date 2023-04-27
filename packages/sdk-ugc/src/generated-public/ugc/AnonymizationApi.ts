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
import { Anonymization$ } from './endpoints/Anonymization$.js'

export function AnonymizationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [DELETE]
   */
  async function deleteGroup_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGroup_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}" [DELETE]
   */
  async function deleteState_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteState_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CHANNEL [DELETE]</b>
   */
  async function deleteChannel_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteChannel_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]</b>.
   */
  async function deleteContent_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteContent_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteGroup_ByUserId,
    deleteState_ByUserId,
    deleteChannel_ByUserId,
    deleteContent_ByUserId
  }
}
