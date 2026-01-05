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
import { GameRecordAdminApi } from '../GameRecordAdminApi.js'

import { GameRecordAdminResponse } from '../../generated-definitions/GameRecordAdminResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { ListGameRecordKeysResponse } from '../../generated-definitions/ListGameRecordKeysResponse.js'

export enum Key_GameRecordAdmin {
  Records = 'Cloudsave.GameRecordAdmin.Records',
  Record_ByKey = 'Cloudsave.GameRecordAdmin.Record_ByKey'
}

/**
 * Retrieve list of records key by namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameRecordAdmin.Records, input]
 * }
 * ```
 */
export const useGameRecordAdminApi_GetRecords = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { limit: number; offset: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListGameRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListGameRecordKeysResponse>) => void
): UseQueryResult<ListGameRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameRecordAdminApi_GetRecords>[1]) => async () => {
    const response = await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecords(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListGameRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameRecordAdmin.Records, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoints delete game record in namespace-level
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameRecordAdmin.Record_ByKey, input]
 * }
 * ```
 */
export const useGameRecordAdminApi_DeleteRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRecord_ByKey(
      input.key
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a record by its key in namespace-level.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameRecordAdmin.Record_ByKey, input]
 * }
 * ```
 */
export const useGameRecordAdminApi_GetRecord_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string },
  options?: Omit<UseQueryOptions<GameRecordAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameRecordAdminResponse>) => void
): UseQueryResult<GameRecordAdminResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameRecordAdminApi_GetRecord_ByKey>[1]) => async () => {
    const response = await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecord_ByKey(
      input.key
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameRecordAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameRecordAdmin.Record_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. ttl_config (default: *empty*, type: object) Indicate the TTL configuration for the game record. action: - DELETE: record will be deleted after TTL is reached 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;ttl_config&#34;: { &#34;expires_at&#34;: &#34;2026-01-02T15:04:05Z&#34;, // should be in RFC3339 format &#34;action&#34;: &#34;DELETE&#34; }, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameRecordAdmin.Record_ByKey, input]
 * }
 * ```
 */
export const useGameRecordAdminApi_CreateRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameRecordAdminResponse) => void
): UseMutationResult<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: GameRecordRequest }) => {
    const response = await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. ttl_config (default: *empty*, type: object) Indicate the TTL configuration for the game record. action: - DELETE: record will be deleted after TTL is reached 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;ttl_config&#34;: { &#34;expires_at&#34;: &#34;2026-01-02T15:04:05Z&#34;, // should be in RFC3339 format &#34;action&#34;: &#34;DELETE&#34; }, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameRecordAdmin.Record_ByKey, input]
 * }
 * ```
 */
export const useGameRecordAdminApi_UpdateRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameRecordAdminResponse) => void
): UseMutationResult<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: GameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: GameRecordRequest }) => {
    const response = await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}
