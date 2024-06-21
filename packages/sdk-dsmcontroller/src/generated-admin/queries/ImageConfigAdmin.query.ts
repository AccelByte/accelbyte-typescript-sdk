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
import { ImageConfigAdminApi } from '../ImageConfigAdminApi.js'

import { CreateImagePatchRequest } from '../../generated-definitions/CreateImagePatchRequest.js'
import { CreateImageRequest } from '../../generated-definitions/CreateImageRequest.js'
import { CreateRepositoryRequest } from '../../generated-definitions/CreateRepositoryRequest.js'
import { GetImageDetailResponse } from '../../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../../generated-definitions/GetImageLimitResponse.js'
import { GetImagePatchDetailResponse } from '../../generated-definitions/GetImagePatchDetailResponse.js'
import { ImageRecordUpdate } from '../../generated-definitions/ImageRecordUpdate.js'
import { ListImagePatchesResponse } from '../../generated-definitions/ListImagePatchesResponse.js'
import { ListImageResponse } from '../../generated-definitions/ListImageResponse.js'
import { RepositoryRecord } from '../../generated-definitions/RepositoryRecord.js'

export enum Key_ImageConfigAdmin {
  Image = 'ImageConfigAdmin.Image',
  Repository = 'ImageConfigAdmin.Repository',
  ImagePatche = 'ImageConfigAdmin.ImagePatche',
  Images = 'ImageConfigAdmin.Images',
  ImagesLimit = 'ImageConfigAdmin.ImagesLimit',
  ImageVersion_ByVersion = 'ImageConfigAdmin.ImageVersion_ByVersion',
  PatchesImages_ByVersion = 'ImageConfigAdmin.PatchesImages_ByVersion',
  PatcheImage_ByVersion_ByVersionPatch = 'ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch'
}

export const useAdmCreateImageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateImageRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateImageRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateImageRequest }) => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createImage(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateImageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: ImageRecordUpdate }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: ImageRecordUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ImageRecordUpdate }) => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateImage(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}

export const useAdmCreateRepositoryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateRepositoryRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateRepositoryRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateRepositoryRequest }) => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRepository(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Repository],
    mutationFn,
    ...options
  })
}

export const useAdmCreateImagePatcheMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateImagePatchRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateImagePatchRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateImagePatchRequest }) => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createImagePatche(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.ImagePatche],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteImageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { queryParams: { imageURI: string | null; version: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { queryParams: { imageURI: string | null; version: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { queryParams: { imageURI: string | null; version: string | null } }) => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteImage(input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}

export const useAdmImages = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      count: number
      offset: number
      q?: string | null
      sortBy?: 'createdAt' | 'updatedAt' | 'version'
      sortDirection?: 'asc' | 'desc'
    }
  },
  options?: Omit<UseQueryOptions<ListImageResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListImageResponse) => void
): UseQueryResult<ListImageResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmImages>[1]) => async () => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace }).getImages(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListImageResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.Images, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmRepository = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<RepositoryRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RepositoryRecord) => void
): UseQueryResult<RepositoryRecord, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRepository>[1]) => async () => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace }).getRepository()
    callback && callback(data)
    return data
  }

  return useQuery<RepositoryRecord, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.Repository, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmImagesLimit = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GetImageLimitResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetImageLimitResponse) => void
): UseQueryResult<GetImageLimitResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmImagesLimit>[1]) => async () => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace }).getImagesLimit()
    callback && callback(data)
    return data
  }

  return useQuery<GetImageLimitResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.ImagesLimit, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteImagePatcheMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { queryParams: { imageURI: string | null; version: string | null; versionPatch: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { queryParams: { imageURI: string | null; version: string | null; versionPatch: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { queryParams: { imageURI: string | null; version: string | null; versionPatch: string | null } }
  ) => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteImagePatche(input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.ImagePatche],
    mutationFn,
    ...options
  })
}

export const useAdmImageVersion_ByVersion = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { version: string },
  options?: Omit<UseQueryOptions<GetImageDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetImageDetailResponse) => void
): UseQueryResult<GetImageDetailResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmImageVersion_ByVersion>[1]) => async () => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace }).getImageVersion_ByVersion(input.version)
    callback && callback(data)
    return data
  }

  return useQuery<GetImageDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.ImageVersion_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchesImages_ByVersion = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { version: string },
  options?: Omit<UseQueryOptions<ListImagePatchesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListImagePatchesResponse) => void
): UseQueryResult<ListImagePatchesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPatchesImages_ByVersion>[1]) => async () => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace }).getPatchesImages_ByVersion(input.version)
    callback && callback(data)
    return data
  }

  return useQuery<ListImagePatchesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.PatchesImages_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatcheImage_ByVersion_ByVersionPatch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { version: string; versionPatch: string },
  options?: Omit<UseQueryOptions<GetImagePatchDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetImagePatchDetailResponse) => void
): UseQueryResult<GetImagePatchDetailResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPatcheImage_ByVersion_ByVersionPatch>[1]) => async () => {
    const data = await ImageConfigAdminApi(sdk, { namespace: input.namespace }).getPatcheImage_ByVersion_ByVersionPatch(
      input.version,
      input.versionPatch
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetImagePatchDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
