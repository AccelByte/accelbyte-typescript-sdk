/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ImageConfigApi } from '../ImageConfigApi.js'

import { GetImageDetailResponse } from '../../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../../generated-definitions/GetImageLimitResponse.js'
import { ListImageResponse } from '../../generated-definitions/ListImageResponse.js'

export enum Key_ImageConfig {
  Images = 'Dsmcontroller.ImageConfig.Images',
  ImagesLimit = 'Dsmcontroller.ImageConfig.ImagesLimit',
  ImageVersion_ByVersion = 'Dsmcontroller.ImageConfig.ImageVersion_ByVersion'
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfig.Images, input]
 * }
 * ```
 */
export const useImageConfigApi_GetImages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      count?: number
      offset?: number
      q?: string | null
      sortBy?: 'createdAt' | 'updatedAt' | 'version'
      sortDirection?: 'asc' | 'desc'
    }
  },
  options?: Omit<UseQueryOptions<ListImageResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListImageResponse>) => void
): UseQueryResult<ListImageResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigApi_GetImages>[1]) => async () => {
    const response = await ImageConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImages(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListImageResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfig.Images, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get DS image limit for specific namespace.This endpoint also give the non-persistent image which is used by any deployments
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfig.ImagesLimit, input]
 * }
 * ```
 */
export const useImageConfigApi_GetImagesLimit = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetImageLimitResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetImageLimitResponse>) => void
): UseQueryResult<GetImageLimitResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigApi_GetImagesLimit>[1]) => async () => {
    const response = await ImageConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImagesLimit()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetImageLimitResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfig.ImagesLimit, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfig.ImageVersion_ByVersion, input]
 * }
 * ```
 */
export const useImageConfigApi_GetImageVersion_ByVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { version: string },
  options?: Omit<UseQueryOptions<GetImageDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetImageDetailResponse>) => void
): UseQueryResult<GetImageDetailResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigApi_GetImageVersion_ByVersion>[1]) => async () => {
    const response = await ImageConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImageVersion_ByVersion(
      input.version
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetImageDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfig.ImageVersion_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
