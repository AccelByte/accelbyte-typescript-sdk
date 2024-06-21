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

import { CreateGroupConfigurationRequestV1 } from '../../generated-definitions/CreateGroupConfigurationRequestV1.js'
import { CreateGroupConfigurationResponseV1 } from '../../generated-definitions/CreateGroupConfigurationResponseV1.js'
import { GetGroupConfigurationResponseV1 } from '../../generated-definitions/GetGroupConfigurationResponseV1.js'
import { ListConfigurationResponseV1 } from '../../generated-definitions/ListConfigurationResponseV1.js'
import { UpdateGroupConfigurationGlobalRulesRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationGlobalRulesRequestV1.js'
import { UpdateGroupConfigurationRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationRequestV1.js'
import { UpdateGroupConfigurationResponseV1 } from '../../generated-definitions/UpdateGroupConfigurationResponseV1.js'

export enum Key_ConfigurationAdmin {
  Configuration = 'ConfigurationAdmin.Configuration',
  ConfigurationInitiate = 'ConfigurationAdmin.ConfigurationInitiate',
  Configuration_ByConfigurationCode = 'ConfigurationAdmin.Configuration_ByConfigurationCode',
  Rule_ByConfigurationCode_ByAllowedAction = 'ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction'
}

export const useAdmConfiguration = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListConfigurationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListConfigurationResponseV1) => void
): UseQueryResult<ListConfigurationResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfiguration>[1]) => async () => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace }).getConfiguration(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListConfigurationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Configuration, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, ApiArgs & { data: CreateGroupConfigurationRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: CreateGroupConfigurationResponseV1) => void
): UseMutationResult<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, ApiArgs & { data: CreateGroupConfigurationRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateGroupConfigurationRequestV1 }) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfiguration(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration],
    mutationFn,
    ...options
  })
}

export const useAdmCreateConfigurationInitiateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: CreateGroupConfigurationResponseV1) => void
): UseMutationResult<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfigurationInitiate()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ConfigurationInitiate],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteConfiguration_ByConfigurationCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { configurationCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { configurationCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { configurationCode: string }) => {
    const data = await ConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteConfiguration_ByConfigurationCode(input.configurationCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode],
    mutationFn,
    ...options
  })
}

export const useAdmConfiguration_ByConfigurationCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { configurationCode: string },
  options?: Omit<UseQueryOptions<GetGroupConfigurationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetGroupConfigurationResponseV1) => void
): UseQueryResult<GetGroupConfigurationResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfiguration_ByConfigurationCode>[1]) => async () => {
    const data = await ConfigurationAdminApi(sdk, { namespace: input.namespace }).getConfiguration_ByConfigurationCode(
      input.configurationCode
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetGroupConfigurationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfiguration_ByConfigurationCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      ApiArgs & { configurationCode: string; data: UpdateGroupConfigurationRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGroupConfigurationResponseV1) => void
): UseMutationResult<
  UpdateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  ApiArgs & { configurationCode: string; data: UpdateGroupConfigurationRequestV1 }
> => {
  //
  const mutationFn = async (input: ApiArgs & { configurationCode: string; data: UpdateGroupConfigurationRequestV1 }) => {
    const data = await ConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchConfiguration_ByConfigurationCode(input.configurationCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRule_ByConfigurationCode_ByAllowedActionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      ApiArgs & { configurationCode: string; allowedAction: string }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGroupConfigurationResponseV1) => void
): UseMutationResult<
  UpdateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  ApiArgs & { configurationCode: string; allowedAction: string }
> => {
  //
  const mutationFn = async (input: ApiArgs & { configurationCode: string; allowedAction: string }) => {
    const data = await ConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteRule_ByConfigurationCode_ByAllowedAction(input.configurationCode, input.allowedAction)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRule_ByConfigurationCode_ByAllowedActionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      ApiArgs & { configurationCode: string; allowedAction: string; data: UpdateGroupConfigurationGlobalRulesRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGroupConfigurationResponseV1) => void
): UseMutationResult<
  UpdateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  ApiArgs & { configurationCode: string; allowedAction: string; data: UpdateGroupConfigurationGlobalRulesRequestV1 }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { configurationCode: string; allowedAction: string; data: UpdateGroupConfigurationGlobalRulesRequestV1 }
  ) => {
    const data = await ConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRule_ByConfigurationCode_ByAllowedAction(input.configurationCode, input.allowedAction, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction],
    mutationFn,
    ...options
  })
}
