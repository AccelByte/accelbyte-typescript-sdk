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
import { IapNotificationAdminApi } from '../IapNotificationAdminApi.js'

import { NotificationPagingSlicedResult } from '../../generated-definitions/NotificationPagingSlicedResult.js'

export enum Key_IapNotificationAdmin {
  IapNotifications = 'Platform.IapNotificationAdmin.IapNotifications'
}

/**
 * Query third party notifications.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Third Party Platform notifications&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IapNotificationAdmin.IapNotifications, input]
 * }
 * ```
 */
export const useIapNotificationAdminApi_GetIapNotifications = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endDate?: string | null
      externalId?: string | null
      limit?: number
      offset?: number
      source?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'
      startDate?: string | null
      status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'
      type?: string | null
    }
  },
  options?: Omit<UseQueryOptions<NotificationPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NotificationPagingSlicedResult>) => void
): UseQueryResult<NotificationPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useIapNotificationAdminApi_GetIapNotifications>[1]) => async () => {
    const response = await IapNotificationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getIapNotifications(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<NotificationPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapNotificationAdmin.IapNotifications, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
