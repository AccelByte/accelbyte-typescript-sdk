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
  Image = 'Dsmcontroller.ImageConfigAdmin.Image',
  Repository = 'Dsmcontroller.ImageConfigAdmin.Repository',
  ImagePatche = 'Dsmcontroller.ImageConfigAdmin.ImagePatche',
  Images = 'Dsmcontroller.ImageConfigAdmin.Images',
  ImagesLimit = 'Dsmcontroller.ImageConfigAdmin.ImagesLimit',
  ImageVersion_ByVersion = 'Dsmcontroller.ImageConfigAdmin.ImageVersion_ByVersion',
  PatchesImages_ByVersion = 'Dsmcontroller.ImageConfigAdmin.PatchesImages_ByVersion',
  PatcheImage_ByVersion_ByVersionPatch = 'Dsmcontroller.ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch'
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.Image, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_CreateImageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImageRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImageRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateImageRequest }) => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createImage(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will update an image name and/or image persistent flag. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.Image, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_UpdateImageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ImageRecordUpdate }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ImageRecordUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ImageRecordUpdate }) => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateImage(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image repository. Sample repository: { &#34;namespace&#34;:&#34;testing&#34;, &#34;repository&#34;:&#34;ds-testing-924623&#34;, } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.Repository, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_CreateRepositoryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateRepositoryRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateRepositoryRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateRepositoryRequest }) => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRepository(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Repository],
    mutationFn,
    ...options
  })
}

/**
 * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image patch. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;patchVersion&#34;:&#34;1.0.0-patch&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0-patch&#34;, &#34;persistent&#34;:false } ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.ImagePatche, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_CreateImagePatcheMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImagePatchRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImagePatchRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateImagePatchRequest }) => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createImagePatche(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.ImagePatche],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social. This endpoint will delete an image that specified in the request parameter. Default image is cannot be deleted and will throw error 422 (Unprocessable entity).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.Image, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_DeleteImageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { queryParams: { imageURI: string | null; version: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { queryParams: { imageURI: string | null; version: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams: { imageURI: string | null; version: string | null } }) => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteImage(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.Images, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_GetImages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      count: number
      offset: number
      q?: string | null
      sortBy?: 'createdAt' | 'updatedAt' | 'version'
      sortDirection?: 'asc' | 'desc'
    }
  },
  options?: Omit<UseQueryOptions<ListImageResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListImageResponse>) => void
): UseQueryResult<ListImageResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigAdminApi_GetImages>[1]) => async () => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImages(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListImageResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.Images, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers repository name in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.Repository, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_GetRepository = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RepositoryRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RepositoryRecord>) => void
): UseQueryResult<RepositoryRecord, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigAdminApi_GetRepository>[1]) => async () => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRepository()
    callback && callback(response)
    return response.data
  }

  return useQuery<RepositoryRecord, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.Repository, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get ds image limit for specific namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.ImagesLimit, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_GetImagesLimit = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetImageLimitResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetImageLimitResponse>) => void
): UseQueryResult<GetImageLimitResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigAdminApi_GetImagesLimit>[1]) => async () => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImagesLimit()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetImageLimitResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.ImagesLimit, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will delete an image patch that specified in the request parameter
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.ImagePatche, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_DeleteImagePatcheMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { queryParams: { imageURI: string | null; version: string | null; versionPatch: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { queryParams: { imageURI: string | null; version: string | null; versionPatch: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { queryParams: { imageURI: string | null; version: string | null; versionPatch: string | null } }
  ) => {
    const response = await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteImagePatche(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.ImagePatche],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.ImageVersion_ByVersion, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_GetImageVersion_ByVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { version: string },
  options?: Omit<UseQueryOptions<GetImageDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetImageDetailResponse>) => void
): UseQueryResult<GetImageDetailResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigAdminApi_GetImageVersion_ByVersion>[1]) => async () => {
    const response = await ImageConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getImageVersion_ByVersion(input.version)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetImageDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.ImageVersion_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get image patches by version. Image Size unit is byte.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.PatchesImages_ByVersion, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_GetPatchesImages_ByVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { version: string },
  options?: Omit<UseQueryOptions<ListImagePatchesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListImagePatchesResponse>) => void
): UseQueryResult<ListImagePatchesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigAdminApi_GetPatchesImages_ByVersion>[1]) => async () => {
    const response = await ImageConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPatchesImages_ByVersion(input.version)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListImagePatchesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.PatchesImages_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific image patch version of dedicated servers version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch, input]
 * }
 * ```
 */
export const useImageConfigAdminApi_GetPatcheImage_ByVersion_ByVersionPatch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { version: string; versionPatch: string },
  options?: Omit<UseQueryOptions<GetImagePatchDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetImagePatchDetailResponse>) => void
): UseQueryResult<GetImagePatchDetailResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useImageConfigAdminApi_GetPatcheImage_ByVersion_ByVersionPatch>[1]) => async () => {
      const response = await ImageConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPatcheImage_ByVersion_ByVersionPatch(input.version, input.versionPatch)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetImagePatchDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
