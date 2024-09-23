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
  DiffSend = 'Buildinfo.UploaderV3Admin.DiffSend',
  PatchSend = 'Buildinfo.UploaderV3Admin.PatchSend',
  ListenDiffStatu = 'Buildinfo.UploaderV3Admin.ListenDiffStatu',
  ListenPatchStatu = 'Buildinfo.UploaderV3Admin.ListenPatchStatu',
  Prezsyncupload_v3 = 'Buildinfo.UploaderV3Admin.Prezsyncupload_v3',
  Startbuildupload_v3 = 'Buildinfo.UploaderV3Admin.Startbuildupload_v3',
  Current_ByAppId_ByPlatformId_v3 = 'Buildinfo.UploaderV3Admin.Current_ByAppId_ByPlatformId_v3',
  Startfileupload_ByUploaderId_v3 = 'Buildinfo.UploaderV3Admin.Startfileupload_ByUploaderId_v3',
  Startzsyncfileupload_ByFileHash_v3 = 'Buildinfo.UploaderV3Admin.Startzsyncfileupload_ByFileHash_v3',
  Uploadmode_ByAppId_ByPlatformId_v3 = 'Buildinfo.UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId_v3',
  Startbuildupload_BySourceBuildId_v3 = 'Buildinfo.UploaderV3Admin.Startbuildupload_BySourceBuildId_v3',
  Commitfileupload_ByBuildId_ByHash_v3 = 'Buildinfo.UploaderV3Admin.Commitfileupload_ByBuildId_ByHash_v3',
  Commitbuildmanifest_BySourceBuildId_v3 = 'Buildinfo.UploaderV3Admin.Commitbuildmanifest_BySourceBuildId_v3',
  Commitmissingbytesfileupload_ByHash_v3 = 'Buildinfo.UploaderV3Admin.Commitmissingbytesfileupload_ByHash_v3',
  Commitzsyncfileupload_ByBuildId_ByHash_v3 = 'Buildinfo.UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash_v3',
  Version_ByAppId_ByVersion_ByPlatformId_v3 = 'Buildinfo.UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId_v3',
  Hash_ByBuildId_ByHash_ByBlockSize_v3 = 'Buildinfo.UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize_v3',
  DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3 = 'Buildinfo.UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3'
}

/**
 * This API is used to send diff request to MQ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.DiffSend, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateDiffSendMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDiffSend(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.DiffSend],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to send patch request to MQ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.PatchSend, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreatePatchSendMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPatchSend(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.PatchSend],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to listen diff status.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.ListenDiffStatu, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateListenDiffStatuMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>,
    'mutationKey'
  >,
  callback?: (data: FileDiffingStatus) => void
): UseMutationResult<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createListenDiffStatu(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.ListenDiffStatu],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to listen patch status from source file and missing bytes file to destination file.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.ListenPatchStatu, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateListenPatchStatuMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>,
    'mutationKey'
  >,
  callback?: (data: FileDiffingStatus) => void
): UseMutationResult<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createListenPatchStatu(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.ListenPatchStatu],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to check the diff status (not yet diff&#39;ed, diff&#39;ed, patched) of a file before upload its control file.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startbuildupload&lt;/li&gt;&lt;li&gt;/v3/startbuildupload/{sourceBuildId}&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload/{fileHash}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Prezsyncupload_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreatePrezsyncuploadMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DifferentialUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: PreCheckUploadRequest }>,
    'mutationKey'
  >,
  callback?: (data: DifferentialUploadSummary) => void
): UseMutationResult<DifferentialUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: PreCheckUploadRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PreCheckUploadRequest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPrezsyncupload_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Prezsyncupload_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to start build upload for v3 upload (Differential Upload). This endpoint is the startpoint of upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Startbuildupload_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateStartbuilduploadMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DifferentialBuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: DifferentialBuildManifest) => void
): UseMutationResult<DifferentialBuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UploadBuildManifest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStartbuildupload_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startbuildupload_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to the current build from particular appId. This is a utility API used by BuildUtil to determine whether there&#39;s an older build set as current. If it does, the BuildUtil will proceed the upload as differential upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Current_ByAppId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_GetCurrent_ByAppId_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string; platformId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUploaderV3AdminApi_GetCurrent_ByAppId_ByPlatformId_v3>[1]) => async () => {
      const response = await UploaderV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getCurrent_ByAppId_ByPlatformId_v3(input.appId, input.platformId)
      callback && callback(response)
      return response.data
    }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.Current_ByAppId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to start file upload, which in turn will response with presigned URL for upload target.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startbuildupload in the case of normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/startbuildupload/{sourceBuildId} in the case of normal (non-differential) incremental upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash} in the case of differential upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize in the case of differential upload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/commitfileupload//{buildId}/{hash}&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Startfileupload_ByUploaderId_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateStartfileupload_ByUploaderIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId: string; data: BinaryUpload }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId: string; data: BinaryUpload }> => {
  const mutationFn = async (input: SdkSetConfigParam & { uploaderId: string; data: BinaryUpload }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStartfileupload_ByUploaderId_v3(input.uploaderId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startfileupload_ByUploaderId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to start zsync control file upload, which in turn will respond with presigned url for the upload target.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, binaryUpload{contentMd5, contentLength, hash}Previous API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Startzsyncfileupload_ByFileHash_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateStartzsyncfileupload_ByFileHashMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { fileHash: string; data: ZsyncDiffRequest }>,
    'mutationKey'
  >,
  callback?: (data: UploadSummary) => void
): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { fileHash: string; data: ZsyncDiffRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { fileHash: string; data: ZsyncDiffRequest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStartzsyncfileupload_ByFileHash_v3(input.fileHash, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startzsyncfileupload_ByFileHash_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to see whether BuildUtil should upload in differential mode or normal mode.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_GetUploadmode_ByAppId_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string; platformId: string },
  options?: Omit<UseQueryOptions<UploadModeCheck, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UploadModeCheck>) => void
): UseQueryResult<UploadModeCheck, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUploaderV3AdminApi_GetUploadmode_ByAppId_ByPlatformId_v3>[1]) => async () => {
      const response = await UploaderV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUploadmode_ByAppId_ByPlatformId_v3(input.appId, input.platformId)
      callback && callback(response)
      return response.data
    }

  return useQuery<UploadModeCheck, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to start build upload. This endpoint used for incremental build upload, where the developer update the files from existing build version (that hasn&#39;t yet set as latest).&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Startbuildupload_BySourceBuildId_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateStartbuildupload_BySourceBuildIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DifferentialBuildManifest,
      AxiosError<ApiError>,
      SdkSetConfigParam & { sourceBuildId: string; data: UploadBuildManifest }
    >,
    'mutationKey'
  >,
  callback?: (data: DifferentialBuildManifest) => void
): UseMutationResult<
  DifferentialBuildManifest,
  AxiosError<ApiError>,
  SdkSetConfigParam & { sourceBuildId: string; data: UploadBuildManifest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId: string; data: UploadBuildManifest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStartbuildupload_BySourceBuildId_v3(input.sourceBuildId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startbuildupload_BySourceBuildId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload/{fileHash} for non-differential (normal) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Commitfileupload_ByBuildId_ByHash_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_PatchCommitfileupload_ByBuildId_ByHashMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; hash: string }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; hash: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { buildId: string; hash: string }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchCommitfileupload_ByBuildId_ByHash_v3(input.buildId, input.hash)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitfileupload_ByBuildId_ByHash_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to commit build manifest.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/listenPatchStatus in case needs to patch file&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash} in case of normal non-differential upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize in case of normal non-differential upload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Commitbuildmanifest_BySourceBuildId_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_CreateCommitbuildmanifest_BySourceBuildIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId: string; data: BuildManifest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId: string; data: BuildManifest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId: string; data: BuildManifest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createCommitbuildmanifest_BySourceBuildId_v3(input.sourceBuildId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitbuildmanifest_BySourceBuildId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to commit missing bytes file that has been uploaded to S3.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Commitmissingbytesfileupload_ByHash_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_PatchCommitmissingbytesfileupload_ByHashMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string; data: DiffPatchRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string; data: DiffPatchRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string; data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchCommitmissingbytesfileupload_ByHash_v3(input.hash, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitmissingbytesfileupload_ByHash_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, destinationControlFileUuid, destinationControlFileChecksumPrevious API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/listendiffstatus for differential upload&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_PatchCommitzsyncfileupload_ByBuildId_ByHashMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; hash: string; data: DiffPatchRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<
  BlockManifest,
  AxiosError<ApiError>,
  SdkSetConfigParam & { buildId: string; hash: string; data: DiffPatchRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { buildId: string; hash: string; data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchCommitzsyncfileupload_ByBuildId_ByHash_v3(input.buildId, input.hash, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to set current build as release version. Every build set as current will be recorded in version history as chain of history.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;//TODO previous api&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_UpdateVersion_ByAppId_ByVersion_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId: string; version: string; platformId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId: string; version: string; platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { appId: string; version: string; platformId: string }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateVersion_ByAppId_ByVersion_ByPlatformId_v3(input.appId, input.version, input.platformId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to commit chunk that has been uploaded. By commiting the file, it means flag the file as already uploaded.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, destinationControlFileUuid, destinationControlFileChecksumPrevious API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_PatchHash_ByBuildId_ByHash_ByBlockSizeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BlockManifest,
      AxiosError<ApiError>,
      SdkSetConfigParam & { buildId: string; hash: string; blockSize: number; data: DiffPatchRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<
  BlockManifest,
  AxiosError<ApiError>,
  SdkSetConfigParam & { buildId: string; hash: string; blockSize: number; data: DiffPatchRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { buildId: string; hash: string; blockSize: number; data: DiffPatchRequest }) => {
    const response = await UploaderV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchHash_ByBuildId_ByHash_ByBlockSize_v3(input.buildId, input.hash, input.blockSize, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize_v3],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get diff status manifests.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3, input]
 * }
 * ```
 */
export const useUploaderV3AdminApi_GetDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sourceBuildId: string; destinationBuildId: string; destinationFilePath: string },
  options?: Omit<UseQueryOptions<FileDiffingStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FileDiffingStatus>) => void
): UseQueryResult<FileDiffingStatus, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<
        typeof useUploaderV3AdminApi_GetDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3
      >[1]
    ) =>
    async () => {
      const response = await UploaderV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3(
        input.sourceBuildId,
        input.destinationBuildId,
        input.destinationFilePath
      )
      callback && callback(response)
      return response.data
    }

  return useQuery<FileDiffingStatus, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
