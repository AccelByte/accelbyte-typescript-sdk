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
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { UploaderV1AdminApi } from '../UploaderV1AdminApi.js'

import { BasicBuildManifestArray } from '../../generated-definitions/BasicBuildManifestArray.js'
import { BlockData } from '../../generated-definitions/BlockData.js'
import { BuildDeletionDataArray } from '../../generated-definitions/BuildDeletionDataArray.js'
import { BuildIdVersionArray } from '../../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'

export enum Key_UploaderV1Admin {
  BuildsByAppId = 'UploaderV1Admin.BuildsByAppId',
  Build_ByBuildId = 'UploaderV1Admin.Build_ByBuildId',
  BuildsByNamespace = 'UploaderV1Admin.BuildsByNamespace',
  BuildsdeletionByAppId = 'UploaderV1Admin.BuildsdeletionByAppId',
  Setcurrentbuild_ByBuildId = 'UploaderV1Admin.Setcurrentbuild_ByBuildId',
  Retrievechunkbyhash_ByHash = 'UploaderV1Admin.Retrievechunkbyhash_ByHash',
  Retry_ByBuildId = 'UploaderV1Admin.Retry_ByBuildId',
  Cancel_ByBuildId = 'UploaderV1Admin.Cancel_ByBuildId'
}

export const useAdmBuildsByAppId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { appId: string | null } },
  options?: Omit<UseQueryOptions<BuildIdVersionArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildIdVersionArray) => void
): UseQueryResult<BuildIdVersionArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBuildsByAppId>[1]) => async () => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace }).getBuildsByAppId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BuildIdVersionArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.BuildsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBuild_ByBuildId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { buildId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildManifest) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBuild_ByBuildId>[1]) => async () => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace }).getBuild_ByBuildId(input.buildId)
    callback && callback(data)
    return data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.Build_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBuildsByNamespace = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<BasicBuildManifestArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BasicBuildManifestArray) => void
): UseQueryResult<BasicBuildManifestArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBuildsByNamespace>[1]) => async () => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace }).getBuildsByNamespace()
    callback && callback(data)
    return data
  }

  return useQuery<BasicBuildManifestArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.BuildsByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBuildsdeletionByAppId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { appId: string | null; deletionStatus?: number; platformId?: string | null } },
  options?: Omit<UseQueryOptions<BuildDeletionDataArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildDeletionDataArray) => void
): UseQueryResult<BuildDeletionDataArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBuildsdeletionByAppId>[1]) => async () => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace }).getBuildsdeletionByAppId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BuildDeletionDataArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.BuildsdeletionByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateSetcurrentbuild_ByBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string; queryParams?: { sendNotification?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string; queryParams?: { sendNotification?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; queryParams?: { sendNotification?: boolean | null } }) => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateSetcurrentbuild_ByBuildId(
      input.buildId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Setcurrentbuild_ByBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmRetrievechunkbyhash_ByHash = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { hash: string },
  options?: Omit<UseQueryOptions<BlockData, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BlockData) => void
): UseQueryResult<BlockData, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRetrievechunkbyhash_ByHash>[1]) => async () => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace }).getRetrievechunkbyhash_ByHash(input.hash)
    callback && callback(data)
    return data
  }

  return useQuery<BlockData, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.Retrievechunkbyhash_ByHash, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateRetry_ByBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string }) => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRetry_ByBuildId(input.buildId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Retry_ByBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteCancel_ByBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string }) => {
    const data = await UploaderV1AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteCancel_ByBuildId(input.buildId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Cancel_ByBuildId],
    mutationFn,
    ...options
  })
}
