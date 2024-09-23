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
import { MultipartUploaderAdminApi } from '../MultipartUploaderAdminApi.js'

import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../../generated-definitions/StartMultipartUploadRequest.js'

export enum Key_MultipartUploaderAdmin {
  BlockMultipart = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart',
  BlockMultipart_v2 = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart_v2',
  BlockMultipart_ByHash = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart_ByHash',
  BlockMultipart_ByHash_v2 = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart_ByHash_v2',
  PartBlock_ByHash_v2 = 'Buildinfo.MultipartUploaderAdmin.PartBlock_ByHash_v2'
}

/**
 * This API is used to &lt;b&gt;start multipart file upload&lt;/b&gt;. The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;Make sure to upload the Parts in-order based on the presigned urls order.The size of each Part should above or equals to 5MB, except the last one.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.BlockMultipart, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_CreateBlockMultipartMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: MultipartUploadSummary) => void
): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StartMultipartUploadRequest }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBlockMultipart(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to &lt;b&gt;start resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;If there&#39;s a missing Part in the presigned urls list, it indicates that the Part already uploaded previously, so it can be skipped.&lt;br/&gt;The size of each Part should above or equals to 5MB, except the last Part.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.BlockMultipart_v2, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_CreateBlockMultipartMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: MultipartUploadSummary) => void
): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StartMultipartUploadRequest }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBlockMultipart_v2(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_v2],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to &lt;b&gt;abort multipart file upload&lt;/b&gt;. The aborted multipart file upload cannot be continued again.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_DeleteBlockMultipart_ByHashMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBlockMultipart_ByHash(input.hash)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to &lt;b&gt;commit multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;The request should contains list of PartNumber along with its ETag value. The list should be in-order.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_PatchBlockMultipart_ByHashMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string; data: CommitMultipartUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string; data: CommitMultipartUploadRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string; data: CommitMultipartUploadRequest }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchBlockMultipart_ByHash(input.hash, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to &lt;b&gt;abort resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The aborted multipart file upload cannot be continued again.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_v2, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_DeleteBlockMultipart_ByHashMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBlockMultipart_ByHash_v2(input.hash)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_v2],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to &lt;b&gt;commit resumable multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;If there&#39;s a missing Part that not uploaded yet, then the multipart file upload cannot be committed.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_v2, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_PatchBlockMultipart_ByHashMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchBlockMultipart_ByHash_v2(input.hash)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_v2],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to &lt;b&gt;commit the Part of multipart upload&lt;/b&gt;.&lt;br/&gt;The committed Part will be marked as completed, so in case the multipart file upload retries, it won&#39;t be included in the list of unuploaded parts.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MultipartUploaderAdmin.PartBlock_ByHash_v2, input]
 * }
 * ```
 */
export const useMultipartUploaderAdminApi_CreatePartBlock_ByHashMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { hash: string; data: MultipartUploadedPart }>,
    'mutationKey'
  >,
  callback?: (data: MultipartUploadSummary) => void
): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { hash: string; data: MultipartUploadedPart }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string; data: MultipartUploadedPart }) => {
    const response = await MultipartUploaderAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPartBlock_ByHash_v2(input.hash, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.PartBlock_ByHash_v2],
    mutationFn,
    ...options
  })
}
