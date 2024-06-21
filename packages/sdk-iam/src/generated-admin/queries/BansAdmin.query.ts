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
import { BansAdminApi } from '../BansAdminApi.js'

import { BanReasonsV3 } from '../../generated-definitions/BanReasonsV3.js'
import { BansV3 } from '../../generated-definitions/BansV3.js'
import { BulkBanCreateRequestV3 } from '../../generated-definitions/BulkBanCreateRequestV3.js'
import { BulkUnbanCreateRequestV3 } from '../../generated-definitions/BulkUnbanCreateRequestV3.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { ListBulkUserBanResponseV3 } from '../../generated-definitions/ListBulkUserBanResponseV3.js'

export enum Key_BansAdmin {
  Bans = 'BansAdmin.Bans',
  BansReasons = 'BansAdmin.BansReasons',
  Bantypes = 'BansAdmin.Bantypes',
  BansUsers = 'BansAdmin.BansUsers',
  BanUser = 'BansAdmin.BanUser',
  BanUserDisabled = 'BansAdmin.BanUserDisabled'
}

export const useAdmBans = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<BansV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BansV3) => void
): UseQueryResult<BansV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBans>[1]) => async () => {
    const data = await BansAdminApi(sdk, { namespace: input.namespace }).getBans()
    callback && callback(data)
    return data
  }

  return useQuery<BansV3, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.Bans, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBansReasons = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<BanReasonsV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BanReasonsV3) => void
): UseQueryResult<BanReasonsV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBansReasons>[1]) => async () => {
    const data = await BansAdminApi(sdk, { namespace: input.namespace }).getBansReasons()
    callback && callback(data)
    return data
  }

  return useQuery<BanReasonsV3, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.BansReasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBantypes = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<BansV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BansV3) => void
): UseQueryResult<BansV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBantypes>[1]) => async () => {
    const data = await BansAdminApi(sdk, { namespace: input.namespace }).getBantypes()
    callback && callback(data)
    return data
  }

  return useQuery<BansV3, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.Bantypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBansUsers = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null; banType?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserBanV3Response) => void
): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBansUsers>[1]) => async () => {
    const data = await BansAdminApi(sdk, { namespace: input.namespace }).getBansUsers(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.BansUsers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBanUserMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ListBulkUserBanResponseV3, AxiosError<ApiError>, ApiArgs & { data: BulkBanCreateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: ListBulkUserBanResponseV3) => void
): UseMutationResult<ListBulkUserBanResponseV3, AxiosError<ApiError>, ApiArgs & { data: BulkBanCreateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkBanCreateRequestV3 }) => {
    const data = await BansAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBanUser(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_BansAdmin.BanUser],
    mutationFn,
    ...options
  })
}

export const useAdmPatchBanUserDisabledMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ListBulkUserBanResponseV3, AxiosError<ApiError>, ApiArgs & { data: BulkUnbanCreateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: ListBulkUserBanResponseV3) => void
): UseMutationResult<ListBulkUserBanResponseV3, AxiosError<ApiError>, ApiArgs & { data: BulkUnbanCreateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUnbanCreateRequestV3 }) => {
    const data = await BansAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchBanUserDisabled(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_BansAdmin.BanUserDisabled],
    mutationFn,
    ...options
  })
}
