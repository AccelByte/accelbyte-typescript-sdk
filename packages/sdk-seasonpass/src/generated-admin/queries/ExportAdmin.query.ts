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
import { ExportAdminApi } from '../ExportAdminApi.js'

export enum Key_ExportAdmin {
  Export = 'Seasonpass.ExportAdmin.Export'
}

/**
 * This API is used to export all of season service data files with csv format.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ExportAdmin.Export, input]
 * }
 * ```
 */
export const useExportAdminApi_GetExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useExportAdminApi_GetExport>[1]) => async () => {
    const response = await ExportAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ExportAdmin.Export, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
