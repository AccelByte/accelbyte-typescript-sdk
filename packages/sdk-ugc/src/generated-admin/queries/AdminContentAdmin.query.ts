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
import { AdminContentAdminApi } from '../AdminContentAdminApi.js'

import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequest } from '../../generated-definitions/AdminUpdateContentRequest.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequestS3 } from '../../generated-definitions/CreateContentRequestS3.js'
import { CreateContentResponse } from '../../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../../generated-definitions/GetContentPreviewResponse.js'
import { HideContentRequest } from '../../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export enum Key_AdminContentAdmin {
  Contents = 'AdminContentAdmin.Contents',
  ContentBulk = 'AdminContentAdmin.ContentBulk',
  ContentsSearch = 'AdminContentAdmin.ContentsSearch',
  Content_ByContentId = 'AdminContentAdmin.Content_ByContentId',
  Contents_ByUserId = 'AdminContentAdmin.Contents_ByUserId',
  ContentSharecodeBulk = 'AdminContentAdmin.ContentSharecodeBulk',
  Preview_ByContentId = 'AdminContentAdmin.Preview_ByContentId',
  Versions_ByContentId = 'AdminContentAdmin.Versions_ByContentId',
  ContentSharecode_ByShareCode = 'AdminContentAdmin.ContentSharecode_ByShareCode',
  ContentS3_ByChannelId = 'AdminContentAdmin.ContentS3_ByChannelId',
  Screenshot_ByContentId = 'AdminContentAdmin.Screenshot_ByContentId',
  ContentsSearch_ByChannelId = 'AdminContentAdmin.ContentsSearch_ByChannelId',
  Hide_ByUserId_ByContentId = 'AdminContentAdmin.Hide_ByUserId_ByContentId',
  Content_ByChannelId_ByContentId = 'AdminContentAdmin.Content_ByChannelId_ByContentId',
  Rollback_ByContentId_ByVersionId = 'AdminContentAdmin.Rollback_ByContentId_ByVersionId',
  ContentS3_ByChannelId_ByContentId = 'AdminContentAdmin.ContentS3_ByChannelId_ByContentId',
  Screenshot_ByContentId_ByScreenshotId = 'AdminContentAdmin.Screenshot_ByContentId_ByScreenshotId',
  Content_ByUserId_ByChannelId_ByContentId = 'AdminContentAdmin.Content_ByUserId_ByChannelId_ByContentId',
  ContentS3_ByUserId_ByChannelId_ByContentId = 'AdminContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId',
  ContentSharecode_ByUserId_ByChannelId_ByShareCode = 'AdminContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode',
  ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = 'AdminContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode'
}

export const useAdmContents = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponse) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getContents(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.Contents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateContentBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponseArray, AxiosError<ApiError>, ApiArgs & { data: AdminGetContentBulkRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseArray) => void
): UseMutationResult<ContentDownloadResponseArray, AxiosError<ApiError>, ApiArgs & { data: AdminGetContentBulkRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AdminGetContentBulkRequest }) => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createContentBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentBulk],
    mutationFn,
    ...options
  })
}

export const useAdmContentsSearch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      creator?: string | null
      ishidden?: string | null
      isofficial?: string | null
      limit?: number
      name?: string | null
      offset?: number
      orderby?: string | null
      sortby?: string | null
      subtype?: string | null
      tags?: string[]
      type?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponse) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContentsSearch>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getContentsSearch(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.ContentsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContent_ByContentId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { contentId: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ContentDownloadResponse) => void
): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContent_ByContentId>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getContent_ByContentId(input.contentId)
    callback && callback(data)
    return data
  }

  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.Content_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContents_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponse) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByUserId>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getContents_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.Contents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateContentSharecodeBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponseArray, AxiosError<ApiError>, ApiArgs & { data: GetContentBulkByShareCodesRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseArray) => void
): UseMutationResult<ContentDownloadResponseArray, AxiosError<ApiError>, ApiArgs & { data: GetContentBulkByShareCodesRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: GetContentBulkByShareCodesRequest }) => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createContentSharecodeBulk(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentSharecodeBulk],
    mutationFn,
    ...options
  })
}

export const useAdmPreview_ByContentId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { contentId: string },
  options?: Omit<UseQueryOptions<GetContentPreviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetContentPreviewResponse) => void
): UseQueryResult<GetContentPreviewResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPreview_ByContentId>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getPreview_ByContentId(input.contentId)
    callback && callback(data)
    return data
  }

  return useQuery<GetContentPreviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.Preview_ByContentId, input],
    queryFn: queryFn(sdk, input),
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
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getVersions_ByContentId(input.contentId)
    callback && callback(data)
    return data
  }

  return useQuery<ListContentVersionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.Versions_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContentSharecode_ByShareCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { shareCode: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ContentDownloadResponse) => void
): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContentSharecode_ByShareCode>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getContentSharecode_ByShareCode(input.shareCode)
    callback && callback(data)
    return data
  }

  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.ContentSharecode_ByShareCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateContentS3_ByChannelIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, ApiArgs & { channelId: string; data: CreateContentRequestS3 }>,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, ApiArgs & { channelId: string; data: CreateContentRequestS3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; data: CreateContentRequestS3 }) => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createContentS3_ByChannelId(
      input.channelId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentS3_ByChannelId],
    mutationFn,
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
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).createScreenshot_ByContentId(
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Screenshot_ByContentId],
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
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateScreenshot_ByContentId(
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Screenshot_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmContentsSearch_ByChannelId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    channelId: string
    queryParams?: {
      creator?: string | null
      ishidden?: string | null
      isofficial?: string | null
      limit?: number
      name?: string | null
      offset?: number
      orderby?: string | null
      sortby?: string | null
      subtype?: string | null
      tags?: string[]
      type?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponse) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContentsSearch_ByChannelId>[1]) => async () => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace }).getContentsSearch_ByChannelId(
      input.channelId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminContentAdmin.ContentsSearch_ByChannelId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateHide_ByUserId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; contentId: string; data: HideContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; contentId: string; data: HideContentRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; contentId: string; data: HideContentRequest }) => {
    const data = await AdminContentAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateHide_ByUserId_ByContentId(
      input.userId,
      input.contentId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Hide_ByUserId_ByContentId],
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
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteContent_ByChannelId_ByContentId(input.channelId, input.contentId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Content_ByChannelId_ByContentId],
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
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRollback_ByContentId_ByVersionId(input.contentId, input.versionId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Rollback_ByContentId_ByVersionId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateContentS3_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      ApiArgs & { channelId: string; contentId: string; data: AdminUpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  ApiArgs & { channelId: string; contentId: string; data: AdminUpdateContentRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; contentId: string; data: AdminUpdateContentRequest }) => {
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateContentS3_ByChannelId_ByContentId(input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentS3_ByChannelId_ByContentId],
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
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteScreenshot_ByContentId_ByScreenshotId(input.contentId, input.screenshotId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Screenshot_ByContentId_ByScreenshotId],
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
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateContentS3_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequest }) => {
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateContentS3_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId],
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
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequest }) => {
    const data = await AdminContentAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
