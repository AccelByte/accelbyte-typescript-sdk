/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { PaymentCallbackConfigInfo } from '../../generated-definitions/PaymentCallbackConfigInfo.js'
import { PaymentCallbackConfigUpdate } from '../../generated-definitions/PaymentCallbackConfigUpdate.js'

export class PaymentCallbackConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigCallback(): Promise<IResponse<PaymentCallbackConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/config/callback'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentCallbackConfigInfo,
      'PaymentCallbackConfigInfo'
    )
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
   */
  updatePaymentConfigCallback(data: PaymentCallbackConfigUpdate): Promise<IResponse<PaymentCallbackConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/config/callback'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentCallbackConfigInfo,
      'PaymentCallbackConfigInfo'
    )
  }
}
