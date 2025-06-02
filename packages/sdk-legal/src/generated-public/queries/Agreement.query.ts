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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AgreementApi } from '../AgreementApi.js'

import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'

export enum Key_Agreement {
  AgreementsPolicies = 'Legal.Agreement.AgreementsPolicies',
  AgreementPolicy = 'Legal.Agreement.AgreementPolicy',
  AgreementPolicyUser_ByUserId = 'Legal.Agreement.AgreementPolicyUser_ByUserId',
  AgreementLocalizedPolicyVersionPreference = 'Legal.Agreement.AgreementLocalizedPolicyVersionPreference',
  AgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId = 'Legal.Agreement.AgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId',
  UserPolicyAgreement_ByCountryCode_ByClientId_ByUserId = 'Legal.Agreement.UserPolicyAgreement_ByCountryCode_ByClientId_ByUserId'
}

/**
 * Retrieve accepted Legal Agreements.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Agreement.AgreementsPolicies, input]
 * }
 * ```
 */
export const useAgreementApi_GetAgreementsPolicies = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveAcceptedAgreementResponseArray>) => void
): UseQueryResult<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAgreementApi_GetAgreementsPolicies>[1]) => async () => {
    const response = await AgreementApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAgreementsPolicies()
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Agreement.AgreementsPolicies, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Agreement.AgreementPolicy, input]
 * }
 * ```
 */
export const useAgreementApi_CreateAgreementPolicyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AcceptAgreementResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AcceptAgreementRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: AcceptAgreementResponse) => void
): UseMutationResult<AcceptAgreementResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AcceptAgreementRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AcceptAgreementRequest[] }) => {
    const response = await AgreementApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createAgreementPolicy(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Agreement.AgreementPolicy],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Agreement.AgreementPolicyUser_ByUserId, input]
 * }
 * ```
 */
export const useAgreementApi_CreateAgreementPolicyUser_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AcceptAgreementResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: AcceptAgreementRequest[] }
    >,
    'mutationKey'
  >,
  callback?: (data: AcceptAgreementResponse) => void
): UseMutationResult<
  AcceptAgreementResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: AcceptAgreementRequest[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: AcceptAgreementRequest[] }) => {
    const response = await AgreementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAgreementPolicyUser_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Agreement.AgreementPolicyUser_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Change marketing preference consent.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Agreement.AgreementLocalizedPolicyVersionPreference, input]
 * }
 * ```
 */
export const useAgreementApi_PatchAgreementLocalizedPolicyVersionPreferenceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: AcceptAgreementRequest[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: AcceptAgreementRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AcceptAgreementRequest[] }) => {
    const response = await AgreementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchAgreementLocalizedPolicyVersionPreference(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Agreement.AgreementLocalizedPolicyVersionPreference],
    mutationFn,
    ...options
  })
}

/**
 * Accepts a legal policy version. Supply with localized version policy id to accept an agreement
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Agreement.AgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId, input]
 * }
 * ```
 */
export const useAgreementApi_CreateAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { localizedPolicyVersionId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { localizedPolicyVersionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { localizedPolicyVersionId: string }) => {
    const response = await AgreementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Agreement.AgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Agreement.UserPolicyAgreement_ByCountryCode_ByClientId_ByUserId, input]
 * }
 * ```
 */
export const useAgreementApi_CreateUserPolicyAgreement_ByCountryCode_ByClientId_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AcceptAgreementResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { countryCode: string; clientId: string; userId: string; data: AcceptAgreementRequest[] }
    >,
    'mutationKey'
  >,
  callback?: (data: AcceptAgreementResponse) => void
): UseMutationResult<
  AcceptAgreementResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { countryCode: string; clientId: string; userId: string; data: AcceptAgreementRequest[] }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { countryCode: string; clientId: string; userId: string; data: AcceptAgreementRequest[] }
  ) => {
    const response = await AgreementApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(input.countryCode, input.clientId, input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Agreement.UserPolicyAgreement_ByCountryCode_ByClientId_ByUserId],
    mutationFn,
    ...options
  })
}
