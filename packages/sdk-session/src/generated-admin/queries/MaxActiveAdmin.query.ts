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
import { MaxActiveAdminApi } from '../MaxActiveAdminApi.js'

import { MemberActiveSession } from '../../generated-definitions/MemberActiveSession.js'
import { RequestReconcileMaxActiveSession } from '../../generated-definitions/RequestReconcileMaxActiveSession.js'

export enum Key_MaxActiveAdmin {
  Reconcile_ByName = 'MaxActiveAdmin.Reconcile_ByName',
  Memberactivesession_ByName_ByUserId = 'MaxActiveAdmin.Memberactivesession_ByName_ByUserId'
}

export const useAdmCreateReconcile_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { name: string; data: RequestReconcileMaxActiveSession }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { name: string; data: RequestReconcileMaxActiveSession }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string; data: RequestReconcileMaxActiveSession }) => {
    const data = await MaxActiveAdminApi(sdk, { namespace: input.namespace, config: input.config }).createReconcile_ByName(
      input.name,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_MaxActiveAdmin.Reconcile_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmMemberactivesession_ByName_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { name: string; userId: string },
  options?: Omit<UseQueryOptions<MemberActiveSession, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: MemberActiveSession) => void
): UseQueryResult<MemberActiveSession, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMemberactivesession_ByName_ByUserId>[1]) => async () => {
    const data = await MaxActiveAdminApi(sdk, { namespace: input.namespace }).getMemberactivesession_ByName_ByUserId(
      input.name,
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useQuery<MemberActiveSession, AxiosError<ApiError>>({
    queryKey: [Key_MaxActiveAdmin.Memberactivesession_ByName_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
