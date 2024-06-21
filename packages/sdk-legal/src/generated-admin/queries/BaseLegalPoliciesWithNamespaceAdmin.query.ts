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
import { BaseLegalPoliciesWithNamespaceAdminApi } from '../BaseLegalPoliciesWithNamespaceAdminApi.js'

import { CreateBasePolicyRequestV2 } from '../../generated-definitions/CreateBasePolicyRequestV2.js'
import { CreateBasePolicyResponse } from '../../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequestV2 } from '../../generated-definitions/UpdateBasePolicyRequestV2.js'
import { UpdateBasePolicyResponse } from '../../generated-definitions/UpdateBasePolicyResponse.js'

export enum Key_BaseLegalPoliciesWithNamespaceAdmin {
  PolicyTypes = 'BaseLegalPoliciesWithNamespaceAdmin.PolicyTypes',
  BasePolicies = 'BaseLegalPoliciesWithNamespaceAdmin.BasePolicies',
  BasePolicy = 'BaseLegalPoliciesWithNamespaceAdmin.BasePolicy',
  BasePolicy_ByBasePolicyId = 'BaseLegalPoliciesWithNamespaceAdmin.BasePolicy_ByBasePolicyId',
  Country_ByBasePolicyId_ByCountryCode = 'BaseLegalPoliciesWithNamespaceAdmin.Country_ByBasePolicyId_ByCountryCode'
}

export const useAdmPolicyTypes = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { limit: number; offset?: number } },
  options?: Omit<UseQueryOptions<RetrievePolicyTypeResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrievePolicyTypeResponseArray) => void
): UseQueryResult<RetrievePolicyTypeResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPolicyTypes>[1]) => async () => {
    const data = await BaseLegalPoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getPolicyTypes(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RetrievePolicyTypeResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesWithNamespaceAdmin.PolicyTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmBasePolicies = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { visibleOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<RetrieveBasePolicyResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveBasePolicyResponseArray) => void
): UseQueryResult<RetrieveBasePolicyResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBasePolicies>[1]) => async () => {
    const data = await BaseLegalPoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getBasePolicies(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveBasePolicyResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesWithNamespaceAdmin.BasePolicies, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBasePolicyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateBasePolicyResponse, AxiosError<ApiError>, ApiArgs & { data: CreateBasePolicyRequestV2 }>,
    'mutationKey'
  >,
  callback?: (data: CreateBasePolicyResponse) => void
): UseMutationResult<CreateBasePolicyResponse, AxiosError<ApiError>, ApiArgs & { data: CreateBasePolicyRequestV2 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateBasePolicyRequestV2 }) => {
    const data = await BaseLegalPoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBasePolicy(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_BaseLegalPoliciesWithNamespaceAdmin.BasePolicy],
    mutationFn,
    ...options
  })
}

export const useAdmBasePolicy_ByBasePolicyId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { basePolicyId: string },
  options?: Omit<UseQueryOptions<RetrieveBasePolicyResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveBasePolicyResponse) => void
): UseQueryResult<RetrieveBasePolicyResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBasePolicy_ByBasePolicyId>[1]) => async () => {
    const data = await BaseLegalPoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getBasePolicy_ByBasePolicyId(
      input.basePolicyId
    )
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveBasePolicyResponse, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesWithNamespaceAdmin.BasePolicy_ByBasePolicyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchBasePolicy_ByBasePolicyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UpdateBasePolicyResponse, AxiosError<ApiError>, ApiArgs & { basePolicyId: string; data: UpdateBasePolicyRequestV2 }>,
    'mutationKey'
  >,
  callback?: (data: UpdateBasePolicyResponse) => void
): UseMutationResult<
  UpdateBasePolicyResponse,
  AxiosError<ApiError>,
  ApiArgs & { basePolicyId: string; data: UpdateBasePolicyRequestV2 }
> => {
  //
  const mutationFn = async (input: ApiArgs & { basePolicyId: string; data: UpdateBasePolicyRequestV2 }) => {
    const data = await BaseLegalPoliciesWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchBasePolicy_ByBasePolicyId(input.basePolicyId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_BaseLegalPoliciesWithNamespaceAdmin.BasePolicy_ByBasePolicyId],
    mutationFn,
    ...options
  })
}

export const useAdmCountry_ByBasePolicyId_ByCountryCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { basePolicyId: string; countryCode: string },
  options?: Omit<UseQueryOptions<RetrievePolicyResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrievePolicyResponse) => void
): UseQueryResult<RetrievePolicyResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCountry_ByBasePolicyId_ByCountryCode>[1]) => async () => {
    const data = await BaseLegalPoliciesWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getCountry_ByBasePolicyId_ByCountryCode(
      input.basePolicyId,
      input.countryCode
    )
    callback && callback(data)
    return data
  }

  return useQuery<RetrievePolicyResponse, AxiosError<ApiError>>({
    queryKey: [Key_BaseLegalPoliciesWithNamespaceAdmin.Country_ByBasePolicyId_ByCountryCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
