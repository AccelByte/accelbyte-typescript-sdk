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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DlcApi } from '../DlcApi.js'

import { RetrieveBaseGameResponseArray } from '../../generated-definitions/RetrieveBaseGameResponseArray.js'
import { RetrieveDependencyCompatibilityResponse } from '../../generated-definitions/RetrieveDependencyCompatibilityResponse.js'
import { RetrieveDependencyLinkResponse } from '../../generated-definitions/RetrieveDependencyLinkResponse.js'
import { RetrieveLatestDlcResponseArray } from '../../generated-definitions/RetrieveLatestDlcResponseArray.js'

export enum Key_Dlc {
  Link_ByBuildId = 'Buildinfo.Dlc.Link_ByBuildId',
  Compatibility_ByBuildId = 'Buildinfo.Dlc.Compatibility_ByBuildId',
  DlcLatestByGameAppId_ByAppId = 'Buildinfo.Dlc.DlcLatestByGameAppId_ByAppId',
  AppLatestByDlcAppId_ByDlcAppId = 'Buildinfo.Dlc.AppLatestByDlcAppId_ByDlcAppId'
}

/**
 * This API is used to retrieve DLC versions against the game version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.Link_ByBuildId, input]
 * }
 * ```
 */
export const useDlcApi_GetLink_ByBuildId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { buildId: string },
  options?: Omit<UseQueryOptions<RetrieveDependencyLinkResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveDependencyLinkResponse>) => void
): UseQueryResult<RetrieveDependencyLinkResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcApi_GetLink_ByBuildId>[1]) => async () => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLink_ByBuildId(input.buildId)
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveDependencyLinkResponse, AxiosError<ApiError>>({
    queryKey: [Key_Dlc.Link_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to retrieve compatibility of specific DLC versions against the game version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.Compatibility_ByBuildId, input]
 * }
 * ```
 */
export const useDlcApi_GetCompatibility_ByBuildId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { buildId: string },
  options?: Omit<UseQueryOptions<RetrieveDependencyCompatibilityResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveDependencyCompatibilityResponse>) => void
): UseQueryResult<RetrieveDependencyCompatibilityResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcApi_GetCompatibility_ByBuildId>[1]) => async () => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCompatibility_ByBuildId(
      input.buildId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveDependencyCompatibilityResponse, AxiosError<ApiError>>({
    queryKey: [Key_Dlc.Compatibility_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve the list of DLC available on specific game. Use game&#39;s appId to query.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.DlcLatestByGameAppId_ByAppId, input]
 * }
 * ```
 */
export const useDlcApi_GetDlcLatestByGameAppId_ByAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { appId: string },
  options?: Omit<UseQueryOptions<RetrieveLatestDlcResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveLatestDlcResponseArray>) => void
): UseQueryResult<RetrieveLatestDlcResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcApi_GetDlcLatestByGameAppId_ByAppId>[1]) => async () => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDlcLatestByGameAppId_ByAppId(
      input.appId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveLatestDlcResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Dlc.DlcLatestByGameAppId_ByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve the list of DLC available on specific game. Use DLC&#39;s appId to query.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Dlc.AppLatestByDlcAppId_ByDlcAppId, input]
 * }
 * ```
 */
export const useDlcApi_GetAppLatestByDlcAppId_ByDlcAppId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { dlcAppId: string },
  options?: Omit<UseQueryOptions<RetrieveBaseGameResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveBaseGameResponseArray>) => void
): UseQueryResult<RetrieveBaseGameResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDlcApi_GetAppLatestByDlcAppId_ByDlcAppId>[1]) => async () => {
    const response = await DlcApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAppLatestByDlcAppId_ByDlcAppId(
      input.dlcAppId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveBaseGameResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Dlc.AppLatestByDlcAppId_ByDlcAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
