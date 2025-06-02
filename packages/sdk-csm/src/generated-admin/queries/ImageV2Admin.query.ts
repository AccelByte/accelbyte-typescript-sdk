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
import { ImageV2AdminApi } from '../ImageV2AdminApi.js'

import { DeleteAppImagesV1Request } from '../../generated-definitions/DeleteAppImagesV1Request.js'
import { GetAppImageListV2Response } from '../../generated-definitions/GetAppImageListV2Response.js'

export enum Key_ImageV2Admin {
  Image_ByApp_v2 = 'Csm.ImageV2Admin.Image_ByApp_v2',
  Images_ByApp_v2 = 'Csm.ImageV2Admin.Images_ByApp_v2'
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [DELETE]&lt;/code&gt; Deletes list of provided image tags from the app image repository
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageV2Admin.Image_ByApp_v2, input]
 * }
 * ```
 */
export const useImageV2AdminApi_DeleteImage_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: DeleteAppImagesV1Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: DeleteAppImagesV1Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: DeleteAppImagesV1Request }) => {
    const response = await ImageV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteImage_ByApp_v2(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ImageV2Admin.Image_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [READ]&lt;/code&gt; Get a list of container images Default &#39;cached&#39; parameter is &#39;true&#39;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ImageV2Admin.Images_ByApp_v2, input]
 * }
 * ```
 */
export const useImageV2AdminApi_GetImages_ByApp_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams?: { cached?: string | null } },
  options?: Omit<UseQueryOptions<GetAppImageListV2Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAppImageListV2Response>) => void
): UseQueryResult<GetAppImageListV2Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useImageV2AdminApi_GetImages_ByApp_v2>[1]) => async () => {
    const response = await ImageV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImages_ByApp_v2(
      input.app,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAppImageListV2Response, AxiosError<ApiError>>({
    queryKey: [Key_ImageV2Admin.Images_ByApp_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
