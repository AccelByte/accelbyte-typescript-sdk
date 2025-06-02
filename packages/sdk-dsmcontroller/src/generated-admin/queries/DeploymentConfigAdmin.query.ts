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
import { DeploymentConfigAdminApi } from '../DeploymentConfigAdminApi.js'

import { CreateDeploymentOverrideRequest } from '../../generated-definitions/CreateDeploymentOverrideRequest.js'
import { CreateDeploymentRequest } from '../../generated-definitions/CreateDeploymentRequest.js'
import { CreateRegionOverrideRequest } from '../../generated-definitions/CreateRegionOverrideRequest.js'
import { DeploymentWithOverride } from '../../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../../generated-definitions/ListDeploymentResponse.js'
import { UpdateDeploymentOverrideRequest } from '../../generated-definitions/UpdateDeploymentOverrideRequest.js'
import { UpdateDeploymentRequest } from '../../generated-definitions/UpdateDeploymentRequest.js'
import { UpdateRegionOverrideRequest } from '../../generated-definitions/UpdateRegionOverrideRequest.js'

export enum Key_DeploymentConfigAdmin {
  ConfigsDeployments = 'Dsmcontroller.DeploymentConfigAdmin.ConfigsDeployments',
  ConfigDeployment_ByDeployment = 'Dsmcontroller.DeploymentConfigAdmin.ConfigDeployment_ByDeployment',
  QueueConfig_ByDeployment_ByVersion = 'Dsmcontroller.DeploymentConfigAdmin.QueueConfig_ByDeployment_ByVersion',
  OverrideRegionConfig_ByDeployment_ByRegion = 'Dsmcontroller.DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion',
  OverrideVersionConfig_ByDeployment_ByVersion = 'Dsmcontroller.DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion',
  RegionOverrideConfig_ByDeployment_ByVersion_ByRegion = 'Dsmcontroller.DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion'
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.ConfigsDeployments, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_GetConfigsDeployments = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { count: number; offset: number; name?: string | null } },
  options?: Omit<UseQueryOptions<ListDeploymentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListDeploymentResponse>) => void
): UseQueryResult<ListDeploymentResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDeploymentConfigAdminApi_GetConfigsDeployments>[1]) => async () => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfigsDeployments(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListDeploymentResponse, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentConfigAdmin.ConfigsDeployments, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_DeleteConfigDeployment_ByDeploymentMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteConfigDeployment_ByDeployment(input.deployment)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_GetConfigDeployment_ByDeployment = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deployment: string },
  options?: Omit<UseQueryOptions<DeploymentWithOverride, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeploymentWithOverride>) => void
): UseQueryResult<DeploymentWithOverride, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useDeploymentConfigAdminApi_GetConfigDeployment_ByDeployment>[1]) => async () => {
      const response = await DeploymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getConfigDeployment_ByDeployment(input.deployment)
      callback && callback(response)
      return response.data
    }

  return useQuery<DeploymentWithOverride, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_PatchConfigDeployment_ByDeploymentMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; data: UpdateDeploymentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; data: UpdateDeploymentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; data: UpdateDeploymentRequest }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchConfigDeployment_ByDeployment(input.deployment, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_CreateConfigDeployment_ByDeploymentMutation = (
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
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConfigDeployment_ByDeployment(input.deployment, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint deletes the deployment creating server count queue in a namespace in all registered region for the selected version
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.QueueConfig_ByDeployment_ByVersion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_DeleteQueueConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string; version: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string; version: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; version: string }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteQueueConfig_ByDeployment_ByVersion(input.deployment, input.version)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.QueueConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for root deployment
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_DeleteOverrideRegionConfig_ByDeployment_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string; region: string }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string; region: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; region: string }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteOverrideRegionConfig_ByDeployment_ByRegion(input.deployment, input.region)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for root deployment.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_PatchOverrideRegionConfig_ByDeployment_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; region: string; data: UpdateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; region: string; data: UpdateRegionOverrideRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; region: string; data: UpdateRegionOverrideRequest }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchOverrideRegionConfig_ByDeployment_ByRegion(input.deployment, input.region, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for root deployment.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_CreateOverrideRegionConfig_ByDeployment_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; region: string; data: CreateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; region: string; data: CreateRegionOverrideRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; region: string; data: CreateRegionOverrideRequest }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createOverrideRegionConfig_ByDeployment_ByRegion(input.deployment, input.region, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment override in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_CreateOverrideVersionConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; version: string; data: CreateDeploymentOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; version: string; data: CreateDeploymentOverrideRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; version: string; data: CreateDeploymentOverrideRequest }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createOverrideVersionConfig_ByDeployment_ByVersion(input.deployment, input.version, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_DeleteOverrideVersionConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string; version: string }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, SdkSetConfigParam & { deployment: string; version: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; version: string }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteOverrideVersionConfig_ByDeployment_ByVersion(input.deployment, input.version)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_PatchOverrideVersionConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; version: string; data: UpdateDeploymentOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; version: string; data: UpdateDeploymentOverrideRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; version: string; data: UpdateDeploymentOverrideRequest }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchOverrideVersionConfig_ByDeployment_ByVersion(input.deployment, input.version, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for deployment overrides
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_DeleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; version: string; region: string }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; version: string; region: string }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { deployment: string; version: string; region: string }) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(input.deployment, input.version, input.region)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for deployment overrides.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_PatchRegionOverrideConfig_ByDeployment_ByVersion_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; version: string; region: string; data: UpdateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; version: string; region: string; data: UpdateRegionOverrideRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { deployment: string; version: string; region: string; data: UpdateRegionOverrideRequest }
  ) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(input.deployment, input.version, input.region, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion],
    mutationFn,
    ...options
  })
}

/**
 * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for deployment overrides.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion, input]
 * }
 * ```
 */
export const useDeploymentConfigAdminApi_CreateRegionOverrideConfig_ByDeployment_ByVersion_ByRegionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      SdkSetConfigParam & { deployment: string; version: string; region: string; data: CreateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  SdkSetConfigParam & { deployment: string; version: string; region: string; data: CreateRegionOverrideRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { deployment: string; version: string; region: string; data: CreateRegionOverrideRequest }
  ) => {
    const response = await DeploymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(input.deployment, input.version, input.region, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion],
    mutationFn,
    ...options
  })
}
