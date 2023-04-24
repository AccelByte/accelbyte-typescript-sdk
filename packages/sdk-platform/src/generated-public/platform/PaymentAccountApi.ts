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
import { PaymentAccount$ } from './endpoints/PaymentAccount$'
import { PaymentAccountArray } from './definitions/PaymentAccountArray'

export function PaymentAccountApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get payment accounts.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=2 (READ)</li><li><i>Returns</i>: Payment account list</li></ul>
   */
  async function getPaymentAccounts_ByUserId(userId: string): Promise<PaymentAccountArray> {
    const $ = new PaymentAccount$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentAccounts_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete payment account.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=8 (DELETE)</li><li><i>Returns</i>:</li></ul>
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
