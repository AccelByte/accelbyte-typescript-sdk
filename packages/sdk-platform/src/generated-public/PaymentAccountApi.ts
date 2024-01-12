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
import { PaymentAccount$ } from './endpoints/PaymentAccount$.js'
import { PaymentAccountArray } from '../generated-definitions/PaymentAccountArray.js'

export function PaymentAccountApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get payment accounts.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment account list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentAccounts_ByUserId(userId: string): Promise<PaymentAccountArray> {
    const $ = new PaymentAccount$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentAccounts_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete payment account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;:&lt;/li&gt;&lt;/ul&gt;
   */
  async function deletePaymentAccount_ByUserId_ByType_ById(userId: string, type: string, id: string): Promise<unknown> {
    const $ = new PaymentAccount$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deletePaymentAccount_ByUserId_ByType_ById(userId, type, id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPaymentAccounts_ByUserId,
    deletePaymentAccount_ByUserId_ByType_ById
  }
}
