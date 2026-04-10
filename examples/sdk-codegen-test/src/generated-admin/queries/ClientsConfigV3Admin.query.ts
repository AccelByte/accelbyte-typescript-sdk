/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import type { UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { ClientsConfigV3AdminApi } from '../ClientsConfigV3AdminApi.js'

import { ListClientPermissionSet } from '../../generated-definitions/ListClientPermissionSet.js'
import { ListTemplatesResponse } from '../../generated-definitions/ListTemplatesResponse.js'
import { ListUpsertModulesRequest } from '../../generated-definitions/ListUpsertModulesRequest.js'
import { PermissionSetDeleteGroupRequest } from '../../generated-definitions/PermissionSetDeleteGroupRequest.js'

export const Key_ClientsConfigV3Admin = {
  ClientConfigTemplates_v3: 'Iam.ClientsConfigV3Admin.ClientConfigTemplates_v3',
  ClientConfigPermission_v3: 'Iam.ClientsConfigV3Admin.ClientConfigPermission_v3',
  ClientConfigPermissions_v3: 'Iam.ClientsConfigV3Admin.ClientConfigPermissions_v3'
} as const

/**
 * List client templates
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsConfigV3Admin.ClientConfigTemplates_v3, input]
 * }
 * ```
 */
export const useClientsConfigV3AdminApi_GetClientConfigTemplates_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ListTemplatesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListTemplatesResponse>) => void
): UseQueryResult<ListTemplatesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClientsConfigV3AdminApi_GetClientConfigTemplates_v3>[1]) => async () => {
    const response = await ClientsConfigV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getClientConfigTemplates_v3()
    callback?.(response)
    return response.data
  }

  return useQuery<ListTemplatesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ClientsConfigV3Admin.ClientConfigTemplates_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete Client config permissions by module and group.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsConfigV3Admin.ClientConfigPermission_v3, input]
 * }
 * ```
 */
export const useClientsConfigV3AdminApi_DeleteClientConfigPermissionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: PermissionSetDeleteGroupRequest; queryParams?: { forceDelete?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: PermissionSetDeleteGroupRequest; queryParams?: { forceDelete?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: PermissionSetDeleteGroupRequest; queryParams?: { forceDelete?: boolean | null } }
  ) => {
    const response = await ClientsConfigV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteClientConfigPermission_v3(input.data, input.queryParams)
    callback?.(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsConfigV3Admin.ClientConfigPermission_v3],
    mutationFn,
    ...options
  })
}

/**
 * List Client available permissions
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsConfigV3Admin.ClientConfigPermissions_v3, input]
 * }
 * ```
 */
export const useClientsConfigV3AdminApi_GetClientConfigPermissions_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { excludePermissions?: boolean | null } },
  options?: Omit<UseQueryOptions<ListClientPermissionSet, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListClientPermissionSet>) => void
): UseQueryResult<ListClientPermissionSet, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useClientsConfigV3AdminApi_GetClientConfigPermissions_v3>[1]) => async () => {
      const response = await ClientsConfigV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getClientConfigPermissions_v3(input.queryParams)
      callback?.(response)
      return response.data
    }

  return useQuery<ListClientPermissionSet, AxiosError<ApiError>>({
    queryKey: [Key_ClientsConfigV3Admin.ClientConfigPermissions_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update Client available permissions, if module or group not exists, it will auto create.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsConfigV3Admin.ClientConfigPermission_v3, input]
 * }
 * ```
 */
export const useClientsConfigV3AdminApi_UpdateClientConfigPermissionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: ListUpsertModulesRequest; queryParams?: { forceDelete?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: ListUpsertModulesRequest; queryParams?: { forceDelete?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: ListUpsertModulesRequest; queryParams?: { forceDelete?: boolean | null } }
  ) => {
    const response = await ClientsConfigV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClientConfigPermission_v3(input.data, input.queryParams)
    callback?.(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsConfigV3Admin.ClientConfigPermission_v3],
    mutationFn,
    ...options
  })
}
