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
import { UploaderV2AdminApi } from '../UploaderV2AdminApi.js'

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildIdVersionArray } from '../../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { UpdateBuildMetadataRequest } from '../../generated-definitions/UpdateBuildMetadataRequest.js'
import { UploadBuildManifest } from '../../generated-definitions/UploadBuildManifest.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'

export enum Key_UploaderV2Admin {
  BuildsByAppId = 'UploaderV2Admin.BuildsByAppId',
  DlcByGameAppId = 'UploaderV2Admin.DlcByGameAppId',
  Build_ByBuildId = 'UploaderV2Admin.Build_ByBuildId',
  Startbuildupload = 'UploaderV2Admin.Startbuildupload',
  DifftriggerStatus = 'UploaderV2Admin.DifftriggerStatus',
  Commitbuildmanifest = 'UploaderV2Admin.Commitbuildmanifest',
  Startdlcbuildupload = 'UploaderV2Admin.Startdlcbuildupload',
  Commitdlcbuildmanifest = 'UploaderV2Admin.Commitdlcbuildmanifest',
  DifftriggerStatu_ByValue = 'UploaderV2Admin.DifftriggerStatu_ByValue',
  Startfileupload_ByUploaderId = 'UploaderV2Admin.Startfileupload_ByUploaderId',
  Startzsyncfileupload_ByFileHash = 'UploaderV2Admin.Startzsyncfileupload_ByFileHash',
  Startbuildupload_BySourceBuildId = 'UploaderV2Admin.Startbuildupload_BySourceBuildId',
  Commitfileupload_ByBuildId_ByHash = 'UploaderV2Admin.Commitfileupload_ByBuildId_ByHash',
  Startdlcbuildupload_BySourceBuildId = 'UploaderV2Admin.Startdlcbuildupload_BySourceBuildId',
  Commitzsyncfileupload_ByBuildId_ByHash = 'UploaderV2Admin.Commitzsyncfileupload_ByBuildId_ByHash',
  Version_ByAppId_ByVersion_ByPlatformId = 'UploaderV2Admin.Version_ByAppId_ByVersion_ByPlatformId',
  DiffStart_BySourceBuildId_ByDestinationBuildId = 'UploaderV2Admin.DiffStart_BySourceBuildId_ByDestinationBuildId',
  DiffCommit_BySourceBuildId_ByDestinationBuildId = 'UploaderV2Admin.DiffCommit_BySourceBuildId_ByDestinationBuildId',
  Hash_ByBuildId_ByHash_ByBlockSize = 'UploaderV2Admin.Hash_ByBuildId_ByHash_ByBlockSize',
  DiffSignedurl_BySourceBuildId_ByDestinationBuildId = 'UploaderV2Admin.DiffSignedurl_BySourceBuildId_ByDestinationBuildId'
}

export const useAdmBuildsByAppId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { appId: string | null; platformId: string | null } },
  options?: Omit<UseQueryOptions<BuildIdVersionArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildIdVersionArray) => void
): UseQueryResult<BuildIdVersionArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBuildsByAppId>[1]) => async () => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace }).getBuildsByAppId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BuildIdVersionArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.BuildsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDlcByGameAppId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { appId: string | null; platformId: string | null } },
  options?: Omit<UseQueryOptions<BuildIdVersionArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildIdVersionArray) => void
): UseQueryResult<BuildIdVersionArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDlcByGameAppId>[1]) => async () => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace }).getDlcByGameAppId(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BuildIdVersionArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.DlcByGameAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteBuild_ByBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteBuild_ByBuildId(input.buildId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Build_ByBuildId],
    mutationFn,
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
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace }).getBuild_ByBuildId(input.buildId)
    callback && callback(data)
    return data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.Build_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchBuild_ByBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string; data: UpdateBuildMetadataRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { buildId: string; data: UpdateBuildMetadataRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; data: UpdateBuildMetadataRequest }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchBuild_ByBuildId(
      input.buildId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Build_ByBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartbuilduploadMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BuildManifest, AxiosError<ApiError>, ApiArgs & { data: UploadBuildManifest }>, 'mutationKey'>,
  callback?: (data: BuildManifest) => void
): UseMutationResult<BuildManifest, AxiosError<ApiError>, ApiArgs & { data: UploadBuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UploadBuildManifest }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartbuildupload(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startbuildupload],
    mutationFn,
    ...options
  })
}

export const useAdmDifftriggerStatus = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDifftriggerStatus>[1]) => async () => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace }).getDifftriggerStatus()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.DifftriggerStatus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCommitbuildmanifestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: BuildManifest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: BuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BuildManifest }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createCommitbuildmanifest(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitbuildmanifest],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartdlcbuilduploadMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BuildManifest, AxiosError<ApiError>, ApiArgs & { data: UploadBuildManifest }>, 'mutationKey'>,
  callback?: (data: BuildManifest) => void
): UseMutationResult<BuildManifest, AxiosError<ApiError>, ApiArgs & { data: UploadBuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UploadBuildManifest }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartdlcbuildupload(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startdlcbuildupload],
    mutationFn,
    ...options
  })
}

export const useAdmCreateCommitdlcbuildmanifestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: BuildManifest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: BuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BuildManifest }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createCommitdlcbuildmanifest(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitdlcbuildmanifest],
    mutationFn,
    ...options
  })
}

export const useAdmPatchDifftriggerStatu_ByValueMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { value: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { value: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { value: string }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchDifftriggerStatu_ByValue(
      input.value
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DifftriggerStatu_ByValue],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartfileupload_ByUploaderIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, ApiArgs & { uploaderId: string; data: BinaryUpload }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, ApiArgs & { uploaderId: string; data: BinaryUpload }> => {
  //
  const mutationFn = async (input: ApiArgs & { uploaderId: string; data: BinaryUpload }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartfileupload_ByUploaderId(
      input.uploaderId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startfileupload_ByUploaderId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartzsyncfileupload_ByFileHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, ApiArgs & { fileHash: string; data: BinaryUpload }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, ApiArgs & { fileHash: string; data: BinaryUpload }> => {
  //
  const mutationFn = async (input: ApiArgs & { fileHash: string; data: BinaryUpload }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartzsyncfileupload_ByFileHash(
      input.fileHash,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startzsyncfileupload_ByFileHash],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartbuildupload_BySourceBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BuildManifest, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: BuildManifest) => void
): UseMutationResult<BuildManifest, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartbuildupload_BySourceBuildId(
      input.sourceBuildId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startbuildupload_BySourceBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchCommitfileupload_ByBuildId_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; hash: string }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchCommitfileupload_ByBuildId_ByHash(
      input.buildId,
      input.hash
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitfileupload_ByBuildId_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartdlcbuildupload_BySourceBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BuildManifest, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: BuildManifest) => void
): UseMutationResult<BuildManifest, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }) => {
    const data = await UploaderV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createStartdlcbuildupload_BySourceBuildId(input.sourceBuildId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startdlcbuildupload_BySourceBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchCommitzsyncfileupload_ByBuildId_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; hash: string }) => {
    const data = await UploaderV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchCommitzsyncfileupload_ByBuildId_ByHash(input.buildId, input.hash)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitzsyncfileupload_ByBuildId_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateVersion_ByAppId_ByVersion_ByPlatformIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { appId: string; version: string; platformId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { appId: string; version: string; platformId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { appId: string; version: string; platformId: string }) => {
    const data = await UploaderV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateVersion_ByAppId_ByVersion_ByPlatformId(input.appId, input.version, input.platformId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Version_ByAppId_ByVersion_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateDiffStart_BySourceBuildId_ByDestinationBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; destinationBuildId: string }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; destinationBuildId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; destinationBuildId: string }) => {
    const data = await UploaderV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createDiffStart_BySourceBuildId_ByDestinationBuildId(input.sourceBuildId, input.destinationBuildId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DiffStart_BySourceBuildId_ByDestinationBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchDiffCommit_BySourceBuildId_ByDestinationBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; destinationBuildId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; destinationBuildId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; destinationBuildId: string }) => {
    const data = await UploaderV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchDiffCommit_BySourceBuildId_ByDestinationBuildId(input.sourceBuildId, input.destinationBuildId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DiffCommit_BySourceBuildId_ByDestinationBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchHash_ByBuildId_ByHash_ByBlockSizeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string; blockSize: number }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string; blockSize: number }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; hash: string; blockSize: number }) => {
    const data = await UploaderV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchHash_ByBuildId_ByHash_ByBlockSize(
      input.buildId,
      input.hash,
      input.blockSize
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Hash_ByBuildId_ByHash_ByBlockSize],
    mutationFn,
    ...options
  })
}

export const useAdmCreateDiffSignedurl_BySourceBuildId_ByDestinationBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; destinationBuildId: string }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; destinationBuildId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; destinationBuildId: string }) => {
    const data = await UploaderV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createDiffSignedurl_BySourceBuildId_ByDestinationBuildId(input.sourceBuildId, input.destinationBuildId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DiffSignedurl_BySourceBuildId_ByDestinationBuildId],
    mutationFn,
    ...options
  })
}
