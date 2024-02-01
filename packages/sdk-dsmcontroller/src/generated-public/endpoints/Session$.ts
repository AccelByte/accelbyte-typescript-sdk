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
import { ClaimSessionRequest } from '../../generated-definitions/ClaimSessionRequest.js'
import { CreateSessionRequest } from '../../generated-definitions/CreateSessionRequest.js'
import { SessionResponse } from '../../generated-definitions/SessionResponse.js'

export class Session$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [CREATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to get a dedicated server for a game session. If a dedicated server is available, it will respond with a dedicated server details ready to be used. Otherwise it will trigger new dedicated server creation and respond with a server status CREATING. The game session manager then expected to wait and query the server readiness with GET /namespaces/{namespace}/sessions/{sessionID} endpoint until the serverstatus is READY Specify pod_name with name of local DS in the request to create a session using the registered local DS
   */
  createSession(data: CreateSessionRequest): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/sessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [UPDATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to claim a dedicated server. The dedicated server cannot be claimed unless the status is READY
   */
  createSessionClaim(data: ClaimSessionRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/sessions/claim'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to query the status of dedicated server that is created for the session. The server is ready to use when the status is READY. At which point, the game session manager can claim the server using the GET /namespaces/{namespace}/sessions/{sessionID}/claim endpoint
   */
  getSession_BySessionId(sessionID: string): Promise<IResponseWithSync<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/sessions/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to cancel a temporary dedicated server. The dedicated server cannot be canceled unless the status is CREATING
   */
  deleteCancel_BySessionId(sessionID: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/sessions/{sessionID}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
