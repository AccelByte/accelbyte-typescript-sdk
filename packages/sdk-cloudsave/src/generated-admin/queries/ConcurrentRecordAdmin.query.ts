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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ConcurrentRecordAdminApi } from '../ConcurrentRecordAdminApi.js'

import { AdminConcurrentRecordRequest } from '../../generated-definitions/AdminConcurrentRecordRequest.js'
import { AdminGameConcurrentRecordRequest } from '../../generated-definitions/AdminGameConcurrentRecordRequest.js'
import { AdminPlayerConcurrentRecordRequest } from '../../generated-definitions/AdminPlayerConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'

export enum Key_ConcurrentRecordAdmin {
  ConcurrentRecord_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentRecord_ByKey',
  ConcurrentAdminrecord_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey',
  ConcurrentRecord_ByUserId_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey',
  ConcurrentAdminrecord_ByUserId_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey',
  PublicConcurrent_ByUserId_ByKey = 'Cloudsave.ConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey'
}

/**
 * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json 4. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecordAdmin.ConcurrentRecord_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordAdminApi_UpdateConcurrentRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminConcurrentRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminConcurrentRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: AdminConcurrentRecordRequest }) => {
    const response = await ConcurrentRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConcurrentRecord_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentRecord_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. updatedAt (required: true) Time format style: RFC3339 2. value Json 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordAdminApi_UpdateConcurrentAdminrecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminGameConcurrentRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: AdminGameConcurrentRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: AdminGameConcurrentRecordRequest }) => {
    const response = await ConcurrentRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConcurrentAdminrecord_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json 4. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordAdminApi_UpdateConcurrentRecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        userId: string
        key: string
        data: AdminConcurrentRecordRequest
        queryParams?: { responseBody?: boolean | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      key: string
      data: AdminConcurrentRecordRequest
      queryParams?: { responseBody?: boolean | null }
    }
  ) => {
    const response = await ConcurrentRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConcurrentRecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. updatedAt (required: true) Time format style: RFC3339 2. value Json 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordAdminApi_UpdateConcurrentAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        userId: string
        key: string
        data: AdminPlayerConcurrentRecordRequest
        queryParams?: { responseBody?: boolean | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    userId: string
    key: string
    data: AdminPlayerConcurrentRecordRequest
    queryParams?: { responseBody?: boolean | null }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      key: string
      data: AdminPlayerConcurrentRecordRequest
      queryParams?: { responseBody?: boolean | null }
    }
  ) => {
    const response = await ConcurrentRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConcurrentAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json 4. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordAdminApi_UpdatePublicConcurrent_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        userId: string
        key: string
        data: AdminConcurrentRecordRequest
        queryParams?: { responseBody?: boolean | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      key: string
      data: AdminConcurrentRecordRequest
      queryParams?: { responseBody?: boolean | null }
    }
  ) => {
    const response = await ConcurrentRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePublicConcurrent_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
