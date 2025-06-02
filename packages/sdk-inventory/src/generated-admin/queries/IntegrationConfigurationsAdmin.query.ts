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
import { IntegrationConfigurationsAdminApi } from '../IntegrationConfigurationsAdminApi.js'

import { CreateIntegrationConfigurationReq } from '../../generated-definitions/CreateIntegrationConfigurationReq.js'
import { IntegrationConfigurationResp } from '../../generated-definitions/IntegrationConfigurationResp.js'
import { ListIntegrationConfigurationsResp } from '../../generated-definitions/ListIntegrationConfigurationsResp.js'
import { UpdateIntegrationConfigurationReq } from '../../generated-definitions/UpdateIntegrationConfigurationReq.js'
import { UpdateStatusIntegrationConfigurationReq } from '../../generated-definitions/UpdateStatusIntegrationConfigurationReq.js'

export enum Key_IntegrationConfigurationsAdmin {
  IntegrationConfigurations = 'Inventory.IntegrationConfigurationsAdmin.IntegrationConfigurations',
  IntegrationConfiguration = 'Inventory.IntegrationConfigurationsAdmin.IntegrationConfiguration',
  IntegrationConfiguration_ByIntegrationConfigurationId = 'Inventory.IntegrationConfigurationsAdmin.IntegrationConfiguration_ByIntegrationConfigurationId',
  Status_ByIntegrationConfigurationId = 'Inventory.IntegrationConfigurationsAdmin.Status_ByIntegrationConfigurationId'
}

/**
 *  Listing all integration configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfigurations, input]
 * }
 * ```
 */
export const useIntegrationConfigurationsAdminApi_GetIntegrationConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; offset?: number; sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' }
  },
  options?: Omit<UseQueryOptions<ListIntegrationConfigurationsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListIntegrationConfigurationsResp>) => void
): UseQueryResult<ListIntegrationConfigurationsResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useIntegrationConfigurationsAdminApi_GetIntegrationConfigurations>[1]) => async () => {
      const response = await IntegrationConfigurationsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getIntegrationConfigurations(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ListIntegrationConfigurationsResp, AxiosError<ApiError>>({
    queryKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Creating integration configuration. There cannot be one duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfiguration, input]
 * }
 * ```
 */
export const useIntegrationConfigurationsAdminApi_CreateIntegrationConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateIntegrationConfigurationReq }>,
    'mutationKey'
  >,
  callback?: (data: IntegrationConfigurationResp) => void
): UseMutationResult<
  IntegrationConfigurationResp,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: CreateIntegrationConfigurationReq }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateIntegrationConfigurationReq }) => {
    const response = await IntegrationConfigurationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createIntegrationConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfiguration],
    mutationFn,
    ...options
  })
}

/**
 *  to update integration configuration There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfiguration_ByIntegrationConfigurationId, input]
 * }
 * ```
 */
export const useIntegrationConfigurationsAdminApi_UpdateIntegrationConfiguration_ByIntegrationConfigurationIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      IntegrationConfigurationResp,
      AxiosError<ApiError>,
      SdkSetConfigParam & { integrationConfigurationId: string; data: UpdateIntegrationConfigurationReq }
    >,
    'mutationKey'
  >,
  callback?: (data: IntegrationConfigurationResp) => void
): UseMutationResult<
  IntegrationConfigurationResp,
  AxiosError<ApiError>,
  SdkSetConfigParam & { integrationConfigurationId: string; data: UpdateIntegrationConfigurationReq }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { integrationConfigurationId: string; data: UpdateIntegrationConfigurationReq }) => {
    const response = await IntegrationConfigurationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateIntegrationConfiguration_ByIntegrationConfigurationId(input.integrationConfigurationId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfiguration_ByIntegrationConfigurationId],
    mutationFn,
    ...options
  })
}

/**
 *  to update status integration configuration to be Active / Not Active. There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IntegrationConfigurationsAdmin.Status_ByIntegrationConfigurationId, input]
 * }
 * ```
 */
export const useIntegrationConfigurationsAdminApi_UpdateStatus_ByIntegrationConfigurationIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      IntegrationConfigurationResp,
      AxiosError<ApiError>,
      SdkSetConfigParam & { integrationConfigurationId: string; data: UpdateStatusIntegrationConfigurationReq }
    >,
    'mutationKey'
  >,
  callback?: (data: IntegrationConfigurationResp) => void
): UseMutationResult<
  IntegrationConfigurationResp,
  AxiosError<ApiError>,
  SdkSetConfigParam & { integrationConfigurationId: string; data: UpdateStatusIntegrationConfigurationReq }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { integrationConfigurationId: string; data: UpdateStatusIntegrationConfigurationReq }
  ) => {
    const response = await IntegrationConfigurationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatus_ByIntegrationConfigurationId(input.integrationConfigurationId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_IntegrationConfigurationsAdmin.Status_ByIntegrationConfigurationId],
    mutationFn,
    ...options
  })
}
