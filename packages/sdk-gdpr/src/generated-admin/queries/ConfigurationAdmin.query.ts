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
import { ConfigurationAdminApi } from '../ConfigurationAdminApi.js'

import { ServiceConfigurationUpdateRequest } from '../../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../../generated-definitions/ServicesConfigurationResponse.js'

export enum Key_ConfigurationAdmin {
  EmailConfiguration = 'Gdpr.ConfigurationAdmin.EmailConfiguration',
  EmailsConfigurations = 'Gdpr.ConfigurationAdmin.EmailsConfigurations',
  ServicesConfigurations = 'Gdpr.ConfigurationAdmin.ServicesConfigurations',
  ServiceConfiguration = 'Gdpr.ConfigurationAdmin.ServiceConfiguration',
  ServiceConfigurationReset = 'Gdpr.ConfigurationAdmin.ServiceConfigurationReset',
  ServicePlatformClosureConfig = 'Gdpr.ConfigurationAdmin.ServicePlatformClosureConfig',
  ServicesPlatformsClosureConfig = 'Gdpr.ConfigurationAdmin.ServicesPlatformsClosureConfig'
}

/**
 * Delete a list of admin email addresses to stop receiving personal data request notification. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.EmailConfiguration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteEmailConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { emails: string[] } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { emails: string[] } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams: { emails: string[] } }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteEmailConfiguration(input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.EmailConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Get list of admin email address configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.EmailsConfigurations, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetEmailsConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetEmailsConfigurations>[1]) => async () => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEmailsConfigurations()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.EmailsConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Add admin email address for receiving personal data request notification. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.EmailConfiguration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_CreateEmailConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: string[] }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createEmailConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.EmailConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Update admin email address for receiving personal data request notification. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.EmailConfiguration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_UpdateEmailConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: string[] }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEmailConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.EmailConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Get Registered Services Configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ServicesConfigurations, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetServicesConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ServicesConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ServicesConfigurationResponse>) => void
): UseQueryResult<ServicesConfigurationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetServicesConfigurations>[1]) => async () => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getServicesConfigurations()
    callback && callback(response)
    return response.data
  }

  return useQuery<ServicesConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.ServicesConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update Registered Services Configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ServiceConfiguration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_UpdateServiceConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ServiceConfigurationUpdateRequest,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ServiceConfigurationUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ServiceConfigurationUpdateRequest) => void
): UseMutationResult<
  ServiceConfigurationUpdateRequest,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ServiceConfigurationUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ServiceConfigurationUpdateRequest }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateServiceConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServiceConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * **[TEST FACILITY ONLY]** Reset Registered Services Configuration to use the default configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ServiceConfigurationReset, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteServiceConfigurationResetMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteServiceConfigurationReset()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServiceConfigurationReset],
    mutationFn,
    ...options
  })
}

/**
 * **[TEST FACILITY ONLY]** Reset registered platform account closure services configuration to use the default configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ServicePlatformClosureConfig, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteServicePlatformClosureConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteServicePlatformClosureConfig()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServicePlatformClosureConfig],
    mutationFn,
    ...options
  })
}

/**
 * Get registered platform account closure services configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ServicesPlatformsClosureConfig, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetServicesPlatformsClosureConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ServicesConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ServicesConfigurationResponse>) => void
): UseQueryResult<ServicesConfigurationResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetServicesPlatformsClosureConfig>[1]) => async () => {
      const response = await ConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getServicesPlatformsClosureConfig()
      callback && callback(response)
      return response.data
    }

  return useQuery<ServicesConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.ServicesPlatformsClosureConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update registered platform account closure services configuration. Scope: account
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ServicePlatformClosureConfig, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_UpdateServicePlatformClosureConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ServiceConfigurationUpdateRequest,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ServiceConfigurationUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ServiceConfigurationUpdateRequest) => void
): UseMutationResult<
  ServiceConfigurationUpdateRequest,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ServiceConfigurationUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ServiceConfigurationUpdateRequest }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateServicePlatformClosureConfig(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServicePlatformClosureConfig],
    mutationFn,
    ...options
  })
}
