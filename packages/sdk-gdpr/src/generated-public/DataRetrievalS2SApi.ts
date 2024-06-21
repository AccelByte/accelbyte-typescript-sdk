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
import { ListFinishedDataRequests } from '../generated-definitions/ListFinishedDataRequests.js'
import { S2SDataRetrievalResponse } from '../generated-definitions/S2SDataRetrievalResponse.js'
import { S2SUserDataUrl } from '../generated-definitions/S2SUserDataUrl.js'
import { DataRetrievalS2S$ } from './endpoints/DataRetrievalS2S$.js'

export function DataRetrievalS2SApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Scope: account Get list of finished personal data requests based on the finished time period. Unfinished personal data requests will not appear here, i.e. have Status **Pending**, **In-Progress** or **Canceled**. --- ## This API for S2S integration purpose only
   */
  async function getS2SRequestsFinished(queryParams: { end: string | null; start: string | null }): Promise<ListFinishedDataRequests> {
    const $ = new DataRetrievalS2S$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getS2SRequestsFinished(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Scope: account Submit user personal data retrieval request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification.
   */
  async function createRequestS2_ByUserId(userId: string): Promise<S2SDataRetrievalResponse> {
    const $ = new DataRetrievalS2S$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createRequestS2_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Scope: account Generate personal data download url. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only
   */
  async function createGenerateS2_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<S2SUserDataUrl> {
    const $ = new DataRetrievalS2S$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGenerateS2_ByUserId_ByRequestDate(userId, requestDate)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getS2SRequestsFinished,
    createRequestS2_ByUserId,
    createGenerateS2_ByUserId_ByRequestDate
  }
}
