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
import { UploaderV3AdminApi } from '../UploaderV3AdminApi.js'

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { DiffPatchRequest } from '../../generated-definitions/DiffPatchRequest.js'
import { DifferentialBuildManifest } from '../../generated-definitions/DifferentialBuildManifest.js'
import { DifferentialUploadSummary } from '../../generated-definitions/DifferentialUploadSummary.js'
import { FileDiffingStatus } from '../../generated-definitions/FileDiffingStatus.js'
import { PreCheckUploadRequest } from '../../generated-definitions/PreCheckUploadRequest.js'
import { UploadBuildManifest } from '../../generated-definitions/UploadBuildManifest.js'
import { UploadModeCheck } from '../../generated-definitions/UploadModeCheck.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'
import { ZsyncDiffRequest } from '../../generated-definitions/ZsyncDiffRequest.js'

export enum Key_UploaderV3Admin {
  DiffSend = 'UploaderV3Admin.DiffSend',
  PatchSend = 'UploaderV3Admin.PatchSend',
  ListenDiffStatu = 'UploaderV3Admin.ListenDiffStatu',
  ListenPatchStatu = 'UploaderV3Admin.ListenPatchStatu',
  Prezsyncupload = 'UploaderV3Admin.Prezsyncupload',
  Startbuildupload = 'UploaderV3Admin.Startbuildupload',
  Current_ByAppId_ByPlatformId = 'UploaderV3Admin.Current_ByAppId_ByPlatformId',
  Startfileupload_ByUploaderId = 'UploaderV3Admin.Startfileupload_ByUploaderId',
  Startzsyncfileupload_ByFileHash = 'UploaderV3Admin.Startzsyncfileupload_ByFileHash',
  Uploadmode_ByAppId_ByPlatformId = 'UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId',
  Startbuildupload_BySourceBuildId = 'UploaderV3Admin.Startbuildupload_BySourceBuildId',
  Commitfileupload_ByBuildId_ByHash = 'UploaderV3Admin.Commitfileupload_ByBuildId_ByHash',
  Commitbuildmanifest_BySourceBuildId = 'UploaderV3Admin.Commitbuildmanifest_BySourceBuildId',
  Commitmissingbytesfileupload_ByHash = 'UploaderV3Admin.Commitmissingbytesfileupload_ByHash',
  Commitzsyncfileupload_ByBuildId_ByHash = 'UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash',
  Version_ByAppId_ByVersion_ByPlatformId = 'UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId',
  Hash_ByBuildId_ByHash_ByBlockSize = 'UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize',
  DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath = 'UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath'
}

export const useAdmCreateDiffSendMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createDiffSend(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.DiffSend],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePatchSendMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createPatchSend(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.PatchSend],
    mutationFn,
    ...options
  })
}

export const useAdmCreateListenDiffStatuMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<FileDiffingStatus, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }>, 'mutationKey'>,
  callback?: (data: FileDiffingStatus) => void
): UseMutationResult<FileDiffingStatus, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createListenDiffStatu(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.ListenDiffStatu],
    mutationFn,
    ...options
  })
}

export const useAdmCreateListenPatchStatuMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<FileDiffingStatus, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }>, 'mutationKey'>,
  callback?: (data: FileDiffingStatus) => void
): UseMutationResult<FileDiffingStatus, AxiosError<ApiError>, ApiArgs & { data: DiffPatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createListenPatchStatu(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.ListenPatchStatu],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePrezsyncuploadMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DifferentialUploadSummary, AxiosError<ApiError>, ApiArgs & { data: PreCheckUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: DifferentialUploadSummary) => void
): UseMutationResult<DifferentialUploadSummary, AxiosError<ApiError>, ApiArgs & { data: PreCheckUploadRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PreCheckUploadRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createPrezsyncupload(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Prezsyncupload],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartbuilduploadMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DifferentialBuildManifest, AxiosError<ApiError>, ApiArgs & { data: UploadBuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: DifferentialBuildManifest) => void
): UseMutationResult<DifferentialBuildManifest, AxiosError<ApiError>, ApiArgs & { data: UploadBuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UploadBuildManifest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartbuildupload(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startbuildupload],
    mutationFn,
    ...options
  })
}

export const useAdmCurrent_ByAppId_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { appId: string; platformId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildManifest) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCurrent_ByAppId_ByPlatformId>[1]) => async () => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace }).getCurrent_ByAppId_ByPlatformId(
      input.appId,
      input.platformId
    )
    callback && callback(data)
    return data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.Current_ByAppId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
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
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartfileupload_ByUploaderId(
      input.uploaderId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startfileupload_ByUploaderId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStartzsyncfileupload_ByFileHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, ApiArgs & { fileHash: string; data: ZsyncDiffRequest }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, ApiArgs & { fileHash: string; data: ZsyncDiffRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { fileHash: string; data: ZsyncDiffRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartzsyncfileupload_ByFileHash(
      input.fileHash,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startzsyncfileupload_ByFileHash],
    mutationFn,
    ...options
  })
}

export const useAdmUploadmode_ByAppId_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { appId: string; platformId: string },
  options?: Omit<UseQueryOptions<UploadModeCheck, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UploadModeCheck) => void
): UseQueryResult<UploadModeCheck, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUploadmode_ByAppId_ByPlatformId>[1]) => async () => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace }).getUploadmode_ByAppId_ByPlatformId(
      input.appId,
      input.platformId
    )
    callback && callback(data)
    return data
  }

  return useQuery<UploadModeCheck, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStartbuildupload_BySourceBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DifferentialBuildManifest, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: DifferentialBuildManifest) => void
): UseMutationResult<DifferentialBuildManifest, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; data: UploadBuildManifest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createStartbuildupload_BySourceBuildId(
      input.sourceBuildId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startbuildupload_BySourceBuildId],
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
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchCommitfileupload_ByBuildId_ByHash(
      input.buildId,
      input.hash
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitfileupload_ByBuildId_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmCreateCommitbuildmanifest_BySourceBuildIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: BuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { sourceBuildId: string; data: BuildManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { sourceBuildId: string; data: BuildManifest }) => {
    const data = await UploaderV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createCommitbuildmanifest_BySourceBuildId(input.sourceBuildId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitbuildmanifest_BySourceBuildId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchCommitmissingbytesfileupload_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string; data: DiffPatchRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string; data: DiffPatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string; data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchCommitmissingbytesfileupload_ByHash(input.hash, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitmissingbytesfileupload_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmPatchCommitzsyncfileupload_ByBuildId_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string; data: DiffPatchRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { buildId: string; hash: string; data: DiffPatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; hash: string; data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchCommitzsyncfileupload_ByBuildId_ByHash(input.buildId, input.hash, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash],
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
    const data = await UploaderV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateVersion_ByAppId_ByVersion_ByPlatformId(input.appId, input.version, input.platformId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchHash_ByBuildId_ByHash_ByBlockSizeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BlockManifest,
      AxiosError<ApiError>,
      ApiArgs & { buildId: string; hash: string; blockSize: number; data: DiffPatchRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<
  BlockManifest,
  AxiosError<ApiError>,
  ApiArgs & { buildId: string; hash: string; blockSize: number; data: DiffPatchRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { buildId: string; hash: string; blockSize: number; data: DiffPatchRequest }) => {
    const data = await UploaderV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).patchHash_ByBuildId_ByHash_ByBlockSize(
      input.buildId,
      input.hash,
      input.blockSize,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize],
    mutationFn,
    ...options
  })
}

export const useAdmDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { sourceBuildId: string; destinationBuildId: string; destinationFilePath: string },
  options?: Omit<UseQueryOptions<FileDiffingStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FileDiffingStatus) => void
): UseQueryResult<FileDiffingStatus, AxiosError<ApiError>> => {
  //
  const queryFn =
    (
      sdk: AccelbyteSDK,
      input: Parameters<typeof useAdmDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath>[1]
    ) =>
    async () => {
      const data = await UploaderV3AdminApi(sdk, {
        namespace: input.namespace
      }).getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath(
        input.sourceBuildId,
        input.destinationBuildId,
        input.destinationFilePath
      )
      callback && callback(data)
      return data
    }

  return useQuery<FileDiffingStatus, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
