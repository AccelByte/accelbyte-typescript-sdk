/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { SessionStorageApi } from '../SessionStorageApi.js'

export enum Key_SessionStorage {
  Storage_ByPartyId = 'Session.SessionStorage.Storage_ByPartyId',
  StorageLeader_BySessionId = 'Session.SessionStorage.StorageLeader_BySessionId',
  StorageUser_BySessionId_ByUserId = 'Session.SessionStorage.StorageUser_BySessionId_ByUserId',
  ReservedStorage_ByPartyId_ByUserId = 'Session.SessionStorage.ReservedStorage_ByPartyId_ByUserId'
}

/**
 * Read Party Session Storage by partyID Party Storage example: ``` { &#34;reserved&#34;: { &#34;userID1&#34;: {&#34;key&#34;: &#34;value&#34;}, &#34;userID2&#34;: {&#34;key&#34;: &#34;value&#34;}, ... } } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorage.Storage_ByPartyId, input]
 * }
 * ```
 */
export const useSessionStorageApi_GetStorage_ByPartyId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { partyId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionStorageApi_GetStorage_ByPartyId>[1]) => async () => {
    const response = await SessionStorageApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStorage_ByPartyId(
      input.partyId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SessionStorage.Storage_ByPartyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Update Insert Session Storage Leader. only Leader can update or insert user session storage data Leader. can store generic json example json can store : { &#34;leader&#34;: { &#34;leader&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorage.StorageLeader_BySessionId, input]
 * }
 * ```
 */
export const useSessionStorageApi_PatchStorageLeader_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionId: string }) => {
    const response = await SessionStorageApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStorageLeader_BySessionId(input.sessionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SessionStorage.StorageLeader_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 *  Update Insert Session Storage User. user can only update or insert user session storage data itself. can store generic json example json can store : { &#34;storage&#34;: { &#34;storage&#34;: 1 }, &#34;data&#34;: 123 } game Admin can update or insert session storage Session Storage feature only available for Gamesession
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorage.StorageUser_BySessionId_ByUserId, input]
 * }
 * ```
 */
export const useSessionStorageApi_PatchStorageUser_BySessionId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string; userId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionId: string; userId: string }) => {
    const response = await SessionStorageApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStorageUser_BySessionId_ByUserId(input.sessionId, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SessionStorage.StorageUser_BySessionId_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * **For Internal Use Only** Update Insert Party Session Reserved Storage User. User can only update or insert user party session storage data itself. can store generic json example json can store : ``` { &#34;key&#34;: &#34;value&#34;, &#34;number&#34;: 123, } ``` The data will be stored on the &#34;reserved&#34; storage field example stored data : ``` { &#34;reserved&#34;: { &#34;userID1&#34;: {&#34;key&#34;: &#34;value&#34;}, &#34;userID2&#34;: {&#34;key&#34;: &#34;value&#34;}, ... } } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorage.ReservedStorage_ByPartyId_ByUserId, input]
 * }
 * ```
 */
export const useSessionStorageApi_PatchReservedStorage_ByPartyId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId: string; userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { partyId: string; userId: string }) => {
    const response = await SessionStorageApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchReservedStorage_ByPartyId_ByUserId(input.partyId, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SessionStorage.ReservedStorage_ByPartyId_ByUserId],
    mutationFn,
    ...options
  })
}
