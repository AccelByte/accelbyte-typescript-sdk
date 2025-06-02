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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ImagesAdminApi } from '../ImagesAdminApi.js'

import { ImageDetails } from '../../generated-definitions/ImageDetails.js'
import { ImageList } from '../../generated-definitions/ImageList.js'
import { ImageStorage } from '../../generated-definitions/ImageStorage.js'
import { ImageUpdate } from '../../generated-definitions/ImageUpdate.js'

export enum Key_ImagesAdmin {
  Images = 'Ams.ImagesAdmin.Images',
  ImagesStorage = 'Ams.ImagesAdmin.ImagesStorage',
  Image_ByImageId = 'Ams.ImagesAdmin.Image_ByImageId',
  Restore_ByImageId = 'Ams.ImagesAdmin.Restore_ByImageId'
}

/**
 * Returns images which exist (uploaded, uploading, or building) in the linked account. This route fails if no account is linked Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImagesAdmin.Images, input]
 * }
 * ```
 */
export const useImagesAdminApi_GetImages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      count?: number
      inUse?: string | null
      isProtected?: boolean | null
      name?: string | null
      offset?: number
      sortBy?: string | null
      sortDirection?: string | null
      status?: string | null
      tag?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ImageList, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ImageList>) => void
): UseQueryResult<ImageList, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImagesAdminApi_GetImages>[1]) => async () => {
    const response = await ImagesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImages(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ImageList, AxiosError<ApiError>>({
    queryKey: [Key_ImagesAdmin.Images, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Returns information regarding the account&#39;s usage for images storage including the free tier quota Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImagesAdmin.ImagesStorage, input]
 * }
 * ```
 */
export const useImagesAdminApi_GetImagesStorage = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ImageStorage, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ImageStorage>) => void
): UseQueryResult<ImageStorage, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImagesAdminApi_GetImagesStorage>[1]) => async () => {
    const response = await ImagesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImagesStorage()
    callback && callback(response)
    return response.data
  }

  return useQuery<ImageStorage, AxiosError<ApiError>>({
    queryKey: [Key_ImagesAdmin.ImagesStorage, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Marks an image for deletion. The image will stop being available for fleets and will eventually be deleted. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImagesAdmin.Image_ByImageId, input]
 * }
 * ```
 */
export const useImagesAdminApi_DeleteImage_ByImageIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { imageID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { imageID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { imageID: string }) => {
    const response = await ImagesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteImage_ByImageId(
      input.imageID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImagesAdmin.Image_ByImageId],
    mutationFn,
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImagesAdmin.Image_ByImageId, input]
 * }
 * ```
 */
export const useImagesAdminApi_GetImage_ByImageId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { imageID: string },
  options?: Omit<UseQueryOptions<ImageDetails, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ImageDetails>) => void
): UseQueryResult<ImageDetails, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImagesAdminApi_GetImage_ByImageId>[1]) => async () => {
    const response = await ImagesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImage_ByImageId(
      input.imageID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ImageDetails, AxiosError<ApiError>>({
    queryKey: [Key_ImagesAdmin.Image_ByImageId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This allows editing of the image name, toggling `IsProtected`, or adding &amp; removal of tags Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImagesAdmin.Image_ByImageId, input]
 * }
 * ```
 */
export const useImagesAdminApi_PatchImage_ByImageIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ImageDetails, AxiosError<ApiError>, SdkSetConfigParam & { imageID: string; data: ImageUpdate }>,
    'mutationKey'
  >,
  callback?: (data: ImageDetails) => void
): UseMutationResult<ImageDetails, AxiosError<ApiError>, SdkSetConfigParam & { imageID: string; data: ImageUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { imageID: string; data: ImageUpdate }) => {
    const response = await ImagesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchImage_ByImageId(
      input.imageID,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImagesAdmin.Image_ByImageId],
    mutationFn,
    ...options
  })
}

/**
 * Unmarks an image for deletion. The image will be available for fleets. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImagesAdmin.Restore_ByImageId, input]
 * }
 * ```
 */
export const useImagesAdminApi_CreateRestore_ByImageIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { imageID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { imageID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { imageID: string }) => {
    const response = await ImagesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRestore_ByImageId(
      input.imageID
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImagesAdmin.Restore_ByImageId],
    mutationFn,
    ...options
  })
}
