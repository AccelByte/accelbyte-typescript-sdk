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
import { PlayerRecordAdminApi } from '../PlayerRecordAdminApi.js'

import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordSizeResponse } from '../../generated-definitions/BulkGetPlayerRecordSizeResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUpdatePlayerRecordByKeyResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordByKeyResponseArray.js'
import { BulkUpdatePlayerRecordResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordResponseArray.js'
import { BulkUpdatePlayerRecordsByKeyRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsByKeyRequest.js'
import { BulkUpdatePlayerRecordsRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserKeyRequest } from '../../generated-definitions/BulkUserKeyRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'
import { PlayerRecordSizeResponse } from '../../generated-definitions/PlayerRecordSizeResponse.js'

export enum Key_PlayerRecordAdmin {
  UsersRecords = 'Cloudsave.PlayerRecordAdmin.UsersRecords',
  Records_ByUserId = 'Cloudsave.PlayerRecordAdmin.Records_ByUserId',
  UserBulkRecordSize = 'Cloudsave.PlayerRecordAdmin.UserBulkRecordSize',
  BulkUser_ByKey = 'Cloudsave.PlayerRecordAdmin.BulkUser_ByKey',
  RecordBulk_ByUserId = 'Cloudsave.PlayerRecordAdmin.RecordBulk_ByUserId',
  Record_ByUserId_ByKey = 'Cloudsave.PlayerRecordAdmin.Record_ByUserId_ByKey',
  Size_ByUserId_ByKey = 'Cloudsave.PlayerRecordAdmin.Size_ByUserId_ByKey',
  Public_ByUserId_ByKey = 'Cloudsave.PlayerRecordAdmin.Public_ByUserId_ByKey'
}

/**
 * @deprecated
 * Retrieve list of player records key and userID under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.UsersRecords, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetUsersRecords = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; query?: string | null } },
  options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_GetUsersRecords>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersRecords(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.UsersRecords, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve list of player records key and userID under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Records_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetRecords_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_GetRecords_ByUserId>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecords_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Records_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk get player&#39;s record size, max allowed 20 at a time, that can be retrieved using this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.UserBulkRecordSize, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_FetchUserBulkRecordSize = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: BulkUserKeyRequest },
  options?: Omit<UseQueryOptions<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetPlayerRecordSizeResponse>) => void
): UseQueryResult<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_FetchUserBulkRecordSize>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchUserBulkRecordSize(input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.UserBulkRecordSize, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve player record key and payload in bulk under given namespace. Maximum number of user ids per request is 20.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.BulkUser_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_FetchBulkUser_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string; data: BulkUserIDsRequest },
  options?: Omit<UseQueryOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetPlayerRecordResponse>) => void
): UseQueryResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_FetchBulkUser_ByKey>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchBulkUser_ByKey(
      input.key,
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.BulkUser_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoints will create new player record or replace the existing player record in bulk. Maximum number of user ids per request is 10. Maximum total size of the request payload is 5 MB. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body for this endpoint does not exceed 10 update request or 250 KB of whole request body. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.BulkUser_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_UpdateBulkUser_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkUpdatePlayerRecordByKeyResponseArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { key: string; data: BulkUpdatePlayerRecordsByKeyRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkUpdatePlayerRecordByKeyResponseArray) => void
): UseMutationResult<
  BulkUpdatePlayerRecordByKeyResponseArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { key: string; data: BulkUpdatePlayerRecordsByKeyRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: BulkUpdatePlayerRecordsByKeyRequest }) => {
    const response = await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateBulkUser_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.BulkUser_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_FetchRecordBulk_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; data: BulkGetPlayerRecordsRequest },
  options?: Omit<UseQueryOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetAdminPlayerRecordResponse>) => void
): UseQueryResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_FetchRecordBulk_ByUserId>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchRecordBulk_ByUserId(input.userId, input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoints will create new player record or replace the existing player record in bulk. Maximum bulk key limit per request 10. Maximum total size of the request payload is 5 MB. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body for this endpoint does not exceed 10 update request or 250 KB of whole request body. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_UpdateRecordBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkUpdatePlayerRecordResponseArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: BulkUpdatePlayerRecordsRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkUpdatePlayerRecordResponseArray) => void
): UseMutationResult<
  BulkUpdatePlayerRecordResponseArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkUpdatePlayerRecordsRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkUpdatePlayerRecordsRequest }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRecordBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete a record (arbitrary JSON data) in user-level with given key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_DeleteRecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a record in user-level (arbitrary JSON data) by its key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetRecord_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_GetRecord_ByUserId_ByKey>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new player record or append the existing player record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_CreateRecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<
  PlayerRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRecord_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_UpdateRecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<
  PlayerRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRecord_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a size of the player record
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Size_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetSize_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordSizeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerRecordSizeResponse>) => void
): UseQueryResult<PlayerRecordSizeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_GetSize_ByUserId_ByKey>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSize_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerRecordSizeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Size_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete player public record. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_DeletePublic_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePublic_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a record in user-level (arbitrary JSON data) by its key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetPublic_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRecordAdminApi_GetPublic_ByUserId_ByKey>[1]) => async () => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPublic_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new player public record or append the existing player public record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_CreatePublic_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<
  PlayerRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPublic_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_UpdatePublic_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<
  PlayerRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const response = await PlayerRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePublic_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
