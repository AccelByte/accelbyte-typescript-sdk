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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PoliciesWithNamespaceAdminApi } from '../PoliciesWithNamespaceAdminApi.js'

import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export enum Key_PoliciesWithNamespaceAdmin {
  Policy_ByPolicyId = 'PoliciesWithNamespaceAdmin.Policy_ByPolicyId',
  Default_ByPolicyId = 'PoliciesWithNamespaceAdmin.Default_ByPolicyId'
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
    const data = await PoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchPolicy_ByPolicyId(
      input.policyId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Policy_ByPolicyId],
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
    const data = await PoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchDefault_ByPolicyId(
      input.policyId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Default_ByPolicyId],
    mutationFn,
    ...options
  })
}
