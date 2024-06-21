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
import { AgreementAdminApi } from '../AgreementAdminApi.js'

import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export enum Key_AgreementAdmin {
  AgreementsPolicyVersionsUsers = 'AgreementAdmin.AgreementsPolicyVersionsUsers',
  AgreementPolicyUser_ByUserId = 'AgreementAdmin.AgreementPolicyUser_ByUserId',
  AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId = 'AgreementAdmin.AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId'
}

export const useAdmAgreementsPolicyVersionsUsers = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { policyVersionId: string | null; keyword?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PagedRetrieveUserAcceptedAgreementResponse) => void
): UseQueryResult<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgreementsPolicyVersionsUsers>[1]) => async () => {
    const data = await AgreementAdminApi(sdk, { namespace: input.namespace }).getAgreementsPolicyVersionsUsers(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AgreementAdmin.AgreementsPolicyVersionsUsers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAgreementPolicyUser_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveAcceptedAgreementResponseArray) => void
): UseQueryResult<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgreementPolicyUser_ByUserId>[1]) => async () => {
    const data = await AgreementAdminApi(sdk, { namespace: input.namespace }).getAgreementPolicyUser_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_AgreementAdmin.AgreementPolicyUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: AcceptAgreementRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: AcceptAgreementRequest[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: AcceptAgreementRequest[] }) => {
    const data = await AgreementAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AgreementAdmin.AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId],
    mutationFn,
    ...options
  })
}
