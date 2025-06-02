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
import { IapSubscriptionApi } from '../IapSubscriptionApi.js'

import { ThirdPartyUserSubscriptionPagingSlicedResult } from '../../generated-definitions/ThirdPartyUserSubscriptionPagingSlicedResult.js'

export enum Key_IapSubscription {
  IapSubscriptionPlatform_ByUserId_ByPlatform = 'Platform.IapSubscription.IapSubscriptionPlatform_ByUserId_ByPlatform'
}

/**
 * Query user subscription, default sort by updatedAtOther detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapSubscription.IapSubscriptionPlatform_ByUserId_ByPlatform, input]
 * }
 * ```
 */
export const useIapSubscriptionApi_GetIapSubscriptionPlatform_ByUserId_ByPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    platform: string
    queryParams?: { activeOnly?: boolean | null; groupId?: string | null; limit?: number; offset?: number; productId?: string | null }
  },
  options?: Omit<UseQueryOptions<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyUserSubscriptionPagingSlicedResult>) => void
): UseQueryResult<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useIapSubscriptionApi_GetIapSubscriptionPlatform_ByUserId_ByPlatform>[1]) => async () => {
      const response = await IapSubscriptionApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getIapSubscriptionPlatform_ByUserId_ByPlatform(input.userId, input.platform, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartyUserSubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapSubscription.IapSubscriptionPlatform_ByUserId_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
