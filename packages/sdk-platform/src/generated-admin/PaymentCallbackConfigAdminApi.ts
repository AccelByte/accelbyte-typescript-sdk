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
import { PaymentCallbackConfigInfo } from '../generated-definitions/PaymentCallbackConfigInfo.js'
import { PaymentCallbackConfigUpdate } from '../generated-definitions/PaymentCallbackConfigUpdate.js'
import { PaymentCallbackConfigAdmin$ } from './endpoints/PaymentCallbackConfigAdmin$.js'

export function PaymentCallbackConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigCallback(): Promise<PaymentCallbackConfigInfo> {
    const $ = new PaymentCallbackConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPaymentConfigCallback()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePaymentConfigCallback(data: PaymentCallbackConfigUpdate): Promise<PaymentCallbackConfigInfo> {
    const $ = new PaymentCallbackConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updatePaymentConfigCallback(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPaymentConfigCallback,
    updatePaymentConfigCallback
  }
}
