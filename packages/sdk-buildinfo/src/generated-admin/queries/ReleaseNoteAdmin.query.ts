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
import { ReleaseNoteAdminApi } from '../ReleaseNoteAdminApi.js'

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { ReleaseNoteDto } from '../../generated-definitions/ReleaseNoteDto.js'
import { ReleaseNoteManifest } from '../../generated-definitions/ReleaseNoteManifest.js'

export enum Key_ReleaseNoteAdmin {
  ReleasenoteUploadCommit_ByHash = 'ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash',
  ReleasenoteUploadStart_ByUploaderId = 'ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId',
  ReleasenoteManifestSave_ByUploadMode = 'ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode',
  ReleasenoteManifestGet_ByAppId_ByPlatformId = 'ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId'
}

export const useAdmPatchReleasenoteUploadCommit_ByHashMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }>, 'mutationKey'>,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { hash: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { hash: string }) => {
    const data = await ReleaseNoteAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchReleasenoteUploadCommit_ByHash(
      input.hash
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash],
    mutationFn,
    ...options
  })
}

export const useAdmCreateReleasenoteUploadStart_ByUploaderIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BlockManifest, AxiosError<ApiError>, ApiArgs & { uploaderId: string; data: BinaryUpload }>,
    'mutationKey'
  >,
  callback?: (data: BlockManifest) => void
): UseMutationResult<BlockManifest, AxiosError<ApiError>, ApiArgs & { uploaderId: string; data: BinaryUpload }> => {
  //
  const mutationFn = async (input: ApiArgs & { uploaderId: string; data: BinaryUpload }) => {
    const data = await ReleaseNoteAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createReleasenoteUploadStart_ByUploaderId(input.uploaderId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateReleasenoteManifestSave_ByUploadModeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { uploadMode: string; data: ReleaseNoteManifest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { uploadMode: string; data: ReleaseNoteManifest }> => {
  //
  const mutationFn = async (input: ApiArgs & { uploadMode: string; data: ReleaseNoteManifest }) => {
    const data = await ReleaseNoteAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createReleasenoteManifestSave_ByUploadMode(input.uploadMode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode],
    mutationFn,
    ...options
  })
}

export const useAdmReleasenoteManifestGet_ByAppId_ByPlatformId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { appId: string; platformId: string; queryParams?: { version?: string | null } },
  options?: Omit<UseQueryOptions<ReleaseNoteDto, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ReleaseNoteDto) => void
): UseQueryResult<ReleaseNoteDto, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReleasenoteManifestGet_ByAppId_ByPlatformId>[1]) => async () => {
    const data = await ReleaseNoteAdminApi(sdk, { namespace: input.namespace }).getReleasenoteManifestGet_ByAppId_ByPlatformId(
      input.appId,
      input.platformId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<ReleaseNoteDto, AxiosError<ApiError>>({
    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
