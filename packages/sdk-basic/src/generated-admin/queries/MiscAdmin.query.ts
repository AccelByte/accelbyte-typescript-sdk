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
import { MiscAdminApi } from '../MiscAdminApi.js'

import { AddCountryGroupRequest } from '../../generated-definitions/AddCountryGroupRequest.js'
import { AddCountryGroupResponse } from '../../generated-definitions/AddCountryGroupResponse.js'
import { CountryGroupObject } from '../../generated-definitions/CountryGroupObject.js'
import { RetrieveCountryGroupResponseArray } from '../../generated-definitions/RetrieveCountryGroupResponseArray.js'
import { UpdateCountryGroupRequest } from '../../generated-definitions/UpdateCountryGroupRequest.js'

export enum Key_MiscAdmin {
  MiscLanguages = 'MiscAdmin.MiscLanguages',
  MiscTimezones = 'MiscAdmin.MiscTimezones',
  MiscCountrygroups = 'MiscAdmin.MiscCountrygroups',
  MiscCountrygroup = 'MiscAdmin.MiscCountrygroup',
  MiscCountrygroup_ByCountryGroupCode = 'MiscAdmin.MiscCountrygroup_ByCountryGroupCode'
}

export const useAdmMiscLanguages = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMiscLanguages>[1]) => async () => {
    const data = await MiscAdminApi(sdk, { namespace: input.namespace }).getMiscLanguages()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscLanguages, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmMiscTimezones = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMiscTimezones>[1]) => async () => {
    const data = await MiscAdminApi(sdk, { namespace: input.namespace }).getMiscTimezones()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscTimezones, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmMiscCountrygroups = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { groupCode?: string | null } },
  options?: Omit<UseQueryOptions<RetrieveCountryGroupResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveCountryGroupResponseArray) => void
): UseQueryResult<RetrieveCountryGroupResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMiscCountrygroups>[1]) => async () => {
    const data = await MiscAdminApi(sdk, { namespace: input.namespace }).getMiscCountrygroups(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveCountryGroupResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscCountrygroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateMiscCountrygroupMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AddCountryGroupResponse, AxiosError<ApiError>, ApiArgs & { data: AddCountryGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: AddCountryGroupResponse) => void
): UseMutationResult<AddCountryGroupResponse, AxiosError<ApiError>, ApiArgs & { data: AddCountryGroupRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AddCountryGroupRequest }) => {
    const data = await MiscAdminApi(sdk, { namespace: input.namespace, config: input.config }).createMiscCountrygroup(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MiscAdmin.MiscCountrygroup],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteMiscCountrygroup_ByCountryGroupCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { countryGroupCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { countryGroupCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { countryGroupCode: string }) => {
    const data = await MiscAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteMiscCountrygroup_ByCountryGroupCode(
      input.countryGroupCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MiscAdmin.MiscCountrygroup_ByCountryGroupCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateMiscCountrygroup_ByCountryGroupCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CountryGroupObject, AxiosError<ApiError>, ApiArgs & { countryGroupCode: string; data: UpdateCountryGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: CountryGroupObject) => void
): UseMutationResult<CountryGroupObject, AxiosError<ApiError>, ApiArgs & { countryGroupCode: string; data: UpdateCountryGroupRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { countryGroupCode: string; data: UpdateCountryGroupRequest }) => {
    const data = await MiscAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateMiscCountrygroup_ByCountryGroupCode(
      input.countryGroupCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MiscAdmin.MiscCountrygroup_ByCountryGroupCode],
    mutationFn,
    ...options
  })
}
