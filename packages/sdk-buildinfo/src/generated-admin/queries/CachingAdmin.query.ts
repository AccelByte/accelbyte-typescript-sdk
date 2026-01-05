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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { CachingAdminApi } from '../CachingAdminApi.js'

import { BulkCalculateDiffCacheRequest } from '../../generated-definitions/BulkCalculateDiffCacheRequest.js'
import { CalculateDiffCacheRequest } from '../../generated-definitions/CalculateDiffCacheRequest.js'
import { CommitDiffCacheRequest } from '../../generated-definitions/CommitDiffCacheRequest.js'
import { CreateDiffCacheRequest } from '../../generated-definitions/CreateDiffCacheRequest.js'

export enum Key_CachingAdmin {
  DiffCache = 'Buildinfo.CachingAdmin.DiffCache',
  DiffCalculate = 'Buildinfo.CachingAdmin.DiffCalculate',
  DiffCalculateBulk = 'Buildinfo.CachingAdmin.DiffCalculateBulk'
}

/**
 * This API is used to save detailed diff cache. Only used by differ. Not to be used directly.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CachingAdmin.DiffCache, input]
 * }
 * ```
 */
export const useCachingAdminApi_CreateDiffCacheMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDiffCacheRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateDiffCacheRequest }) => {
    const response = await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDiffCache(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCache],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to mark that the diff caching is complete and diff summary file uploaded to s3. Only used by differ. Not to be used directly.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CachingAdmin.DiffCache, input]
 * }
 * ```
 */
export const useCachingAdminApi_UpdateDiffCacheMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CommitDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CommitDiffCacheRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CommitDiffCacheRequest }) => {
    const response = await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateDiffCache(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCache],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to dispatch diff caching request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CachingAdmin.DiffCalculate, input]
 * }
 * ```
 */
export const useCachingAdminApi_CreateDiffCalculateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CalculateDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CalculateDiffCacheRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CalculateDiffCacheRequest }) => {
    const response = await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDiffCalculate(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCalculate],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to bulk dispatch diff caching requests to differ instance.&lt;br/&gt;The processing order will follow the order of the array.&lt;br/&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Request is skipped if the source and destination versions is same&lt;/li&gt;&lt;li&gt;Request is skipped if the source version is not found&lt;/li&gt;&lt;li&gt;Request is skipped if the destination version is not found&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CachingAdmin.DiffCalculateBulk, input]
 * }
 * ```
 */
export const useCachingAdminApi_CreateDiffCalculateBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCalculateDiffCacheRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCalculateDiffCacheRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkCalculateDiffCacheRequest }) => {
    const response = await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDiffCalculateBulk(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCalculateBulk],
    mutationFn,
    ...options
  })
}
