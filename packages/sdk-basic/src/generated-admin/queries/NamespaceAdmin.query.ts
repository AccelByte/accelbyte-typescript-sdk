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
import { NamespaceAdminApi } from '../NamespaceAdminApi.js'

import { NamespaceContext } from '../../generated-definitions/NamespaceContext.js'
import { NamespaceCreate } from '../../generated-definitions/NamespaceCreate.js'
import { NamespaceInfo } from '../../generated-definitions/NamespaceInfo.js'
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceStatusUpdate } from '../../generated-definitions/NamespaceStatusUpdate.js'
import { NamespaceUpdate } from '../../generated-definitions/NamespaceUpdate.js'

export enum Key_NamespaceAdmin {
  Namespaces = 'NamespaceAdmin.Namespaces',
  Namespace = 'NamespaceAdmin.Namespace',
  Namespace_ByNamespace = 'NamespaceAdmin.Namespace_ByNamespace',
  Game = 'NamespaceAdmin.Game',
  Basic = 'NamespaceAdmin.Basic',
  Child = 'NamespaceAdmin.Child',
  Status = 'NamespaceAdmin.Status',
  Context = 'NamespaceAdmin.Context',
  Publisher = 'NamespaceAdmin.Publisher'
}

export const useAdmNamespaces = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespaceInfoArray) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNamespaces>[1]) => async () => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace }).getNamespaces(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNamespaceMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, ApiArgs & { data: NamespaceCreate }>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, ApiArgs & { data: NamespaceCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: NamespaceCreate }) => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNamespace(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Namespace],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteNamespace_ByNamespaceMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteNamespace_ByNamespace()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Namespace_ByNamespace],
    mutationFn,
    ...options
  })
}

export const useAdmNamespace_ByNamespace = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespaceInfo) => void
): UseQueryResult<NamespaceInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNamespace_ByNamespace>[1]) => async () => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace }).getNamespace_ByNamespace(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<NamespaceInfo, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Namespace_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmGame = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespaceInfoArray) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGame>[1]) => async () => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace }).getGame(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Game, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchBasicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, ApiArgs & { data: NamespaceUpdate }>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, ApiArgs & { data: NamespaceUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: NamespaceUpdate }) => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchBasic(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Basic],
    mutationFn,
    ...options
  })
}

export const useAdmChild = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { activeOnly?: boolean | null } },
  options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespaceInfoArray) => void
): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChild>[1]) => async () => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace }).getChild(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Child, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchStatusMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, ApiArgs & { data: NamespaceStatusUpdate }>, 'mutationKey'>,
  callback?: (data: NamespaceInfo) => void
): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, ApiArgs & { data: NamespaceStatusUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: NamespaceStatusUpdate }) => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchStatus(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Status],
    mutationFn,
    ...options
  })
}

export const useAdmContext = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<NamespaceContext, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespaceContext) => void
): UseQueryResult<NamespaceContext, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContext>[1]) => async () => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace }).getContext()
    callback && callback(data)
    return data
  }

  return useQuery<NamespaceContext, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Context, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPublisher = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<NamespacePublisherInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NamespacePublisherInfo) => void
): UseQueryResult<NamespacePublisherInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPublisher>[1]) => async () => {
    const data = await NamespaceAdminApi(sdk, { namespace: input.namespace }).getPublisher()
    callback && callback(data)
    return data
  }

  return useQuery<NamespacePublisherInfo, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Publisher, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
