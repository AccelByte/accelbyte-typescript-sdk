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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AmsInfoApi } from '../AmsInfoApi.js'

export enum Key_AmsInfo {
  UploadUrl = 'Ams.AmsInfo.UploadUrl'
}

export const useAmsInfoApi_GetUploadUrl = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAmsInfoApi_GetUploadUrl>[1]) => async () => {
    const response = await AmsInfoApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUploadUrl()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_AmsInfo.UploadUrl, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
