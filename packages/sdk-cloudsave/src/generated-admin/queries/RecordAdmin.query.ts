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
import { RecordAdminApi } from '../RecordAdminApi.js'

import { AdminGameRecordRequest } from '../../generated-definitions/AdminGameRecordRequest.js'
import { AdminGameRecordResponse } from '../../generated-definitions/AdminGameRecordResponse.js'
import { AdminPlayerRecordRequest } from '../../generated-definitions/AdminPlayerRecordRequest.js'
import { AdminPlayerRecordResponse } from '../../generated-definitions/AdminPlayerRecordResponse.js'
import { BulkGetAdminGameRecordRequest } from '../../generated-definitions/BulkGetAdminGameRecordRequest.js'
import { BulkGetAdminGameRecordResponse } from '../../generated-definitions/BulkGetAdminGameRecordResponse.js'
import { BulkGetAdminPlayerRecordRequest } from '../../generated-definitions/BulkGetAdminPlayerRecordRequest.js'
import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListAdminGameRecordKeysResponse } from '../../generated-definitions/ListAdminGameRecordKeysResponse.js'
import { ListAdminPlayerRecordKeysResponse } from '../../generated-definitions/ListAdminPlayerRecordKeysResponse.js'

export enum Key_RecordAdmin {
  Adminrecords = 'Cloudsave.RecordAdmin.Adminrecords',
  AdminrecordBulk = 'Cloudsave.RecordAdmin.AdminrecordBulk',
  Adminrecord_ByKey = 'Cloudsave.RecordAdmin.Adminrecord_ByKey',
  Adminrecords_ByUserId = 'Cloudsave.RecordAdmin.Adminrecords_ByUserId',
  BulkUser_ByKey = 'Cloudsave.RecordAdmin.BulkUser_ByKey',
  AdminrecordBulk_ByUserId = 'Cloudsave.RecordAdmin.AdminrecordBulk_ByUserId',
  Adminrecord_ByUserId_ByKey = 'Cloudsave.RecordAdmin.Adminrecord_ByUserId_ByKey'
}

/**
 * Retrieve list of records key by namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecords, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecords = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListAdminGameRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListAdminGameRecordKeysResponse>) => void
): UseQueryResult<ListAdminGameRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_GetAdminrecords>[1]) => async () => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAdminrecords(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListAdminGameRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecords, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk get admin game records. Maximum key per request 20.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.AdminrecordBulk, input]
 * }
 * ```
 */
export const useRecordAdminApi_FetchAdminrecordBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: BulkGetAdminGameRecordRequest },
  options?: Omit<UseQueryOptions<BulkGetAdminGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetAdminGameRecordResponse>) => void
): UseQueryResult<BulkGetAdminGameRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_FetchAdminrecordBulk>[1]) => async () => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchAdminrecordBulk(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetAdminGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.AdminrecordBulk, input],
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
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_DeleteAdminrecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteAdminrecord_ByKey(
      input.key
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByKey],
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
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecord_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string },
  options?: Omit<UseQueryOptions<AdminGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AdminGameRecordResponse>) => void
): UseQueryResult<AdminGameRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_GetAdminrecord_ByKey>[1]) => async () => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAdminrecord_ByKey(
      input.key
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<AdminGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new admin game record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_CreateAdminrecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminGameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminGameRecordResponse) => void
): UseMutationResult<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminGameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: AdminGameRecordRequest }) => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createAdminrecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new admin game record or replace the existing admin game record. **Append example:** Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_UpdateAdminrecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminGameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminGameRecordResponse) => void
): UseMutationResult<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminGameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: AdminGameRecordRequest }) => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateAdminrecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve list of admin player records key and userID under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecords_ByUserId, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecords_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListAdminPlayerRecordKeysResponse>) => void
): UseQueryResult<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_GetAdminrecords_ByUserId>[1]) => async () => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAdminrecords_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecords_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk get admin player record by userIds, max allowed 20 at a time.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.BulkUser_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_FetchBulkUser_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string; data: BulkUserIDsRequest },
  options?: Omit<UseQueryOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetAdminPlayerRecordResponse>) => void
): UseQueryResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_FetchBulkUser_ByKey>[1]) => async () => {
    const response = await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchBulkUser_ByKey(
      input.key,
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.BulkUser_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk get admin player records. Maximum key per request 20.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.AdminrecordBulk_ByUserId, input]
 * }
 * ```
 */
export const useRecordAdminApi_FetchAdminrecordBulk_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; data: BulkGetAdminPlayerRecordRequest },
  options?: Omit<UseQueryOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetAdminPlayerRecordResponse>) => void
): UseQueryResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_FetchAdminrecordBulk_ByUserId>[1]) => async () => {
    const response = await RecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchAdminrecordBulk_ByUserId(input.userId, input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.AdminrecordBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
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
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_DeleteAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string }) => {
    const response = await RecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAdminrecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a admin record in user-level (arbitrary JSON data) by its key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecord_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<AdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AdminPlayerRecordResponse>) => void
): UseQueryResult<AdminPlayerRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecordAdminApi_GetAdminrecord_ByUserId_ByKey>[1]) => async () => {
    const response = await RecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAdminrecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<AdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will create new admin player record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_CreateAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AdminPlayerRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: AdminPlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: AdminPlayerRecordResponse) => void
): UseMutationResult<
  AdminPlayerRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: AdminPlayerRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: AdminPlayerRecordRequest }) => {
    const response = await RecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_UpdateAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AdminPlayerRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: AdminPlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: AdminPlayerRecordResponse) => void
): UseMutationResult<
  AdminPlayerRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: AdminPlayerRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: AdminPlayerRecordRequest }) => {
    const response = await RecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
