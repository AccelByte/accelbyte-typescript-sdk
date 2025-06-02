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
import { DeploymentConfigApi } from '../DeploymentConfigApi.js'

import { CreateDeploymentRequest } from '../../generated-definitions/CreateDeploymentRequest.js'
import { DeploymentWithOverride } from '../../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../../generated-definitions/ListDeploymentResponse.js'

export enum Key_DeploymentConfig {
  ConfigsDeployments = 'Dsmcontroller.DeploymentConfig.ConfigsDeployments',
  ConfigDeployment_ByDeployment = 'Dsmcontroller.DeploymentConfig.ConfigDeployment_ByDeployment'
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfig.ConfigsDeployments, input]
 * }
 * ```
 */
export const useDeploymentConfigApi_GetConfigsDeployments = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number; name?: string | null } },
  options?: Omit<UseQueryOptions<ListDeploymentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListDeploymentResponse>) => void
): UseQueryResult<ListDeploymentResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDeploymentConfigApi_GetConfigsDeployments>[1]) => async () => {
    const response = await DeploymentConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigsDeployments(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListDeploymentResponse, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentConfig.ConfigsDeployments, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfig.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigApi_DeleteConfigDeployment_ByDeploymentMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string }) => {
    const response = await DeploymentConfigApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteConfigDeployment_ByDeployment(input.deployment)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfig.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfig.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigApi_GetConfigDeployment_ByDeployment = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deployment: string },
  options?: Omit<UseQueryOptions<DeploymentWithOverride, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeploymentWithOverride>) => void
): UseQueryResult<DeploymentWithOverride, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDeploymentConfigApi_GetConfigDeployment_ByDeployment>[1]) => async () => {
    const response = await DeploymentConfigApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfigDeployment_ByDeployment(input.deployment)
    callback && callback(response)
    return response.data
  }

  return useQuery<DeploymentWithOverride, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentConfig.ConfigDeployment_ByDeployment, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfig.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigApi_CreateConfigDeployment_ByDeploymentMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; data: CreateDeploymentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; data: CreateDeploymentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; data: CreateDeploymentRequest }) => {
    const response = await DeploymentConfigApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConfigDeployment_ByDeployment(input.deployment, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfig.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}
