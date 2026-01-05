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
import { PoliciesAdminApi } from '../PoliciesAdminApi.js'

import { RetrievePolicyResponseArray } from '../../generated-definitions/RetrievePolicyResponseArray.js'
import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export enum Key_PoliciesAdmin {
  Policy_ByPolicyId = 'Legal.PoliciesAdmin.Policy_ByPolicyId',
  Default_ByPolicyId = 'Legal.PoliciesAdmin.Default_ByPolicyId',
  PolicyCountry_ByCountryCode = 'Legal.PoliciesAdmin.PolicyCountry_ByCountryCode'
}

/**
 * Update country-specific and country-group policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PoliciesAdmin.Policy_ByPolicyId, input]
 * }
 * ```
 */
export const usePoliciesAdminApi_PatchPolicy_ByPolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string; data: UpdatePolicyRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string; data: UpdatePolicyRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyId: string; data: UpdatePolicyRequest }) => {
    const response = await PoliciesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchPolicy_ByPolicyId(
      input.policyId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PoliciesAdmin.Policy_ByPolicyId],
    mutationFn,
    ...options
  })
}

/**
 * Update a policy to be the default.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PoliciesAdmin.Default_ByPolicyId, input]
 * }
 * ```
 */
export const usePoliciesAdminApi_PatchDefault_ByPolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyId: string }) => {
    const response = await PoliciesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchDefault_ByPolicyId(
      input.policyId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PoliciesAdmin.Default_ByPolicyId],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve all active policies based on a country.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PoliciesAdmin.PolicyCountry_ByCountryCode, input]
 * }
 * ```
 */
export const usePoliciesAdminApi_GetPolicyCountry_ByCountryCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { countryCode: string },
  options?: Omit<UseQueryOptions<RetrievePolicyResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyResponseArray>) => void
): UseQueryResult<RetrievePolicyResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePoliciesAdminApi_GetPolicyCountry_ByCountryCode>[1]) => async () => {
    const response = await PoliciesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPolicyCountry_ByCountryCode(input.countryCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrievePolicyResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_PoliciesAdmin.PolicyCountry_ByCountryCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
