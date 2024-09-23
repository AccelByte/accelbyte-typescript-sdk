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
import { PolicyVersionsWithNamespaceAdminApi } from '../PolicyVersionsWithNamespaceAdminApi.js'

import { CreatePolicyVersionRequest } from '../../generated-definitions/CreatePolicyVersionRequest.js'
import { CreatePolicyVersionResponse } from '../../generated-definitions/CreatePolicyVersionResponse.js'
import { RetrievePolicyVersionResponseArray } from '../../generated-definitions/RetrievePolicyVersionResponseArray.js'
import { UpdatePolicyVersionRequest } from '../../generated-definitions/UpdatePolicyVersionRequest.js'
import { UpdatePolicyVersionResponse } from '../../generated-definitions/UpdatePolicyVersionResponse.js'

export enum Key_PolicyVersionsWithNamespaceAdmin {
  Versions_ByPolicyId = 'Legal.PolicyVersionsWithNamespaceAdmin.Versions_ByPolicyId',
  Version_ByPolicyId = 'Legal.PolicyVersionsWithNamespaceAdmin.Version_ByPolicyId',
  PolicyVersion_ByPolicyVersionId = 'Legal.PolicyVersionsWithNamespaceAdmin.PolicyVersion_ByPolicyVersionId',
  LatestPolicy_ByPolicyVersionId = 'Legal.PolicyVersionsWithNamespaceAdmin.LatestPolicy_ByPolicyVersionId'
}

/**
 * Retrieve a version of a particular country specific policy. If version is not provided, the Legal Service will assume caller requesting all versions from country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PolicyVersionsWithNamespaceAdmin.Versions_ByPolicyId, input]
 * }
 * ```
 */
export const usePolicyVersionsWithNamespaceAdminApi_GetVersions_ByPolicyId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { policyId: string; queryParams?: { versionId?: string | null } },
  options?: Omit<UseQueryOptions<RetrievePolicyVersionResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyVersionResponseArray>) => void
): UseQueryResult<RetrievePolicyVersionResponseArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePolicyVersionsWithNamespaceAdminApi_GetVersions_ByPolicyId>[1]) => async () => {
      const response = await PolicyVersionsWithNamespaceAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getVersions_ByPolicyId(input.policyId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrievePolicyVersionResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_PolicyVersionsWithNamespaceAdmin.Versions_ByPolicyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a version of a particular country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PolicyVersionsWithNamespaceAdmin.Version_ByPolicyId, input]
 * }
 * ```
 */
export const usePolicyVersionsWithNamespaceAdminApi_CreateVersion_ByPolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreatePolicyVersionResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { policyId: string; data: CreatePolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreatePolicyVersionResponse) => void
): UseMutationResult<
  CreatePolicyVersionResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { policyId: string; data: CreatePolicyVersionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyId: string; data: CreatePolicyVersionRequest }) => {
    const response = await PolicyVersionsWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createVersion_ByPolicyId(input.policyId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PolicyVersionsWithNamespaceAdmin.Version_ByPolicyId],
    mutationFn,
    ...options
  })
}

/**
 * Update a particular policy version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PolicyVersionsWithNamespaceAdmin.PolicyVersion_ByPolicyVersionId, input]
 * }
 * ```
 */
export const usePolicyVersionsWithNamespaceAdminApi_PatchPolicyVersion_ByPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdatePolicyVersionResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { policyVersionId: string; data: UpdatePolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdatePolicyVersionResponse) => void
): UseMutationResult<
  UpdatePolicyVersionResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { policyVersionId: string; data: UpdatePolicyVersionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyVersionId: string; data: UpdatePolicyVersionRequest }) => {
    const response = await PolicyVersionsWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchPolicyVersion_ByPolicyVersionId(input.policyVersionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PolicyVersionsWithNamespaceAdmin.PolicyVersion_ByPolicyVersionId],
    mutationFn,
    ...options
  })
}

/**
 * Manually publish a version of a particular country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PolicyVersionsWithNamespaceAdmin.LatestPolicy_ByPolicyVersionId, input]
 * }
 * ```
 */
export const usePolicyVersionsWithNamespaceAdminApi_PatchLatestPolicy_ByPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { policyVersionId: string; queryParams?: { shouldNotify?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { policyVersionId: string; queryParams?: { shouldNotify?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyVersionId: string; queryParams?: { shouldNotify?: boolean | null } }) => {
    const response = await PolicyVersionsWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchLatestPolicy_ByPolicyVersionId(input.policyVersionId, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PolicyVersionsWithNamespaceAdmin.LatestPolicy_ByPolicyVersionId],
    mutationFn,
    ...options
  })
}
