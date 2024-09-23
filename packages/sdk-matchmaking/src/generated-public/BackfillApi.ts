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
import { BackFillAcceptRequest } from '../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../generated-definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../generated-definitions/GameSession.js'
import { Backfill$ } from './endpoints/Backfill$.js'

export function BackfillApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createBackfill(data: BackFillCreateRequest): Promise<AxiosResponse<BackfillCreateResponse>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBackfill(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBackfillProposal(queryParams: { sessionID: string | null }): Promise<AxiosResponse<BackfillProposalResponse>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBackfillProposal(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteBackfill_ByBackfillId(backfillID: string): Promise<AxiosResponse<unknown>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBackfill_ByBackfillId(backfillID: string): Promise<AxiosResponse<BackfillGetResponse>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProposalAccept_ByBackfillId(backfillID: string, data: BackFillAcceptRequest): Promise<AxiosResponse<GameSession>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProposalAccept_ByBackfillId(backfillID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateProposalReject_ByBackfillId(backfillID: string, data: BackFillRejectRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProposalReject_ByBackfillId(backfillID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Create backfill ticket.
     */
    createBackfill,
    /**
     * Get backfill proposal
     */
    getBackfillProposal,
    /**
     * Delete backfill ticket.
     */
    deleteBackfill_ByBackfillId,
    /**
     * Get backfill ticket by ID
     */
    getBackfill_ByBackfillId,
    /**
     *  Accept backfill proposal. Field partialAcceptTicketIDs can be used to accept specific tickets within a backfill proposal. If the ticketIDs are not mentioned in this field, those tickets will be rejected and reactivated for future proposals.
     */
    updateProposalAccept_ByBackfillId,
    /**
     * Reject backfill proposal
     */
    updateProposalReject_ByBackfillId
  }
}
