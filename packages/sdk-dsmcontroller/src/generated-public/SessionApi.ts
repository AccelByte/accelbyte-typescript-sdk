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
import { ClaimSessionRequest } from '../generated-definitions/ClaimSessionRequest.js'
import { CreateSessionRequest } from '../generated-definitions/CreateSessionRequest.js'
import { Session$ } from './endpoints/Session$.js'
import { SessionResponse } from '../generated-definitions/SessionResponse.js'

export function SessionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [CREATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to get a dedicated server for a game session. If a dedicated server is available, it will respond with a dedicated server details ready to be used. Otherwise it will trigger new dedicated server creation and respond with a server status CREATING. The game session manager then expected to wait and query the server readiness with GET /namespaces/{namespace}/sessions/{sessionID} endpoint until the serverstatus is READY Specify pod_name with name of local DS in the request to create a session using the registered local DS
   */
  async function createSession(data: CreateSessionRequest): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createSession(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [UPDATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to claim a dedicated server. The dedicated server cannot be claimed unless the status is READY
   */
  async function createSessionClaim(data: ClaimSessionRequest): Promise<unknown> {
    const $ = new Session$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createSessionClaim(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to query the status of dedicated server that is created for the session. The server is ready to use when the status is READY. At which point, the game session manager can claim the server using the GET /namespaces/{namespace}/sessions/{sessionID}/claim endpoint
   */
  async function getSession_BySessionId(sessionID: string): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getSession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to cancel a temporary dedicated server. The dedicated server cannot be canceled unless the status is CREATING
   */
  async function deleteCancel_BySessionId(sessionID: string): Promise<unknown> {
    const $ = new Session$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteCancel_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createSession,
    createSessionClaim,
    getSession_BySessionId,
    deleteCancel_BySessionId
  }
}
