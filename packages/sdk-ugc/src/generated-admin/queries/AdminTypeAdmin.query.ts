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
import { AdminTypeAdminApi } from '../AdminTypeAdminApi.js'

import { CreateTypeRequest } from '../../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export enum Key_AdminTypeAdmin {
  Types = 'AdminTypeAdmin.Types',
  Type = 'AdminTypeAdmin.Type',
  Type_ByTypeId = 'AdminTypeAdmin.Type_ByTypeId'
}

export const useAdmTypes = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetTypeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGetTypeResponse) => void
): UseQueryResult<PaginatedGetTypeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTypes>[1]) => async () => {
    const data = await AdminTypeAdminApi(sdk, { namespace: input.namespace }).getTypes(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGetTypeResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminTypeAdmin.Types, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateTypeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateTypeResponse, AxiosError<ApiError>, ApiArgs & { data: CreateTypeRequest }>, 'mutationKey'>,
  callback?: (data: CreateTypeResponse) => void
): UseMutationResult<CreateTypeResponse, AxiosError<ApiError>, ApiArgs & { data: CreateTypeRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateTypeRequest }) => {
    const data = await AdminTypeAdminApi(sdk, { namespace: input.namespace, config: input.config }).createType(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTypeAdmin.Type],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteType_ByTypeIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { typeId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { typeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { typeId: string }) => {
    const data = await AdminTypeAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteType_ByTypeId(input.typeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTypeAdmin.Type_ByTypeId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateType_ByTypeIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateTypeResponse, AxiosError<ApiError>, ApiArgs & { typeId: string; data: CreateTypeRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateTypeResponse) => void
): UseMutationResult<CreateTypeResponse, AxiosError<ApiError>, ApiArgs & { typeId: string; data: CreateTypeRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { typeId: string; data: CreateTypeRequest }) => {
    const data = await AdminTypeAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateType_ByTypeId(
      input.typeId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminTypeAdmin.Type_ByTypeId],
    mutationFn,
    ...options
  })
}
