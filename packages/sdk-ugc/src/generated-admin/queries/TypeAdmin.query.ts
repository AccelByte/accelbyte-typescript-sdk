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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { TypeAdminApi } from '../TypeAdminApi.js'

import { CreateTypeRequest } from '../../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export enum Key_TypeAdmin {
  Types = 'Ugc.TypeAdmin.Types',
  Type = 'Ugc.TypeAdmin.Type',
  Type_ByTypeId = 'Ugc.TypeAdmin.Type_ByTypeId'
}

/**
 * Get available types paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TypeAdmin.Types, input]
 * }
 * ```
 */
export const useTypeAdminApi_GetTypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetTypeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGetTypeResponse>) => void
): UseQueryResult<PaginatedGetTypeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTypeAdminApi_GetTypes>[1]) => async () => {
    const response = await TypeAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTypes(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGetTypeResponse, AxiosError<ApiError>>({
    queryKey: [Key_TypeAdmin.Types, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Creates a new type and subtype
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TypeAdmin.Type, input]
 * }
 * ```
 */
export const useTypeAdminApi_CreateTypeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTypeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTypeRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateTypeResponse) => void
): UseMutationResult<CreateTypeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTypeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTypeRequest }) => {
    const response = await TypeAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createType(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TypeAdmin.Type],
    mutationFn,
    ...options
  })
}

/**
 * Delete existing type
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TypeAdmin.Type_ByTypeId, input]
 * }
 * ```
 */
export const useTypeAdminApi_DeleteType_ByTypeIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { typeId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { typeId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { typeId: string }) => {
    const response = await TypeAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteType_ByTypeId(
      input.typeId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TypeAdmin.Type_ByTypeId],
    mutationFn,
    ...options
  })
}

/**
 * Updates a type and subtype
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TypeAdmin.Type_ByTypeId, input]
 * }
 * ```
 */
export const useTypeAdminApi_UpdateType_ByTypeIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTypeResponse, AxiosError<ApiError>, SdkSetConfigParam & { typeId: string; data: CreateTypeRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateTypeResponse) => void
): UseMutationResult<CreateTypeResponse, AxiosError<ApiError>, SdkSetConfigParam & { typeId: string; data: CreateTypeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { typeId: string; data: CreateTypeRequest }) => {
    const response = await TypeAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateType_ByTypeId(
      input.typeId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TypeAdmin.Type_ByTypeId],
    mutationFn,
    ...options
  })
}
