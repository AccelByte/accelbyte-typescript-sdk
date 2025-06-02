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
import { ArtifactsAdminApi } from '../ArtifactsAdminApi.js'

import { ArtifactListResponse } from '../../generated-definitions/ArtifactListResponse.js'
import { ArtifactUrlResponse } from '../../generated-definitions/ArtifactUrlResponse.js'
import { ArtifactUsageResponse } from '../../generated-definitions/ArtifactUsageResponse.js'
import { FleetArtifactsSampleRules } from '../../generated-definitions/FleetArtifactsSampleRules.js'

export enum Key_ArtifactsAdmin {
  Artifact = 'Ams.ArtifactsAdmin.Artifact',
  Artifacts = 'Ams.ArtifactsAdmin.Artifacts',
  ArtifactsUsage = 'Ams.ArtifactsAdmin.ArtifactsUsage',
  Artifact_ByArtifactId = 'Ams.ArtifactsAdmin.Artifact_ByArtifactId',
  Url_ByArtifactId = 'Ams.ArtifactsAdmin.Url_ByArtifactId',
  ArtifactsSamplingRules_ByFleetId = 'Ams.ArtifactsAdmin.ArtifactsSamplingRules_ByFleetId',
  ArtifactsSamplingRule_ByFleetId = 'Ams.ArtifactsAdmin.ArtifactsSamplingRule_ByFleetId'
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.Artifact, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_DeleteArtifactMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { queryParams?: { artifactType?: string | null; fleetId?: string | null; uploadedBefore?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { queryParams?: { artifactType?: string | null; fleetId?: string | null; uploadedBefore?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { queryParams?: { artifactType?: string | null; fleetId?: string | null; uploadedBefore?: string | null } }
  ) => {
    const response = await ArtifactsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteArtifact(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ArtifactsAdmin.Artifact],
    mutationFn,
    ...options
  })
}

/**
 * Get all artifacts matching the provided search criteria. When criteria is not specified the data returned won&#39;t have been filtered on those parameters Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.Artifacts, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_GetArtifacts = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      artifactType?: string | null
      count?: number
      endDate?: string | null
      fleetID?: string | null
      imageID?: string | null
      maxSize?: number
      minSize?: number
      offset?: number
      region?: string | null
      serverId?: string | null
      sortBy?: string | null
      sortDirection?: 'asc' | 'desc'
      startDate?: string | null
      status?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ArtifactListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ArtifactListResponse>) => void
): UseQueryResult<ArtifactListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useArtifactsAdminApi_GetArtifacts>[1]) => async () => {
    const response = await ArtifactsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getArtifacts(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ArtifactListResponse, AxiosError<ApiError>>({
    queryKey: [Key_ArtifactsAdmin.Artifacts, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.ArtifactsUsage, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_GetArtifactsUsage = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ArtifactUsageResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ArtifactUsageResponse>) => void
): UseQueryResult<ArtifactUsageResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useArtifactsAdminApi_GetArtifactsUsage>[1]) => async () => {
    const response = await ArtifactsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getArtifactsUsage()
    callback && callback(response)
    return response.data
  }

  return useQuery<ArtifactUsageResponse, AxiosError<ApiError>>({
    queryKey: [Key_ArtifactsAdmin.ArtifactsUsage, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.Artifact_ByArtifactId, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_DeleteArtifact_ByArtifactIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { artifactID: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { artifactID: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { artifactID: string }) => {
    const response = await ArtifactsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteArtifact_ByArtifactId(input.artifactID)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ArtifactsAdmin.Artifact_ByArtifactId],
    mutationFn,
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.Url_ByArtifactId, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_GetUrl_ByArtifactId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { artifactID: string },
  options?: Omit<UseQueryOptions<ArtifactUrlResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ArtifactUrlResponse>) => void
): UseQueryResult<ArtifactUrlResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useArtifactsAdminApi_GetUrl_ByArtifactId>[1]) => async () => {
    const response = await ArtifactsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUrl_ByArtifactId(
      input.artifactID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ArtifactUrlResponse, AxiosError<ApiError>>({
    queryKey: [Key_ArtifactsAdmin.Url_ByArtifactId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.ArtifactsSamplingRules_ByFleetId, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_GetArtifactsSamplingRules_ByFleetId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { fleetID: string },
  options?: Omit<UseQueryOptions<FleetArtifactsSampleRules, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FleetArtifactsSampleRules>) => void
): UseQueryResult<FleetArtifactsSampleRules, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useArtifactsAdminApi_GetArtifactsSamplingRules_ByFleetId>[1]) => async () => {
      const response = await ArtifactsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getArtifactsSamplingRules_ByFleetId(input.fleetID)
      callback && callback(response)
      return response.data
    }

  return useQuery<FleetArtifactsSampleRules, AxiosError<ApiError>>({
    queryKey: [Key_ArtifactsAdmin.ArtifactsSamplingRules_ByFleetId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ArtifactsAdmin.ArtifactsSamplingRule_ByFleetId, input]
 * }
 * ```
 */
export const useArtifactsAdminApi_UpdateArtifactsSamplingRule_ByFleetIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FleetArtifactsSampleRules,
      AxiosError<ApiError>,
      SdkSetConfigParam & { fleetID: string; data: FleetArtifactsSampleRules }
    >,
    'mutationKey'
  >,
  callback?: (data: FleetArtifactsSampleRules) => void
): UseMutationResult<
  FleetArtifactsSampleRules,
  AxiosError<ApiError>,
  SdkSetConfigParam & { fleetID: string; data: FleetArtifactsSampleRules }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { fleetID: string; data: FleetArtifactsSampleRules }) => {
    const response = await ArtifactsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateArtifactsSamplingRule_ByFleetId(input.fleetID, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ArtifactsAdmin.ArtifactsSamplingRule_ByFleetId],
    mutationFn,
    ...options
  })
}
