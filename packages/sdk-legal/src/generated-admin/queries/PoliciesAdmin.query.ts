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
import { PoliciesAdminApi } from '../PoliciesAdminApi.js'

import { RetrievePolicyResponseArray } from '../../generated-definitions/RetrievePolicyResponseArray.js'
import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export enum Key_PoliciesAdmin {
  Policy_ByPolicyId = 'PoliciesAdmin.Policy_ByPolicyId',
  Default_ByPolicyId = 'PoliciesAdmin.Default_ByPolicyId',
  PolicyCountry_ByCountryCode = 'PoliciesAdmin.PolicyCountry_ByCountryCode'
}

export const useAdmPatchPolicy_ByPolicyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { policyId: string; data: UpdatePolicyRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { policyId: string; data: UpdatePolicyRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { policyId: string; data: UpdatePolicyRequest }) => {
    const data = await PoliciesAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchPolicy_ByPolicyId(
      input.policyId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PoliciesAdmin.Policy_ByPolicyId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchDefault_ByPolicyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { policyId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { policyId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { policyId: string }) => {
    const data = await PoliciesAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchDefault_ByPolicyId(input.policyId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PoliciesAdmin.Default_ByPolicyId],
    mutationFn,
    ...options
  })
}

export const useAdmPolicyCountry_ByCountryCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { countryCode: string },
  options?: Omit<UseQueryOptions<RetrievePolicyResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrievePolicyResponseArray) => void
): UseQueryResult<RetrievePolicyResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPolicyCountry_ByCountryCode>[1]) => async () => {
    const data = await PoliciesAdminApi(sdk, { namespace: input.namespace }).getPolicyCountry_ByCountryCode(input.countryCode)
    callback && callback(data)
    return data
  }

  return useQuery<RetrievePolicyResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_PoliciesAdmin.PolicyCountry_ByCountryCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
