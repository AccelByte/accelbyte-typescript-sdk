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
import { DataRetrieval$ } from './endpoints/DataRetrieval$.js'
import { DataRetrievalResponse } from './definitions/DataRetrievalResponse.js'
import { UserDataUrl } from './definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from './definitions/UserPersonalDataResponse.js'

export function DataRetrievalApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Requires valid user access token</p>
   */
  async function getRequests_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<UserPersonalDataResponse> {
    const $ = new DataRetrieval$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRequests_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user access token</p>
   */
  async function postRequest_ByUserId(userId: string, data: { password: string | null }): Promise<DataRetrievalResponse> {
    const $ = new DataRetrieval$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postRequest_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user access token</p>
   */
  async function deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<unknown> {
    const $ = new DataRetrieval$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRequest_ByUserId_ByRequestDate(userId, requestDate)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user access token</p>
   */
  async function postGenerate_ByUserId_ByRequestDate(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<UserDataUrl> {
    const $ = new DataRetrieval$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postGenerate_ByUserId_ByRequestDate(userId, requestDate, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRequests_ByUserId,
    postRequest_ByUserId,
    deleteRequest_ByUserId_ByRequestDate,
    postGenerate_ByUserId_ByRequestDate
  }
}
