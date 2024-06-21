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
import { ServicePluginConfigAdminApi } from '../ServicePluginConfigAdminApi.js'

import { GrpcServerInfo } from '../../generated-definitions/GrpcServerInfo.js'
import { LootBoxPluginConfigInfo } from '../../generated-definitions/LootBoxPluginConfigInfo.js'
import { LootBoxPluginConfigUpdate } from '../../generated-definitions/LootBoxPluginConfigUpdate.js'
import { RevocationPluginConfigInfo } from '../../generated-definitions/RevocationPluginConfigInfo.js'
import { RevocationPluginConfigUpdate } from '../../generated-definitions/RevocationPluginConfigUpdate.js'
import { SectionPluginConfigInfo } from '../../generated-definitions/SectionPluginConfigInfo.js'
import { SectionPluginConfigUpdate } from '../../generated-definitions/SectionPluginConfigUpdate.js'

export enum Key_ServicePluginConfigAdmin {
  CatalogPluginLootbox = 'ServicePluginConfigAdmin.CatalogPluginLootbox',
  CatalogPluginsLootbox = 'ServicePluginConfigAdmin.CatalogPluginsLootbox',
  CatalogPluginSection = 'ServicePluginConfigAdmin.CatalogPluginSection',
  CatalogPluginsSection = 'ServicePluginConfigAdmin.CatalogPluginsSection',
  RevocationPluginRevocation = 'ServicePluginConfigAdmin.RevocationPluginRevocation',
  RevocationPluginsRevocation = 'ServicePluginConfigAdmin.RevocationPluginsRevocation',
  CatalogPluginsLootboxGrpcInfo = 'ServicePluginConfigAdmin.CatalogPluginsLootboxGrpcInfo',
  CatalogPluginLootboxCustomConfigCert = 'ServicePluginConfigAdmin.CatalogPluginLootboxCustomConfigCert',
  CatalogPluginSectionCustomConfigCert = 'ServicePluginConfigAdmin.CatalogPluginSectionCustomConfigCert',
  RevocationPluginRevocationRevocationCustomConfigCert = 'ServicePluginConfigAdmin.RevocationPluginRevocationRevocationCustomConfigCert'
}

export const useAdmDeleteCatalogPluginLootboxMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteCatalogPluginLootbox()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootbox],
    mutationFn,
    ...options
  })
}

export const useAdmCatalogPluginsLootbox = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<LootBoxPluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: LootBoxPluginConfigInfo) => void
): UseQueryResult<LootBoxPluginConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCatalogPluginsLootbox>[1]) => async () => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace }).getCatalogPluginsLootbox()
    callback && callback(data)
    return data
  }

  return useQuery<LootBoxPluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsLootbox, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCatalogPluginLootboxMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<LootBoxPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: LootBoxPluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: LootBoxPluginConfigInfo) => void
): UseMutationResult<LootBoxPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: LootBoxPluginConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: LootBoxPluginConfigUpdate }) => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCatalogPluginLootbox(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootbox],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteCatalogPluginSectionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteCatalogPluginSection()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginSection],
    mutationFn,
    ...options
  })
}

export const useAdmCatalogPluginsSection = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<SectionPluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SectionPluginConfigInfo) => void
): UseQueryResult<SectionPluginConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCatalogPluginsSection>[1]) => async () => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace }).getCatalogPluginsSection()
    callback && callback(data)
    return data
  }

  return useQuery<SectionPluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsSection, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCatalogPluginSectionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SectionPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: SectionPluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: SectionPluginConfigInfo) => void
): UseMutationResult<SectionPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: SectionPluginConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SectionPluginConfigUpdate }) => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCatalogPluginSection(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginSection],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRevocationPluginRevocationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ServicePluginConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteRevocationPluginRevocation()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocation],
    mutationFn,
    ...options
  })
}

export const useAdmRevocationPluginsRevocation = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<RevocationPluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RevocationPluginConfigInfo) => void
): UseQueryResult<RevocationPluginConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRevocationPluginsRevocation>[1]) => async () => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace }).getRevocationPluginsRevocation()
    callback && callback(data)
    return data
  }

  return useQuery<RevocationPluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.RevocationPluginsRevocation, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateRevocationPluginRevocationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RevocationPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: RevocationPluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: RevocationPluginConfigInfo) => void
): UseMutationResult<RevocationPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: RevocationPluginConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: RevocationPluginConfigUpdate }) => {
    const data = await ServicePluginConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRevocationPluginRevocation(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocation],
    mutationFn,
    ...options
  })
}

export const useAdmCatalogPluginsLootboxGrpcInfo = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { force?: boolean | null } },
  options?: Omit<UseQueryOptions<GrpcServerInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GrpcServerInfo) => void
): UseQueryResult<GrpcServerInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCatalogPluginsLootboxGrpcInfo>[1]) => async () => {
    const data = await ServicePluginConfigAdminApi(sdk, { namespace: input.namespace }).getCatalogPluginsLootboxGrpcInfo(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GrpcServerInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsLootboxGrpcInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCatalogPluginLootboxCustomConfigCertMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<LootBoxPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: LootBoxPluginConfigInfo) => void
): UseMutationResult<LootBoxPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File } }) => {
    const data = await ServicePluginConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogPluginLootboxCustomConfigCert(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootboxCustomConfigCert],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateCatalogPluginSectionCustomConfigCertMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<SectionPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: SectionPluginConfigInfo) => void
): UseMutationResult<SectionPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File } }) => {
    const data = await ServicePluginConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateCatalogPluginSectionCustomConfigCert(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginSectionCustomConfigCert],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRevocationPluginRevocationRevocationCustomConfigCertMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RevocationPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: RevocationPluginConfigInfo) => void
): UseMutationResult<RevocationPluginConfigInfo, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File } }) => {
    const data = await ServicePluginConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateRevocationPluginRevocationRevocationCustomConfigCert(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocationRevocationCustomConfigCert],
    mutationFn,
    ...options
  })
}
