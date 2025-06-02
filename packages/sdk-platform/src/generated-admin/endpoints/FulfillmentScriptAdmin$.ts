/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { FulfillmentScriptCreate } from '../../generated-definitions/FulfillmentScriptCreate.js'
import { FulfillmentScriptInfo } from '../../generated-definitions/FulfillmentScriptInfo.js'
import { FulfillmentScriptInfoArray } from '../../generated-definitions/FulfillmentScriptInfoArray.js'
import { FulfillmentScriptUpdate } from '../../generated-definitions/FulfillmentScriptUpdate.js'

export class FulfillmentScriptAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;List all fulfillment scripts.
   */
  getFulfillmentScripts(): Promise<Response<FulfillmentScriptInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/fulfillment/scripts'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FulfillmentScriptInfoArray,
      'FulfillmentScriptInfoArray'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete fulfillment script.
   */
  deleteFulfillmentScript_ById(id: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/fulfillment/scripts/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get fulfillment script by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get fulfillment script&lt;/li&gt;&lt;/ul&gt;
   */
  getFulfillmentScript_ById(id: string): Promise<Response<FulfillmentScriptInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/fulfillment/scripts/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentScriptInfo, 'FulfillmentScriptInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update fulfillment script.
   */
  patchFulfillmentScript_ById(id: string, data: FulfillmentScriptUpdate): Promise<Response<FulfillmentScriptInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/fulfillment/scripts/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentScriptInfo, 'FulfillmentScriptInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Create fulfillment script.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;Fulfillment scripts are used for adding custom fulfillment logic based on &lt;b&gt;ITEM_TYPE&lt;/b&gt;: [MEDIA,INGAMEITEM] for now, and the custom scripts only cover grantDays.&lt;br&gt;Example for grantDays: &lt;br&gt;&lt;code&gt;order &amp;&amp; ((order.currency &amp;&amp; order.currency.currencyCode) == &#39;LP&#39; || order.isFree) ? 30 : -1&lt;/code&gt;&lt;br&gt;
   */
  createFulfillmentScript_ById(id: string, data: FulfillmentScriptCreate): Promise<Response<FulfillmentScriptInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/fulfillment/scripts/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FulfillmentScriptInfo, 'FulfillmentScriptInfo')
  }
}
