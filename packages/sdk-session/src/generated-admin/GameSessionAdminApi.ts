/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { DeleteBulkGameSessionRequest } from '../generated-definitions/DeleteBulkGameSessionRequest.js'
import { DeleteBulkGameSessionsApiResponse } from '../generated-definitions/DeleteBulkGameSessionsApiResponse.js'
import { GameSessionQueryResponse } from '../generated-definitions/GameSessionQueryResponse.js'
import { SetDsReadyRequest } from '../generated-definitions/SetDsReadyRequest.js'
import { UpdateGameSessionMemberStatusResponse } from '../generated-definitions/UpdateGameSessionMemberStatusResponse.js'
import { UpdateGamesessionDsInformationRequest } from '../generated-definitions/UpdateGamesessionDsInformationRequest.js'
import { GameSessionAdmin$ } from './endpoints/GameSessionAdmin$.js'

export function GameSessionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

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
  }): Promise<AxiosResponse<GameSessionQueryResponse>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchGamesession(): Promise<AxiosResponse<GameSessionQueryResponse>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchGamesession()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGamesessionBulk(data: DeleteBulkGameSessionRequest): Promise<AxiosResponse<DeleteBulkGameSessionsApiResponse>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGamesessionBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateD_BySessionId(sessionId: string, data: SetDsReadyRequest): Promise<AxiosResponse<unknown>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateD_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDsinformation_BySessionId(
    sessionId: string,
    data: UpdateGamesessionDsInformationRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDsinformation_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteKick_BySessionId_ByMemberId(sessionId: string, memberId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteKick_BySessionId_ByMemberId(sessionId, memberId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatu_BySessionId_ByMemberId_ByStatusType(
    sessionId: string,
    memberId: string,
    statusType: string
  ): Promise<AxiosResponse<UpdateGameSessionMemberStatusResponse>> {
    const $ = new GameSessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatu_BySessionId_ByMemberId_ByStatusType(sessionId, memberId, statusType)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get all game sessions.
     */
    getGamesessions,
    /**
     * Query game sessions by admin. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC. query parameter \&#34;availability\&#34; to filter sessions&#39; availability: all: return all sessions regardless it&#39;s full full: only return active sessions default behavior (unset or else): return only available sessions (not full)
     */
    fetchGamesession,
    /**
     * Delete bulk game sessions.
     */
    deleteGamesessionBulk,
    /**
     * When the session template has ds_manual_set_ready as true. Then the DS need to calls this end point in order to notify game client if the DS is ready to accept any game client connection.
     */
    updateD_BySessionId,
    /**
     * This API is used for create custom DS asynchronously flow and is expected to be called after the service receives response from the Async RPC.
     */
    updateDsinformation_BySessionId,
    /**
     * Kick member from a game session.
     */
    deleteKick_BySessionId_ByMemberId,
    /**
     * Update a game session member status.
     */
    updateStatu_BySessionId_ByMemberId_ByStatusType
  }
}
