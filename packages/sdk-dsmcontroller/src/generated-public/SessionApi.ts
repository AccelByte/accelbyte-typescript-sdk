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
import { ClaimSessionRequest } from '../generated-definitions/ClaimSessionRequest.js'
import { CreateSessionRequest } from '../generated-definitions/CreateSessionRequest.js'
import { SessionResponse } from '../generated-definitions/SessionResponse.js'
import { Session$ } from './endpoints/Session$.js'

export function SessionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createSession(data: CreateSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSession(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSessionClaim(data: ClaimSessionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSessionClaim(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSession_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCancel_BySessionId(sessionID: string): Promise<AxiosResponse<unknown>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCancel_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:SESSION [CREATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to get a dedicated server for a game session. If a dedicated server is available, it will respond with a dedicated server details ready to be used. Otherwise it will trigger new dedicated server creation and respond with a server status CREATING. The game session manager then expected to wait and query the server readiness with GET /namespaces/{namespace}/sessions/{sessionID} endpoint until the serverstatus is READY Specify pod_name with name of local DS in the request to create a session using the registered local DS
     */
    createSession,
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:SESSION [UPDATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to claim a dedicated server. The dedicated server cannot be claimed unless the status is READY
     */
    createSessionClaim,
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to query the status of dedicated server that is created for the session. The server is ready to use when the status is READY. At which point, the game session manager can claim the server using the GET /namespaces/{namespace}/sessions/{sessionID}/claim endpoint
     */
    getSession_BySessionId,
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to cancel a temporary dedicated server. The dedicated server cannot be canceled unless the status is CREATING
     */
    deleteCancel_BySessionId
  }
}
