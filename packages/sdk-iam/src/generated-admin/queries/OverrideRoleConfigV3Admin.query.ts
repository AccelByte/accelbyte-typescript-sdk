/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { OverrideRoleConfigV3AdminApi } from '../OverrideRoleConfigV3AdminApi.js'

import { RoleOverrideResponse } from '../../generated-definitions/RoleOverrideResponse.js'
import { RoleOverrideSourceResponse } from '../../generated-definitions/RoleOverrideSourceResponse.js'
import { RoleOverrideStatsUpdateRequest } from '../../generated-definitions/RoleOverrideStatsUpdateRequest.js'
import { RoleOverrideUpdateRequest } from '../../generated-definitions/RoleOverrideUpdateRequest.js'
import { RolePermissionResponseV3 } from '../../generated-definitions/RolePermissionResponseV3.js'

export enum Key_OverrideRoleConfigV3Admin {
  Roleoverride_v3 = 'Iam.OverrideRoleConfigV3Admin.Roleoverride_v3',
  RoleoverrideSource_v3 = 'Iam.OverrideRoleConfigV3Admin.RoleoverrideSource_v3',
  RoleoverrideStatus_v3 = 'Iam.OverrideRoleConfigV3Admin.RoleoverrideStatus_v3',
  Permissions_ByRoleId_v3 = 'Iam.OverrideRoleConfigV3Admin.Permissions_ByRoleId_v3'
}

/**
 * Get role override config. This API has upsert behavior, if there is no config yet, it will create a new one with inactive status.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OverrideRoleConfigV3Admin.Roleoverride_v3, input]
 * }
 * ```
 */
export const useOverrideRoleConfigV3AdminApi_GetRoleoverride_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } },
  options?: Omit<UseQueryOptions<RoleOverrideResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleOverrideResponse>) => void
): UseQueryResult<RoleOverrideResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOverrideRoleConfigV3AdminApi_GetRoleoverride_v3>[1]) => async () => {
    const response = await OverrideRoleConfigV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getRoleoverride_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleOverrideResponse, AxiosError<ApiError>>({
    queryKey: [Key_OverrideRoleConfigV3Admin.Roleoverride_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is for updating role override config. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OverrideRoleConfigV3Admin.Roleoverride_v3, input]
 * }
 * ```
 */
export const useOverrideRoleConfigV3AdminApi_PatchRoleoverrideMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      RoleOverrideResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: RoleOverrideUpdateRequest; queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } }
    >,
    'mutationKey'
  >,
  callback?: (data: RoleOverrideResponse) => void
): UseMutationResult<
  RoleOverrideResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: RoleOverrideUpdateRequest; queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: RoleOverrideUpdateRequest; queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } }
  ) => {
    const response = await OverrideRoleConfigV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchRoleoverride_v3(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OverrideRoleConfigV3Admin.Roleoverride_v3],
    mutationFn,
    ...options
  })
}

/**
 * Get role source permission set.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OverrideRoleConfigV3Admin.RoleoverrideSource_v3, input]
 * }
 * ```
 */
export const useOverrideRoleConfigV3AdminApi_GetRoleoverrideSource_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } },
  options?: Omit<UseQueryOptions<RoleOverrideSourceResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleOverrideSourceResponse>) => void
): UseQueryResult<RoleOverrideSourceResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useOverrideRoleConfigV3AdminApi_GetRoleoverrideSource_v3>[1]) => async () => {
      const response = await OverrideRoleConfigV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getRoleoverrideSource_v3(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<RoleOverrideSourceResponse, AxiosError<ApiError>>({
    queryKey: [Key_OverrideRoleConfigV3Admin.RoleoverrideSource_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Enable or disable the target role override feature in path namespace. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OverrideRoleConfigV3Admin.RoleoverrideStatus_v3, input]
 * }
 * ```
 */
export const useOverrideRoleConfigV3AdminApi_PatchRoleoverrideStatusMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      RoleOverrideResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: RoleOverrideStatsUpdateRequest; queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } }
    >,
    'mutationKey'
  >,
  callback?: (data: RoleOverrideResponse) => void
): UseMutationResult<
  RoleOverrideResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: RoleOverrideStatsUpdateRequest; queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: RoleOverrideStatsUpdateRequest; queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' } }
  ) => {
    const response = await OverrideRoleConfigV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchRoleoverrideStatus_v3(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OverrideRoleConfigV3Admin.RoleoverrideStatus_v3],
    mutationFn,
    ...options
  })
}

/**
 * Get role namespace permission set.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OverrideRoleConfigV3Admin.Permissions_ByRoleId_v3, input]
 * }
 * ```
 */
export const useOverrideRoleConfigV3AdminApi_GetPermissions_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RolePermissionResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RolePermissionResponseV3>) => void
): UseQueryResult<RolePermissionResponseV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useOverrideRoleConfigV3AdminApi_GetPermissions_ByRoleId_v3>[1]) => async () => {
      const response = await OverrideRoleConfigV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPermissions_ByRoleId_v3(input.roleId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RolePermissionResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_OverrideRoleConfigV3Admin.Permissions_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
