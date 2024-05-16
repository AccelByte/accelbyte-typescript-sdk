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
import { AnonymizationAdmin$ } from './endpoints/AnonymizationAdmin$.js'

export function AnonymizationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Anonymize user profile.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11501&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteAnonymizationProfile_ByUserId(userId: string): Promise<unknown> {
    const $ = new AnonymizationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteAnonymizationProfile_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteAnonymizationProfile_ByUserId
  }
}
