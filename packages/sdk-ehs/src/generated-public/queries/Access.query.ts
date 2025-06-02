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
import { AccessApi } from '../AccessApi.js'

import { GetUploadTokenV1Response } from '../../generated-definitions/GetUploadTokenV1Response.js'

export enum Key_Access {
  Token_ByApp = 'Ehs.Access.Token_ByApp'
}

/**
 * Required permission: `ADMIN:NAMESPACE:{namespace}:EXTEND:REPOCREDENTIALS` (READ) Get docker login credentials for storing container images on a specified repository
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Access.Token_ByApp, input]
 * }
 * ```
 */
export const useAccessApi_GetToken_ByApp = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string },
  options?: Omit<UseQueryOptions<GetUploadTokenV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUploadTokenV1Response>) => void
): UseQueryResult<GetUploadTokenV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccessApi_GetToken_ByApp>[1]) => async () => {
    const response = await AccessApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getToken_ByApp(input.app)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUploadTokenV1Response, AxiosError<ApiError>>({
    queryKey: [Key_Access.Token_ByApp, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
