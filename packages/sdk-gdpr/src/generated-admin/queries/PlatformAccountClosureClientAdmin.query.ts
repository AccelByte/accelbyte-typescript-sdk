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
import { PlatformAccountClosureClientAdminApi } from '../PlatformAccountClosureClientAdminApi.js'

import { PlatformAccountClosureClientRequest } from '../../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../../generated-definitions/PlatformAccountClosureClientResponse.js'
import { PlatformAccountClosureClientsResponse } from '../../generated-definitions/PlatformAccountClosureClientsResponse.js'
import { PlatformAccountClosureMockRequest } from '../../generated-definitions/PlatformAccountClosureMockRequest.js'
import { XboxBpCertValidationRequest } from '../../generated-definitions/XboxBpCertValidationRequest.js'
import { XboxBpCertValidationResponse } from '../../generated-definitions/XboxBpCertValidationResponse.js'

export enum Key_PlatformAccountClosureClientAdmin {
  PlatformsClosureClients = 'Gdpr.PlatformAccountClosureClientAdmin.PlatformsClosureClients',
  ClosureMock_ByPlatform = 'Gdpr.PlatformAccountClosureClientAdmin.ClosureMock_ByPlatform',
  ClosureClient_ByPlatform = 'Gdpr.PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform',
  PlatformXboxClosureCertValidation = 'Gdpr.PlatformAccountClosureClientAdmin.PlatformXboxClosureCertValidation'
}

/**
 * Get platform account closure configs. ------ Platform: - steamnetwork - xbox - psn Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.PlatformsClosureClients, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_GetPlatformsClosureClients = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PlatformAccountClosureClientsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformAccountClosureClientsResponse>) => void
): UseQueryResult<PlatformAccountClosureClientsResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePlatformAccountClosureClientAdminApi_GetPlatformsClosureClients>[1]) => async () => {
      const response = await PlatformAccountClosureClientAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformsClosureClients()
      callback && callback(response)
      return response.data
    }

  return useQuery<PlatformAccountClosureClientsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureClientAdmin.PlatformsClosureClients, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Mock platform account closure data. ----- **This is only for testing** Platform: - steamnetwork - xbox - psn Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureMock_ByPlatform, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_UpdateClosureMock_ByPlatformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform: string; data: PlatformAccountClosureMockRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform: string; data: PlatformAccountClosureMockRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platform: string; data: PlatformAccountClosureMockRequest }) => {
    const response = await PlatformAccountClosureClientAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClosureMock_ByPlatform(input.platform, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureMock_ByPlatform],
    mutationFn,
    ...options
  })
}

/**
 * Delete platform account closure client. The namespace should be **publisher or studio namespace** ------- Platform: - steamnetwork - xbox - psn
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_DeleteClosureClient_ByPlatformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platform: string }) => {
    const response = await PlatformAccountClosureClientAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteClosureClient_ByPlatform(input.platform)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform],
    mutationFn,
    ...options
  })
}

/**
 * Get platform account closure config. The namespace should be **publisher or studio namespace** ---------- Platform: - steamnetwork - xbox - psn Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_GetClosureClient_ByPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platform: string },
  options?: Omit<UseQueryOptions<PlatformAccountClosureClientResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformAccountClosureClientResponse>) => void
): UseQueryResult<PlatformAccountClosureClientResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePlatformAccountClosureClientAdminApi_GetClosureClient_ByPlatform>[1]) => async () => {
      const response = await PlatformAccountClosureClientAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getClosureClient_ByPlatform(input.platform)
      callback && callback(response)
      return response.data
    }

  return useQuery<PlatformAccountClosureClientResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update platform account closure client. The namespace should be the **publisher or studio namespace**. ------ Platform: - steamnetwork - xbox - psn Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_UpdateClosureClient_ByPlatformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform: string; data: PlatformAccountClosureClientRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platform: string; data: PlatformAccountClosureClientRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platform: string; data: PlatformAccountClosureClientRequest }) => {
    const response = await PlatformAccountClosureClientAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClosureClient_ByPlatform(input.platform, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform],
    mutationFn,
    ...options
  })
}

/**
 * Check xbox BP cert file whether it&#39;s expired and return expiration date
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.PlatformXboxClosureCertValidation, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_FetchPlatformXboxClosureCertValidation = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: XboxBpCertValidationRequest },
  options?: Omit<UseQueryOptions<XboxBpCertValidationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<XboxBpCertValidationResponse>) => void
): UseQueryResult<XboxBpCertValidationResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePlatformAccountClosureClientAdminApi_FetchPlatformXboxClosureCertValidation>[1]) =>
    async () => {
      const response = await PlatformAccountClosureClientAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).fetchPlatformXboxClosureCertValidation(input.data)
      callback && callback(response)
      return response.data
    }

  return useQuery<XboxBpCertValidationResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureClientAdmin.PlatformXboxClosureCertValidation, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
