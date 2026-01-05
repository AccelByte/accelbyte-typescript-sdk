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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { WatchdogsApi } from '../WatchdogsApi.js'

export enum Key_Watchdogs {
  Connect_ByWatchdogId = 'Ams.Watchdogs.Connect_ByWatchdogId',
  Connect_ByWatchdogId_ByNS = 'Ams.Watchdogs.Connect_ByWatchdogId_ByNS'
}

/**
 * This is to support local ds development scenarios Required Permission: NAMESPACE:{namespace}:AMS:LOCALDS [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Watchdogs.Connect_ByWatchdogId, input]
 * }
 * ```
 */
export const useWatchdogsApi_GetConnect_ByWatchdogId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { watchdogID: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWatchdogsApi_GetConnect_ByWatchdogId>[1]) => async () => {
    const response = await WatchdogsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConnect_ByWatchdogId(
      input.watchdogID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Watchdogs.Connect_ByWatchdogId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: NAMESPACE:{namespace}:ARMADA:WATCHDOG [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Watchdogs.Connect_ByWatchdogId_ByNS, input]
 * }
 * ```
 */
export const useWatchdogsApi_GetConnect_ByWatchdogId_ByNS = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { watchdogID: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWatchdogsApi_GetConnect_ByWatchdogId_ByNS>[1]) => async () => {
    const response = await WatchdogsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConnect_ByWatchdogId_ByNS(
      input.watchdogID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Watchdogs.Connect_ByWatchdogId_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
