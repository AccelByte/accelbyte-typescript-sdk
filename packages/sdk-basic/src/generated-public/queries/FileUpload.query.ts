/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { FileUploadApi } from '../FileUploadApi.js'

import { FileUploadUrlInfo } from '../../generated-definitions/FileUploadUrlInfo.js'

export enum Key_FileUpload {
  File_ByUserId = 'Basic.FileUpload.File_ByUserId',
  File_ByFolder = 'Basic.FileUpload.File_ByFolder'
}

/**
 * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;There are two types of storage limits per user: maximum file count and maximum total file size.&lt;br/&gt;These limits vary depending on the upload category used.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Default category:&lt;/b&gt;&lt;br/&gt;- Maximum file count per user: 10 files&lt;br/&gt;- Maximum total file size per user: 100MB&lt;br/&gt;&lt;b&gt;2. Reporting category:&lt;/b&gt;&lt;br/&gt;- Maximum file count per user: 3 files every 1 hour&lt;br/&gt;- Maximum total file size per user: 30MB every 1 hour&lt;br/&gt;&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FileUpload.File_ByUserId, input]
 * }
 * ```
 */
export const useFileUploadApi_CreateFile_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FileUploadUrlInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; queryParams: { fileType: string | null; category?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FileUploadUrlInfo) => void
): UseMutationResult<
  FileUploadUrlInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; queryParams: { fileType: string | null; category?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; queryParams: { fileType: string | null; category?: string | null } }
  ) => {
    const response = await FileUploadApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFile_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FileUpload.File_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FileUpload.File_ByFolder, input]
 * }
 * ```
 */
export const useFileUploadApi_CreateFile_ByFolderMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FileUploadUrlInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { folder: string; queryParams: { fileType: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FileUploadUrlInfo) => void
): UseMutationResult<
  FileUploadUrlInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { folder: string; queryParams: { fileType: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { folder: string; queryParams: { fileType: string | null } }) => {
    const response = await FileUploadApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFile_ByFolder(
      input.folder,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FileUpload.File_ByFolder],
    mutationFn,
    ...options
  })
}
