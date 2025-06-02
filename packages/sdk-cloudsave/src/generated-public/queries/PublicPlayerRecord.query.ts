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
import { PublicPlayerRecordApi } from '../PublicPlayerRecordApi.js'

import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'

export enum Key_PublicPlayerRecord {
  UsersMeRecords = 'Cloudsave.PublicPlayerRecord.UsersMeRecords',
  UserMeRecordBulk = 'Cloudsave.PublicPlayerRecord.UserMeRecordBulk',
  Record_ByUserId_ByKey = 'Cloudsave.PublicPlayerRecord.Record_ByUserId_ByKey',
  RecordsPublic_ByUserId = 'Cloudsave.PublicPlayerRecord.RecordsPublic_ByUserId',
  PublicMeUser_ByKey = 'Cloudsave.PublicPlayerRecord.PublicMeUser_ByKey',
  PublicBulkUser_ByKey = 'Cloudsave.PublicPlayerRecord.PublicBulkUser_ByKey',
  RecordBulk_ByUserId = 'Cloudsave.PublicPlayerRecord.RecordBulk_ByUserId',
  Public_ByUserId_ByKey = 'Cloudsave.PublicPlayerRecord.Public_ByUserId_ByKey'
}

/**
 * Retrieve list of player records key under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.UsersMeRecords, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetUsersMeRecords = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerRecordApi_GetUsersMeRecords>[1]) => async () => {
    const response = await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeRecords(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.UsersMeRecords, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.UserMeRecordBulk, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_CreateUserMeRecordBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetPlayerRecordResponse) => void
): UseMutationResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }) => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeRecordBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.UserMeRecordBulk],
    mutationFn,
    ...options
  })
}

/**
 * Delete player record by its key. Only user that own the player record could delete it.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_DeleteRecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string }) => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get player record by its key. **Private Record**: Only user that own the player record could retrieve it.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetRecord_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerRecordApi_GetRecord_ByUserId_ByKey>[1]) => async () => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new player record or append the existing player record. Only user that own the existing player record could modify. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_CreateRecord_ByUserId_ByKeyMutation = (
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
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRecord_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player record or replace the existing player record. Only user that own the existing player record could modify it. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_UpdateRecord_ByUserId_ByKeyMutation = (
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
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRecord_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve list of other public player records key under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.RecordsPublic_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetRecordsPublic_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerRecordApi_GetRecordsPublic_ByUserId>[1]) => async () => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRecordsPublic_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.RecordsPublic_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete player public record. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.PublicMeUser_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_DeletePublicMeUser_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePublicMeUser_ByKey(input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.PublicMeUser_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Bulk get other player&#39;s record that is public by userIds, max allowed 20 at a time. Only record with `isPublic=true` that can be retrieved using this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.PublicBulkUser_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_FetchPublicBulkUser_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string; data: BulkUserIDsRequest },
  options?: Omit<UseQueryOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetPlayerRecordResponse>) => void
): UseQueryResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerRecordApi_FetchPublicBulkUser_ByKey>[1]) => async () => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchPublicBulkUser_ByKey(input.key, input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.PublicBulkUser_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve other player public record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.RecordBulk_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_FetchRecordBulk_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; data: BulkGetPlayerRecordsRequest },
  options?: Omit<UseQueryOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetPlayerRecordResponse>) => void
): UseQueryResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerRecordApi_FetchRecordBulk_ByUserId>[1]) => async () => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchRecordBulk_ByUserId(input.userId, input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.RecordBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get other player&#39;s record that is public. Only record with `isPublic=true` that can be retrieved using this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetPublic_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerRecordApi_GetPublic_ByUserId_ByKey>[1]) => async () => {
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPublic_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new player public record or append the existing player public record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_CreatePublic_ByUserId_ByKeyMutation = (
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
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPublic_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_UpdatePublic_ByUserId_ByKeyMutation = (
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
    const response = await PublicPlayerRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePublic_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
