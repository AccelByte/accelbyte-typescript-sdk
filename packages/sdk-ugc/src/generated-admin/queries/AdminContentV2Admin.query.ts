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
import { AdminContentV2AdminApi } from '../AdminContentV2AdminApi.js'

import { AdminContentRequestV2 } from '../../generated-definitions/AdminContentRequestV2.js'
import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequestV2 } from '../../generated-definitions/AdminUpdateContentRequestV2.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseV2 } from '../../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../../generated-definitions/ContentDownloadResponseV2Array.js'
import { CreateContentResponseV2 } from '../../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { HideContentRequest } from '../../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { UpdateContentResponseV2 } from '../../generated-definitions/UpdateContentResponseV2.js'
import { UpdateFileLocationRequest } from '../../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export enum Key_AdminContentV2Admin {
  Contents = 'AdminContentV2Admin.Contents',
  ContentBulk = 'AdminContentV2Admin.ContentBulk',
  Content_ByContentId = 'AdminContentV2Admin.Content_ByContentId',
  Contents_ByUserId = 'AdminContentV2Admin.Contents_ByUserId',
  ContentSharecodeBulk = 'AdminContentV2Admin.ContentSharecodeBulk',
  Contents_ByChannelId = 'AdminContentV2Admin.Contents_ByChannelId',
  Content_ByChannelId = 'AdminContentV2Admin.Content_ByChannelId',
  Versions_ByContentId = 'AdminContentV2Admin.Versions_ByContentId',
  ContentSharecode_ByShareCode = 'AdminContentV2Admin.ContentSharecode_ByShareCode',
  Screenshot_ByContentId = 'AdminContentV2Admin.Screenshot_ByContentId',
  Hide_ByUserId_ByContentId = 'AdminContentV2Admin.Hide_ByUserId_ByContentId',
  Content_ByChannelId_ByContentId = 'AdminContentV2Admin.Content_ByChannelId_ByContentId',
  Rollback_ByContentId_ByVersionId = 'AdminContentV2Admin.Rollback_ByContentId_ByVersionId',
  Screenshot_ByContentId_ByScreenshotId = 'AdminContentV2Admin.Screenshot_ByContentId_ByScreenshotId',
  UploadUrl_ByChannelId_ByContentId = 'AdminContentV2Admin.UploadUrl_ByChannelId_ByContentId',
  FileLocation_ByChannelId_ByContentId = 'AdminContentV2Admin.FileLocation_ByChannelId_ByContentId',
  Content_ByUserId_ByChannelId_ByContentId = 'AdminContentV2Admin.Content_ByUserId_ByChannelId_ByContentId',
  UploadUrl_ByUserId_ByChannelId_ByContentId = 'AdminContentV2Admin.UploadUrl_ByUserId_ByChannelId_ByContentId',
  ContentSharecode_ByUserId_ByChannelId_ByShareCode = 'AdminContentV2Admin.ContentSharecode_ByUserId_ByChannelId_ByShareCode',
  FileLocation_ByUserId_ByChannelId_ByContentId = 'AdminContentV2Admin.FileLocation_ByUserId_ByChannelId_ByContentId',
  ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = 'AdminContentV2Admin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode'
}

export const useAdmContents = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      isOfficial?: boolean | null
      limit?: number
      name?: string | null
      offset?: number
      sortBy?: string | null
      subType?: string | null
      tags?: string[]
      type?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponseV2) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents>[1]) => async () => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace }).getContents(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentV2Admin.Contents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateContentBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponseV2Array, AxiosError<ApiError>, ApiArgs & { data: AdminGetContentBulkRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseV2Array) => void
): UseMutationResult<ContentDownloadResponseV2Array, AxiosError<ApiError>, ApiArgs & { data: AdminGetContentBulkRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AdminGetContentBulkRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createContentBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.ContentBulk],
    mutationFn,
    ...options
  })
}

export const useAdmContent_ByContentId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { contentId: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ContentDownloadResponseV2) => void
): UseQueryResult<ContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContent_ByContentId>[1]) => async () => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace }).getContent_ByContentId(input.contentId)
    callback && callback(data)
    return data
  }

  return useQuery<ContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentV2Admin.Content_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContents_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponseV2) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByUserId>[1]) => async () => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace }).getContents_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentV2Admin.Contents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateContentSharecodeBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponseV2Array, AxiosError<ApiError>, ApiArgs & { data: GetContentBulkByShareCodesRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseV2Array) => void
): UseMutationResult<ContentDownloadResponseV2Array, AxiosError<ApiError>, ApiArgs & { data: GetContentBulkByShareCodesRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: GetContentBulkByShareCodesRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createContentSharecodeBulk(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.ContentSharecodeBulk],
    mutationFn,
    ...options
  })
}

export const useAdmContents_ByChannelId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { channelId: string; queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponseV2) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByChannelId>[1]) => async () => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace }).getContents_ByChannelId(
      input.channelId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentV2Admin.Contents_ByChannelId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateContent_ByChannelIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateContentResponseV2, AxiosError<ApiError>, ApiArgs & { channelId: string; data: AdminContentRequestV2 }>,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponseV2) => void
): UseMutationResult<CreateContentResponseV2, AxiosError<ApiError>, ApiArgs & { channelId: string; data: AdminContentRequestV2 }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; data: AdminContentRequestV2 }) => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createContent_ByChannelId(
      input.channelId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Content_ByChannelId],
    mutationFn,
    ...options
  })
}

export const useAdmVersions_ByContentId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { contentId: string },
  options?: Omit<UseQueryOptions<ListContentVersionsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListContentVersionsResponse) => void
): UseQueryResult<ListContentVersionsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmVersions_ByContentId>[1]) => async () => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace }).getVersions_ByContentId(input.contentId)
    callback && callback(data)
    return data
  }

  return useQuery<ListContentVersionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentV2Admin.Versions_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContentSharecode_ByShareCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { shareCode: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ContentDownloadResponseV2) => void
): UseQueryResult<ContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContentSharecode_ByShareCode>[1]) => async () => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace }).getContentSharecode_ByShareCode(input.shareCode)
    callback && callback(data)
    return data
  }

  return useQuery<ContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentV2Admin.ContentSharecode_ByShareCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateScreenshot_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateScreenshotResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; data: CreateScreenshotRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateScreenshotResponse) => void
): UseMutationResult<CreateScreenshotResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; data: CreateScreenshotRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { contentId: string; data: CreateScreenshotRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).createScreenshot_ByContentId(
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Screenshot_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateScreenshot_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UpdateScreenshotResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; data: UpdateScreenshotRequest }>,
    'mutationKey'
  >,
  callback?: (data: UpdateScreenshotResponse) => void
): UseMutationResult<UpdateScreenshotResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; data: UpdateScreenshotRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { contentId: string; data: UpdateScreenshotRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateScreenshot_ByContentId(
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Screenshot_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateHide_ByUserId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponseV2,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; contentId: string; data: HideContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponseV2) => void
): UseMutationResult<
  CreateContentResponseV2,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; contentId: string; data: HideContentRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; contentId: string; data: HideContentRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateHide_ByUserId_ByContentId(
      input.userId,
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Hide_ByUserId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteContent_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelId: string; contentId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelId: string; contentId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; contentId: string }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteContent_ByChannelId_ByContentId(input.channelId, input.contentId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Content_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchContent_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      ApiArgs & { channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  ApiArgs & { channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchContent_ByChannelId_ByContentId(input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Content_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRollback_ByContentId_ByVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; versionId: string }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponse) => void
): UseMutationResult<ContentDownloadResponse, AxiosError<ApiError>, ApiArgs & { contentId: string; versionId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { contentId: string; versionId: string }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRollback_ByContentId_ByVersionId(input.contentId, input.versionId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Rollback_ByContentId_ByVersionId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteScreenshot_ByContentId_ByScreenshotIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { contentId: string; screenshotId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { contentId: string; screenshotId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { contentId: string; screenshotId: string }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteScreenshot_ByContentId_ByScreenshotId(input.contentId, input.screenshotId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Screenshot_ByContentId_ByScreenshotId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchUploadUrl_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GenerateContentUploadUrlResponse,
      AxiosError<ApiError>,
      ApiArgs & { channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GenerateContentUploadUrlResponse) => void
): UseMutationResult<
  GenerateContentUploadUrlResponse,
  AxiosError<ApiError>,
  ApiArgs & { channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchUploadUrl_ByChannelId_ByContentId(input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.UploadUrl_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchFileLocation_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      ApiArgs & { channelId: string; contentId: string; data: UpdateFileLocationRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  ApiArgs & { channelId: string; contentId: string; data: UpdateFileLocationRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; contentId: string; data: UpdateFileLocationRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchFileLocation_ByChannelId_ByContentId(input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.FileLocation_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteContent_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string; contentId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string; contentId: string }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchContent_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
  ) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchUploadUrl_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GenerateContentUploadUrlResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GenerateContentUploadUrlResponse) => void
): UseMutationResult<
  GenerateContentUploadUrlResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
  ) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchUploadUrl_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.UploadUrl_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteContentSharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string; shareCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string; shareCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string; shareCode: string }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.ContentSharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}

export const useAdmPatchFileLocation_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; channelId: string; contentId: string; data: UpdateFileLocationRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; contentId: string; data: UpdateFileLocationRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string; contentId: string; data: UpdateFileLocationRequest }) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchFileLocation_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.FileLocation_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponseV2,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponseV2) => void
): UseMutationResult<
  CreateContentResponseV2,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequestV2 }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequestV2 }
  ) => {
    const data = await AdminContentV2AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentV2Admin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
