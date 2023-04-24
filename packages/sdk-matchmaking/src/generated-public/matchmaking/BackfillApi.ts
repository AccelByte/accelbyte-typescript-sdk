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
import { BackFillAcceptRequest } from './definitions/BackFillAcceptRequest'
import { BackFillCreateRequest } from './definitions/BackFillCreateRequest'
import { BackFillRejectRequest } from './definitions/BackFillRejectRequest'
import { Backfill$ } from './endpoints/Backfill$'
import { BackfillCreateResponse } from './definitions/BackfillCreateResponse'
import { BackfillGetResponse } from './definitions/BackfillGetResponse'
import { BackfillProposalResponse } from './definitions/BackfillProposalResponse'

export function BackfillApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [CREATE] Required Scope: social Create backfill ticket
   */
  async function createBackfill(data: BackFillCreateRequest): Promise<BackfillCreateResponse> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBackfill(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [GET] Required Scope: social Get backfill proposal
   */
  async function getBackfillProposal(queryParams: { sessionID: string | null }): Promise<BackfillProposalResponse> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBackfillProposal(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [GET] Required Scope: social Get backfill ticket by ID
   */
  async function getBackfill_ByBackfillId(backfillID: string): Promise<BackfillGetResponse> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [DELETE] Required Scope: social Delete backfill ticket
   */
  async function deleteBackfill_ByBackfillId(backfillID: string): Promise<unknown> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [UPDATE] Required Scope: social Accept backfill proposal
   */
  async function updateProposalAccept_ByBackfillId(data: BackFillAcceptRequest): Promise<unknown> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProposalAccept_ByBackfillId(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:BACKFILL [UPDATE] Required Scope: social Reject backfill proposal
   */
  async function updateProposalReject_ByBackfillId(data: BackFillRejectRequest): Promise<unknown> {
    const $ = new Backfill$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProposalReject_ByBackfillId(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createBackfill,
    getBackfillProposal,
    getBackfill_ByBackfillId,
    deleteBackfill_ByBackfillId,
    updateProposalAccept_ByBackfillId,
    updateProposalReject_ByBackfillId
  }
}
