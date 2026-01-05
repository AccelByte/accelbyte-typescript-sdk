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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ContentV2AdminApi } from '../ContentV2AdminApi.js'

import { AdminContentRequestV2 } from '../../generated-definitions/AdminContentRequestV2.js'
import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequestV2 } from '../../generated-definitions/AdminUpdateContentRequestV2.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseV2 } from '../../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../../generated-definitions/ContentDownloadResponseV2Array.js'
import { CopyContentRequest } from '../../generated-definitions/CopyContentRequest.js'
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

export enum Key_ContentV2Admin {
  Contents_v2 = 'Ugc.ContentV2Admin.Contents_v2',
  ContentBulk_v2 = 'Ugc.ContentV2Admin.ContentBulk_v2',
  Content_ByContentId_v2 = 'Ugc.ContentV2Admin.Content_ByContentId_v2',
  Contents_ByUserId_v2 = 'Ugc.ContentV2Admin.Contents_ByUserId_v2',
  ContentSharecodeBulk_v2 = 'Ugc.ContentV2Admin.ContentSharecodeBulk_v2',
  Contents_ByChannelId_v2 = 'Ugc.ContentV2Admin.Contents_ByChannelId_v2',
  Content_ByChannelId_v2 = 'Ugc.ContentV2Admin.Content_ByChannelId_v2',
  Versions_ByContentId_v2 = 'Ugc.ContentV2Admin.Versions_ByContentId_v2',
  ContentSharecode_ByShareCode_v2 = 'Ugc.ContentV2Admin.ContentSharecode_ByShareCode_v2',
  Screenshot_ByContentId_v2 = 'Ugc.ContentV2Admin.Screenshot_ByContentId_v2',
  Hide_ByUserId_ByContentId_v2 = 'Ugc.ContentV2Admin.Hide_ByUserId_ByContentId_v2',
  Content_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.Content_ByChannelId_ByContentId_v2',
  Rollback_ByContentId_ByVersionId_v2 = 'Ugc.ContentV2Admin.Rollback_ByContentId_ByVersionId_v2',
  Copy_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.Copy_ByChannelId_ByContentId_v2',
  Screenshot_ByContentId_ByScreenshotId_v2 = 'Ugc.ContentV2Admin.Screenshot_ByContentId_ByScreenshotId_v2',
  UploadUrl_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.UploadUrl_ByChannelId_ByContentId_v2',
  FileLocation_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.FileLocation_ByChannelId_ByContentId_v2',
  Content_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.Content_ByUserId_ByChannelId_ByContentId_v2',
  UploadUrl_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.UploadUrl_ByUserId_ByChannelId_ByContentId_v2',
  ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2 = 'Ugc.ContentV2Admin.ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2',
  FileLocation_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.ContentV2Admin.FileLocation_ByUserId_ByChannelId_ByContentId_v2',
  ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2 = 'Ugc.ContentV2Admin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2'
}

/**
 * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Contents_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_GetContents_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_GetContents_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContents_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.Contents_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Maximum contentId per request 100
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.ContentBulk_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_FetchContentBulk_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: AdminGetContentBulkRequest },
  options?: Omit<UseQueryOptions<ContentDownloadResponseV2Array, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponseV2Array>) => void
): UseQueryResult<ContentDownloadResponseV2Array, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_FetchContentBulk_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchContentBulk_v2(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponseV2Array, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.ContentBulk_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get content by content ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Content_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_GetContent_ByContentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponseV2>) => void
): UseQueryResult<ContentDownloadResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_GetContent_ByContentId_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContent_ByContentId_v2(input.contentId)
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.Content_ByContentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user cotent
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Contents_ByUserId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_GetContents_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_GetContents_ByUserId_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContents_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.Contents_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Maximum sharecodes per request 100
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.ContentSharecodeBulk_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_FetchContentSharecodeBulk_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest },
  options?: Omit<UseQueryOptions<ContentDownloadResponseV2Array, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponseV2Array>) => void
): UseQueryResult<ContentDownloadResponseV2Array, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_FetchContentSharecodeBulk_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchContentSharecodeBulk_v2(input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponseV2Array, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.ContentSharecodeBulk_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List content specific to a channel
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Contents_ByChannelId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_GetContents_ByChannelId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    channelId: string
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_GetContents_ByChannelId_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContents_ByChannelId_v2(input.channelId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.Contents_ByChannelId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create official content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Content_ByChannelId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_CreateContent_ByChannelIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; data: AdminContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponseV2) => void
): UseMutationResult<
  CreateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; data: AdminContentRequestV2 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; data: AdminContentRequestV2 }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createContent_ByChannelId_v2(input.channelId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Content_ByChannelId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Versions_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_GetVersions_ByContentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<ListContentVersionsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListContentVersionsResponse>) => void
): UseQueryResult<ListContentVersionsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_GetVersions_ByContentId_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getVersions_ByContentId_v2(input.contentId)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListContentVersionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.Versions_ByContentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get content by share code
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.ContentSharecode_ByShareCode_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_GetContentSharecode_ByShareCode_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { shareCode: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponseV2>) => void
): UseQueryResult<ContentDownloadResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentV2AdminApi_GetContentSharecode_ByShareCode_v2>[1]) => async () => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContentSharecode_ByShareCode_v2(input.shareCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_ContentV2Admin.ContentSharecode_ByShareCode_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint used to request upload URL from content&#39;s screenshot. If *contentType* is not specified, it will use *fileExtension* value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Screenshot_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_CreateScreenshot_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateScreenshotResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { contentId: string; data: CreateScreenshotRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateScreenshotResponse) => void
): UseMutationResult<
  CreateScreenshotResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { contentId: string; data: CreateScreenshotRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; data: CreateScreenshotRequest }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createScreenshot_ByContentId_v2(input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Screenshot_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Maximum description length: 1024
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Screenshot_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_UpdateScreenshot_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateScreenshotResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { contentId: string; data: UpdateScreenshotRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateScreenshotResponse) => void
): UseMutationResult<
  UpdateScreenshotResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { contentId: string; data: UpdateScreenshotRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; data: UpdateScreenshotRequest }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateScreenshot_ByContentId_v2(input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Screenshot_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Hide/Unhide user&#39;s generated contents
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Hide_ByUserId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_UpdateHide_ByUserId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; contentId: string; data: HideContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponseV2) => void
): UseMutationResult<
  CreateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; contentId: string; data: HideContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string; data: HideContentRequest }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateHide_ByUserId_ByContentId_v2(input.userId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Hide_ByUserId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Delete existing official content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Content_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_DeleteContent_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId: string; contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContent_ByChannelId_ByContentId_v2(input.channelId, input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Content_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Update existing official content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Content_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_PatchContent_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchContent_ByChannelId_ByContentId_v2(input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Content_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Rollback content&#39;s payload to specified version
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Rollback_ByContentId_ByVersionId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_UpdateRollback_ByContentId_ByVersionIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; versionId: string }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponse) => void
): UseMutationResult<ContentDownloadResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; versionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; versionId: string }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRollback_ByContentId_ByVersionId_v2(input.contentId, input.versionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Rollback_ByContentId_ByVersionId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Copy existing content from source channel to target channel.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Copy_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_CreateCopy_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ContentDownloadResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; contentId: string; data: CopyContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseV2) => void
): UseMutationResult<
  ContentDownloadResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; contentId: string; data: CopyContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string; data: CopyContentRequest }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createCopy_ByChannelId_ByContentId_v2(input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Copy_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Delete screenshot from a content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Screenshot_ByContentId_ByScreenshotId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_DeleteScreenshot_ByContentId_ByScreenshotIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; screenshotId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; screenshotId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; screenshotId: string }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteScreenshot_ByContentId_ByScreenshotId_v2(input.contentId, input.screenshotId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Screenshot_ByContentId_ByScreenshotId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Generate official content upload URL
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.UploadUrl_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_PatchUploadUrl_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GenerateContentUploadUrlResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GenerateContentUploadUrlResponse) => void
): UseMutationResult<
  GenerateContentUploadUrlResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchUploadUrl_ByChannelId_ByContentId_v2(input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.UploadUrl_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint should be used after calling generate official content upload url endpoint to commit the changes
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.FileLocation_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_PatchFileLocation_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; contentId: string; data: UpdateFileLocationRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; contentId: string; data: UpdateFileLocationRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string; data: UpdateFileLocationRequest }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchFileLocation_ByChannelId_ByContentId_v2(input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.FileLocation_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Delete user content by content ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Content_ByUserId_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_DeleteContent_ByUserId_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContent_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Content_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Update existing user content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.Content_ByUserId_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_PatchContent_ByUserId_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequestV2 }
  ) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchContent_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.Content_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * generate user content upload URL
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.UploadUrl_ByUserId_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_PatchUploadUrl_ByUserId_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GenerateContentUploadUrlResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GenerateContentUploadUrlResponse) => void
): UseMutationResult<
  GenerateContentUploadUrlResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: GenerateContentUploadUrlRequest }
  ) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.UploadUrl_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Delete content by share code
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_DeleteContentSharecode_ByUserId_ByChannelId_ByShareCodeMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(input.userId, input.channelId, input.shareCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint should be used after calling generate user content upload url endpoint to commit the changes
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.FileLocation_ByUserId_ByChannelId_ByContentId_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_PatchFileLocation_ByUserId_ByChannelId_ByContentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateFileLocationRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateContentResponseV2) => void
): UseMutationResult<
  UpdateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateFileLocationRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateFileLocationRequest }
  ) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.FileLocation_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * *shareCode* format should follows: &#34;Max length: 7 &#34;Available characters: abcdefhkpqrstuxyz
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentV2Admin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2, input]
 * }
 * ```
 */
export const useContentV2AdminApi_UpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCodeMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponseV2,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequestV2 }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponseV2) => void
): UseMutationResult<
  CreateContentResponseV2,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequestV2 }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequestV2 }
  ) => {
    const response = await ContentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(input.userId, input.channelId, input.shareCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentV2Admin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2],
    mutationFn,
    ...options
  })
}
