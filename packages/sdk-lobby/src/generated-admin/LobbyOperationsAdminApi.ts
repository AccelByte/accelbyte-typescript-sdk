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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { PartyData } from '../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../generated-definitions/PartyPutCustomAttributesRequest.js'
import { LobbyOperationsAdmin$ } from './endpoints/LobbyOperationsAdmin$.js'

export function LobbyOperationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function updateAttributeParty_ByPartyId(partyId: string, data: PartyPutCustomAttributesRequest): Promise<AxiosResponse<PartyData>> {
    const $ = new LobbyOperationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAttributeParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateJoinParty_ByPartyId_ByUserId(partyId: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new LobbyOperationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateJoinParty_ByPartyId_ByUserId(partyId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Update party attributes in a namespace.
     */
    updateAttributeParty_ByPartyId,
    /**
     * Admin join a player into a party.
     */
    updateJoinParty_ByPartyId_ByUserId
  }
}
