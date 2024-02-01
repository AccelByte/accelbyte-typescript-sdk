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
import { Anonymization$ } from './endpoints/Anonymization$.js'

export function AnonymizationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [DELETE]
   */
  async function deleteGroup_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteGroup_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}&#34; [DELETE]
   */
  async function deleteState_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteState_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CHANNEL [DELETE]&lt;/b&gt;
   */
  async function deleteChannel_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteChannel_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContent_ByUserId(userId: string): Promise<unknown> {
    const $ = new Anonymization$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
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
