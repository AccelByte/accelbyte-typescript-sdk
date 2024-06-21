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
import { DlcAdminApi } from '../DlcAdminApi.js'

import { DlcItemConfigInfo } from '../../generated-definitions/DlcItemConfigInfo.js'
import { DlcItemConfigUpdate } from '../../generated-definitions/DlcItemConfigUpdate.js'
import { PlatformDlcConfigInfo } from '../../generated-definitions/PlatformDlcConfigInfo.js'
import { PlatformDlcConfigUpdate } from '../../generated-definitions/PlatformDlcConfigUpdate.js'
import { UserDlc } from '../../generated-definitions/UserDlc.js'
import { UserDlcRecordArray } from '../../generated-definitions/UserDlcRecordArray.js'

export enum Key_DlcAdmin {
  DlcConfigItem = 'DlcAdmin.DlcConfigItem',
  Dlc_ByUserId = 'DlcAdmin.Dlc_ByUserId',
  DlcConfigPlatformMap = 'DlcAdmin.DlcConfigPlatformMap',
  DlcRecords_ByUserId = 'DlcAdmin.DlcRecords_ByUserId'
}

export const useAdmDeleteDlcConfigItemMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteDlcConfigItem()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigItem],
    mutationFn,
    ...options
  })
}

export const useAdmDlcConfigItem = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DlcItemConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DlcItemConfigInfo) => void
): UseQueryResult<DlcItemConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDlcConfigItem>[1]) => async () => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace }).getDlcConfigItem()
    callback && callback(data)
    return data
  }

  return useQuery<DlcItemConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcConfigItem, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateDlcConfigItemMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<DlcItemConfigInfo, AxiosError<ApiError>, ApiArgs & { data: DlcItemConfigUpdate }>, 'mutationKey'>,
  callback?: (data: DlcItemConfigInfo) => void
): UseMutationResult<DlcItemConfigInfo, AxiosError<ApiError>, ApiArgs & { data: DlcItemConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DlcItemConfigUpdate }) => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDlcConfigItem(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigItem],
    mutationFn,
    ...options
  })
}

export const useAdmDlc_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' } },
  options?: Omit<UseQueryOptions<UserDlc, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserDlc) => void
): UseQueryResult<UserDlc, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDlc_ByUserId>[1]) => async () => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace }).getDlc_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserDlc, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.Dlc_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteDlcConfigPlatformMapMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteDlcConfigPlatformMap()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigPlatformMap],
    mutationFn,
    ...options
  })
}

export const useAdmDlcConfigPlatformMap = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PlatformDlcConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlatformDlcConfigInfo) => void
): UseQueryResult<PlatformDlcConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDlcConfigPlatformMap>[1]) => async () => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace }).getDlcConfigPlatformMap()
    callback && callback(data)
    return data
  }

  return useQuery<PlatformDlcConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateDlcConfigPlatformMapMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlatformDlcConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PlatformDlcConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PlatformDlcConfigInfo) => void
): UseMutationResult<PlatformDlcConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PlatformDlcConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PlatformDlcConfigUpdate }) => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDlcConfigPlatformMap(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigPlatformMap],
    mutationFn,
    ...options
  })
}

export const useAdmDlcRecords_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { type?: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX' } },
  options?: Omit<UseQueryOptions<UserDlcRecordArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserDlcRecordArray) => void
): UseQueryResult<UserDlcRecordArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDlcRecords_ByUserId>[1]) => async () => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace }).getDlcRecords_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserDlcRecordArray, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcRecords_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
