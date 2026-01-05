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
import { MaxActiveAdminApi } from '../MaxActiveAdminApi.js'

import { MemberActiveSession } from '../../generated-definitions/MemberActiveSession.js'
import { RequestReconcileMaxActiveSession } from '../../generated-definitions/RequestReconcileMaxActiveSession.js'

export enum Key_MaxActiveAdmin {
  Reconcile_ByName = 'Session.MaxActiveAdmin.Reconcile_ByName',
  Memberactivesession_ByName_ByUserId = 'Session.MaxActiveAdmin.Memberactivesession_ByName_ByUserId'
}

/**
 *  Reconcile Max Active Session.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MaxActiveAdmin.Reconcile_ByName, input]
 * }
 * ```
 */
export const useMaxActiveAdminApi_UpdateReconcile_ByNameMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: RequestReconcileMaxActiveSession }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name: string; data: RequestReconcileMaxActiveSession }> => {
  const mutationFn = async (input: SdkSetConfigParam & { name: string; data: RequestReconcileMaxActiveSession }) => {
    const response = await MaxActiveAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateReconcile_ByName(
      input.name,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MaxActiveAdmin.Reconcile_ByName],
    mutationFn,
    ...options
  })
}

/**
 *  Get Member Active Session.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MaxActiveAdmin.Memberactivesession_ByName_ByUserId, input]
 * }
 * ```
 */
export const useMaxActiveAdminApi_GetMemberactivesession_ByName_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { name: string; userId: string },
  options?: Omit<UseQueryOptions<MemberActiveSession, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MemberActiveSession>) => void
): UseQueryResult<MemberActiveSession, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useMaxActiveAdminApi_GetMemberactivesession_ByName_ByUserId>[1]) => async () => {
      const response = await MaxActiveAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getMemberactivesession_ByName_ByUserId(input.name, input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<MemberActiveSession, AxiosError<ApiError>>({
    queryKey: [Key_MaxActiveAdmin.Memberactivesession_ByName_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
