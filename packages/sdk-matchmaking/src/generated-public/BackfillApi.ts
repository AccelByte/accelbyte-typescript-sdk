/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BackFillAcceptRequest } from '../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../generated-definitions/BackFillRejectRequest.js'
import { Backfill$ } from './endpoints/Backfill$.js'
import { BackfillCreateResponse } from '../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../generated-definitions/GameSession.js'

export function BackfillApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Create backfill ticket.
   */
  async function createBackfill(data: BackFillCreateRequest): Promise<BackfillCreateResponse> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBackfill(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get backfill proposal
   */
  async function getBackfillProposal(queryParams: { sessionID: string | null }): Promise<BackfillProposalResponse> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBackfillProposal(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete backfill ticket.
   */
  async function deleteBackfill_ByBackfillId(backfillID: string): Promise<unknown> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get backfill ticket by ID
   */
  async function getBackfill_ByBackfillId(backfillID: string): Promise<BackfillGetResponse> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Accept backfill proposal.
   */
  async function updateProposalAccept_ByBackfillId(backfillID: string, data: BackFillAcceptRequest): Promise<GameSession> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProposalAccept_ByBackfillId(backfillID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reject backfill proposal
   */
  async function updateProposalReject_ByBackfillId(backfillID: string, data: BackFillRejectRequest): Promise<unknown> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProposalReject_ByBackfillId(backfillID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createBackfill,
    getBackfillProposal,
    deleteBackfill_ByBackfillId,
    getBackfill_ByBackfillId,
    updateProposalAccept_ByBackfillId,
    updateProposalReject_ByBackfillId
  }
}
