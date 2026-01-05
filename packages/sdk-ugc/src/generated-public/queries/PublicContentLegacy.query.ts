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
import { PublicContentLegacyApi } from '../PublicContentLegacyApi.js'

import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../../generated-definitions/CreateContentRequest.js'
import { CreateContentResponse } from '../../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../../generated-definitions/GetContentPreviewResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PublicCreateContentRequestS3 } from '../../generated-definitions/PublicCreateContentRequestS3.js'
import { PublicGetContentBulkRequest } from '../../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequest } from '../../generated-definitions/UpdateContentRequest.js'
import { UpdateContentShareCodeRequest } from '../../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export enum Key_PublicContentLegacy {
  Contents = 'Ugc.PublicContentLegacy.Contents',
  ContentBulk = 'Ugc.PublicContentLegacy.ContentBulk',
  Content_ByContentId = 'Ugc.PublicContentLegacy.Content_ByContentId',
  Contents_ByUserId = 'Ugc.PublicContentLegacy.Contents_ByUserId',
  ContentSharecodeBulk = 'Ugc.PublicContentLegacy.ContentSharecodeBulk',
  Preview_ByContentId = 'Ugc.PublicContentLegacy.Preview_ByContentId',
  Contents_ByChannelId = 'Ugc.PublicContentLegacy.Contents_ByChannelId',
  ContentSharecode_ByShareCode = 'Ugc.PublicContentLegacy.ContentSharecode_ByShareCode',
  Content_ByUserId_ByChannelId = 'Ugc.PublicContentLegacy.Content_ByUserId_ByChannelId',
  ContentS3_ByUserId_ByChannelId = 'Ugc.PublicContentLegacy.ContentS3_ByUserId_ByChannelId',
  Screenshot_ByUserId_ByContentId = 'Ugc.PublicContentLegacy.Screenshot_ByUserId_ByContentId',
  Content_ByUserId_ByChannelId_ByContentId = 'Ugc.PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId',
  ContentS3_ByUserId_ByChannelId_ByContentId = 'Ugc.PublicContentLegacy.ContentS3_ByUserId_ByChannelId_ByContentId',
  Screenshot_ByUserId_ByContentId_ByScreenshotId = 'Ugc.PublicContentLegacy.Screenshot_ByUserId_ByContentId_ByScreenshotId',
  Sharecode_ByUserId_ByChannelId_ByContentId = 'Ugc.PublicContentLegacy.Sharecode_ByUserId_ByChannelId_ByContentId',
  ContentSharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.PublicContentLegacy.ContentSharecode_ByUserId_ByChannelId_ByShareCode',
  ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.PublicContentLegacy.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode'
}

/**
 * Public user can access without token or if token specified, requires valid user token. For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Contents, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContents = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicContentLegacyApi_GetContents>[1]) => async () => {
    const response = await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContents(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Contents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentBulk, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_CreateContentBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGetContentBulkRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseArray) => void
): UseMutationResult<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGetContentBulkRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicGetContentBulkRequest }) => {
    const response = await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createContentBulk(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentBulk],
    mutationFn,
    ...options
  })
}

/**
 * Public user can access without token or if token specified, requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Content_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContent_ByContentId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicContentLegacyApi_GetContent_ByContentId>[1]) => async () => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContent_ByContentId(input.contentId)
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Content_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Contents_ByUserId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContents_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicContentLegacyApi_GetContents_ByUserId>[1]) => async () => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContents_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Contents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Require valid user token. Maximum sharecodes per request 100
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentSharecodeBulk, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_CreateContentSharecodeBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponseArray) => void
): UseMutationResult<
  ContentDownloadResponseArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createContentSharecodeBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentSharecodeBulk],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Requires valid user token&lt;/p&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Preview_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetPreview_ByContentId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<GetContentPreviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetContentPreviewResponse>) => void
): UseQueryResult<GetContentPreviewResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicContentLegacyApi_GetPreview_ByContentId>[1]) => async () => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPreview_ByContentId(input.contentId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetContentPreviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Preview_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Requires valid user token. For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Contents_ByChannelId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContents_ByChannelId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicContentLegacyApi_GetContents_ByChannelId>[1]) => async () => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContents_ByChannelId(input.channelId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Contents_ByChannelId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public user can access without token or if token specified, requires valid user token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentSharecode_ByShareCode, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContentSharecode_ByShareCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { shareCode: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicContentLegacyApi_GetContentSharecode_ByShareCode>[1]) => async () => {
      const response = await PublicContentLegacyApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getContentSharecode_ByShareCode(input.shareCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.ContentSharecode_ByShareCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_CreateContent_ByUserId_ByChannelIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; data: CreateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; data: CreateContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; data: CreateContentRequest }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createContent_ByUserId_ByChannelId(input.userId, input.channelId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except payload, preview, tags, contentType and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentS3_ByUserId_ByChannelId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_CreateContentS3_ByUserId_ByChannelIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; data: PublicCreateContentRequestS3 }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; data: PublicCreateContentRequestS3 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; data: PublicCreateContentRequestS3 }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createContentS3_ByUserId_ByChannelId(input.userId, input.channelId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentS3_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}

/**
 * All request body are required except for *contentType* field. *contentType* values is used to enforce the *Content-Type* header needed by the client to upload the content using the presigned URL. If not specified, it will use *fileExtension* value. Supported file extensions: *pjp*, *jpg*, *jpeg*, *jfif*, *bmp*, *png*. Maximum description length: 1024
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_CreateScreenshot_ByUserId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateScreenshotResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; contentId: string; data: CreateScreenshotRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateScreenshotResponse) => void
): UseMutationResult<
  CreateScreenshotResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; contentId: string; data: CreateScreenshotRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string; data: CreateScreenshotRequest }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createScreenshot_ByUserId_ByContentId(input.userId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId],
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
 *    queryKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_UpdateScreenshot_ByUserId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateScreenshotResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; contentId: string; data: UpdateScreenshotRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateScreenshotResponse) => void
): UseMutationResult<
  UpdateScreenshotResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; contentId: string; data: UpdateScreenshotRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string; data: UpdateScreenshotRequest }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateScreenshot_ByUserId_ByContentId(input.userId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_DeleteContent_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_UpdateContent_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: CreateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: CreateContentRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: CreateContentRequest }
  ) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except payload, preview, tags, contentType, updateContentFile and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. To update content&#39;s file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentS3_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_UpdateContentS3_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateContentRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateContentRequest }
  ) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContentS3_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentS3_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Delete existing screenshot from a content
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId_ByScreenshotId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_DeleteScreenshot_ByUserId_ByContentId_ByScreenshotIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; contentId: string; screenshotId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; contentId: string; screenshotId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string; screenshotId: string }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(input.userId, input.contentId, input.screenshotId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId_ByScreenshotId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT:SHARECODE [UPDATE]&lt;/b&gt;.&lt;br&gt; This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Sharecode_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_PatchSharecode_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateContentShareCodeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateContentShareCodeRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: UpdateContentShareCodeRequest }
  ) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchSharecode_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Sharecode_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentSharecode_ByUserId_ByChannelId_ByShareCode, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_DeleteContentSharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentSharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_UpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: UpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: UpdateContentRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: UpdateContentRequest }
  ) => {
    const response = await PublicContentLegacyApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
