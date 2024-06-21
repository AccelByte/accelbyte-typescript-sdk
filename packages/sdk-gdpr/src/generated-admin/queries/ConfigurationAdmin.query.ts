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
import { ConfigurationAdminApi } from '../ConfigurationAdminApi.js'

import { ServiceConfigurationUpdateRequest } from '../../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../../generated-definitions/ServicesConfigurationResponse.js'

export enum Key_ConfigurationAdmin {
  EmailConfiguration = 'ConfigurationAdmin.EmailConfiguration',
  EmailsConfigurations = 'ConfigurationAdmin.EmailsConfigurations',
  ServicesConfigurations = 'ConfigurationAdmin.ServicesConfigurations',
  ServiceConfiguration = 'ConfigurationAdmin.ServiceConfiguration',
  ServiceConfigurationReset = 'ConfigurationAdmin.ServiceConfigurationReset',
  ServicePlatformClosureConfig = 'ConfigurationAdmin.ServicePlatformClosureConfig',
  ServicesPlatformsClosureConfig = 'ConfigurationAdmin.ServicesPlatformsClosureConfig'
}

export const useAdmDeleteEmailConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { queryParams: { emails: string[] } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { queryParams: { emails: string[] } }> => {
  //
  const mutationFn = async (input: ApiArgs & { queryParams: { emails: string[] } }) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteEmailConfiguration(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.EmailConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmEmailsConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEmailsConfigurations>[1]) => async () => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace }).getEmailsConfigurations()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.EmailsConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateEmailConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: string[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: string[] }) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createEmailConfiguration(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.EmailConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateEmailConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: string[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: string[] }) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEmailConfiguration(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.EmailConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmServicesConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ServicesConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ServicesConfigurationResponse) => void
): UseQueryResult<ServicesConfigurationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServicesConfigurations>[1]) => async () => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace }).getServicesConfigurations()
    callback && callback(data)
    return data
  }

  return useQuery<ServicesConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.ServicesConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateServiceConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ServiceConfigurationUpdateRequest, AxiosError<ApiError>, ApiArgs & { data: ServiceConfigurationUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: ServiceConfigurationUpdateRequest) => void
): UseMutationResult<ServiceConfigurationUpdateRequest, AxiosError<ApiError>, ApiArgs & { data: ServiceConfigurationUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ServiceConfigurationUpdateRequest }) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateServiceConfiguration(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServiceConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteServiceConfigurationResetMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteServiceConfigurationReset()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServiceConfigurationReset],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteServicePlatformClosureConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteServicePlatformClosureConfig()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServicePlatformClosureConfig],
    mutationFn,
    ...options
  })
}

export const useAdmServicesPlatformsClosureConfig = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ServicesConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ServicesConfigurationResponse) => void
): UseQueryResult<ServicesConfigurationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmServicesPlatformsClosureConfig>[1]) => async () => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace }).getServicesPlatformsClosureConfig()
    callback && callback(data)
    return data
  }

  return useQuery<ServicesConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.ServicesPlatformsClosureConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateServicePlatformClosureConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ServiceConfigurationUpdateRequest, AxiosError<ApiError>, ApiArgs & { data: ServiceConfigurationUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: ServiceConfigurationUpdateRequest) => void
): UseMutationResult<ServiceConfigurationUpdateRequest, AxiosError<ApiError>, ApiArgs & { data: ServiceConfigurationUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ServiceConfigurationUpdateRequest }) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateServicePlatformClosureConfig(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ServicePlatformClosureConfig],
    mutationFn,
    ...options
  })
}
