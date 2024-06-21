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
import { ClientsConfigV3AdminApi } from '../ClientsConfigV3AdminApi.js'

import { ListClientPermissionSet } from '../../generated-definitions/ListClientPermissionSet.js'
import { ListTemplatesResponse } from '../../generated-definitions/ListTemplatesResponse.js'
import { ListUpsertModulesRequest } from '../../generated-definitions/ListUpsertModulesRequest.js'
import { PermissionSetDeleteGroupRequest } from '../../generated-definitions/PermissionSetDeleteGroupRequest.js'

export enum Key_ClientsConfigV3Admin {
  ClientConfigTemplates = 'ClientsConfigV3Admin.ClientConfigTemplates',
  ClientConfigPermission = 'ClientsConfigV3Admin.ClientConfigPermission',
  ClientConfigPermissions = 'ClientsConfigV3Admin.ClientConfigPermissions'
}

export const useAdmClientConfigTemplates = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ListTemplatesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListTemplatesResponse) => void
): UseQueryResult<ListTemplatesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmClientConfigTemplates>[1]) => async () => {
    const data = await ClientsConfigV3AdminApi(sdk, { namespace: input.namespace }).getClientConfigTemplates()
    callback && callback(data)
    return data
  }

  return useQuery<ListTemplatesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ClientsConfigV3Admin.ClientConfigTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteClientConfigPermissionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { data: PermissionSetDeleteGroupRequest; queryParams?: { forceDelete?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { data: PermissionSetDeleteGroupRequest; queryParams?: { forceDelete?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PermissionSetDeleteGroupRequest; queryParams?: { forceDelete?: boolean | null } }) => {
    const data = await ClientsConfigV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteClientConfigPermission(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsConfigV3Admin.ClientConfigPermission],
    mutationFn,
    ...options
  })
}

export const useAdmClientConfigPermissions = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { excludePermissions?: boolean | null } },
  options?: Omit<UseQueryOptions<ListClientPermissionSet, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListClientPermissionSet) => void
): UseQueryResult<ListClientPermissionSet, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmClientConfigPermissions>[1]) => async () => {
    const data = await ClientsConfigV3AdminApi(sdk, { namespace: input.namespace }).getClientConfigPermissions(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListClientPermissionSet, AxiosError<ApiError>>({
    queryKey: [Key_ClientsConfigV3Admin.ClientConfigPermissions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateClientConfigPermissionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { data: ListUpsertModulesRequest; queryParams?: { forceDelete?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { data: ListUpsertModulesRequest; queryParams?: { forceDelete?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ListUpsertModulesRequest; queryParams?: { forceDelete?: boolean | null } }) => {
    const data = await ClientsConfigV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateClientConfigPermission(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ClientsConfigV3Admin.ClientConfigPermission],
    mutationFn,
    ...options
  })
}
