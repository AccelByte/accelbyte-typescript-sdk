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
import { ConfigurationAdminApi } from '../ConfigurationAdminApi.js'

import { CreateGroupConfigurationRequestV1 } from '../../generated-definitions/CreateGroupConfigurationRequestV1.js'
import { CreateGroupConfigurationResponseV1 } from '../../generated-definitions/CreateGroupConfigurationResponseV1.js'
import { GetGroupConfigurationResponseV1 } from '../../generated-definitions/GetGroupConfigurationResponseV1.js'
import { ListConfigurationResponseV1 } from '../../generated-definitions/ListConfigurationResponseV1.js'
import { UpdateGroupConfigurationGlobalRulesRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationGlobalRulesRequestV1.js'
import { UpdateGroupConfigurationRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationRequestV1.js'
import { UpdateGroupConfigurationResponseV1 } from '../../generated-definitions/UpdateGroupConfigurationResponseV1.js'

export enum Key_ConfigurationAdmin {
  Configuration = 'Groups.ConfigurationAdmin.Configuration',
  ConfigurationInitiate = 'Groups.ConfigurationAdmin.ConfigurationInitiate',
  Configuration_ByConfigurationCode = 'Groups.ConfigurationAdmin.Configuration_ByConfigurationCode',
  Rule_ByConfigurationCode_ByAllowedAction = 'Groups.ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction'
}

/**
 * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Configuration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetConfiguration = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListConfigurationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListConfigurationResponseV1>) => void
): UseQueryResult<ListConfigurationResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetConfiguration>[1]) => async () => {
    const response = await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfiguration(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListConfigurationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Configuration, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to create new configuration. Before creating the configuration, make sure that member role for admin and group member are already created before. For each of the global rule, it will be the rule detail that consists of these fields: * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked Allowed Action can only be filled with any available action in the Group Service. For the configuration, the only value is **&#34;createGroup&#34;** Action Code: 73103
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Configuration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_CreateConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: CreateGroupConfigurationRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateGroupConfigurationResponseV1) => void
): UseMutationResult<
  CreateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: CreateGroupConfigurationRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateGroupConfigurationRequestV1 }) => {
    const response = await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfiguration(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to initiate configuration. This endpoint will automatically create default configuration and member roles with default permission Default Permission for admin role will cover these permission: - Permission to invite user to group - Permission to accept or reject join request - Permission to kick group member Default max member value will be 50 and global rules will be empty Action Code: 73104
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.ConfigurationInitiate, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_CreateConfigurationInitiateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: CreateGroupConfigurationResponseV1) => void
): UseMutationResult<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConfigurationInitiate()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ConfigurationInitiate],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to delete group configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteConfiguration_ByConfigurationCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode: string }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteConfiguration_ByConfigurationCode(input.configurationCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to get existing configuration. This Configuration is used as the main rule of the service. Each namespace will have its own configuration Action Code: 73101
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetConfiguration_ByConfigurationCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configurationCode: string },
  options?: Omit<UseQueryOptions<GetGroupConfigurationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGroupConfigurationResponseV1>) => void
): UseQueryResult<GetGroupConfigurationResponseV1, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetConfiguration_ByConfigurationCode>[1]) => async () => {
      const response = await ConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getConfiguration_ByConfigurationCode(input.configurationCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetGroupConfigurationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to update existing configuration. groupAdminRoleId and groupMemberRoleId won&#39;t be able to be updated. User can try to change the member role permission instead for each of those member role Action Code: 73102
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_PatchConfiguration_ByConfigurationCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { configurationCode: string; data: UpdateGroupConfigurationRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGroupConfigurationResponseV1) => void
): UseMutationResult<
  UpdateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { configurationCode: string; data: UpdateGroupConfigurationRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode: string; data: UpdateGroupConfigurationRequestV1 }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchConfiguration_ByConfigurationCode(input.configurationCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to delete existing global rule configuration based on the allowed action. It will not give any error if the allowed action is not existed in the global rule Action Code: 73105
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteRule_ByConfigurationCode_ByAllowedActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { configurationCode: string; allowedAction: string }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGroupConfigurationResponseV1) => void
): UseMutationResult<
  UpdateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { configurationCode: string; allowedAction: string }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode: string; allowedAction: string }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRule_ByConfigurationCode_ByAllowedAction(input.configurationCode, input.allowedAction)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to update existing global rule configuration based on the allowed action. It will replace the permission with the request Action Code: 73106
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_UpdateRule_ByConfigurationCode_ByAllowedActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateGroupConfigurationResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { configurationCode: string; allowedAction: string; data: UpdateGroupConfigurationGlobalRulesRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateGroupConfigurationResponseV1) => void
): UseMutationResult<
  UpdateGroupConfigurationResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { configurationCode: string; allowedAction: string; data: UpdateGroupConfigurationGlobalRulesRequestV1 }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { configurationCode: string; allowedAction: string; data: UpdateGroupConfigurationGlobalRulesRequestV1 }
  ) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRule_ByConfigurationCode_ByAllowedAction(input.configurationCode, input.allowedAction, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction],
    mutationFn,
    ...options
  })
}
