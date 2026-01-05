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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ExtensionCategoriesAndAutoModerationActionsAdminApi } from '../ExtensionCategoriesAndAutoModerationActionsAdminApi.js'

import { ActionApiRequest } from '../../generated-definitions/ActionApiRequest.js'
import { ActionApiResponse } from '../../generated-definitions/ActionApiResponse.js'
import { ActionListApiResponse } from '../../generated-definitions/ActionListApiResponse.js'
import { ExtensionCategoryApiRequest } from '../../generated-definitions/ExtensionCategoryApiRequest.js'
import { ExtensionCategoryApiResponse } from '../../generated-definitions/ExtensionCategoryApiResponse.js'
import { ExtensionCategoryListApiResponse } from '../../generated-definitions/ExtensionCategoryListApiResponse.js'

export enum Key_ExtensionCategoriesAndAutoModerationActionsAdmin {
  ExtensionActions = 'Reporting.ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionActions',
  ExtensionAction = 'Reporting.ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionAction',
  ExtensionCategories = 'Reporting.ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategories',
  ExtensionCategory = 'Reporting.ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategory'
}

/**
 * Get a list of auto moderation actions
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionActions, input]
 * }
 * ```
 */
export const useExtensionCategoriesAndAutoModerationActionsAdminApi_GetExtensionActions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ActionListApiResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ActionListApiResponse>) => void
): UseQueryResult<ActionListApiResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useExtensionCategoriesAndAutoModerationActionsAdminApi_GetExtensionActions>[1]) =>
    async () => {
      const response = await ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getExtensionActions()
      callback && callback(response)
      return response.data
    }

  return useQuery<ActionListApiResponse, AxiosError<ApiError>>({
    queryKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionActions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create auto moderation action
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionAction, input]
 * }
 * ```
 */
export const useExtensionCategoriesAndAutoModerationActionsAdminApi_CreateExtensionActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ActionApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ActionApiRequest }>,
    'mutationKey'
  >,
  callback?: (data: ActionApiResponse) => void
): UseMutationResult<ActionApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ActionApiRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ActionApiRequest }) => {
    const response = await ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createExtensionAction(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionAction],
    mutationFn,
    ...options
  })
}

/**
 * Get a list of extension category data with the specified name
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategories, input]
 * }
 * ```
 */
export const useExtensionCategoriesAndAutoModerationActionsAdminApi_GetExtensionCategories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { order?: 'asc' | 'ascending' | 'desc' | 'descending'; sortBy?: 'extensionCategory' | 'extensionCategoryName' }
  },
  options?: Omit<UseQueryOptions<ExtensionCategoryListApiResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ExtensionCategoryListApiResponse>) => void
): UseQueryResult<ExtensionCategoryListApiResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useExtensionCategoriesAndAutoModerationActionsAdminApi_GetExtensionCategories>[1]) =>
    async () => {
      const response = await ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getExtensionCategories(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ExtensionCategoryListApiResponse, AxiosError<ApiError>>({
    queryKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create extension category data
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategory, input]
 * }
 * ```
 */
export const useExtensionCategoriesAndAutoModerationActionsAdminApi_CreateExtensionCategoryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ExtensionCategoryApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ExtensionCategoryApiRequest }>,
    'mutationKey'
  >,
  callback?: (data: ExtensionCategoryApiResponse) => void
): UseMutationResult<ExtensionCategoryApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ExtensionCategoryApiRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ExtensionCategoryApiRequest }) => {
    const response = await ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createExtensionCategory(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ExtensionCategoriesAndAutoModerationActionsAdmin.ExtensionCategory],
    mutationFn,
    ...options
  })
}
