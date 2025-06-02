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
import { ResourcesLimitsAdminApi } from '../ResourcesLimitsAdminApi.js'

import { CsmAppLimitsResponse } from '../../generated-definitions/CsmAppLimitsResponse.js'

export enum Key_ResourcesLimitsAdmin {
  ResourcesLimits_v2 = 'Csm.ResourcesLimitsAdmin.ResourcesLimits_v2'
}

/**
 * This endpoint return the Extend Apps Configurable Limits for front end to use for initial validation before app creation e.g. Replica Limit will be used to check max replica that can be created for the said environment by default CPU Limit will be used to validate max allowed CPU for the extend app that hasn&#39;t been created Memory Limit will be used to validate max allowed Memory for the extend app that hasn&#39;t been created MaxAppNotificationSubscription will be used to validate the maximum number of subscriber for an app status notification
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ResourcesLimitsAdmin.ResourcesLimits_v2, input]
 * }
 * ```
 */
export const useResourcesLimitsAdminApi_GetResourcesLimits_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CsmAppLimitsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CsmAppLimitsResponse>) => void
): UseQueryResult<CsmAppLimitsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useResourcesLimitsAdminApi_GetResourcesLimits_v2>[1]) => async () => {
    const response = await ResourcesLimitsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getResourcesLimits_v2()
    callback && callback(response)
    return response.data
  }

  return useQuery<CsmAppLimitsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ResourcesLimitsAdmin.ResourcesLimits_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
