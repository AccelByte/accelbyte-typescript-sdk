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
import { FileUploadAdminApi } from '../FileUploadAdminApi.js'

import { FileUploadUrlInfo } from '../../generated-definitions/FileUploadUrlInfo.js'

export enum Key_FileUploadAdmin {
  File_ByUserId = 'FileUploadAdmin.File_ByUserId',
  File_ByFolder = 'FileUploadAdmin.File_ByFolder'
}

export const useAdmCreateFile_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FileUploadUrlInfo,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; queryParams: { fileType: string | null; category?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FileUploadUrlInfo) => void
): UseMutationResult<
  FileUploadUrlInfo,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; queryParams: { fileType: string | null; category?: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; queryParams: { fileType: string | null; category?: string | null } }) => {
    const data = await FileUploadAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFile_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FileUploadAdmin.File_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFile_ByFolderMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FileUploadUrlInfo, AxiosError<ApiError>, ApiArgs & { folder: string; queryParams: { fileType: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FileUploadUrlInfo) => void
): UseMutationResult<FileUploadUrlInfo, AxiosError<ApiError>, ApiArgs & { folder: string; queryParams: { fileType: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { folder: string; queryParams: { fileType: string | null } }) => {
    const data = await FileUploadAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFile_ByFolder(
      input.folder,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_FileUploadAdmin.File_ByFolder],
    mutationFn,
    ...options
  })
}
