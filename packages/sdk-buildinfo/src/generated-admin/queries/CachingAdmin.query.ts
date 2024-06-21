/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { CachingAdminApi } from '../CachingAdminApi.js'

import { BulkCalculateDiffCacheRequest } from '../../generated-definitions/BulkCalculateDiffCacheRequest.js'
import { CalculateDiffCacheRequest } from '../../generated-definitions/CalculateDiffCacheRequest.js'
import { CommitDiffCacheRequest } from '../../generated-definitions/CommitDiffCacheRequest.js'
import { CreateDiffCacheRequest } from '../../generated-definitions/CreateDiffCacheRequest.js'

export enum Key_CachingAdmin {
  DiffCache = 'CachingAdmin.DiffCache',
  DiffCalculate = 'CachingAdmin.DiffCalculate',
  DiffCalculateBulk = 'CachingAdmin.DiffCalculateBulk'
}

export const useAdmCreateDiffCacheMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateDiffCacheRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateDiffCacheRequest }) => {
    const data = await CachingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createDiffCache(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCache],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDiffCacheMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CommitDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CommitDiffCacheRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CommitDiffCacheRequest }) => {
    const data = await CachingAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDiffCache(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCache],
    mutationFn,
    ...options
  })
}

export const useAdmCreateDiffCalculateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CalculateDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CalculateDiffCacheRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CalculateDiffCacheRequest }) => {
    const data = await CachingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createDiffCalculate(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCalculate],
    mutationFn,
    ...options
  })
}

export const useAdmCreateDiffCalculateBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: BulkCalculateDiffCacheRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: BulkCalculateDiffCacheRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkCalculateDiffCacheRequest }) => {
    const data = await CachingAdminApi(sdk, { namespace: input.namespace, config: input.config }).createDiffCalculateBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCalculateBulk],
    mutationFn,
    ...options
  })
}
