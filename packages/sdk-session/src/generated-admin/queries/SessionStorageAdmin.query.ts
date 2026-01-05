/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { SessionStorageAdminApi } from '../SessionStorageAdminApi.js'

export enum Key_SessionStorageAdmin {
  Storage_ByPartyId = 'Session.SessionStorageAdmin.Storage_ByPartyId',
  Storage_BySessionId = 'Session.SessionStorageAdmin.Storage_BySessionId',
  StorageUser_BySessionId_ByUserId = 'Session.SessionStorageAdmin.StorageUser_BySessionId_ByUserId'
}

/**
 * Read Party Session Storage by partyID Party Storage example: ``` { &#34;reserved&#34;: { &#34;userID1&#34;: {&#34;key&#34;: &#34;value&#34;}, &#34;userID2&#34;: {&#34;key&#34;: &#34;value&#34;}, ... } } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorageAdmin.Storage_ByPartyId, input]
 * }
 * ```
 */
export const useSessionStorageAdminApi_GetStorage_ByPartyId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { partyId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionStorageAdminApi_GetStorage_ByPartyId>[1]) => async () => {
    const response = await SessionStorageAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStorage_ByPartyId(input.partyId)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SessionStorageAdmin.Storage_ByPartyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Delete Session Storage By sessionID Session Storage feature only available for Gamesession
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorageAdmin.Storage_BySessionId, input]
 * }
 * ```
 */
export const useSessionStorageAdminApi_DeleteStorage_BySessionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sessionId: string }) => {
    const response = await SessionStorageAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStorage_BySessionId(input.sessionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SessionStorageAdmin.Storage_BySessionId],
    mutationFn,
    ...options
  })
}

/**
 *  Read Session Storage by sessionID Session Storage feature only available for Gamesession
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorageAdmin.Storage_BySessionId, input]
 * }
 * ```
 */
export const useSessionStorageAdminApi_GetStorage_BySessionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSessionStorageAdminApi_GetStorage_BySessionId>[1]) => async () => {
    const response = await SessionStorageAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStorage_BySessionId(input.sessionId)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SessionStorageAdmin.Storage_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Read Session Storage by sessionID and userID Session Storage feature only available for Gamesession
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SessionStorageAdmin.StorageUser_BySessionId_ByUserId, input]
 * }
 * ```
 */
export const useSessionStorageAdminApi_GetStorageUser_BySessionId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sessionId: string; userId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSessionStorageAdminApi_GetStorageUser_BySessionId_ByUserId>[1]) => async () => {
      const response = await SessionStorageAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStorageUser_BySessionId_ByUserId(input.sessionId, input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SessionStorageAdmin.StorageUser_BySessionId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
