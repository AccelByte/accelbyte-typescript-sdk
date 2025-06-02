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
import { DevelopmentAdminApi } from '../DevelopmentAdminApi.js'

import { DevelopmentServerConfigurationCreateRequest } from '../../generated-definitions/DevelopmentServerConfigurationCreateRequest.js'
import { DevelopmentServerConfigurationCreateResponse } from '../../generated-definitions/DevelopmentServerConfigurationCreateResponse.js'
import { DevelopmentServerConfigurationGetResponse } from '../../generated-definitions/DevelopmentServerConfigurationGetResponse.js'
import { DevelopmentServerConfigurationListResponse } from '../../generated-definitions/DevelopmentServerConfigurationListResponse.js'
import { DevelopmentServerConfigurationUpdateRequest } from '../../generated-definitions/DevelopmentServerConfigurationUpdateRequest.js'

export enum Key_DevelopmentAdmin {
  DevelopmentServerConfigurations = 'Ams.DevelopmentAdmin.DevelopmentServerConfigurations',
  DevelopmentServerConfiguration = 'Ams.DevelopmentAdmin.DevelopmentServerConfiguration',
  DevelopmentServerConfiguration_ByDevelopmentServerConfigId = 'Ams.DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId'
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfigurations, input]
 * }
 * ```
 */
export const useDevelopmentAdminApi_GetDevelopmentServerConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { count?: number; offset?: number } },
  options?: Omit<UseQueryOptions<DevelopmentServerConfigurationListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DevelopmentServerConfigurationListResponse>) => void
): UseQueryResult<DevelopmentServerConfigurationListResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useDevelopmentAdminApi_GetDevelopmentServerConfigurations>[1]) => async () => {
      const response = await DevelopmentAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDevelopmentServerConfigurations(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<DevelopmentServerConfigurationListResponse, AxiosError<ApiError>>({
    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Configuration name can be up to 128 characters and must conform to ^[.a-zA-Z0-9_-]+$ Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [CREATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration, input]
 * }
 * ```
 */
export const useDevelopmentAdminApi_CreateDevelopmentServerConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DevelopmentServerConfigurationCreateResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: DevelopmentServerConfigurationCreateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DevelopmentServerConfigurationCreateResponse) => void
): UseMutationResult<
  DevelopmentServerConfigurationCreateResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: DevelopmentServerConfigurationCreateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DevelopmentServerConfigurationCreateRequest }) => {
    const response = await DevelopmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createDevelopmentServerConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId, input]
 * }
 * ```
 */
export const useDevelopmentAdminApi_DeleteDevelopmentServerConfiguration_ByDevelopmentServerConfigIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { developmentServerConfigID: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { developmentServerConfigID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { developmentServerConfigID: string }) => {
    const response = await DevelopmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId(input.developmentServerConfigID)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId],
    mutationFn,
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId, input]
 * }
 * ```
 */
export const useDevelopmentAdminApi_GetDevelopmentServerConfiguration_ByDevelopmentServerConfigId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { developmentServerConfigID: string },
  options?: Omit<UseQueryOptions<DevelopmentServerConfigurationGetResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DevelopmentServerConfigurationGetResponse>) => void
): UseQueryResult<DevelopmentServerConfigurationGetResponse, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<typeof useDevelopmentAdminApi_GetDevelopmentServerConfiguration_ByDevelopmentServerConfigId>[1]
    ) =>
    async () => {
      const response = await DevelopmentAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getDevelopmentServerConfiguration_ByDevelopmentServerConfigId(input.developmentServerConfigID)
      callback && callback(response)
      return response.data
    }

  return useQuery<DevelopmentServerConfigurationGetResponse, AxiosError<ApiError>>({
    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId, input]
 * }
 * ```
 */
export const useDevelopmentAdminApi_PatchDevelopmentServerConfiguration_ByDevelopmentServerConfigIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { developmentServerConfigID: string; data: DevelopmentServerConfigurationUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { developmentServerConfigID: string; data: DevelopmentServerConfigurationUpdateRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { developmentServerConfigID: string; data: DevelopmentServerConfigurationUpdateRequest }
  ) => {
    const response = await DevelopmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchDevelopmentServerConfiguration_ByDevelopmentServerConfigId(input.developmentServerConfigID, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId],
    mutationFn,
    ...options
  })
}
