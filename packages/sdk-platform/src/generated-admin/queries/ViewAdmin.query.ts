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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ViewAdminApi } from '../ViewAdminApi.js'

import { FullViewInfo } from '../../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../../generated-definitions/ViewUpdate.js'

export enum Key_ViewAdmin {
  Views = 'Platform.ViewAdmin.Views',
  View = 'Platform.ViewAdmin.View',
  View_ByViewId = 'Platform.ViewAdmin.View_ByViewId'
}

/**
 * This API is used to list all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of views&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ViewAdmin.Views, input]
 * }
 * ```
 */
export const useViewAdminApi_GetViews = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<ListViewInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListViewInfoArray>) => void
): UseQueryResult<ListViewInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useViewAdminApi_GetViews>[1]) => async () => {
    const response = await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getViews(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListViewInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ViewAdmin.Views, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a view&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ViewAdmin.View, input]
 * }
 * ```
 */
export const useViewAdminApi_CreateViewMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullViewInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ViewCreate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullViewInfo) => void
): UseMutationResult<
  FullViewInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ViewCreate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ViewCreate; queryParams: { storeId: string | null } }) => {
    const response = await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createView(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ViewAdmin.View],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete a view.It will also delete all the related sections
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ViewAdmin.View_ByViewId, input]
 * }
 * ```
 */
export const useViewAdminApi_DeleteView_ByViewIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { viewId: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { viewId: string; queryParams: { storeId: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { viewId: string; queryParams: { storeId: string | null } }) => {
    const response = await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteView_ByViewId(
      input.viewId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ViewAdmin.View_ByViewId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: view data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ViewAdmin.View_ByViewId, input]
 * }
 * ```
 */
export const useViewAdminApi_GetView_ByViewId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { viewId: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullViewInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullViewInfo>) => void
): UseQueryResult<FullViewInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useViewAdminApi_GetView_ByViewId>[1]) => async () => {
    const response = await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getView_ByViewId(
      input.viewId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullViewInfo, AxiosError<ApiError>>({
    queryKey: [Key_ViewAdmin.View_ByViewId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated view data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ViewAdmin.View_ByViewId, input]
 * }
 * ```
 */
export const useViewAdminApi_UpdateView_ByViewIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FullViewInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { viewId: string; data: ViewUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullViewInfo) => void
): UseMutationResult<
  FullViewInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { viewId: string; data: ViewUpdate; queryParams: { storeId: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { viewId: string; data: ViewUpdate; queryParams: { storeId: string | null } }) => {
    const response = await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateView_ByViewId(
      input.viewId,
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ViewAdmin.View_ByViewId],
    mutationFn,
    ...options
  })
}
