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
import { ViewApi } from '../ViewApi.js'

import { ViewInfoArray } from '../../generated-definitions/ViewInfoArray.js'

export enum Key_View {
  Views_ByUserId = 'Platform.View.Views_ByUserId'
}

/**
 * This API is used to get all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store views)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store views)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: all views&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_View.Views_ByUserId, input]
 * }
 * ```
 */
export const useViewApi_GetViews_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { language?: string | null; storeId?: string | null } },
  options?: Omit<UseQueryOptions<ViewInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ViewInfoArray>) => void
): UseQueryResult<ViewInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useViewApi_GetViews_ByUserId>[1]) => async () => {
    const response = await ViewApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getViews_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ViewInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_View.Views_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
