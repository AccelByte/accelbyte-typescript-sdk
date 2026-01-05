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
import { ImageAdminApi } from '../ImageAdminApi.js'

import { DeleteAppImagesV1Request } from '../../generated-definitions/DeleteAppImagesV1Request.js'
import { GetAppImageListV1Response } from '../../generated-definitions/GetAppImageListV1Response.js'

export enum Key_ImageAdmin {
  Image_ByApp = 'Csm.ImageAdmin.Image_ByApp',
  Images_ByApp = 'Csm.ImageAdmin.Images_ByApp'
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [DELETE]&lt;/code&gt; Deletes the images uploaded to the repository
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageAdmin.Image_ByApp, input]
 * }
 * ```
 */
export const useImageAdminApi_DeleteImage_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: DeleteAppImagesV1Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: DeleteAppImagesV1Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: DeleteAppImagesV1Request }) => {
    const response = await ImageAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteImage_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageAdmin.Image_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [READ]&lt;/code&gt; Get a list of container images Default &#39;cached&#39; parameter is &#39;true&#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageAdmin.Images_ByApp, input]
 * }
 * ```
 */
export const useImageAdminApi_GetImages_ByApp = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams?: { cached?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAppImageListV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAppImageListV1Response>) => void
): UseQueryResult<GetAppImageListV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageAdminApi_GetImages_ByApp>[1]) => async () => {
    const response = await ImageAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImages_ByApp(
      input.app,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAppImageListV1Response, AxiosError<ApiError>>({
    queryKey: [Key_ImageAdmin.Images_ByApp, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
