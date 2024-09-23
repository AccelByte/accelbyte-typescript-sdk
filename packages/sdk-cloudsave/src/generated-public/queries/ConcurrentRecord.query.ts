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
import { ConcurrentRecordApi } from '../ConcurrentRecordApi.js'

import { ConcurrentRecordRequest } from '../../generated-definitions/ConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'

export enum Key_ConcurrentRecord {
  ConcurrentRecord_ByKey = 'Cloudsave.ConcurrentRecord.ConcurrentRecord_ByKey',
  ConcurrentRecord_ByUserId_ByKey = 'Cloudsave.ConcurrentRecord.ConcurrentRecord_ByUserId_ByKey',
  PublicConcurrent_ByUserId_ByKey = 'Cloudsave.ConcurrentRecord.PublicConcurrent_ByUserId_ByKey'
}

/**
 * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecord.ConcurrentRecord_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordApi_UpdateConcurrentRecord_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: ConcurrentRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: ConcurrentRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: ConcurrentRecordRequest }) => {
    const response = await ConcurrentRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConcurrentRecord_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecord.ConcurrentRecord_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecord.ConcurrentRecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordApi_UpdateConcurrentRecord_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: ConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: ConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      key: string
      data: ConcurrentRecordRequest
      queryParams?: { responseBody?: boolean | null }
    }
  ) => {
    const response = await ConcurrentRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConcurrentRecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecord.ConcurrentRecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConcurrentRecord.PublicConcurrent_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useConcurrentRecordApi_UpdatePublicConcurrent_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: ConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: ConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      key: string
      data: ConcurrentRecordRequest
      queryParams?: { responseBody?: boolean | null }
    }
  ) => {
    const response = await ConcurrentRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePublicConcurrent_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConcurrentRecord.PublicConcurrent_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
