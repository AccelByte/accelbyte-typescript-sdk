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
import { PublicGameRecordApi } from '../PublicGameRecordApi.js'

import { BulkGetGameRecordRequest } from '../../generated-definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from '../../generated-definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../../generated-definitions/GameRecordResponse.js'

export enum Key_PublicGameRecord {
  RecordBulk = 'Cloudsave.PublicGameRecord.RecordBulk',
  Record_ByKey = 'Cloudsave.PublicGameRecord.Record_ByKey'
}

/**
 * Bulk get game records. Maximum key per request 20.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameRecord.RecordBulk, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_FetchRecordBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: BulkGetGameRecordRequest },
  options?: Omit<UseQueryOptions<BulkGetGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetGameRecordResponse>) => void
): UseQueryResult<BulkGetGameRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGameRecordApi_FetchRecordBulk>[1]) => async () => {
    const response = await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchRecordBulk(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGameRecord.RecordBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete records by its key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameRecord.Record_ByKey, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_DeleteRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRecord_ByKey(
      input.key
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameRecord.Record_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get game record by its key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameRecord.Record_ByKey, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_GetRecord_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string },
  options?: Omit<UseQueryOptions<GameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameRecordResponse>) => void
): UseQueryResult<GameRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGameRecordApi_GetRecord_ByKey>[1]) => async () => {
    const response = await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecord_ByKey(
      input.key
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGameRecord.Record_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameRecord.Record_ByKey, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_CreateRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameRecordResponse) => void
): UseMutationResult<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: GameRecordRequest }) => {
    const response = await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameRecord.Record_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameRecord.Record_ByKey, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_UpdateRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameRecordResponse) => void
): UseMutationResult<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: GameRecordRequest }) => {
    const response = await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameRecord.Record_ByKey],
    mutationFn,
    ...options
  })
}
