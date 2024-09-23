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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { UtilityApi } from '../UtilityApi.js'

import { LegalReadinessStatusResponse } from '../../generated-definitions/LegalReadinessStatusResponse.js'

export enum Key_Utility {
  Readiness = 'Legal.Utility.Readiness'
}

/**
 * Readiness status defined as at least one legal basePolicy is present and having active basePolicy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Utility.Readiness, input]
 * }
 * ```
 */
export const useUtilityApi_GetReadiness = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<LegalReadinessStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LegalReadinessStatusResponse>) => void
): UseQueryResult<LegalReadinessStatusResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilityApi_GetReadiness>[1]) => async () => {
    const response = await UtilityApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReadiness()
    callback && callback(response)
    return response.data
  }

  return useQuery<LegalReadinessStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_Utility.Readiness, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
