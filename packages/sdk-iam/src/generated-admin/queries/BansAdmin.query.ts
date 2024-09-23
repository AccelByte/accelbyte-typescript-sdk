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
import { BansAdminApi } from '../BansAdminApi.js'

import { BanReasonsV3 } from '../../generated-definitions/BanReasonsV3.js'
import { BansV3 } from '../../generated-definitions/BansV3.js'
import { BulkBanCreateRequestV3 } from '../../generated-definitions/BulkBanCreateRequestV3.js'
import { BulkUnbanCreateRequestV3 } from '../../generated-definitions/BulkUnbanCreateRequestV3.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { ListBulkUserBanResponseV3 } from '../../generated-definitions/ListBulkUserBanResponseV3.js'

export enum Key_BansAdmin {
  Bans_v3 = 'Iam.BansAdmin.Bans_v3',
  BansReasons_v3 = 'Iam.BansAdmin.BansReasons_v3',
  Bantypes_v3 = 'Iam.BansAdmin.Bantypes_v3',
  BansUsers_v3 = 'Iam.BansAdmin.BansUsers_v3',
  BanUser_v3 = 'Iam.BansAdmin.BanUser_v3',
  BanUserDisabled_v3 = 'Iam.BansAdmin.BanUserDisabled_v3'
}

/**
 * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BansAdmin.Bans_v3, input]
 * }
 * ```
 */
export const useBansAdminApi_GetBans_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<BansV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BansV3>) => void
): UseQueryResult<BansV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBansAdminApi_GetBans_v3>[1]) => async () => {
    const response = await BansAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<BansV3, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.Bans_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Ban reasons is the code available to justify ban assignment. It is applicable globally for any namespace. action code : 10202
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BansAdmin.BansReasons_v3, input]
 * }
 * ```
 */
export const useBansAdminApi_GetBansReasons_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<BanReasonsV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BanReasonsV3>) => void
): UseQueryResult<BanReasonsV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBansAdminApi_GetBansReasons_v3>[1]) => async () => {
    const response = await BansAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBansReasons_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<BanReasonsV3, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.BansReasons_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BansAdmin.Bantypes_v3, input]
 * }
 * ```
 */
export const useBansAdminApi_GetBantypes_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<BansV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BansV3>) => void
): UseQueryResult<BansV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBansAdminApi_GetBantypes_v3>[1]) => async () => {
    const response = await BansAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBantypes_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<BansV3, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.Bantypes_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BansAdmin.BansUsers_v3, input]
 * }
 * ```
 */
export const useBansAdminApi_GetBansUsers_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { activeOnly?: boolean | null; banType?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBansAdminApi_GetBansUsers_v3>[1]) => async () => {
    const response = await BansAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBansUsers_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_BansAdmin.BansUsers_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk ban user with specific type of ban. Ban types and reason can be queried. The maximum limit value is 100 userIDs action code : 10141
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BansAdmin.BanUser_v3, input]
 * }
 * ```
 */
export const useBansAdminApi_CreateBanUserMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ListBulkUserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkBanCreateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: ListBulkUserBanResponseV3) => void
): UseMutationResult<ListBulkUserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkBanCreateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkBanCreateRequestV3 }) => {
    const response = await BansAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBanUser_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_BansAdmin.BanUser_v3],
    mutationFn,
    ...options
  })
}

/**
 * disable bulk ban user. The maximum limit value is 100 action code : 10142
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BansAdmin.BanUserDisabled_v3, input]
 * }
 * ```
 */
export const useBansAdminApi_PatchBanUserDisabledMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ListBulkUserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUnbanCreateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: ListBulkUserBanResponseV3) => void
): UseMutationResult<ListBulkUserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUnbanCreateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUnbanCreateRequestV3 }) => {
    const response = await BansAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchBanUserDisabled_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_BansAdmin.BanUserDisabled_v3],
    mutationFn,
    ...options
  })
}
