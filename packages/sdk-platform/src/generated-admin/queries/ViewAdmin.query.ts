/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ViewAdminApi } from '../ViewAdminApi.js'

import { FullViewInfo } from '../../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../../generated-definitions/ViewUpdate.js'

export enum Key_ViewAdmin {
  Views = 'ViewAdmin.Views',
  View = 'ViewAdmin.View',
  View_ByViewId = 'ViewAdmin.View_ByViewId'
}

export const useAdmViews = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<ListViewInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListViewInfoArray) => void
): UseQueryResult<ListViewInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmViews>[1]) => async () => {
    const data = await ViewAdminApi(sdk, { namespace: input.namespace }).getViews(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListViewInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ViewAdmin.Views, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateViewMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullViewInfo, AxiosError<ApiError>, ApiArgs & { data: ViewCreate; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullViewInfo) => void
): UseMutationResult<FullViewInfo, AxiosError<ApiError>, ApiArgs & { data: ViewCreate; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ViewCreate; queryParams: { storeId: string | null } }) => {
    const data = await ViewAdminApi(sdk, { namespace: input.namespace, config: input.config }).createView(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ViewAdmin.View],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteView_ByViewIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { viewId: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { viewId: string; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { viewId: string; queryParams: { storeId: string | null } }) => {
    const data = await ViewAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteView_ByViewId(
      input.viewId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ViewAdmin.View_ByViewId],
    mutationFn,
    ...options
  })
}

export const useAdmView_ByViewId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { viewId: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullViewInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullViewInfo) => void
): UseQueryResult<FullViewInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmView_ByViewId>[1]) => async () => {
    const data = await ViewAdminApi(sdk, { namespace: input.namespace }).getView_ByViewId(input.viewId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullViewInfo, AxiosError<ApiError>>({
    queryKey: [Key_ViewAdmin.View_ByViewId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateView_ByViewIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullViewInfo,
      AxiosError<ApiError>,
      ApiArgs & { viewId: string; data: ViewUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullViewInfo) => void
): UseMutationResult<
  FullViewInfo,
  AxiosError<ApiError>,
  ApiArgs & { viewId: string; data: ViewUpdate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { viewId: string; data: ViewUpdate; queryParams: { storeId: string | null } }) => {
    const data = await ViewAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateView_ByViewId(
      input.viewId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ViewAdmin.View_ByViewId],
    mutationFn,
    ...options
  })
}
