/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AppendTeamGameSessionRequest } from '../definitions/AppendTeamGameSessionRequest.js'
import { CreateGameSessionRequest } from '../definitions/CreateGameSessionRequest.js'
import { GameSessionQueryResponse } from '../definitions/GameSessionQueryResponse.js'
import { GameSessionResponse } from '../definitions/GameSessionResponse.js'
import { GameSessionResponseArray } from '../definitions/GameSessionResponseArray.js'
import { MapStringInterface } from '../definitions/MapStringInterface.js'
import { SessionInviteRequest } from '../definitions/SessionInviteRequest.js'
import { UpdateGameSessionBackfillRequest } from '../definitions/UpdateGameSessionBackfillRequest.js'
import { UpdateGameSessionRequest } from '../definitions/UpdateGameSessionRequest.js'

export class GameSession$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Create a game session. Session configuration name is mandatory, this API will refer following values from the session template if they're not provided in the request: - type - joinability - minPlayers - maxPlayers - inviteTimeout - inactiveTimeout When the session type is a DS, a DS creation request will be sent to DSMC if number of active players reaches session's minPlayers. Active user is a user who present within the session, has status CONNECTED/JOINED. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  createGamesession(data: CreateGameSessionRequest): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }

  /**
   * Query game sessions. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  createGamesession_ByNS(data: MapStringInterface): Promise<IResponse<GameSessionQueryResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GameSessionQueryResponse, 'GameSessionQueryResponse')
  }

  /**
   * Query user's game sessions. By default, API will return a list of user's active game sessions (INVITED,JOINED,CONNECTED). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  getUsersMeGamesessions(queryParams?: {
    status?: string | null
    orderBy?: string | null
    order?: string | null
  }): Promise<IResponseWithSync<GameSessionResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/gamesessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameSessionResponseArray, 'GameSessionResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get game session detail. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  getGamesession_BySessionId(sessionId: string): Promise<IResponseWithSync<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates a game session, this endpoint will override stored gamesession data. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} To update DS attributes (clientVersion, deployment, requestedRegions) it will only be applied only as long as no DS has been requested, otherwise ignored.
   */
  updateGamesession_BySessionId(sessionId: string, data: UpdateGameSessionRequest): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }

  /**
   * Delete a game session.
   */
  deleteGamesession_BySessionId(sessionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update specified fields from game session data.
   */
  patchGamesession_BySessionId(sessionId: string, data: UpdateGameSessionRequest): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }

  /**
   * Join a game session.
   */
  createJoin_BySessionId(sessionId: string): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/join'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }

  /**
   * Leave a game session.
   */
  deleteLeave_BySessionId(sessionId: string): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/leave'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }

  /**
   * Append new member or team to session
   */
  createTeam_BySessionId(sessionId: string, data: AppendTeamGameSessionRequest): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/teams'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }

  /**
   * Get game session detail by podname. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn't reached session's minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  getGamesessionServer_ByPodName(podName: string): Promise<IResponseWithSync<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/servers/{podName}'
      .replace('{namespace}', this.namespace)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Invite a user to a game session. platformID represents the native platform of the invitee. API will return the corresponding native platform's userID. supported platforms: - STEAM - XBOX - PSN
   */
  createInvite_BySessionId(sessionId: string, data: SessionInviteRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/invite'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Reject a game session invitation.
   */
  deleteReject_BySessionId(sessionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/reject'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Update game session backfill ticket id. Will override game session backfill ticket based on given request parameter
   */
  updateBackfill_BySessionId(sessionId: string, data: UpdateGameSessionBackfillRequest): Promise<IResponse<GameSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/backfill'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GameSessionResponse, 'GameSessionResponse')
  }
}
