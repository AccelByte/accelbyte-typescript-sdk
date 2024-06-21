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
import { ProfanityAdminApi } from '../ProfanityAdminApi.js'

import { AdminAddProfanityFilterIntoListRequest } from '../../generated-definitions/AdminAddProfanityFilterIntoListRequest.js'
import { AdminAddProfanityFiltersRequest } from '../../generated-definitions/AdminAddProfanityFiltersRequest.js'
import { AdminCreateProfanityListRequest } from '../../generated-definitions/AdminCreateProfanityListRequest.js'
import { AdminDeleteProfanityFilterRequest } from '../../generated-definitions/AdminDeleteProfanityFilterRequest.js'
import { AdminGetProfanityListFiltersV1Response } from '../../generated-definitions/AdminGetProfanityListFiltersV1Response.js'
import { AdminGetProfanityListsListResponseArray } from '../../generated-definitions/AdminGetProfanityListsListResponseArray.js'
import { AdminSetProfanityRuleForNamespaceRequest } from '../../generated-definitions/AdminSetProfanityRuleForNamespaceRequest.js'
import { AdminUpdateProfanityList } from '../../generated-definitions/AdminUpdateProfanityList.js'
import { AdminVerifyMessageProfanityRequest } from '../../generated-definitions/AdminVerifyMessageProfanityRequest.js'
import { AdminVerifyMessageProfanityResponse } from '../../generated-definitions/AdminVerifyMessageProfanityResponse.js'
import { DebugProfanityFilterRequest } from '../../generated-definitions/DebugProfanityFilterRequest.js'
import { ProfanityFilterArray } from '../../generated-definitions/ProfanityFilterArray.js'
import { ProfanityRule } from '../../generated-definitions/ProfanityRule.js'

export enum Key_ProfanityAdmin {
  ProfanityRule = 'ProfanityAdmin.ProfanityRule',
  ProfanityLists = 'ProfanityAdmin.ProfanityLists',
  ProfanityList = 'ProfanityAdmin.ProfanityList',
  ProfanityVerify = 'ProfanityAdmin.ProfanityVerify',
  ProfanityList_ByList = 'ProfanityAdmin.ProfanityList_ByList',
  ProfanityFilterDebug = 'ProfanityAdmin.ProfanityFilterDebug',
  FiltersProfanity_ByList = 'ProfanityAdmin.FiltersProfanity_ByList',
  FilterProfanity_ByList = 'ProfanityAdmin.FilterProfanity_ByList',
  FilterBulkProfanity_ByList = 'ProfanityAdmin.FilterBulkProfanity_ByList',
  FilterDeleteProfanity_ByList = 'ProfanityAdmin.FilterDeleteProfanity_ByList',
  FilterBulkFileProfanity_ByList = 'ProfanityAdmin.FilterBulkFileProfanity_ByList'
}

export const useAdmProfanityRule = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ProfanityRule, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ProfanityRule) => void
): UseQueryResult<ProfanityRule, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfanityRule>[1]) => async () => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace }).getProfanityRule()
    callback && callback(data)
    return data
  }

  return useQuery<ProfanityRule, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityRule, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateProfanityRuleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: AdminSetProfanityRuleForNamespaceRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: AdminSetProfanityRuleForNamespaceRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AdminSetProfanityRuleForNamespaceRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityRule(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityRule],
    mutationFn,
    ...options
  })
}

export const useAdmProfanityLists = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<AdminGetProfanityListsListResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminGetProfanityListsListResponseArray) => void
): UseQueryResult<AdminGetProfanityListsListResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfanityLists>[1]) => async () => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace }).getProfanityLists()
    callback && callback(data)
    return data
  }

  return useQuery<AdminGetProfanityListsListResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityLists, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateProfanityListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: AdminCreateProfanityListRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: AdminCreateProfanityListRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AdminCreateProfanityListRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityList(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityList],
    mutationFn,
    ...options
  })
}

export const useAdmCreateProfanityVerifyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AdminVerifyMessageProfanityResponse, AxiosError<ApiError>, ApiArgs & { data: AdminVerifyMessageProfanityRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminVerifyMessageProfanityResponse) => void
): UseMutationResult<AdminVerifyMessageProfanityResponse, AxiosError<ApiError>, ApiArgs & { data: AdminVerifyMessageProfanityRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AdminVerifyMessageProfanityRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityVerify(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityVerify],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteProfanityList_ByListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { list: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { list: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { list: string }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteProfanityList_ByList(input.list)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityList_ByList],
    mutationFn,
    ...options
  })
}

export const useAdmCreateProfanityList_ByListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminUpdateProfanityList }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminUpdateProfanityList }> => {
  //
  const mutationFn = async (input: ApiArgs & { list: string; data: AdminUpdateProfanityList }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityList_ByList(
      input.list,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityList_ByList],
    mutationFn,
    ...options
  })
}

export const useAdmCreateProfanityFilterDebugMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ProfanityFilterArray, AxiosError<ApiError>, ApiArgs & { data: DebugProfanityFilterRequest }>,
    'mutationKey'
  >,
  callback?: (data: ProfanityFilterArray) => void
): UseMutationResult<ProfanityFilterArray, AxiosError<ApiError>, ApiArgs & { data: DebugProfanityFilterRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DebugProfanityFilterRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityFilterDebug(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityFilterDebug],
    mutationFn,
    ...options
  })
}

export const useAdmFiltersProfanity_ByList = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { list: string },
  options?: Omit<UseQueryOptions<AdminGetProfanityListFiltersV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminGetProfanityListFiltersV1Response) => void
): UseQueryResult<AdminGetProfanityListFiltersV1Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmFiltersProfanity_ByList>[1]) => async () => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace }).getFiltersProfanity_ByList(input.list)
    callback && callback(data)
    return data
  }

  return useQuery<AdminGetProfanityListFiltersV1Response, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.FiltersProfanity_ByList, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateFilterProfanity_ByListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminAddProfanityFilterIntoListRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminAddProfanityFilterIntoListRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { list: string; data: AdminAddProfanityFilterIntoListRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFilterProfanity_ByList(
      input.list,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterProfanity_ByList],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFilterBulkProfanity_ByListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminAddProfanityFiltersRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminAddProfanityFiltersRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { list: string; data: AdminAddProfanityFiltersRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFilterBulkProfanity_ByList(
      input.list,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterBulkProfanity_ByList],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFilterDeleteProfanity_ByListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ProfanityFilterArray, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminDeleteProfanityFilterRequest }>,
    'mutationKey'
  >,
  callback?: (data: ProfanityFilterArray) => void
): UseMutationResult<ProfanityFilterArray, AxiosError<ApiError>, ApiArgs & { list: string; data: AdminDeleteProfanityFilterRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { list: string; data: AdminDeleteProfanityFilterRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFilterDeleteProfanity_ByList(
      input.list,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterDeleteProfanity_ByList],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFilterBulkFileProfanity_ByListMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: number[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { list: string; data: number[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { list: string; data: number[] }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createFilterBulkFileProfanity_ByList(
      input.list,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterBulkFileProfanity_ByList],
    mutationFn,
    ...options
  })
}
