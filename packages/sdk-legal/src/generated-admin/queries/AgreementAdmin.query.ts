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
import { AgreementAdminApi } from '../AgreementAdminApi.js'

import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export enum Key_AgreementAdmin {
  AgreementsPolicyVersionsUsers = 'Legal.AgreementAdmin.AgreementsPolicyVersionsUsers',
  AgreementPolicyUser_ByUserId = 'Legal.AgreementAdmin.AgreementPolicyUser_ByUserId',
  AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId = 'Legal.AgreementAdmin.AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId'
}

/**
 * This API will return users who has accepted a specific policy version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementAdmin.AgreementsPolicyVersionsUsers, input]
 * }
 * ```
 */
export const useAgreementAdminApi_GetAgreementsPolicyVersionsUsers = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { policyVersionId: string | null; keyword?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PagedRetrieveUserAcceptedAgreementResponse>) => void
): UseQueryResult<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAgreementAdminApi_GetAgreementsPolicyVersionsUsers>[1]) => async () => {
    const response = await AgreementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAgreementsPolicyVersionsUsers(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AgreementAdmin.AgreementsPolicyVersionsUsers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API will return all accepted Legal Agreements for specified user
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementAdmin.AgreementPolicyUser_ByUserId, input]
 * }
 * ```
 */
export const useAgreementAdminApi_GetAgreementPolicyUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveAcceptedAgreementResponseArray>) => void
): UseQueryResult<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAgreementAdminApi_GetAgreementPolicyUser_ByUserId>[1]) => async () => {
    const response = await AgreementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAgreementPolicyUser_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_AgreementAdmin.AgreementPolicyUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API will Update Preference Consent
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementAdmin.AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId, input]
 * }
 * ```
 */
export const useAgreementAdminApi_PatchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AcceptAgreementRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: AcceptAgreementRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: AcceptAgreementRequest[] }) => {
    const response = await AgreementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchAgreementLocalizedPolicyVersionPreferenceUserId_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AgreementAdmin.AgreementLocalizedPolicyVersionPreferenceUserId_ByUserId],
    mutationFn,
    ...options
  })
}
