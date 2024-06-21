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
import { MultipartUploaderAdminApi } from '../MultipartUploaderAdminApi.js'

import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../../generated-definitions/StartMultipartUploadRequest.js'

export enum Key_MultipartUploaderAdmin {
  BlockMultipart = 'MultipartUploaderAdmin.BlockMultipart',
  BlockMultipart_ByNS = 'MultipartUploaderAdmin.BlockMultipart_ByNS',
  BlockMultipart_ByHash = 'MultipartUploaderAdmin.BlockMultipart_ByHash',
  BlockMultipart_ByHash_ByNS = 'MultipartUploaderAdmin.BlockMultipart_ByHash_ByNS',
  PartBlock_ByHash = 'MultipartUploaderAdmin.PartBlock_ByHash'
}

export const useAdmCreateBlockMultipartMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, ApiArgs & { data: StartMultipartUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: MultipartUploadSummary) => void
): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, ApiArgs & { data: StartMultipartUploadRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StartMultipartUploadRequest }) => {
    const data = await MultipartUploaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBlockMultipart(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart],
    mutationFn,
    ...options
  })
}

export const useAdmCreateBlockMultipart_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, ApiArgs & { data: StartMultipartUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: MultipartUploadSummary) => void
): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, ApiArgs & { data: StartMultipartUploadRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StartMultipartUploadRequest }) => {
    const data = await MultipartUploaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBlockMultipart_ByNS(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteBlockMultipart_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string }) => {
    const data = await MultipartUploaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteBlockMultipart_ByHash(
      input.hash
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmPatchBlockMultipart_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string; data: CommitMultipartUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string; data: CommitMultipartUploadRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string; data: CommitMultipartUploadRequest }) => {
    const data = await MultipartUploaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchBlockMultipart_ByHash(
      input.hash,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteBlockMultipart_ByHash_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string }) => {
    const data = await MultipartUploaderAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteBlockMultipart_ByHash_ByNS(input.hash)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmPatchBlockMultipart_ByHash_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string }) => {
    const data = await MultipartUploaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchBlockMultipart_ByHash_ByNS(
      input.hash
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePartBlock_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, ApiArgs & { hash: string; data: MultipartUploadedPart }>,
    'mutationKey'
  >,
  callback?: (data: MultipartUploadSummary) => void
): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, ApiArgs & { hash: string; data: MultipartUploadedPart }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string; data: MultipartUploadedPart }) => {
    const data = await MultipartUploaderAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPartBlock_ByHash(
      input.hash,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.PartBlock_ByHash],
    mutationFn,
    ...options
  })
}
