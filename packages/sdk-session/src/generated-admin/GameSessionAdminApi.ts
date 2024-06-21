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
import { DeleteBulkGameSessionRequest } from '../generated-definitions/DeleteBulkGameSessionRequest.js'
import { DeleteBulkGameSessionsApiResponse } from '../generated-definitions/DeleteBulkGameSessionsApiResponse.js'
import { GameSessionQueryResponse } from '../generated-definitions/GameSessionQueryResponse.js'
import { SetDsReadyRequest } from '../generated-definitions/SetDsReadyRequest.js'
import { UpdateGameSessionMemberStatusResponse } from '../generated-definitions/UpdateGameSessionMemberStatusResponse.js'
import { GameSessionAdmin$ } from './endpoints/GameSessionAdmin$.js'

export function GameSessionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get all game sessions.
   */
  async function getGamesessions(queryParams?: {
    configurationName?: string | null
    dsPodName?: string | null
    fromTime?: string | null
    gameMode?: string | null
    isPersistent?: string | null
    isSoftDeleted?: string | null
    joinability?: string | null
    limit?: number
    matchPool?: string | null
    memberID?: string | null
    offset?: number
    order?: string | null
    orderBy?: string | null
    sessionID?: string | null
    status?: string | null
    statusV2?: string | null
    toTime?: string | null
  }): Promise<GameSessionQueryResponse> {
    const $ = new GameSessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query game sessions by admin. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS. query parameter \&#34;availability\&#34; to filter sessions&#39; availability: all: return all sessions regardless it&#39;s full full: only return active sessions default behavior (unset or else): return only available sessions (not full)
   */
  async function createGamesession(): Promise<GameSessionQueryResponse> {
    const $ = new GameSessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGamesession()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete bulk game sessions.
   */
  async function deleteGamesessionBulk(data: DeleteBulkGameSessionRequest): Promise<DeleteBulkGameSessionsApiResponse> {
    const $ = new GameSessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGamesessionBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * When the session template has ds_manual_set_ready as true. Then the DS need to calls this end point in order to notify game client if the DS is ready to accept any game client connection.
   */
  async function updateD_BySessionId(sessionId: string, data: SetDsReadyRequest): Promise<unknown> {
    const $ = new GameSessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateD_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a game session member status.
   */
  async function updateStatu_BySessionId_ByMemberId_ByStatusType(
    sessionId: string,
    memberId: string,
    statusType: string
  ): Promise<UpdateGameSessionMemberStatusResponse> {
    const $ = new GameSessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateStatu_BySessionId_ByMemberId_ByStatusType(sessionId, memberId, statusType)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGamesessions,
    createGamesession,
    deleteGamesessionBulk,
    updateD_BySessionId,
    updateStatu_BySessionId_ByMemberId_ByStatusType
  }
}
