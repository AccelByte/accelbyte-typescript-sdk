/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PoliciesWithNamespaceAdminApi } from '../PoliciesWithNamespaceAdminApi.js'

import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export enum Key_PoliciesWithNamespaceAdmin {
  Policy_ByPolicyId = 'Legal.PoliciesWithNamespaceAdmin.Policy_ByPolicyId',
  Default_ByPolicyId = 'Legal.PoliciesWithNamespaceAdmin.Default_ByPolicyId'
}

/**
 * Delete policy.Can only be deleted if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Policy is not default policy&lt;/li&gt;&lt;li&gt;Policy version under policy has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PoliciesWithNamespaceAdmin.Policy_ByPolicyId, input]
 * }
 * ```
 */
export const usePoliciesWithNamespaceAdminApi_DeletePolicy_ByPolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyId: string }) => {
    const response = await PoliciesWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePolicy_ByPolicyId(input.policyId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Policy_ByPolicyId],
    mutationFn,
    ...options
  })
}

/**
 * Update country-specific and country-group policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PoliciesWithNamespaceAdmin.Policy_ByPolicyId, input]
 * }
 * ```
 */
export const usePoliciesWithNamespaceAdminApi_PatchPolicy_ByPolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string; data: UpdatePolicyRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string; data: UpdatePolicyRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyId: string; data: UpdatePolicyRequest }) => {
    const response = await PoliciesWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchPolicy_ByPolicyId(input.policyId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Policy_ByPolicyId],
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
 *    queryKey: [Key_PoliciesWithNamespaceAdmin.Default_ByPolicyId, input]
 * }
 * ```
 */
export const usePoliciesWithNamespaceAdminApi_PatchDefault_ByPolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyId: string }) => {
    const response = await PoliciesWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchDefault_ByPolicyId(input.policyId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Default_ByPolicyId],
    mutationFn,
    ...options
  })
}
