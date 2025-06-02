/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ReleaseNoteAdminApi } from '../ReleaseNoteAdminApi.js'

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { ReleaseNoteDto } from '../../generated-definitions/ReleaseNoteDto.js'
import { ReleaseNoteManifest } from '../../generated-definitions/ReleaseNoteManifest.js'

export enum Key_ReleaseNoteAdmin {
  ReleasenoteUploadCommit_ByHash = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash',
  ReleasenoteUploadStart_ByUploaderId = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId',
  ReleasenoteManifestSave_ByUploadMode = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode',
  ReleasenoteManifestGet_ByAppId_ByPlatformId = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId'
}

/**
 * This API is used to commit release note file that has been uploaded to signal completion.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash, input]
 * }
 * ```
 */
export const useReleaseNoteAdminApi_PatchReleasenoteUploadCommit_ByHashMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { hash: string }) => {
    const response = await ReleaseNoteAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchReleasenoteUploadCommit_ByHash(input.hash)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to start release note upload and get the presigned URL.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId, input]
 * }
 * ```
 */
export const useReleaseNoteAdminApi_CreateReleasenoteUploadStart_ByUploaderIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId: string; data: BinaryUpload }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId: string; data: BinaryUpload }> => {
  const mutationFn = async (input: SdkSetConfigParam & { uploaderId: string; data: BinaryUpload }) => {
    const response = await ReleaseNoteAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createReleasenoteUploadStart_ByUploaderId(input.uploaderId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to save release note manifest.&lt;p&gt;It will update the existing release note manifest if exist (based on namespace, appId, platformId and version).&lt;br/&gt;Otherwise, it will create a new release note manifest.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Upload Mode for existing release note manifest:&lt;/b&gt;&lt;br/&gt;0 = update, will merge the old localizations with the new localizations.&lt;br/&gt;1 = replace, will replace the old localizations with the new localizations.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode, input]
 * }
 * ```
 */
export const useReleaseNoteAdminApi_CreateReleasenoteManifestSave_ByUploadModeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { uploadMode: string; data: ReleaseNoteManifest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { uploadMode: string; data: ReleaseNoteManifest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { uploadMode: string; data: ReleaseNoteManifest }) => {
    const response = await ReleaseNoteAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createReleasenoteManifestSave_ByUploadMode(input.uploadMode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get release note manifest.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId, input]
 * }
 * ```
 */
export const useReleaseNoteAdminApi_GetReleasenoteManifestGet_ByAppId_ByPlatformId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string; platformId: string; queryParams?: { version?: string | null } },
  options?: Omit<UseQueryOptions<ReleaseNoteDto, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ReleaseNoteDto>) => void
): UseQueryResult<ReleaseNoteDto, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useReleaseNoteAdminApi_GetReleasenoteManifestGet_ByAppId_ByPlatformId>[1]) => async () => {
      const response = await ReleaseNoteAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getReleasenoteManifestGet_ByAppId_ByPlatformId(input.appId, input.platformId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ReleaseNoteDto, AxiosError<ApiError>>({
    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
