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
import { ListFinishedDataDeletion } from '../generated-definitions/ListFinishedDataDeletion.js'
import { S2SRequestDeleteResponse } from '../generated-definitions/S2SRequestDeleteResponse.js'
import { DataDeletionS2S$ } from './endpoints/DataDeletionS2S$.js'

export function DataDeletionS2SApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Scope: account Get list of finished account deletion requests based on the finished time period. Unfinished deletion requests will not appear here, i.e. have Status **Request**, **Pending** or **In-Progress**. **Anonymize userId for success deletion:** For success deletion requests, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only
   */
  async function getS2SDeletionsFinished(queryParams: { end: string | null; start: string | null }): Promise<ListFinishedDataDeletion> {
    const $ = new DataDeletionS2S$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getS2SDeletionsFinished(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Scope: account Submit user&#39;s account deletion request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification. 2. This API will **perform account deletion immediately** without GDPR grace period (i.e. 28 days grace period).
   */
  async function createDeletionS2_ByUserId(userId: string): Promise<S2SRequestDeleteResponse> {
    const $ = new DataDeletionS2S$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createDeletionS2_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getS2SDeletionsFinished,
    createDeletionS2_ByUserId
  }
}
