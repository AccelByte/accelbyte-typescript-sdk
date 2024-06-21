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
import { ConfigurationTemplateAdminApi } from '../ConfigurationTemplateAdminApi.js'

import { ConfigAlertRequestCreate } from '../../generated-definitions/ConfigAlertRequestCreate.js'
import { ConfigAlertResponse } from '../../generated-definitions/ConfigAlertResponse.js'
import { ConfigurationTemplateResponse } from '../../generated-definitions/ConfigurationTemplateResponse.js'
import { ConfigurationTemplatesResponse } from '../../generated-definitions/ConfigurationTemplatesResponse.js'
import { CreateConfigurationTemplateRequest } from '../../generated-definitions/CreateConfigurationTemplateRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { UpdateConfigurationTemplateRequest } from '../../generated-definitions/UpdateConfigurationTemplateRequest.js'

export enum Key_ConfigurationTemplateAdmin {
  Dsconfigs = 'ConfigurationTemplateAdmin.Dsconfigs',
  Configuration = 'ConfigurationTemplateAdmin.Configuration',
  Configurations = 'ConfigurationTemplateAdmin.Configurations',
  DsconfigsSync = 'ConfigurationTemplateAdmin.DsconfigsSync',
  AlertsConfiguration = 'ConfigurationTemplateAdmin.AlertsConfiguration',
  Configuration_ByName = 'ConfigurationTemplateAdmin.Configuration_ByName'
}

export const useAdmDsconfigs = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDsconfigs>[1]) => async () => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace }).getDsconfigs()
    callback && callback(data)
    return data
  }

  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Dsconfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ConfigurationTemplateResponse, AxiosError<ApiError>, ApiArgs & { data: CreateConfigurationTemplateRequest }>,
    'mutationKey'
  >,
  callback?: (data: ConfigurationTemplateResponse) => void
): UseMutationResult<ConfigurationTemplateResponse, AxiosError<ApiError>, ApiArgs & { data: CreateConfigurationTemplateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateConfigurationTemplateRequest }) => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfiguration(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration],
    mutationFn,
    ...options
  })
}

export const useAdmConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { limit?: number; name?: string | null; offset?: number; order?: string | null; orderBy?: string | null }
  },
  options?: Omit<UseQueryOptions<ConfigurationTemplatesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigurationTemplatesResponse) => void
): UseQueryResult<ConfigurationTemplatesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigurations>[1]) => async () => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace }).getConfigurations(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ConfigurationTemplatesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDsconfigsSync = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDsconfigsSync>[1]) => async () => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace }).getDsconfigsSync()
    callback && callback(data)
    return data
  }

  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.DsconfigsSync, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteAlertsConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAlertsConfiguration()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmAlertsConfiguration = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ConfigAlertResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigAlertResponse) => void
): UseQueryResult<ConfigAlertResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAlertsConfiguration>[1]) => async () => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace }).getAlertsConfiguration()
    callback && callback(data)
    return data
  }

  return useQuery<ConfigAlertResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAlertsConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ConfigAlertResponse, AxiosError<ApiError>, ApiArgs & { data: ConfigAlertRequestCreate }>,
    'mutationKey'
  >,
  callback?: (data: ConfigAlertResponse) => void
): UseMutationResult<ConfigAlertResponse, AxiosError<ApiError>, ApiArgs & { data: ConfigAlertRequestCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ConfigAlertRequestCreate }) => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAlertsConfiguration(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateAlertsConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ConfigAlertResponse, AxiosError<ApiError>, ApiArgs & { data: ConfigAlertRequestCreate }>,
    'mutationKey'
  >,
  callback?: (data: ConfigAlertResponse) => void
): UseMutationResult<ConfigAlertResponse, AxiosError<ApiError>, ApiArgs & { data: ConfigAlertRequestCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ConfigAlertRequestCreate }) => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAlertsConfiguration(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteConfiguration_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { name: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { name: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string }) => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteConfiguration_ByName(
      input.name
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmConfiguration_ByName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { name: string },
  options?: Omit<UseQueryOptions<ConfigurationTemplateResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigurationTemplateResponse) => void
): UseQueryResult<ConfigurationTemplateResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfiguration_ByName>[1]) => async () => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace }).getConfiguration_ByName(input.name)
    callback && callback(data)
    return data
  }

  return useQuery<ConfigurationTemplateResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateConfiguration_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ConfigurationTemplateResponse,
      AxiosError<ApiError>,
      ApiArgs & { name: string; data: UpdateConfigurationTemplateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ConfigurationTemplateResponse) => void
): UseMutationResult<
  ConfigurationTemplateResponse,
  AxiosError<ApiError>,
  ApiArgs & { name: string; data: UpdateConfigurationTemplateRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string; data: UpdateConfigurationTemplateRequest }) => {
    const data = await ConfigurationTemplateAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateConfiguration_ByName(
      input.name,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName],
    mutationFn,
    ...options
  })
}
