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
import { BaseLegalPoliciesAdminApi } from '../BaseLegalPoliciesAdminApi.js'

import { CreateBasePolicyRequest } from '../../generated-definitions/CreateBasePolicyRequest.js'
import { CreateBasePolicyResponse } from '../../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequest } from '../../generated-definitions/UpdateBasePolicyRequest.js'
import { UpdateBasePolicyResponse } from '../../generated-definitions/UpdateBasePolicyResponse.js'

export enum Key_BaseLegalPoliciesAdmin {
  PolicyTypes = 'Legal.BaseLegalPoliciesAdmin.PolicyTypes',
  BasePolicies = 'Legal.BaseLegalPoliciesAdmin.BasePolicies',
  BasePolicy = 'Legal.BaseLegalPoliciesAdmin.BasePolicy',
  BasePolicy_ByBasePolicyId = 'Legal.BaseLegalPoliciesAdmin.BasePolicy_ByBasePolicyId',
  Country_ByBasePolicyId_ByCountryCode = 'Legal.BaseLegalPoliciesAdmin.Country_ByBasePolicyId_ByCountryCode'
}

/**
 * Retrieve all supported policy types.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BaseLegalPoliciesAdmin.PolicyTypes, input]
 * }
 * ```
 */
export const useBaseLegalPoliciesAdminApi_GetPolicyTypes = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { limit: number; offset?: number } },
  options?: Omit<UseQueryOptions<RetrievePolicyTypeResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyTypeResponseArray>) => void
): UseQueryResult<RetrievePolicyTypeResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBaseLegalPoliciesAdminApi_GetPolicyTypes>[1]) => async () => {
    const response = await BaseLegalPoliciesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPolicyTypes(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrievePolicyTypeResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesAdmin.PolicyTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve all base policies.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BaseLegalPoliciesAdmin.BasePolicies, input]
 * }
 * ```
 */
export const useBaseLegalPoliciesAdminApi_GetBasePolicies = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { visibleOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<RetrieveBasePolicyResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveBasePolicyResponseArray>) => void
): UseQueryResult<RetrieveBasePolicyResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBaseLegalPoliciesAdminApi_GetBasePolicies>[1]) => async () => {
    const response = await BaseLegalPoliciesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBasePolicies(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveBasePolicyResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesAdmin.BasePolicies, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a legal policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BaseLegalPoliciesAdmin.BasePolicy, input]
 * }
 * ```
 */
export const useBaseLegalPoliciesAdminApi_CreateBasePolicyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateBasePolicyResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateBasePolicyRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateBasePolicyResponse) => void
): UseMutationResult<CreateBasePolicyResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateBasePolicyRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateBasePolicyRequest }) => {
    const response = await BaseLegalPoliciesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBasePolicy(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_BaseLegalPoliciesAdmin.BasePolicy],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve a base policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BaseLegalPoliciesAdmin.BasePolicy_ByBasePolicyId, input]
 * }
 * ```
 */
export const useBaseLegalPoliciesAdminApi_GetBasePolicy_ByBasePolicyId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { basePolicyId: string },
  options?: Omit<UseQueryOptions<RetrieveBasePolicyResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveBasePolicyResponse>) => void
): UseQueryResult<RetrieveBasePolicyResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useBaseLegalPoliciesAdminApi_GetBasePolicy_ByBasePolicyId>[1]) => async () => {
      const response = await BaseLegalPoliciesAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getBasePolicy_ByBasePolicyId(input.basePolicyId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveBasePolicyResponse, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesAdmin.BasePolicy_ByBasePolicyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update an existing base policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BaseLegalPoliciesAdmin.BasePolicy_ByBasePolicyId, input]
 * }
 * ```
 */
export const useBaseLegalPoliciesAdminApi_PatchBasePolicy_ByBasePolicyIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateBasePolicyResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { basePolicyId: string; data: UpdateBasePolicyRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateBasePolicyResponse) => void
): UseMutationResult<
  UpdateBasePolicyResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { basePolicyId: string; data: UpdateBasePolicyRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { basePolicyId: string; data: UpdateBasePolicyRequest }) => {
    const response = await BaseLegalPoliciesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchBasePolicy_ByBasePolicyId(input.basePolicyId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_BaseLegalPoliciesAdmin.BasePolicy_ByBasePolicyId],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve a Base Legal Policy based on a Particular Country.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_BaseLegalPoliciesAdmin.Country_ByBasePolicyId_ByCountryCode, input]
 * }
 * ```
 */
export const useBaseLegalPoliciesAdminApi_GetCountry_ByBasePolicyId_ByCountryCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { basePolicyId: string; countryCode: string },
  options?: Omit<UseQueryOptions<RetrievePolicyResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrievePolicyResponse>) => void
): UseQueryResult<RetrievePolicyResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useBaseLegalPoliciesAdminApi_GetCountry_ByBasePolicyId_ByCountryCode>[1]) => async () => {
      const response = await BaseLegalPoliciesAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getCountry_ByBasePolicyId_ByCountryCode(input.basePolicyId, input.countryCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrievePolicyResponse, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesAdmin.Country_ByBasePolicyId_ByCountryCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
