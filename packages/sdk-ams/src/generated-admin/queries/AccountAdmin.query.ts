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
import { AccountAdminApi } from '../AccountAdminApi.js'

import { AccountCreateRequest } from '../../generated-definitions/AccountCreateRequest.js'
import { AccountCreateResponse } from '../../generated-definitions/AccountCreateResponse.js'
import { AccountLinkRequest } from '../../generated-definitions/AccountLinkRequest.js'
import { AccountLinkResponse } from '../../generated-definitions/AccountLinkResponse.js'
import { AccountLinkTokenResponse } from '../../generated-definitions/AccountLinkTokenResponse.js'
import { AccountResponse } from '../../generated-definitions/AccountResponse.js'

export enum Key_AccountAdmin {
  Account = 'Ams.AccountAdmin.Account',
  AccountLink = 'Ams.AccountAdmin.AccountLink'
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountAdmin.Account, input]
 * }
 * ```
 */
export const useAccountAdminApi_GetAccount = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AccountResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AccountResponse>) => void
): UseQueryResult<AccountResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountAdminApi_GetAccount>[1]) => async () => {
    const response = await AccountAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAccount()
    callback && callback(response)
    return response.data
  }

  return useQuery<AccountResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountAdmin.Account, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountAdmin.Account, input]
 * }
 * ```
 */
export const useAccountAdminApi_CreateAccountMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AccountCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AccountCreateRequest }>,
    'mutationKey'
  >,
  callback?: (data: AccountCreateResponse) => void
): UseMutationResult<AccountCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AccountCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AccountCreateRequest }) => {
    const response = await AccountAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createAccount(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountAdmin.Account],
    mutationFn,
    ...options
  })
}

/**
 * The link token returned can be used to connect another namespace to the account in which the provided namespace is linked. This route fails if there is no account linked to the specified namespace. Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountAdmin.AccountLink, input]
 * }
 * ```
 */
export const useAccountAdminApi_GetAccountLink = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AccountLinkTokenResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AccountLinkTokenResponse>) => void
): UseQueryResult<AccountLinkTokenResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountAdminApi_GetAccountLink>[1]) => async () => {
    const response = await AccountAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAccountLink()
    callback && callback(response)
    return response.data
  }

  return useQuery<AccountLinkTokenResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountAdmin.AccountLink, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This route will attempt to register the account to namespace linkage in AMS and requires a valid account link token. This route fails if an account is already linked AdminAccountLink Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountAdmin.AccountLink, input]
 * }
 * ```
 */
export const useAccountAdminApi_CreateAccountLinkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AccountLinkResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AccountLinkRequest }>,
    'mutationKey'
  >,
  callback?: (data: AccountLinkResponse) => void
): UseMutationResult<AccountLinkResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AccountLinkRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AccountLinkRequest }) => {
    const response = await AccountAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createAccountLink(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountAdmin.AccountLink],
    mutationFn,
    ...options
  })
}
