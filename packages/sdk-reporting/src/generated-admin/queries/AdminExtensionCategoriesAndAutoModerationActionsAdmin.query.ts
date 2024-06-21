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
import { AdminExtensionCategoriesAndAutoModerationActionsAdminApi } from '../AdminExtensionCategoriesAndAutoModerationActionsAdminApi.js'

import { ActionApiRequest } from '../../generated-definitions/ActionApiRequest.js'
import { ActionApiResponse } from '../../generated-definitions/ActionApiResponse.js'
import { ActionListApiResponse } from '../../generated-definitions/ActionListApiResponse.js'
import { ExtensionCategoryApiRequest } from '../../generated-definitions/ExtensionCategoryApiRequest.js'
import { ExtensionCategoryApiResponse } from '../../generated-definitions/ExtensionCategoryApiResponse.js'
import { ExtensionCategoryListApiResponse } from '../../generated-definitions/ExtensionCategoryListApiResponse.js'

export enum Key_AdminExtensionCategoriesAndAutoModerationActionsAdmin {
  ExtensionActions = 'AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionActions',
  ExtensionAction = 'AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionAction',
  ExtensionCategories = 'AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategories',
  ExtensionCategory = 'AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategory'
}

export const useAdmExtensionActions = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ActionListApiResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ActionListApiResponse) => void
): UseQueryResult<ActionListApiResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmExtensionActions>[1]) => async () => {
    const data = await AdminExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, { namespace: input.namespace }).getExtensionActions()
    callback && callback(data)
    return data
  }

  return useQuery<ActionListApiResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionActions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateExtensionActionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ActionApiResponse, AxiosError<ApiError>, ApiArgs & { data: ActionApiRequest }>, 'mutationKey'>,
  callback?: (data: ActionApiResponse) => void
): UseMutationResult<ActionApiResponse, AxiosError<ApiError>, ApiArgs & { data: ActionApiRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ActionApiRequest }) => {
    const data = await AdminExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createExtensionAction(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionAction],
    mutationFn,
    ...options
  })
}

export const useAdmExtensionCategories = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { order?: 'asc' | 'ascending' | 'desc' | 'descending'; sortBy?: 'extensionCategory' | 'extensionCategoryName' }
  },
  options?: Omit<UseQueryOptions<ExtensionCategoryListApiResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ExtensionCategoryListApiResponse) => void
): UseQueryResult<ExtensionCategoryListApiResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmExtensionCategories>[1]) => async () => {
    const data = await AdminExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, { namespace: input.namespace }).getExtensionCategories(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<ExtensionCategoryListApiResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateExtensionCategoryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ExtensionCategoryApiResponse, AxiosError<ApiError>, ApiArgs & { data: ExtensionCategoryApiRequest }>,
    'mutationKey'
  >,
  callback?: (data: ExtensionCategoryApiResponse) => void
): UseMutationResult<ExtensionCategoryApiResponse, AxiosError<ApiError>, ApiArgs & { data: ExtensionCategoryApiRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ExtensionCategoryApiRequest }) => {
    const data = await AdminExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createExtensionCategory(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategory],
    mutationFn,
    ...options
  })
}
