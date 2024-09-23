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
import { StoreApi } from '../StoreApi.js'

import { StoreInfoArray } from '../../generated-definitions/StoreInfoArray.js'

export enum Key_Store {
  Stores = 'Platform.Store.Stores'
}

/**
 * This API is used to list all stores in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of stores&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Store.Stores, input]
 * }
 * ```
 */
export const useStoreApi_GetStores = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<StoreInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StoreInfoArray>) => void
): UseQueryResult<StoreInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreApi_GetStores>[1]) => async () => {
    const response = await StoreApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStores()
    callback && callback(response)
    return response.data
  }

  return useQuery<StoreInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Store.Stores, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
