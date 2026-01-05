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
import { DownloaderApi } from '../DownloaderApi.js'

import { BasicBuildManifestArray } from '../../generated-definitions/BasicBuildManifestArray.js'
import { BlockDownloadUrls } from '../../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../../generated-definitions/BlockDownloadUrlsRequest.js'
import { BuildAvailabilityArray } from '../../generated-definitions/BuildAvailabilityArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { DiffStatusReport } from '../../generated-definitions/DiffStatusReport.js'
import { VersionChain } from '../../generated-definitions/VersionChain.js'

export enum Key_Downloader {
  VersionHistory = 'Buildinfo.Downloader.VersionHistory',
  BulkCheckLatest = 'Buildinfo.Downloader.BulkCheckLatest',
  Updategame_ByAppId = 'Buildinfo.Downloader.Updategame_ByAppId',
  Availablebuild_ByAppId = 'Buildinfo.Downloader.Availablebuild_ByAppId',
  UpdategameBuild_ByBuildId = 'Buildinfo.Downloader.UpdategameBuild_ByBuildId',
  BlockUrl_ByBuildId = 'Buildinfo.Downloader.BlockUrl_ByBuildId',
  Updategame_ByAppId_ByVersion = 'Buildinfo.Downloader.Updategame_ByAppId_ByVersion',
  UpdategameBuild_ByBuildId_v2 = 'Buildinfo.Downloader.UpdategameBuild_ByBuildId_v2',
  Updategame_ByAppId_ByPlatformId_v2 = 'Buildinfo.Downloader.Updategame_ByAppId_ByPlatformId_v2',
  Diff_BySourceBuildId_ByDestinationBuildId = 'Buildinfo.Downloader.Diff_BySourceBuildId_ByDestinationBuildId',
  Version_ByAppId_ByVersion_ByPlatformId_v2 = 'Buildinfo.Downloader.Version_ByAppId_ByVersion_ByPlatformId_v2'
}

/**
 * This API is used to get version history.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: version chain from specified build&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.VersionHistory, input]
 * }
 * ```
 */
export const useDownloaderApi_GetVersionHistory = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { appId: string | null; comparedBuildId: string | null } },
  options?: Omit<UseQueryOptions<VersionChain, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<VersionChain>) => void
): UseQueryResult<VersionChain, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetVersionHistory>[1]) => async () => {
    const response = await DownloaderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getVersionHistory(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<VersionChain, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.VersionHistory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to check whether supplied list of appId has valid buildmanifest and at least one of its build set as latest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of build availability&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.BulkCheckLatest, input]
 * }
 * ```
 */
export const useDownloaderApi_GetBulkCheckLatest = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { appIds: string[] } },
  options?: Omit<UseQueryOptions<BuildAvailabilityArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildAvailabilityArray>) => void
): UseQueryResult<BuildAvailabilityArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetBulkCheckLatest>[1]) => async () => {
    const response = await DownloaderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBulkCheckLatest(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildAvailabilityArray, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.BulkCheckLatest, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * This API is used to get build manifest of release version of the application. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.Updategame_ByAppId, input]
 * }
 * ```
 */
export const useDownloaderApi_GetUpdategame_ByAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetUpdategame_ByAppId>[1]) => async () => {
    const response = await DownloaderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUpdategame_ByAppId(
      input.appId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.Updategame_ByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get simple build manifest that contains list of current build in various platform.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.Availablebuild_ByAppId, input]
 * }
 * ```
 */
export const useDownloaderApi_GetAvailablebuild_ByAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string },
  options?: Omit<UseQueryOptions<BasicBuildManifestArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BasicBuildManifestArray>) => void
): UseQueryResult<BasicBuildManifestArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetAvailablebuild_ByAppId>[1]) => async () => {
    const response = await DownloaderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAvailablebuild_ByAppId(
      input.appId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BasicBuildManifestArray, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.Availablebuild_ByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and generate chunks difference and obsolete files list between two version. Only works for builds uploaded with BuildInfo v1 [DEPRECATED}&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.UpdategameBuild_ByBuildId, input]
 * }
 * ```
 */
export const useDownloaderApi_GetUpdategameBuild_ByBuildId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { buildId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetUpdategameBuild_ByBuildId>[1]) => async () => {
    const response = await DownloaderApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUpdategameBuild_ByBuildId(input.buildId)
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.UpdategameBuild_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.&lt;br/&gt;Before processing the URL generation, it will validate the user entitlement first, if not entitled then the request will be refused.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Block Download URLs&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.BlockUrl_ByBuildId, input]
 * }
 * ```
 */
export const useDownloaderApi_CreateBlockUrl_ByBuildIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BlockDownloadUrls, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; data: BlockDownloadUrlsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BlockDownloadUrls) => void
): UseMutationResult<BlockDownloadUrls, AxiosError<ApiError>, SdkSetConfigParam & { buildId: string; data: BlockDownloadUrlsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { buildId: string; data: BlockDownloadUrlsRequest }) => {
    const response = await DownloaderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBlockUrl_ByBuildId(
      input.buildId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Downloader.BlockUrl_ByBuildId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This API is used to get build manifest that contains file difference between requested version and release version. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.Updategame_ByAppId_ByVersion, input]
 * }
 * ```
 */
export const useDownloaderApi_GetUpdategame_ByAppId_ByVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string; version: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetUpdategame_ByAppId_ByVersion>[1]) => async () => {
    const response = await DownloaderApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUpdategame_ByAppId_ByVersion(input.appId, input.version)
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.Updategame_ByAppId_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and obsolete files list between two version. Only works for builds uploaded with BuildInfo v2&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.UpdategameBuild_ByBuildId_v2, input]
 * }
 * ```
 */
export const useDownloaderApi_GetUpdategameBuild_ByBuildId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { buildId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetUpdategameBuild_ByBuildId_v2>[1]) => async () => {
    const response = await DownloaderApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUpdategameBuild_ByBuildId_v2(input.buildId)
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.UpdategameBuild_ByBuildId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get build manifest of release version of the application.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.Updategame_ByAppId_ByPlatformId_v2, input]
 * }
 * ```
 */
export const useDownloaderApi_GetUpdategame_ByAppId_ByPlatformId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string; platformId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetUpdategame_ByAppId_ByPlatformId_v2>[1]) => async () => {
    const response = await DownloaderApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUpdategame_ByAppId_ByPlatformId_v2(input.appId, input.platformId)
    callback && callback(response)
    return response.data
  }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.Updategame_ByAppId_ByPlatformId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API fetch the diff status between two builds. The diff generated by diff wrapper and saved in the database. Return 404 if no diff found.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Simple diff status containing where to fetch diff manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.Diff_BySourceBuildId_ByDestinationBuildId, input]
 * }
 * ```
 */
export const useDownloaderApi_GetDiff_BySourceBuildId_ByDestinationBuildId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { sourceBuildId: string; destinationBuildId: string },
  options?: Omit<UseQueryOptions<DiffStatusReport, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DiffStatusReport>) => void
): UseQueryResult<DiffStatusReport, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetDiff_BySourceBuildId_ByDestinationBuildId>[1]) => async () => {
      const response = await DownloaderApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDiff_BySourceBuildId_ByDestinationBuildId(input.sourceBuildId, input.destinationBuildId)
      callback && callback(response)
      return response.data
    }

  return useQuery<DiffStatusReport, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.Diff_BySourceBuildId_ByDestinationBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get build manifest. The binary diff will be calculated in the client side, while obsolete file list will be generated by server side.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Downloader.Version_ByAppId_ByVersion_ByPlatformId_v2, input]
 * }
 * ```
 */
export const useDownloaderApi_GetVersion_ByAppId_ByVersion_ByPlatformId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string; version: string; platformId: string },
  options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BuildManifest>) => void
): UseQueryResult<BuildManifest, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useDownloaderApi_GetVersion_ByAppId_ByVersion_ByPlatformId_v2>[1]) => async () => {
      const response = await DownloaderApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getVersion_ByAppId_ByVersion_ByPlatformId_v2(input.appId, input.version, input.platformId)
      callback && callback(response)
      return response.data
    }

  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_Downloader.Version_ByAppId_ByVersion_ByPlatformId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
