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
  ConfigsDeployments = 'DeploymentConfigAdmin.ConfigsDeployments',
  ConfigDeployment_ByDeployment = 'DeploymentConfigAdmin.ConfigDeployment_ByDeployment',
  QueueConfig_ByDeployment_ByVersion = 'DeploymentConfigAdmin.QueueConfig_ByDeployment_ByVersion',
  OverrideRegionConfig_ByDeployment_ByRegion = 'DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion',
  OverrideVersionConfig_ByDeployment_ByVersion = 'DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion',
  RegionOverrideConfig_ByDeployment_ByVersion_ByRegion = 'DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion'
}

export const useAdmConfigsDeployments = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { count: number; offset: number; name?: string | null } },
  options?: Omit<UseQueryOptions<ListDeploymentResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListDeploymentResponse) => void
): UseQueryResult<ListDeploymentResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigsDeployments>[1]) => async () => {
    const data = await DeploymentConfigAdminApi(sdk, { namespace: input.namespace }).getConfigsDeployments(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListDeploymentResponse, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentConfigAdmin.ConfigsDeployments, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteConfigDeployment_ByDeploymentMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { deployment: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { deployment: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteConfigDeployment_ByDeployment(input.deployment)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

export const useAdmConfigDeployment_ByDeployment = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { deployment: string },
  options?: Omit<UseQueryOptions<DeploymentWithOverride, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeploymentWithOverride) => void
): UseQueryResult<DeploymentWithOverride, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigDeployment_ByDeployment>[1]) => async () => {
    const data = await DeploymentConfigAdminApi(sdk, { namespace: input.namespace }).getConfigDeployment_ByDeployment(input.deployment)
    callback && callback(data)
    return data
  }

  return useQuery<DeploymentWithOverride, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfigDeployment_ByDeploymentMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; data: UpdateDeploymentRequest }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; data: UpdateDeploymentRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; data: UpdateDeploymentRequest }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchConfigDeployment_ByDeployment(input.deployment, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

export const useAdmCreateConfigDeployment_ByDeploymentMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; data: CreateDeploymentRequest }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; data: CreateDeploymentRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; data: CreateDeploymentRequest }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createConfigDeployment_ByDeployment(input.deployment, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.ConfigDeployment_ByDeployment],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteQueueConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { deployment: string; version: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { deployment: string; version: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; version: string }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteQueueConfig_ByDeployment_ByVersion(input.deployment, input.version)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.QueueConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteOverrideRegionConfig_ByDeployment_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; region: string }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; region: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; region: string }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteOverrideRegionConfig_ByDeployment_ByRegion(input.deployment, input.region)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmPatchOverrideRegionConfig_ByDeployment_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      ApiArgs & { deployment: string; region: string; data: UpdateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  ApiArgs & { deployment: string; region: string; data: UpdateRegionOverrideRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; region: string; data: UpdateRegionOverrideRequest }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchOverrideRegionConfig_ByDeployment_ByRegion(input.deployment, input.region, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmCreateOverrideRegionConfig_ByDeployment_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      ApiArgs & { deployment: string; region: string; data: CreateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  ApiArgs & { deployment: string; region: string; data: CreateRegionOverrideRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; region: string; data: CreateRegionOverrideRequest }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createOverrideRegionConfig_ByDeployment_ByRegion(input.deployment, input.region, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideRegionConfig_ByDeployment_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmCreateOverrideVersionConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      ApiArgs & { deployment: string; version: string; data: CreateDeploymentOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  ApiArgs & { deployment: string; version: string; data: CreateDeploymentOverrideRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; version: string; data: CreateDeploymentOverrideRequest }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createOverrideVersionConfig_ByDeployment_ByVersion(input.deployment, input.version, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteOverrideVersionConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; version: string }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; version: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; version: string }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteOverrideVersionConfig_ByDeployment_ByVersion(input.deployment, input.version)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

export const useAdmPatchOverrideVersionConfig_ByDeployment_ByVersionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      ApiArgs & { deployment: string; version: string; data: UpdateDeploymentOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  ApiArgs & { deployment: string; version: string; data: UpdateDeploymentOverrideRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; version: string; data: UpdateDeploymentOverrideRequest }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchOverrideVersionConfig_ByDeployment_ByVersion(input.deployment, input.version, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.OverrideVersionConfig_ByDeployment_ByVersion],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; version: string; region: string }>,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<DeploymentWithOverride, AxiosError<ApiError>, ApiArgs & { deployment: string; version: string; region: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { deployment: string; version: string; region: string }) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(input.deployment, input.version, input.region)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmPatchRegionOverrideConfig_ByDeployment_ByVersion_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      ApiArgs & { deployment: string; version: string; region: string; data: UpdateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  ApiArgs & { deployment: string; version: string; region: string; data: UpdateRegionOverrideRequest }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { deployment: string; version: string; region: string; data: UpdateRegionOverrideRequest }
  ) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(input.deployment, input.version, input.region, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmCreateRegionOverrideConfig_ByDeployment_ByVersion_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DeploymentWithOverride,
      AxiosError<ApiError>,
      ApiArgs & { deployment: string; version: string; region: string; data: CreateRegionOverrideRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: DeploymentWithOverride) => void
): UseMutationResult<
  DeploymentWithOverride,
  AxiosError<ApiError>,
  ApiArgs & { deployment: string; version: string; region: string; data: CreateRegionOverrideRequest }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { deployment: string; version: string; region: string; data: CreateRegionOverrideRequest }
  ) => {
    const data = await DeploymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(input.deployment, input.version, input.region, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DeploymentConfigAdmin.RegionOverrideConfig_ByDeployment_ByVersion_ByRegion],
    mutationFn,
    ...options
  })
}
