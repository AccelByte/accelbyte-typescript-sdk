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
import { PaymentAccountArray } from '../generated-definitions/PaymentAccountArray.js'
import { PaymentAccount$ } from './endpoints/PaymentAccount$.js'

export function PaymentAccountApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment accounts.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment account list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentAccounts_ByUserId(userId: string): Promise<PaymentAccountArray> {
    const $ = new PaymentAccount$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPaymentAccounts_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Delete payment account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;:&lt;/li&gt;&lt;/ul&gt;
   */
  async function deletePaymentAccount_ByUserId_ByType_ById(userId: string, type: string, id: string): Promise<unknown> {
    const $ = new PaymentAccount$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deletePaymentAccount_ByUserId_ByType_ById(userId, type, id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPaymentAccounts_ByUserId,
    deletePaymentAccount_ByUserId_ByType_ById
  }
}
