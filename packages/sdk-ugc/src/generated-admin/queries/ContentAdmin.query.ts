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
import { ContentAdminApi } from '../ContentAdminApi.js'

import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequest } from '../../generated-definitions/AdminUpdateContentRequest.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../../generated-definitions/CreateContentRequest.js'
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

export enum Key_ContentAdmin {
  Contents = 'Ugc.ContentAdmin.Contents',
  ContentBulk = 'Ugc.ContentAdmin.ContentBulk',
  ContentsSearch = 'Ugc.ContentAdmin.ContentsSearch',
  Content_ByContentId = 'Ugc.ContentAdmin.Content_ByContentId',
  Contents_ByUserId = 'Ugc.ContentAdmin.Contents_ByUserId',
  ContentSharecodeBulk = 'Ugc.ContentAdmin.ContentSharecodeBulk',
  Preview_ByContentId = 'Ugc.ContentAdmin.Preview_ByContentId',
  Content_ByChannelId = 'Ugc.ContentAdmin.Content_ByChannelId',
  Versions_ByContentId = 'Ugc.ContentAdmin.Versions_ByContentId',
  ContentSharecode_ByShareCode = 'Ugc.ContentAdmin.ContentSharecode_ByShareCode',
  ContentS3_ByChannelId = 'Ugc.ContentAdmin.ContentS3_ByChannelId',
  Screenshot_ByContentId = 'Ugc.ContentAdmin.Screenshot_ByContentId',
  ContentsSearch_ByChannelId = 'Ugc.ContentAdmin.ContentsSearch_ByChannelId',
  Hide_ByUserId_ByContentId = 'Ugc.ContentAdmin.Hide_ByUserId_ByContentId',
  Content_ByChannelId_ByContentId = 'Ugc.ContentAdmin.Content_ByChannelId_ByContentId',
  Rollback_ByContentId_ByVersionId = 'Ugc.ContentAdmin.Rollback_ByContentId_ByVersionId',
  ContentS3_ByChannelId_ByContentId = 'Ugc.ContentAdmin.ContentS3_ByChannelId_ByContentId',
  Screenshot_ByContentId_ByScreenshotId = 'Ugc.ContentAdmin.Screenshot_ByContentId_ByScreenshotId',
  Content_ByUserId_ByChannelId_ByContentId = 'Ugc.ContentAdmin.Content_ByUserId_ByChannelId_ByContentId',
  ContentS3_ByUserId_ByChannelId_ByContentId = 'Ugc.ContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId',
  ContentSharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.ContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode',
  ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.ContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode'
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Contents, input]
 * }
 * ```
 */
export const useContentAdminApi_GetContents = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetContents>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContents(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Contents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum contentId per request 100
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentBulk, input]
 * }
 * ```
 */
export const useContentAdminApi_FetchContentBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: AdminGetContentBulkRequest },
  options?: Omit<UseQueryOptions<ContentDownloadResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponseArray>) => void
): UseQueryResult<ContentDownloadResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_FetchContentBulk>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchContentBulk(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentsSearch, input]
 * }
 * ```
 */
export const useContentAdminApi_GetContentsSearch = (
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
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetContentsSearch>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContentsSearch(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Content_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_GetContent_ByContentId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetContent_ByContentId>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContent_ByContentId(
      input.contentId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Content_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Contents_ByUserId, input]
 * }
 * ```
 */
export const useContentAdminApi_GetContents_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetContents_ByUserId>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getContents_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Contents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum sharecodes per request 100
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentSharecodeBulk, input]
 * }
 * ```
 */
export const useContentAdminApi_FetchContentSharecodeBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest },
  options?: Omit<UseQueryOptions<ContentDownloadResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponseArray>) => void
): UseQueryResult<ContentDownloadResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_FetchContentSharecodeBulk>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchContentSharecodeBulk(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentSharecodeBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Preview_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_GetPreview_ByContentId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<GetContentPreviewResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetContentPreviewResponse>) => void
): UseQueryResult<GetContentPreviewResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetPreview_ByContentId>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPreview_ByContentId(
      input.contentId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetContentPreviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Preview_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Content_ByChannelId, input]
 * }
 * ```
 */
export const useContentAdminApi_CreateContent_ByChannelIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId: string; data: CreateContentRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; data: CreateContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; data: CreateContentRequest }) => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createContent_ByChannelId(
      input.channelId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByChannelId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt; Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Versions_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_GetVersions_ByContentId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { contentId: string },
  options?: Omit<UseQueryOptions<ListContentVersionsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListContentVersionsResponse>) => void
): UseQueryResult<ListContentVersionsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetVersions_ByContentId>[1]) => async () => {
    const response = await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getVersions_ByContentId(
      input.contentId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListContentVersionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Versions_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentSharecode_ByShareCode, input]
 * }
 * ```
 */
export const useContentAdminApi_GetContentSharecode_ByShareCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { shareCode: string },
  options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetContentSharecode_ByShareCode>[1]) => async () => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContentSharecode_ByShareCode(input.shareCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentSharecode_ByShareCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;. All request body are required except &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;, &lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client when uploading the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentS3_ByChannelId, input]
 * }
 * ```
 */
export const useContentAdminApi_CreateContentS3_ByChannelIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; data: CreateContentRequestS3 }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; data: CreateContentRequestS3 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; data: CreateContentRequestS3 }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createContentS3_ByChannelId(input.channelId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3_ByChannelId],
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
 *    queryKey: [Key_ContentAdmin.Screenshot_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_CreateScreenshot_ByContentIdMutation = (
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
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createScreenshot_ByContentId(input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Screenshot_ByContentId],
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
 *    queryKey: [Key_ContentAdmin.Screenshot_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateScreenshot_ByContentIdMutation = (
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
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateScreenshot_ByContentId(input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Screenshot_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentsSearch_ByChannelId, input]
 * }
 * ```
 */
export const useContentAdminApi_GetContentsSearch_ByChannelId = (
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
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useContentAdminApi_GetContentsSearch_ByChannelId>[1]) => async () => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContentsSearch_ByChannelId(input.channelId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentsSearch_ByChannelId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Hide_ByUserId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateHide_ByUserId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; contentId: string; data: HideContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; contentId: string; data: HideContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; contentId: string; data: HideContentRequest }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateHide_ByUserId_ByContentId(input.userId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Hide_ByUserId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Content_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_DeleteContent_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId: string; contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContent_ByChannelId_ByContentId(input.channelId, input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Content_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateContent_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; contentId: string; data: CreateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; contentId: string; data: CreateContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string; data: CreateContentRequest }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContent_ByChannelId_ByContentId(input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt; Rollback content&#39;s payload to specified version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Rollback_ByContentId_ByVersionId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateRollback_ByContentId_ByVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ContentDownloadResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; versionId: string }>,
    'mutationKey'
  >,
  callback?: (data: ContentDownloadResponse) => void
): UseMutationResult<ContentDownloadResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; versionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; versionId: string }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRollback_ByContentId_ByVersionId(input.contentId, input.versionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Rollback_ByContentId_ByVersionId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentS3_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateContentS3_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { channelId: string; contentId: string; data: AdminUpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { channelId: string; contentId: string; data: AdminUpdateContentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { channelId: string; contentId: string; data: AdminUpdateContentRequest }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContentS3_ByChannelId_ByContentId(input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3_ByChannelId_ByContentId],
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
 *    queryKey: [Key_ContentAdmin.Screenshot_ByContentId_ByScreenshotId, input]
 * }
 * ```
 */
export const useContentAdminApi_DeleteScreenshot_ByContentId_ByScreenshotIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; screenshotId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { contentId: string; screenshotId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { contentId: string; screenshotId: string }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteScreenshot_ByContentId_ByScreenshotId(input.contentId, input.screenshotId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Screenshot_ByContentId_ByScreenshotId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Content_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_DeleteContent_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; contentId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; contentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.Content_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateContent_ByUserId_ByChannelId_ByContentIdMutation = (
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
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateContentS3_ByUserId_ByChannelId_ByContentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; contentId: string; data: AdminUpdateContentRequest }
  ) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContentS3_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode, input]
 * }
 * ```
 */
export const useContentAdminApi_DeleteContentSharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; shareCode: string }) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}

/**
 * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode, input]
 * }
 * ```
 */
export const useContentAdminApi_UpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateContentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateContentResponse) => void
): UseMutationResult<
  CreateContentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; channelId: string; shareCode: string; data: AdminUpdateContentRequest }
  ) => {
    const response = await ContentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
