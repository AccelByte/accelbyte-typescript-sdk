/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { DeleteBulkPartySessionRequest } from '../generated-definitions/DeleteBulkPartySessionRequest.js'
import { DeleteBulkPartySessionsApiResponse } from '../generated-definitions/DeleteBulkPartySessionsApiResponse.js'
import { PartyQueryResponse } from '../generated-definitions/PartyQueryResponse.js'
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'

export function PartyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getParties(queryParams?: {
    fromTime?: string | null
    isSoftDeleted?: string | null
    joinability?: string | null
    key?: string | null
    leaderID?: string | null
    limit?: number
    memberID?: string | null
    memberStatus?: string | null
    offset?: number
    order?: string | null
    orderBy?: string | null
    partyID?: string | null
    toTime?: string | null
    value?: string | null
  }): Promise<AxiosResponse<PartyQueryResponse>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePartyBulk(data: DeleteBulkPartySessionRequest): Promise<AxiosResponse<DeleteBulkPartySessionsApiResponse>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePartyBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNativeSync_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNativeSync_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query parties.
     */
    getParties,
    /**
     * Delete bulk parties.
     */
    deletePartyBulk,
    /**
     * Trigger user&#39;s active party session to native platform.
     */
    createNativeSync_ByUserId
  }
}
