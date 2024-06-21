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
import { PassAdminApi } from '../PassAdminApi.js'

import { PassCreate } from '../../generated-definitions/PassCreate.js'
import { PassInfo } from '../../generated-definitions/PassInfo.js'
import { PassInfoArray } from '../../generated-definitions/PassInfoArray.js'
import { PassUpdate } from '../../generated-definitions/PassUpdate.js'
import { UserPassGrant } from '../../generated-definitions/UserPassGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'

export enum Key_PassAdmin {
  Passes_BySeasonId = 'PassAdmin.Passes_BySeasonId',
  Passe_BySeasonId = 'PassAdmin.Passe_BySeasonId',
  Passe_BySeasonId_ByCode = 'PassAdmin.Passe_BySeasonId_ByCode',
  SeasonCurrentPasse_ByUserId = 'PassAdmin.SeasonCurrentPasse_ByUserId'
}

export const useAdmPasses_BySeasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string },
  options?: Omit<UseQueryOptions<PassInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PassInfoArray) => void
): UseQueryResult<PassInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPasses_BySeasonId>[1]) => async () => {
    const data = await PassAdminApi(sdk, { namespace: input.namespace }).getPasses_BySeasonId(input.seasonId)
    callback && callback(data)
    return data
  }

  return useQuery<PassInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_PassAdmin.Passes_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePasse_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<PassInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: PassCreate }>, 'mutationKey'>,
  callback?: (data: PassInfo) => void
): UseMutationResult<PassInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: PassCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; data: PassCreate }) => {
    const data = await PassAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPasse_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.Passe_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePasse_BySeasonId_ByCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; code: string }) => {
    const data = await PassAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePasse_BySeasonId_ByCode(
      input.seasonId,
      input.code
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.Passe_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}

export const useAdmPasse_BySeasonId_ByCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string; code: string },
  options?: Omit<UseQueryOptions<PassInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PassInfo) => void
): UseQueryResult<PassInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPasse_BySeasonId_ByCode>[1]) => async () => {
    const data = await PassAdminApi(sdk, { namespace: input.namespace }).getPasse_BySeasonId_ByCode(input.seasonId, input.code)
    callback && callback(data)
    return data
  }

  return useQuery<PassInfo, AxiosError<ApiError>>({
    queryKey: [Key_PassAdmin.Passe_BySeasonId_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchPasse_BySeasonId_ByCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PassInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string; data: PassUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PassInfo) => void
): UseMutationResult<PassInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string; data: PassUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; code: string; data: PassUpdate }) => {
    const data = await PassAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchPasse_BySeasonId_ByCode(
      input.seasonId,
      input.code,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.Passe_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSeasonCurrentPasse_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserPassGrant }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummary) => void
): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserPassGrant }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserPassGrant }) => {
    const data = await PassAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSeasonCurrentPasse_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PassAdmin.SeasonCurrentPasse_ByUserId],
    mutationFn,
    ...options
  })
}
