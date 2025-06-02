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
import { UtilityAdminApi } from '../UtilityAdminApi.js'

import { GetGrpcReflectionInfo } from '../../generated-definitions/GetGrpcReflectionInfo.js'

export enum Key_UtilityAdmin {
  Reflection = 'Ehs.UtilityAdmin.Reflection'
}

/**
 * Required permission: `ADMIN:NAMESPACE:{namespace}:EXTEND:GRPCREFLECTION` (READ) Do gRPC reflection to get list of services info served by a server. Please use one of these parameter `host` or `appName`. Use query parameter `host` to get reflection for custom host/port address, or Use query parameter `appName` to get reflection for accelbyte hosted extend app
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilityAdmin.Reflection, input]
 * }
 * ```
 */
export const useUtilityAdminApi_GetReflection = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { appName?: string | null; host?: string | null; securityType?: string | null } },
  options?: Omit<UseQueryOptions<GetGrpcReflectionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGrpcReflectionInfo>) => void
): UseQueryResult<GetGrpcReflectionInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilityAdminApi_GetReflection>[1]) => async () => {
    const response = await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReflection(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGrpcReflectionInfo, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.Reflection, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
