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
import { PolicyVersionsWithNamespaceAdminApi } from '../PolicyVersionsWithNamespaceAdminApi.js'

import { CreatePolicyVersionRequest } from '../../generated-definitions/CreatePolicyVersionRequest.js'
import { CreatePolicyVersionResponse } from '../../generated-definitions/CreatePolicyVersionResponse.js'
import { RetrievePolicyVersionResponseArray } from '../../generated-definitions/RetrievePolicyVersionResponseArray.js'
import { UpdatePolicyVersionRequest } from '../../generated-definitions/UpdatePolicyVersionRequest.js'
import { UpdatePolicyVersionResponse } from '../../generated-definitions/UpdatePolicyVersionResponse.js'

export enum Key_PolicyVersionsWithNamespaceAdmin {
  Versions_ByPolicyId = 'PolicyVersionsWithNamespaceAdmin.Versions_ByPolicyId',
  Version_ByPolicyId = 'PolicyVersionsWithNamespaceAdmin.Version_ByPolicyId',
  PolicyVersion_ByPolicyVersionId = 'PolicyVersionsWithNamespaceAdmin.PolicyVersion_ByPolicyVersionId',
  LatestPolicy_ByPolicyVersionId = 'PolicyVersionsWithNamespaceAdmin.LatestPolicy_ByPolicyVersionId'
}

export const useAdmVersions_ByPolicyId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { policyId: string; queryParams?: { versionId?: string | null } },
  options?: Omit<UseQueryOptions<RetrievePolicyVersionResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrievePolicyVersionResponseArray) => void
): UseQueryResult<RetrievePolicyVersionResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmVersions_ByPolicyId>[1]) => async () => {
    const data = await PolicyVersionsWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getVersions_ByPolicyId(
      input.policyId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<RetrievePolicyVersionResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_PolicyVersionsWithNamespaceAdmin.Versions_ByPolicyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateVersion_ByPolicyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreatePolicyVersionResponse, AxiosError<ApiError>, ApiArgs & { policyId: string; data: CreatePolicyVersionRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreatePolicyVersionResponse) => void
): UseMutationResult<
  CreatePolicyVersionResponse,
  AxiosError<ApiError>,
  ApiArgs & { policyId: string; data: CreatePolicyVersionRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { policyId: string; data: CreatePolicyVersionRequest }) => {
    const data = await PolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createVersion_ByPolicyId(input.policyId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PolicyVersionsWithNamespaceAdmin.Version_ByPolicyId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchPolicyVersion_ByPolicyVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdatePolicyVersionResponse,
      AxiosError<ApiError>,
      ApiArgs & { policyVersionId: string; data: UpdatePolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdatePolicyVersionResponse) => void
): UseMutationResult<
  UpdatePolicyVersionResponse,
  AxiosError<ApiError>,
  ApiArgs & { policyVersionId: string; data: UpdatePolicyVersionRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { policyVersionId: string; data: UpdatePolicyVersionRequest }) => {
    const data = await PolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchPolicyVersion_ByPolicyVersionId(input.policyVersionId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PolicyVersionsWithNamespaceAdmin.PolicyVersion_ByPolicyVersionId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchLatestPolicy_ByPolicyVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { policyVersionId: string; queryParams?: { shouldNotify?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { policyVersionId: string; queryParams?: { shouldNotify?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { policyVersionId: string; queryParams?: { shouldNotify?: boolean | null } }) => {
    const data = await PolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchLatestPolicy_ByPolicyVersionId(input.policyVersionId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PolicyVersionsWithNamespaceAdmin.LatestPolicy_ByPolicyVersionId],
    mutationFn,
    ...options
  })
}
