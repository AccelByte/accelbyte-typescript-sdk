/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { SessionApi } from '../SessionApi.js'

import { ClaimSessionRequest } from '../../generated-definitions/ClaimSessionRequest.js'
import { CreateSessionRequest } from '../../generated-definitions/CreateSessionRequest.js'
import { SessionResponse } from '../../generated-definitions/SessionResponse.js'

export enum Key_Session {
  Session = 'Dsmcontroller.Session.Session',
  SessionClaim = 'Dsmcontroller.Session.SessionClaim',
  Session_BySessionId = 'Dsmcontroller.Session.Session_BySessionId',
  Cancel_BySessionId = 'Dsmcontroller.Session.Cancel_BySessionId'
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:SESSION [CREATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to get a dedicated server for a game session. If a dedicated server is available, it will respond with a dedicated server details ready to be used. Otherwise it will trigger new dedicated server creation and respond with a server status CREATING. The game session manager then expected to wait and query the server readiness with GET /namespaces/{namespace}/sessions/{sessionID} endpoint until the serverstatus is READY Specify pod_name with name of local DS in the request to create a session using the registered local DS
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Session, input]
 * }
 * ```
 */
export const useSessionApi_CreateSessionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateSessionRequest }>,
    'mutationKey'
  >,
  callback?: (data: SessionResponse) => void
): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateSessionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateSessionRequest }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createSession(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Session],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:SESSION [UPDATE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to claim a dedicated server. The dedicated server cannot be claimed unless the status is READY
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.SessionClaim, input]
 * }
 * ```
 */
export const useSessionApi_CreateSessionClaimMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimSessionRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimSessionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClaimSessionRequest }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createSessionClaim(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.SessionClaim],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:SESSION [READ] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to query the status of dedicated server that is created for the session. The server is ready to use when the status is READY. At which point, the game session manager can claim the server using the GET /namespaces/{namespace}/sessions/{sessionID}/claim endpoint
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Session_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_GetSession_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionID: string },
  options?: Omit<UseQueryOptions<SessionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SessionResponse>) => void
): UseQueryResult<SessionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionApi_GetSession_BySessionId>[1]) => async () => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSession_BySessionId(
      input.sessionID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.Session_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:SESSION [DELETE] Required scope: social This endpoint is intended to be called by game session manager (matchmaker, lobby, etc.) to cancel a temporary dedicated server. The dedicated server cannot be canceled unless the status is CREATING
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Session.Cancel_BySessionId, input]
 * }
 * ```
 */
export const useSessionApi_DeleteCancel_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionID: string }) => {
    const response = await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteCancel_BySessionId(
      input.sessionID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Session.Cancel_BySessionId],
    mutationFn,
    ...options
  })
}
