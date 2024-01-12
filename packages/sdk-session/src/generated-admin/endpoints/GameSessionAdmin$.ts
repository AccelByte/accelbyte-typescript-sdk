/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { DeleteBulkGameSessionRequest } from '../../generated-definitions/DeleteBulkGameSessionRequest.js'
import { DeleteBulkGameSessionsApiResponse } from '../../generated-definitions/DeleteBulkGameSessionsApiResponse.js'
import { GameSessionQueryResponse } from '../../generated-definitions/GameSessionQueryResponse.js'
import { SetDsReadyRequest } from '../../generated-definitions/SetDsReadyRequest.js'
import { UpdateGameSessionMemberStatusResponse } from '../../generated-definitions/UpdateGameSessionMemberStatusResponse.js'

export class GameSessionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get all game sessions.
   */
  getGamesessions(queryParams?: {
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
  }): Promise<IResponseWithSync<GameSessionQueryResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/gamesessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameSessionQueryResponse, 'GameSessionQueryResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query game sessions by admin. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS. query parameter \&#34;availability\&#34; to filter sessions&#39; availability: all: return all sessions regardless it&#39;s full full: only return active sessions default behavior (unset or else): return only available sessions (not full)
   */
  createGamesession(): Promise<IResponse<GameSessionQueryResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/gamesessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, GameSessionQueryResponse, 'GameSessionQueryResponse')
  }

  /**
   * Delete bulk game sessions.
   */
  deleteGamesessionBulk(data: DeleteBulkGameSessionRequest): Promise<IResponse<DeleteBulkGameSessionsApiResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/gamesessions/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.responseType(() => resultPromise, DeleteBulkGameSessionsApiResponse, 'DeleteBulkGameSessionsApiResponse')
  }

  /**
   * When the session template has ds_manual_set_ready as true. Then the DS need to calls this end point in order to notify game client if the DS is ready to accept any game client connection.
   */
  updateD_BySessionId(sessionId: string, data: SetDsReadyRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/gamesessions/{sessionId}/ds'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update a game session member status.
   */
  updateStatu_BySessionId_ByMemberId_ByStatusType(
    sessionId: string,
    memberId: string,
    statusType: string
  ): Promise<IResponse<UpdateGameSessionMemberStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/gamesessions/{sessionId}/members/{memberId}/status/{statusType}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
      .replace('{memberId}', memberId)
      .replace('{statusType}', statusType)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, UpdateGameSessionMemberStatusResponse, 'UpdateGameSessionMemberStatusResponse')
  }
}
