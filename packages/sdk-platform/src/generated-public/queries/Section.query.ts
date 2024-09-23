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
import { SectionApi } from '../SectionApi.js'

import { SectionInfoArray } from '../../generated-definitions/SectionInfoArray.js'

export enum Key_Section {
  Sections_ByUserId = 'Platform.Section.Sections_ByUserId'
}

/**
 * This API is used to list active section contents.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store sections)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store sections)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: active section contents&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Section.Sections_ByUserId, input]
 * }
 * ```
 */
export const useSectionApi_GetSections_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      region?: string | null
      storeId?: string | null
      viewId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<SectionInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SectionInfoArray>) => void
): UseQueryResult<SectionInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSectionApi_GetSections_ByUserId>[1]) => async () => {
    const response = await SectionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSections_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SectionInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Section.Sections_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
